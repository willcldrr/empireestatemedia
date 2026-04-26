import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Empire Estate Media",
  description: "Privacy Policy for Empire Estate Media. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/50">
            Last Updated: March 23, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-12 text-white/70 leading-relaxed">

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">1. Introduction</h2>
              <p>
                Empire Estate Media, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a limited liability company organized under the laws of the Commonwealth of Pennsylvania, is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, engage our services, or otherwise interact with us.
              </p>
              <p className="mt-4">
                This Privacy Policy applies to all information collected through our website (empireestatemedia.com), our marketing services, and any related services, sales, marketing, or events (collectively, the &quot;Services&quot;). By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our Services.
              </p>
              <p className="mt-4">
                We reserve the right to modify this Privacy Policy at any time, effective upon posting of an updated version on this website. Your continued use of the Services after any such changes constitutes your acceptance of the new Privacy Policy. We encourage you to periodically review this page for the latest information on our privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">2. Information We Collect</h2>

              <h3 className="text-white text-xl mt-6 mb-3">2.1 Personal Information You Provide</h3>
              <p>
                We collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our Services, when you participate in activities on our website, or otherwise when you contact us. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name and contact information (including email address, telephone number, and mailing address)</li>
                <li>Professional information (including company name, job title, and professional affiliations)</li>
                <li>Business information (including transaction volume, market areas, and business goals)</li>
                <li>Account credentials (including usernames and passwords)</li>
                <li>Payment and billing information (including credit card numbers and billing addresses)</li>
                <li>Communications and correspondence (including emails, messages, and feedback)</li>
                <li>Marketing preferences and communication opt-ins</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-white text-xl mt-6 mb-3">2.2 Information Automatically Collected</h3>
              <p>
                When you access our website, we automatically collect certain information about your device and your use of our Services. This information may include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Device information (including device type, operating system, unique device identifiers, and browser type)</li>
                <li>Log information (including access times, pages viewed, IP address, and referring URL)</li>
                <li>Location information (including city, state, and country derived from IP address)</li>
                <li>Information collected through cookies, pixel tags, and similar tracking technologies</li>
                <li>Analytics data regarding your interactions with our website and Services</li>
              </ul>

              <h3 className="text-white text-xl mt-6 mb-3">2.3 Information from Third Parties</h3>
              <p>
                We may receive information about you from third parties, including business partners, marketing partners, social media platforms, data brokers, and publicly available sources. This information may be combined with other information we collect about you.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">3. Use of Your Information</h2>
              <p>
                We use the information we collect or receive for various business purposes, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-white">To provide and maintain our Services:</strong> Including to process transactions, manage your account, and provide customer support</li>
                <li><strong className="text-white">To communicate with you:</strong> Including to send you service-related notices, updates, promotional communications, and marketing materials</li>
                <li><strong className="text-white">To fulfill our contractual obligations:</strong> Including to perform our obligations under any agreement we have with you</li>
                <li><strong className="text-white">To improve our Services:</strong> Including to analyze usage patterns, diagnose technical issues, and develop new features</li>
                <li><strong className="text-white">To personalize your experience:</strong> Including to deliver content and offerings tailored to your interests</li>
                <li><strong className="text-white">To protect our business:</strong> Including to detect, prevent, and respond to fraud, abuse, security risks, and technical issues</li>
                <li><strong className="text-white">To comply with legal obligations:</strong> Including to respond to lawful requests from public authorities</li>
                <li><strong className="text-white">For any other purpose with your consent</strong></li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">4. Disclosure of Your Information</h2>
              <p>
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">4.1 Service Providers</h3>
              <p>
                We may share your information with third-party vendors, service providers, contractors, and agents who perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">4.2 Business Transfers</h3>
              <p>
                We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">4.3 Legal Requirements</h3>
              <p>
                We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, including responding to any government or regulatory request.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">4.4 Protection of Rights</h3>
              <p>
                We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, or as evidence in litigation in which we are involved.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">4.5 With Your Consent</h3>
              <p>
                We may disclose your personal information for any other purpose with your consent.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">5. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and store information about your interactions with our website. Cookies are small data files stored on your device that help us improve our Services and your experience, see which areas and features of our Services are popular, and count visits.
              </p>
              <p className="mt-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-white">Essential Cookies:</strong> Required for the operation of our website and cannot be disabled</li>
                <li><strong className="text-white">Performance Cookies:</strong> Allow us to count visits and traffic sources to measure and improve site performance</li>
                <li><strong className="text-white">Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                <li><strong className="text-white">Targeting Cookies:</strong> May be set through our site by advertising partners to build a profile of your interests</li>
              </ul>
              <p className="mt-4">
                Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject browser cookies. Please note that removing or rejecting cookies could affect the availability and functionality of our Services.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. These measures include encryption, access controls, secure data storage, and regular security assessments. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
              </p>
              <p className="mt-4">
                You are responsible for maintaining the confidentiality of any passwords or account credentials used to access our Services. Please notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">7. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">8. Your Privacy Rights</h2>
              <p>
                Depending on your location and applicable law, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong className="text-white">Right to Access:</strong> You may request access to the personal information we hold about you</li>
                <li><strong className="text-white">Right to Rectification:</strong> You may request that we correct any inaccurate or incomplete personal information</li>
                <li><strong className="text-white">Right to Erasure:</strong> You may request that we delete your personal information in certain circumstances</li>
                <li><strong className="text-white">Right to Restrict Processing:</strong> You may request that we restrict the processing of your personal information</li>
                <li><strong className="text-white">Right to Data Portability:</strong> You may request to receive your personal information in a structured, commonly used format</li>
                <li><strong className="text-white">Right to Object:</strong> You may object to our processing of your personal information</li>
                <li><strong className="text-white">Right to Withdraw Consent:</strong> Where we rely on consent, you may withdraw your consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the contact information provided below. We will respond to your request in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">9. California Privacy Rights</h2>
              <p>
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA) regarding your personal information. These include the right to know what personal information we collect, the right to delete your personal information, the right to opt-out of the sale or sharing of your personal information, and the right to non-discrimination for exercising your privacy rights.
              </p>
              <p className="mt-4">
                To make a request under the CCPA/CPRA, please contact us using the information provided below. We will verify your identity before processing your request.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">10. Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites and services that are not owned or controlled by us. We are not responsible for the privacy practices or content of these third-party websites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">11. Children's Privacy</h2>
              <p>
                Our Services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children under 18. If we learn that we have collected personal information from a child under 18 without verification of parental consent, we will delete that information as quickly as possible. If you believe we might have any information from or about a child under 18, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">12. International Data Transfers</h2>
              <p>
                Your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. These countries may have data protection laws that are different from the laws of your country. By using our Services, you consent to the transfer of your information to the United States and other jurisdictions as described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">13. Do Not Track Signals</h2>
              <p>
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want to have your online activity tracked. Our website does not currently respond to DNT signals. You can learn more about Do Not Track at https://allaboutdnt.com.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">14. Contact Information</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-white/5 border border-white/10">
                <p className="text-white font-medium">Empire Estate Media, LLC</p>
                <p className="mt-2">Email: privacy@empireestatemedia.com</p>
                <p>Phone: +1 (717) 572-6295</p>
                <p className="mt-4 text-white/50 text-sm">
                  Commonwealth of Pennsylvania, United States
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">15. Governing Law</h2>
              <p>
                This Privacy Policy and any disputes arising out of or related to it shall be governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, without regard to its conflict of law principles. Any legal action or proceeding arising out of or relating to this Privacy Policy shall be brought exclusively in the state or federal courts located in Pennsylvania, and you consent to the personal jurisdiction of such courts.
              </p>
            </section>

          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/" className="text-white/40 hover:text-white transition-colors text-sm">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
