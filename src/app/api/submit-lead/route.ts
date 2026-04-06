import { NextRequest, NextResponse } from "next/server";

type FormData = {
  role: string;
  transactions: string;
  markets: string[];
  currentMarketing: string;
  challenges: string[];
  budget: string;
  goals: string;
  name: string;
  email: string;
  phone: string;
  website: string;
};

// Helper to format the form data for the email
function formatLeadDetails(data: FormData): string {
  const roleLabels: Record<string, string> = {
    solo: "Solo Agent",
    "team-member": "Team Member",
    "team-lead": "Team Leader",
    broker: "Broker / Owner",
  };

  const marketingLabels: Record<string, string> = {
    nothing: "Minimal presence",
    diy: "DIY approach",
    agency: "Working with someone (not satisfied)",
    internal: "In-house support",
  };

  const budgetLabels: Record<string, string> = {
    "under-1k": "Under $1,000",
    "1k-2k": "$1,000 - $2,000",
    "2k-4k": "$2,000 - $4,000",
    "4k-6k": "$4,000 - $6,000",
    "6k-10k": "$6,000 - $10,000",
    "10k+": "$10,000+",
  };

  return `
CONTACT INFORMATION
-------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Website/Instagram: ${data.website || "Not provided"}

BUSINESS PROFILE
----------------
Role: ${roleLabels[data.role] || data.role}
Annual Transactions: ${data.transactions} deals
Markets: ${data.markets.join(", ")}

CURRENT SITUATION
-----------------
Marketing Status: ${marketingLabels[data.currentMarketing] || data.currentMarketing}
Challenges: ${data.challenges.join(", ")}

INVESTMENT & GOALS
------------------
Monthly Budget: ${budgetLabels[data.budget] || data.budget}
Goals: ${data.goals}
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Missing WEB3FORMS_ACCESS_KEY environment variable");
      // Still return success so we don't lose the lead - they'll see it in logs
      return NextResponse.json({ success: true, emailSent: false });
    }

    // Send to Web3Forms
    const web3FormsPayload = {
      access_key: accessKey,
      subject: `New Lead: ${data.name} - ${data.budget}/mo budget`,
      from_name: "Empire Estate Media Website",
      message: formatLeadDetails(data),
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    console.log("Sending to Web3Forms with access_key:", accessKey ? "***" + accessKey.slice(-4) : "MISSING");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; EmpireEstateMedia/1.0)",
      },
      body: JSON.stringify(web3FormsPayload),
    });

    // Get response as text first to check for Cloudflare blocks
    const responseText = await response.text();

    // Check for Cloudflare challenge page
    if (responseText.includes("Just a moment") || responseText.includes("<!DOCTYPE")) {
      console.error("Web3Forms returned non-JSON response (possible Cloudflare block):", responseText.slice(0, 200));
      return NextResponse.json({ success: true, emailSent: false });
    }

    // Check HTTP response status
    if (!response.ok) {
      console.error("Web3Forms HTTP error:", response.status, responseText);
      return NextResponse.json({ success: true, emailSent: false });
    }

    // Parse JSON response
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse Web3Forms response:", parseError, responseText.slice(0, 200));
      return NextResponse.json({ success: true, emailSent: false });
    }

    if (!result.success) {
      console.error("Web3Forms API error:", result);
      return NextResponse.json({ success: true, emailSent: false });
    }

    console.log("Web3Forms submission successful:", result);
    return NextResponse.json({ success: true, emailSent: true });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
