"use client";

import { useState } from "react";
import Link from "next/link";

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

const initialFormData: FormData = {
  role: "",
  transactions: "",
  markets: [],
  currentMarketing: "",
  challenges: [],
  budget: "",
  goals: "",
  name: "",
  email: "",
  phone: "",
  website: "",
};

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const totalSteps = 5;

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: "markets" | "challenges", value: string) => {
    setFormData((prev) => {
      const current = prev[field];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter((v) => v !== value) };
      }
      return { ...prev, [field]: [...current, value] };
    });
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Missing Web3Forms access key");
      setSubmitError("Configuration error. Please contact support.");
      setIsSubmitting(false);
      return;
    }

    // Format labels for the email
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

    const message = `
CONTACT INFORMATION
-------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Website/Instagram: ${formData.website || "Not provided"}

BUSINESS PROFILE
----------------
Role: ${roleLabels[formData.role] || formData.role}
Annual Transactions: ${formData.transactions} deals
Markets: ${formData.markets.join(", ")}

CURRENT SITUATION
-----------------
Marketing Status: ${marketingLabels[formData.currentMarketing] || formData.currentMarketing}
Challenges: ${formData.challenges.join(", ")}

INVESTMENT & GOALS
------------------
Monthly Budget: ${budgetLabels[formData.budget] || formData.budget}
Goals: ${formData.goals}
    `.trim();

    try {
      // Submit directly to Web3Forms from the client (bypasses Cloudflare bot detection)
      const payload = {
        access_key: accessKey,
        subject: `New Lead: ${formData.name} - ${budgetLabels[formData.budget] || formData.budget}/mo budget`,
        from_name: "Empire Estate Media Website",
        replyto: formData.email, // Important: allows replies to go to the lead
        message: message,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };

      // Debug logging (visible in browser console)
      console.log("Submitting to Web3Forms with access_key:", accessKey ? `***${accessKey.slice(-4)}` : "MISSING");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("Web3Forms response:", result);

      if (!result.success) {
        console.error("Web3Forms error:", result);
        throw new Error(result.message || "Failed to submit form");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("There was a problem submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.role !== "";
      case 2:
        return formData.transactions !== "" && formData.markets.length > 0;
      case 3:
        return formData.currentMarketing !== "" && formData.challenges.length > 0;
      case 4:
        return formData.budget !== "" && formData.goals.trim() !== "";
      case 5:
        return (
          formData.name.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== ""
        );
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <div className="w-16 h-16 mx-auto mb-8 border border-[#1e3a5f] rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[#1e3a5f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Application <span className="italic">received</span>
          </h1>
          <p className="text-white/50 text-base sm:text-lg mb-8 leading-relaxed">
            Thank you for your interest in working with Empire Estate Media. We review every application personally and will be in touch within 2 business days if there&apos;s a potential fit.
          </p>
          <Link href="/" className="btn-outline inline-block">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4 sm:mb-6">
            Application · Step {step} of {totalSteps}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Let&apos;s see if we&apos;re
            <br />
            <span className="italic">the right fit</span>
          </h1>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">
            This takes about 3 minutes. Your answers help us understand your business and determine if we can meaningfully help.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="h-px bg-white/10 relative">
            <div
              className="h-px bg-[#1e3a5f] transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Role */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-white text-xl mb-2">What best describes your role?</h2>
              <p className="text-white/40 text-sm">Select one</p>
            </div>

            <div className="space-y-3">
              {[
                { value: "solo", label: "Solo Agent", desc: "Independent agent building your personal brand" },
                { value: "team-member", label: "Team Member", desc: "Agent working within a team structure" },
                { value: "team-lead", label: "Team Leader", desc: "Leading a team of 2+ agents" },
                { value: "broker", label: "Broker / Owner", desc: "Running your own brokerage" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateField("role", option.value)}
                  className={`w-full p-4 sm:p-6 text-left border transition-all duration-300 ${
                    formData.role === option.value
                      ? "border-[#1e3a5f] bg-[#1e3a5f]/10"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <p className="text-white mb-1">{option.label}</p>
                  <p className="text-white/40 text-sm">{option.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Volume & Market */}
        {step === 2 && (
          <div className="space-y-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-white text-xl mb-2">Annual transaction volume?</h2>
                <p className="text-white/40 text-sm">Approximate number of deals you close per year</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "1-5", label: "1-5 deals" },
                  { value: "6-15", label: "6-15 deals" },
                  { value: "16-30", label: "16-30 deals" },
                  { value: "31-50", label: "31-50 deals" },
                  { value: "51+", label: "51+ deals" },
                  { value: "new", label: "Just starting" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateField("transactions", option.value)}
                    className={`p-4 text-center border transition-all duration-300 ${
                      formData.transactions === option.value
                        ? "border-[#1e3a5f] bg-[#1e3a5f]/10"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <p className="text-white text-sm">{option.label}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-white text-xl mb-2">Primary markets?</h2>
                <p className="text-white/40 text-sm">Select all that apply</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Manhattan",
                  "Brooklyn",
                  "Queens",
                  "Bronx",
                  "Staten Island",
                  "Long Island",
                  "Westchester",
                  "New Jersey",
                ].map((market) => (
                  <button
                    key={market}
                    onClick={() => toggleArrayField("markets", market)}
                    className={`p-4 text-center border transition-all duration-300 ${
                      formData.markets.includes(market)
                        ? "border-[#1e3a5f] bg-[#1e3a5f]/10"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <p className="text-white text-sm">{market}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Current State & Challenges */}
        {step === 3 && (
          <div className="space-y-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-white text-xl mb-2">Current marketing situation?</h2>
                <p className="text-white/40 text-sm">Where are you now?</p>
              </div>

              <div className="space-y-3">
                {[
                  { value: "nothing", label: "Minimal presence", desc: "Little to no consistent marketing" },
                  { value: "diy", label: "DIY approach", desc: "Handling it myself, inconsistent results" },
                  { value: "agency", label: "Working with someone", desc: "Current agency or freelancer, not satisfied" },
                  { value: "internal", label: "In-house support", desc: "Have some internal marketing help" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateField("currentMarketing", option.value)}
                    className={`w-full p-4 sm:p-6 text-left border transition-all duration-300 ${
                      formData.currentMarketing === option.value
                        ? "border-[#1e3a5f] bg-[#1e3a5f]/10"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <p className="text-white mb-1">{option.label}</p>
                    <p className="text-white/40 text-sm">{option.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-white text-xl mb-2">Biggest challenges?</h2>
                <p className="text-white/40 text-sm">Select all that apply</p>
              </div>

              <div className="space-y-3">
                {[
                  "Inconsistent lead flow",
                  "No time to create content",
                  "Don't know what to post",
                  "Not getting quality leads",
                  "Competitors outshining me online",
                  "Need to build personal brand",
                  "Want to scale beyond referrals",
                ].map((challenge) => (
                  <button
                    key={challenge}
                    onClick={() => toggleArrayField("challenges", challenge)}
                    className={`w-full p-4 text-left border transition-all duration-300 ${
                      formData.challenges.includes(challenge)
                        ? "border-[#1e3a5f] bg-[#1e3a5f]/10"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <p className="text-white text-sm">{challenge}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Budget & Goals */}
        {step === 4 && (
          <div className="space-y-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-white text-xl mb-2">Monthly marketing budget?</h2>
                <p className="text-white/40 text-sm">What you&apos;re prepared to invest in growth</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "under-1k", label: "Under $1,000" },
                  { value: "1k-2k", label: "$1,000 - $2,000" },
                  { value: "2k-4k", label: "$2,000 - $4,000" },
                  { value: "4k-6k", label: "$4,000 - $6,000" },
                  { value: "6k-10k", label: "$6,000 - $10,000" },
                  { value: "10k+", label: "$10,000+" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateField("budget", option.value)}
                    className={`p-4 text-center border transition-all duration-300 ${
                      formData.budget === option.value
                        ? "border-[#1e3a5f] bg-[#1e3a5f]/10"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <p className="text-white text-sm">{option.label}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-white text-xl mb-2">What does success look like?</h2>
                <p className="text-white/40 text-sm">In your own words, what are you hoping to achieve?</p>
              </div>

              <textarea
                value={formData.goals}
                onChange={(e) => updateField("goals", e.target.value)}
                placeholder="e.g., I want to generate 10+ qualified leads per month, build my personal brand as the go-to agent in Tribeca, scale my business to $50M+ in annual volume..."
                className="w-full h-40 p-6 bg-transparent border border-white/10 text-white placeholder-white/30 focus:border-[#1e3a5f] focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 5: Contact Info */}
        {step === 5 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-white text-xl mb-2">Your contact information</h2>
              <p className="text-white/40 text-sm">We&apos;ll reach out within 2 business days if there&apos;s a potential fit</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your name"
                  className="w-full p-4 bg-transparent border border-white/10 text-white placeholder-white/30 focus:border-[#1e3a5f] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@email.com"
                  className="w-full p-4 bg-transparent border border-white/10 text-white placeholder-white/30 focus:border-[#1e3a5f] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="(555) 555-5555"
                  className="w-full p-4 bg-transparent border border-white/10 text-white placeholder-white/30 focus:border-[#1e3a5f] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">
                  Website / Instagram (optional)
                </label>
                <input
                  type="text"
                  value={formData.website}
                  onChange={(e) => updateField("website", e.target.value)}
                  placeholder="yourwebsite.com or @instagram"
                  className="w-full p-4 bg-transparent border border-white/10 text-white placeholder-white/30 focus:border-[#1e3a5f] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={prevStep}
            className={`text-white/40 text-sm hover:text-white transition-colors ${
              step === 1 ? "invisible" : ""
            }`}
          >
            ← Back
          </button>

          {step < totalSteps ? (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`btn-primary ${
                !canProceed() ? "opacity-30 cursor-not-allowed" : ""
              }`}
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed() || isSubmitting}
              className={`btn-primary ${
                !canProceed() || isSubmitting ? "opacity-30 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>

        {/* Error Message */}
        {submitError && (
          <div className="mt-6 p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
            {submitError}
          </div>
        )}
      </div>
    </div>
  );
}
