import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Empire Estate Media",
  description: "Marketing systems that generate leads and build authority. Explore our packages designed for NYC real estate professionals.",
};

export default function ServicesPage() {
  const packages = [
    {
      number: "01",
      name: "Presence",
      subtitle: "Build Your Foundation",
      target: "For agents ready to establish a professional online presence",
      commitment: "3-month commitment",
      features: [
        "12 custom-designed posts monthly",
        "4 short-form videos (Reels/TikToks)",
        "Instagram & Facebook management",
        "Content calendar & strategy",
        "Monthly analytics report",
        "Bio & profile optimization",
        "Branded templates library",
      ],
      outcome: "A consistent, professional social presence that builds trust with potential clients before you ever meet them.",
    },
    {
      number: "02",
      name: "Pipeline",
      subtitle: "Generate Qualified Leads",
      target: "For agents ready to invest in systematic lead generation",
      popular: true,
      features: [
        "Everything in Presence",
        "Facebook & Instagram advertising",
        "2 targeted campaigns monthly",
        "Custom landing pages",
        "Lead qualification system",
        "CRM integration setup",
        "Retargeting campaigns",
        "Weekly performance reviews",
      ],
      outcome: "A predictable flow of qualified buyer and seller leads delivered directly to your inbox.",
    },
    {
      number: "03",
      name: "Authority",
      subtitle: "Dominate Your Market",
      target: "For top producers ready to become the obvious choice",
      commitment: "3-month minimum",
      features: [
        "Everything in Pipeline",
        "8 professionally produced videos",
        "YouTube & TikTok strategy",
        "Personal brand development",
        "Authority positioning framework",
        "Email nurture sequences",
        "Bi-weekly strategy calls",
        "Priority support access",
      ],
      outcome: "Market recognition as the go-to agent in your niche, commanding premium clients and referral partnerships.",
    },
  ];

  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6 sm:mb-8">
              What We Build
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-normal text-white mb-6 sm:mb-8 leading-[1.1]">
              Marketing systems
              <br />
              <span className="italic">that compound</span>
            </h1>
            <p className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Not random posts. Not vanity metrics. Strategic marketing infrastructure that generates leads, builds authority, and compounds in value over time.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                title: "Professional Content",
                description: "Photography-quality posts and scroll-stopping videos that reflect the caliber of properties you represent.",
              },
              {
                title: "Strategic Distribution",
                description: "Your content reaches the right people at the right time through optimized posting and targeted advertising.",
              },
              {
                title: "Lead Generation",
                description: "Systematic campaigns that attract qualified buyers and sellers, not tire-kickers and browsers.",
              },
              {
                title: "Brand Building",
                description: "Consistent positioning that establishes you as the trusted authority in your market niche.",
              },
              {
                title: "Performance Tracking",
                description: "Clear reporting on metrics that matter: leads, appointments, and pipeline value. Not just likes.",
              },
              {
                title: "Ongoing Optimization",
                description: "Continuous refinement based on data, market shifts, and your evolving business goals.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-black p-6 sm:p-10 md:p-12">
                <h3 className="text-white text-lg mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-black border-t border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12 sm:mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4 sm:mb-6">
              Investment Levels
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-[1.2]">
              Choose based on
              <br />
              <span className="italic">where you&apos;re headed</span>
            </h2>
            <p className="text-white/50 mt-6 leading-relaxed">
              Each package builds on the previous one. Start where it makes sense for your business today, scale as you grow.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-6 sm:p-10 md:p-12 border ${
                  pkg.popular ? "border-[#1e3a5f]" : "border-white/10"
                } hover:border-white/20 transition-colors duration-500`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-6 sm:left-10 px-4 py-1 bg-[#1e3a5f] text-white text-[10px] tracking-[0.2em] uppercase">
                    Most Selected
                  </div>
                )}

                <span className="font-serif italic text-[#1e3a5f] text-sm mb-8 block">
                  {pkg.number}
                </span>

                <h3 className="font-serif text-3xl text-white mb-1">{pkg.name}</h3>
                <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-4">
                  {pkg.subtitle}
                </p>
                <p className="text-white/50 text-sm mb-2">{pkg.target}</p>
                {pkg.commitment && (
                  <p className="text-[#1e3a5f] text-xs mb-8">{pkg.commitment}</p>
                )}
                {!pkg.commitment && <div className="mb-8" />}

                <div className="mb-10">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-6">
                    Includes
                  </p>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/60 text-sm">
                        <span className="w-1 h-1 bg-[#1e3a5f] rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-white/5 mb-8">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">Outcome</p>
                  <p className="text-white/70 text-sm leading-relaxed">{pkg.outcome}</p>
                </div>

                <Link
                  href="/get-started"
                  className={`block w-full py-4 text-center text-[13px] tracking-[0.1em] uppercase transition-all duration-300 ${
                    pkg.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/20 text-white hover:border-white"
                  }`}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-sm mt-16 max-w-xl mx-auto">
            Pricing discussed during consultation based on your specific market, goals, and requirements. We customize every engagement.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">
              The Process
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white leading-[1.2] mb-6">
              From application <span className="italic">to results</span>
            </h2>
            <p className="text-white/50 leading-relaxed max-w-2xl mx-auto">
              We&apos;ve refined our process to ensure every client engagement starts strong and delivers measurable outcomes.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line - hidden on mobile */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10" />

            {/* Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                {
                  number: "01",
                  title: "Apply & qualify",
                  description: "Complete our brief application. We review every submission to ensure we can deliver meaningful results for your specific situation.",
                },
                {
                  number: "02",
                  title: "Strategy session",
                  description: "A 45-minute call to understand your business, market position, and goals. We&apos;ll outline a preliminary strategy and discuss investment levels.",
                },
                {
                  number: "03",
                  title: "Onboarding & setup",
                  description: "We gather assets, access accounts, and build your marketing infrastructure. Most clients are fully operational within two weeks.",
                },
                {
                  number: "04",
                  title: "Launch & optimize",
                  description: "Campaigns go live. We monitor performance daily, make data-driven adjustments, and report results on a regular cadence.",
                },
              ].map((step, index) => (
                <div key={index} className="relative text-center lg:text-left">
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border border-[#1e3a5f] bg-black mb-8">
                    <span className="font-serif italic text-[#1e3a5f] text-lg">
                      {step.number}
                    </span>
                  </div>
                  {/* Mobile Number */}
                  <span className="lg:hidden font-serif italic text-[#1e3a5f] text-3xl mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-white text-lg mb-3">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">
              Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white leading-[1.2]">
              What you&apos;re probably wondering
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                question: "How quickly will I see results?",
                answer: "Social presence improvements are visible immediately. Lead generation typically shows meaningful traction within 30-60 days. Authority building is a longer play. Expect 3-6 months to see compounding effects.",
              },
              {
                question: "What makes you different from other agencies?",
                answer: "Specialization. We only work with NYC real estate professionals, which means every strategy, every piece of content, every campaign is informed by deep market knowledge. Generalists can&apos;t compete with that.",
              },
              {
                question: "How much involvement is required from me?",
                answer: "Minimal. After onboarding, expect 1-2 hours monthly for strategy calls and content approvals. We handle the heavy lifting. You focus on clients.",
              },
              {
                question: "What if I&apos;m already working with someone?",
                answer: "We&apos;re happy to audit your current efforts and identify gaps. Many clients come to us after outgrowing their previous agency or being disappointed by generalist approaches.",
              },
            ].map((faq, index) => (
              <div key={index} className="pb-12 border-b border-white/10 last:border-0 last:pb-0">
                <h3 className="text-white text-lg mb-4">{faq.question}</h3>
                <p className="text-white/50 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 md:py-48 border-t border-white/5 scroll-mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury property"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-8">
            Next Step
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-white mb-8 leading-[1.1]">
            Let&apos;s see if we&apos;re
            <br />
            <span className="italic">the right fit</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
            Complete our brief application. If there&apos;s potential for a strong partnership, we&apos;ll schedule a strategy call to discuss your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/get-started" className="btn-primary inline-block">
              Apply Now
            </Link>
            <Link href="/about" className="btn-outline inline-block">
              Learn About Us
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-white/40 text-sm flex-wrap">
            <a
              href="mailto:liuanthony826@gmail.com"
              className="hover:text-white transition-colors"
            >
              liuanthony826@gmail.com
            </a>
            <span className="hidden sm:block">·</span>
            <a
              href="mailto:AnthonyLiu@empireestatemedia.com"
              className="hover:text-white transition-colors"
            >
              AnthonyLiu@empireestatemedia.com
            </a>
            <span className="hidden sm:block">·</span>
            <a
              href="tel:+17175726295"
              className="hover:text-white transition-colors"
            >
              +1 (717) 572-6295
            </a>
            <span className="hidden sm:block">·</span>
            <a
              href="tel:+13479419083"
              className="hover:text-white transition-colors"
            >
              +1 (347) 941-9083
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
