import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Empire Estate Media",
  description: "The marketing agency built exclusively for NYC real estate professionals. Learn why top agents choose Empire Estate Media.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6 sm:mb-8">
              Who We Are
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-normal text-white mb-6 sm:mb-8 leading-[1.1]">
              We exist to make
              <br />
              <span className="italic">good agents great</span>
            </h1>
            <p className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Empire Estate Media was founded on a simple belief: the best agents in New York City deserve marketing that matches the caliber of properties they represent.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4 sm:mb-6">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-[1.2]">
                Built by people who
                <br />
                <span className="italic">understand your world</span>
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6 sm:space-y-8 text-white/50 text-base sm:text-lg leading-relaxed">
                <p>
                  We watched talented agents, people who close millions in volume, struggle to translate their expertise into a compelling online presence. Meanwhile, less experienced competitors were winning attention (and clients) with better marketing.
                </p>
                <p>
                  So we built what we wished existed: a marketing partner that speaks fluent real estate, understands the NYC market intimately, and delivers the kind of premium content that high-performing agents deserve.
                </p>
                <p className="text-white/70">
                  Today, we work with a select group of agents across Manhattan, Brooklyn, Queens, and beyond. Professionals who are serious about growth and ready to invest in their brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12 sm:mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4 sm:mb-6">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-[1.2]">
              Principles that guide
              <br />
              <span className="italic">everything we do</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {[
              {
                number: "01",
                title: "Quality over quantity",
                description: "We&apos;d rather create one piece of content that stops the scroll than ten that get ignored. Every post, every video, every ad is crafted to reflect the premium nature of your business.",
              },
              {
                number: "02",
                title: "Strategy before tactics",
                description: "Posting daily means nothing without a plan. We start with your business goals, then reverse-engineer the marketing strategy to get you there. No random acts of content.",
              },
              {
                number: "03",
                title: "Partnership, not vendor",
                description: "We don&apos;t disappear after onboarding. Regular check-ins, performance reviews, and strategy adjustments ensure your marketing evolves as your business grows.",
              },
              {
                number: "04",
                title: "Results you can measure",
                description: "Vanity metrics are easy to inflate. We focus on the numbers that actually matter: leads generated, appointments booked, and ultimately, deals closed.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-black p-6 sm:p-12 md:p-16"
              >
                <span className="font-serif italic text-[#1e3a5f] text-sm mb-8 block">
                  {value.number}
                </span>
                <h3 className="font-serif text-2xl text-white mb-4">{value.title}</h3>
                <p className="text-white/40 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NYC Focus Section */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=2070&auto=format&fit=crop"
                  alt="NYC skyline"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-1/3 h-1/3 border border-[#1e3a5f]/30 hidden sm:block" />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4 sm:mb-6">
                Our Focus
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6 sm:mb-8 leading-[1.2]">
                NYC is the only
                <br />
                <span className="italic">market we serve</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed">
                <p>
                  Generalist agencies spread themselves thin across industries they barely understand. We made a different choice: radical specialization.
                </p>
                <p>
                  Every strategy we develop, every piece of content we create, every campaign we run is informed by deep knowledge of the New York City real estate landscape. The neighborhoods, the buyer profiles, the seasonal patterns, the competitive dynamics. We live and breathe this market.
                </p>
                <p className="text-white/70">
                  The result? Marketing that actually resonates with NYC buyers and sellers, because it&apos;s built by people who understand them.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <ul className="space-y-4">
                  {[
                    "Manhattan luxury and new development",
                    "Brooklyn brownstones and townhouses",
                    "Queens emerging neighborhoods",
                    "Investment properties and commercial",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4 text-white/60">
                      <span className="w-1 h-1 bg-[#1e3a5f] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Client Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">
              Who We Work With
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-8 leading-[1.2]">
              We partner best with agents who are already successful but know they could be doing more with their marketing.
            </h2>
            <p className="text-white/50 leading-relaxed mb-12">
              You don&apos;t need us to tell you how to sell real estate. You&apos;ve proven that. You need a team that can translate your expertise into a marketing presence that reflects your actual capabilities.
            </p>
            <Link href="/get-started" className="btn-primary inline-block">
              See If We&apos;re A Fit
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-48 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-8">
            Let&apos;s Talk
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-white mb-8 leading-[1.1]">
            Ready to build something
            <br />
            <span className="italic">exceptional?</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
            We&apos;re selective about who we work with because great partnerships require alignment. Let&apos;s find out if we&apos;re right for each other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="btn-primary inline-block">
              Apply to Work With Us
            </Link>
            <Link href="/services" className="btn-outline inline-block">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
