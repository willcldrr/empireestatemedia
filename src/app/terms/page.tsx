import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Empire Estate Media",
  description: "Terms of Service for Empire Estate Media. Please read these terms carefully before using our services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-white/50">
            Last Updated: March 23, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-12 text-white/70 leading-relaxed">

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) and Empire Estate Media, LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a limited liability company organized and existing under the laws of the Commonwealth of Pennsylvania. These Terms govern your access to and use of our website, applications, and all related services, including but not limited to digital marketing services, content creation, advertising management, lead generation, and consulting services (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-4">
                BY ACCESSING OR USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE OUR SERVICES. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms, in which case &quot;you&quot; or &quot;your&quot; shall refer to such entity.
              </p>
              <p className="mt-4">
                We reserve the right, in our sole discretion, to modify, amend, or update these Terms at any time. Any changes will be effective immediately upon posting of the revised Terms on our website. Your continued use of the Services following the posting of revised Terms constitutes your acceptance of such changes. We encourage you to review these Terms periodically for any updates.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">2. Eligibility</h2>
              <p>
                You must be at least eighteen (18) years of age and possess the legal authority to enter into these Terms to use our Services. By using our Services, you represent and warrant that you meet these eligibility requirements. If you are using the Services on behalf of a business or other entity, you represent and warrant that you have the authority to bind that entity to these Terms.
              </p>
              <p className="mt-4">
                We reserve the right to refuse service, terminate accounts, or cancel orders in our sole discretion, including, without limitation, if we believe that your conduct violates applicable law or is harmful to our interests or the interests of other users of our Services.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">3. Description of Services</h2>
              <p>
                Empire Estate Media provides comprehensive digital marketing services specifically designed for real estate professionals operating within the New York City metropolitan area. Our Services may include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Social media management and content creation</li>
                <li>Digital advertising campaign development and management</li>
                <li>Lead generation and qualification systems</li>
                <li>Brand development and positioning strategies</li>
                <li>Video production and multimedia content creation</li>
                <li>Website design and development</li>
                <li>Search engine optimization (SEO)</li>
                <li>Email marketing and automation</li>
                <li>Analytics and performance reporting</li>
                <li>Marketing consultation and strategic planning</li>
              </ul>
              <p className="mt-4">
                The specific scope of Services to be provided shall be outlined in a separate Statement of Work (&quot;SOW&quot;) or Service Agreement between you and the Company. In the event of any conflict between these Terms and a SOW or Service Agreement, the terms of the SOW or Service Agreement shall control with respect to the specific Services covered therein.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">4. Client Responsibilities</h2>
              <p>
                To enable us to perform the Services effectively, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide timely access to all necessary accounts, platforms, and credentials required for the performance of Services</li>
                <li>Supply accurate, complete, and current information as reasonably requested by us</li>
                <li>Review and approve or provide feedback on deliverables within the timeframes specified in the applicable SOW</li>
                <li>Ensure that all materials, content, and information you provide do not infringe upon any third-party intellectual property rights</li>
                <li>Comply with all applicable laws, regulations, and platform terms of service in connection with your use of our Services</li>
                <li>Maintain the confidentiality of any account credentials or access information we provide to you</li>
                <li>Promptly notify us of any changes to your business, contact information, or other relevant circumstances</li>
                <li>Cooperate with us in good faith to facilitate the successful delivery of Services</li>
              </ul>
              <p className="mt-4">
                Failure to fulfill these responsibilities may result in delays, additional charges, or termination of Services, and we shall not be liable for any such consequences arising from your failure to comply with this Section.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">5. Payment Terms</h2>

              <h3 className="text-white text-xl mt-6 mb-3">5.1 Fees and Payment</h3>
              <p>
                You agree to pay all fees associated with the Services as set forth in the applicable SOW or Service Agreement. Unless otherwise specified, all fees are quoted and payable in United States Dollars (USD). Payment terms, including due dates and accepted payment methods, shall be specified in the applicable SOW or invoice.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">5.2 Late Payments</h3>
              <p>
                Any payment not received by the due date shall be subject to a late fee of one and one-half percent (1.5%) per month, or the maximum rate permitted by applicable law, whichever is lower. We reserve the right to suspend or terminate Services if payment is not received within fifteen (15) days of the due date.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">5.3 Taxes</h3>
              <p>
                All fees are exclusive of any applicable taxes, levies, or duties imposed by taxing authorities, including, without limitation, sales, use, and value-added taxes. You are responsible for paying all such taxes, excluding taxes based on our net income.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">5.4 Third-Party Costs</h3>
              <p>
                Certain Services may require payment to third parties, including but not limited to advertising platforms (e.g., Meta, Google), software subscriptions, stock media licenses, and other vendors. Unless otherwise agreed in writing, such third-party costs are your responsibility and are separate from our service fees.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">5.5 Refund Policy</h3>
              <p>
                Due to the nature of digital marketing services, all fees paid are non-refundable unless otherwise specified in writing. In the event of early termination, you shall remain liable for all fees accrued up to the effective date of termination, as well as any non-cancelable commitments made on your behalf.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">6. Intellectual Property Rights</h2>

              <h3 className="text-white text-xl mt-6 mb-3">6.1 Company Intellectual Property</h3>
              <p>
                The Company retains all rights, title, and interest in and to all intellectual property owned or developed by the Company prior to or independent of the Services, including but not limited to methodologies, tools, templates, know-how, processes, techniques, and software (collectively, &quot;Company IP&quot;). Nothing in these Terms shall be construed to transfer or assign any Company IP to you.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">6.2 Client Materials</h3>
              <p>
                You retain all rights, title, and interest in and to all content, materials, and intellectual property that you provide to us for use in connection with the Services (&quot;Client Materials&quot;). You grant us a non-exclusive, royalty-free license to use, reproduce, modify, and display the Client Materials solely for the purpose of performing the Services.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">6.3 Work Product</h3>
              <p>
                Subject to your payment of all applicable fees, upon completion and delivery of the Services, you shall own all rights, title, and interest in and to the final deliverables specifically created for you pursuant to a SOW (&quot;Work Product&quot;), excluding any Company IP incorporated therein. We retain the right to use the Work Product in our portfolio and for promotional purposes unless otherwise agreed in writing.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">6.4 Portfolio Rights</h3>
              <p>
                Unless you notify us otherwise in writing, we may display and reference the Work Product and your company name and logo in our portfolio, case studies, and marketing materials to demonstrate our capabilities to prospective clients.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">7. Confidentiality</h2>
              <p>
                Each party acknowledges that it may receive or have access to confidential information of the other party (&quot;Confidential Information&quot;). Confidential Information includes, without limitation, business plans, strategies, client lists, financial information, pricing, proprietary technology, and any other information designated as confidential or that reasonably should be understood to be confidential.
              </p>
              <p className="mt-4">
                Each party agrees to: (a) hold the other party&apos;s Confidential Information in strict confidence; (b) not disclose such Confidential Information to any third party without the prior written consent of the disclosing party; and (c) use such Confidential Information only for the purposes of performing obligations under these Terms.
              </p>
              <p className="mt-4">
                These confidentiality obligations shall not apply to information that: (a) is or becomes publicly available without breach of these Terms; (b) was known to the receiving party prior to disclosure; (c) is independently developed without use of Confidential Information; or (d) is required to be disclosed by law or court order.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">8. Representations and Warranties</h2>

              <h3 className="text-white text-xl mt-6 mb-3">8.1 Mutual Representations</h3>
              <p>
                Each party represents and warrants that: (a) it has the full power and authority to enter into these Terms and perform its obligations hereunder; (b) the execution and performance of these Terms does not violate any agreement to which it is a party; and (c) it will comply with all applicable laws and regulations in connection with its performance under these Terms.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">8.2 Client Representations</h3>
              <p>
                You represent and warrant that: (a) all Client Materials provided to us are accurate and do not infringe upon any third-party intellectual property rights; (b) you have obtained all necessary rights, releases, and permissions to use any content, images, likenesses, or other materials included in the Client Materials; and (c) the Client Materials do not violate any applicable laws or regulations.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">8.3 Disclaimer of Warranties</h3>
              <p>
                EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>
              <p className="mt-4">
                WE MAKE NO GUARANTEES REGARDING THE RESULTS OR OUTCOMES OF OUR SERVICES, INCLUDING BUT NOT LIMITED TO INCREASES IN LEADS, SALES, REVENUE, OR ANY OTHER BUSINESS METRICS. MARKETING RESULTS DEPEND ON NUMEROUS FACTORS BEYOND OUR CONTROL, AND PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">9. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EMPIRE ESTATE MEDIA, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICES, REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER THEORY, AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mt-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO US DURING THE SIX (6) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
              </p>
              <p className="mt-4">
                THE LIMITATIONS SET FORTH IN THIS SECTION SHALL APPLY EVEN IF ANY LIMITED REMEDY SET FORTH HEREIN FAILS OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Empire Estate Media, its officers, directors, employees, agents, successors, and assigns from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to: (a) your breach of any representation, warranty, or obligation under these Terms; (b) your use of the Services; (c) any claim that the Client Materials infringe or violate any third-party intellectual property rights or other rights; (d) your violation of any applicable law or regulation; or (e) any act or omission by you or your agents, employees, or contractors.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">11. Term and Termination</h2>

              <h3 className="text-white text-xl mt-6 mb-3">11.1 Term</h3>
              <p>
                These Terms shall remain in effect until terminated by either party in accordance with this Section. The term of any specific Services shall be as set forth in the applicable SOW or Service Agreement.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">11.2 Termination for Convenience</h3>
              <p>
                Either party may terminate an ongoing service engagement by providing thirty (30) days&apos; written notice to the other party, unless otherwise specified in the applicable SOW or Service Agreement.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">11.3 Termination for Cause</h3>
              <p>
                Either party may terminate these Terms or any SOW immediately upon written notice if the other party materially breaches these Terms or the applicable SOW and fails to cure such breach within fifteen (15) days after receiving written notice thereof.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">11.4 Effect of Termination</h3>
              <p>
                Upon termination: (a) you shall pay all fees accrued up to the effective date of termination; (b) each party shall return or destroy all Confidential Information of the other party; (c) we shall deliver to you any completed Work Product for which payment has been received; and (d) all provisions that by their nature should survive termination shall survive, including, without limitation, Sections 6, 7, 8.3, 9, 10, and 14.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">12. Non-Solicitation</h2>
              <p>
                During the term of any active service engagement and for a period of twelve (12) months following the termination thereof, you agree not to directly or indirectly solicit, hire, or engage any employee, contractor, or agent of the Company who was involved in providing Services to you, without the prior written consent of the Company.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">13. Force Majeure</h2>
              <p>
                Neither party shall be liable for any failure or delay in performing its obligations under these Terms (except for payment obligations) if such failure or delay results from circumstances beyond the reasonable control of that party, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">14. Governing Law and Dispute Resolution</h2>

              <h3 className="text-white text-xl mt-6 mb-3">14.1 Governing Law</h3>
              <p>
                These Terms and any disputes arising out of or related to these Terms or the Services shall be governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, without regard to its conflict of law principles.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">14.2 Dispute Resolution</h3>
              <p>
                The parties agree to first attempt to resolve any dispute arising out of or relating to these Terms through good faith negotiations. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may initiate binding arbitration administered by the American Arbitration Association (&quot;AAA&quot;) in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted in Pennsylvania by a single arbitrator. The decision of the arbitrator shall be final and binding, and judgment on the award may be entered in any court of competent jurisdiction.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">14.3 Class Action Waiver</h3>
              <p>
                YOU AND THE COMPANY AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">14.4 Injunctive Relief</h3>
              <p>
                Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of its intellectual property rights or Confidential Information.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">15. General Provisions</h2>

              <h3 className="text-white text-xl mt-6 mb-3">15.1 Entire Agreement</h3>
              <p>
                These Terms, together with any applicable SOW or Service Agreement and our Privacy Policy, constitute the entire agreement between you and the Company regarding the subject matter hereof and supersede all prior and contemporaneous agreements, understandings, and communications, whether written or oral.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">15.2 Severability</h3>
              <p>
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">15.3 Waiver</h3>
              <p>
                The failure of either party to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by the waiving party to be effective.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">15.4 Assignment</h3>
              <p>
                You may not assign or transfer these Terms or any rights or obligations hereunder without our prior written consent. We may assign these Terms without your consent to an affiliate or in connection with a merger, acquisition, or sale of all or substantially all of our assets.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">15.5 Independent Contractors</h3>
              <p>
                The relationship between you and the Company is that of independent contractors. Nothing in these Terms shall be construed to create a partnership, joint venture, employment, or agency relationship between the parties.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">15.6 Notices</h3>
              <p>
                All notices required or permitted under these Terms shall be in writing and shall be deemed delivered when: (a) delivered personally; (b) sent by confirmed email; (c) sent by nationally recognized overnight courier; or (d) sent by registered or certified mail, return receipt requested.
              </p>

              <h3 className="text-white text-xl mt-6 mb-3">15.7 Headings</h3>
              <p>
                The section headings in these Terms are for convenience only and shall not affect the interpretation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-serif mb-4">16. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-white/5 border border-white/10">
                <p className="text-white font-medium">Empire Estate Media, LLC</p>
                <p className="mt-2">Email: legal@empireestatemedia.com</p>
                <p>Phone: +1 (717) 572-6295</p>
                <p className="mt-4 text-white/50 text-sm">
                  Commonwealth of Pennsylvania, United States
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors text-sm">
              Privacy Policy
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
