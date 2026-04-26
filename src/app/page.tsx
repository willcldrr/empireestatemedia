import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=2070&auto=format&fit=crop"
            alt="Brooklyn Bridge panoramic view"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-0 md:pt-20">
          <div className="max-w-3xl">
            <p className="hidden md:block text-[11px] tracking-[0.3em] uppercase text-white/50 mb-8">
              Strategic Marketing for NYC Real Estate
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-white mb-6 sm:mb-8 leading-[1.1]">
              <span className="whitespace-nowrap">Where Top Realtors</span>
              <br />
              <span className="italic">Build Empires</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mb-12">
              Premium marketing infrastructure for New York's most ambitious real estate professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="btn-primary inline-block text-center">
                Work With Us
              </Link>
              <Link href="/services" className="btn-outline inline-block text-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">
                The Reality
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-8 leading-[1.2]">
                Most agents are
                <br />
                <span className="italic">invisible online</span>
              </h2>
              <div className="space-y-6 text-white/50 leading-relaxed">
                <p>
                  You close deals. You know your market. But when potential clients search for an agent, they find your competitors first.
                </p>
                <p>
                  The agents winning on social media aren't necessarily better than you. They simply have better systems. Professional content. Strategic advertising. A brand that positions them as the obvious choice.
                </p>
                <p className="text-white/70">
                  That's exactly what we build for a select group of NYC agents.
                </p>
              </div>
              <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 sm:gap-8">
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl text-white mb-1">47%</p>
                    <p className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-white/40">of buyers find agents online</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl text-white mb-1">3x</p>
                    <p className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-white/40">more leads with video</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl sm:text-3xl text-white mb-1">NYC</p>
                    <p className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-white/40">exclusive focus</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] relative">
                <Image
                  src="https://images.unsplash.com/photo-1511745235279-2f7276d5ba65?q=80&w=2070&auto=format&fit=crop"
                  alt="New York signage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border border-[#1e3a5f]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12 sm:mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4 sm:mb-6">
              What We Build
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-[1.2]">
              Marketing systems that
              <br />
              <span className="italic">compound over time</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                number: "01",
                title: "Presence",
                subtitle: "Be Seen Consistently",
                description: "A feed that reflects the caliber of properties you represent. Professional content that builds trust before you ever meet a prospect.",
                features: ["Branded content library", "Strategic posting schedule", "Platform optimization"],
              },
              {
                number: "02",
                title: "Pipeline",
                subtitle: "Attract Qualified Leads",
                description: "Advertising systems that put your listings in front of serious buyers and sellers, not tire-kickers scrolling at midnight.",
                features: ["Targeted ad campaigns", "Lead qualification flows", "CRM integration"],
              },
              {
                number: "03",
                title: "Authority",
                subtitle: "Own Your Market",
                description: "Video content and personal branding that positions you as the agent people trust with their largest financial decisions.",
                features: ["Video production", "Authority positioning", "Email nurture sequences"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-black p-6 sm:p-10 md:p-12 group hover:bg-[#0a0a0a] transition-colors duration-500"
              >
                <span className="font-serif italic text-[#1e3a5f] text-sm mb-8 block">
                  {service.number}
                </span>
                <h3 className="font-serif text-2xl text-white mb-1">{service.title}</h3>
                <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6">
                  {service.subtitle}
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-white/40 text-sm flex items-center gap-3">
                      <span className="w-1 h-1 bg-[#1e3a5f] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/services" className="btn-outline inline-block">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* NYC Exclusive Section */}
      <section className="py-24 sm:py-32 bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Large Statement */}
          <div className="relative mb-20 sm:mb-28">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#1e3a5f] mb-6">
              New York City Exclusive
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1] max-w-4xl">
              One city. One industry.
              <br />
              <span className="italic text-white/40">Total focus.</span>
            </h2>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-20 sm:mb-28 pb-20 sm:pb-28 border-b border-white/10">
            <div>
              <p className="font-serif text-5xl sm:text-6xl md:text-7xl text-white mb-2">50M+</p>
              <p className="text-white/40 text-sm">Impressions generated</p>
            </div>
            <div>
              <p className="font-serif text-5xl sm:text-6xl md:text-7xl text-white mb-2">3.2x</p>
              <p className="text-white/40 text-sm">Average lead increase</p>
            </div>
            <div>
              <p className="font-serif text-5xl sm:text-6xl md:text-7xl text-white mb-2">$2B+</p>
              <p className="text-white/40 text-sm">In client sales volume</p>
            </div>
            <div>
              <p className="font-serif text-5xl sm:text-6xl md:text-7xl text-white mb-2">48hr</p>
              <p className="text-white/40 text-sm">Average response time</p>
            </div>
          </div>

          {/* Why Specialization */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:border-r md:border-white/10 md:pr-12">
              <p className="text-[#1e3a5f] text-sm uppercase tracking-[0.2em] mb-4">The Market</p>
              <p className="text-white/50 leading-relaxed">
                We know every neighborhood, every buyer profile, every seasonal trend in NYC real estate.
              </p>
            </div>
            <div className="md:border-r md:border-white/10 md:pr-12">
              <p className="text-[#1e3a5f] text-sm uppercase tracking-[0.2em] mb-4">The Strategy</p>
              <p className="text-white/50 leading-relaxed">
                Every campaign is built on years of data from the most competitive market in the country.
              </p>
            </div>
            <div>
              <p className="text-[#1e3a5f] text-sm uppercase tracking-[0.2em] mb-4">The Results</p>
              <p className="text-white/50 leading-relaxed">
                Depth beats breadth. Our focus translates directly into better outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-white/40 text-sm italic font-serif">
              &ldquo;Working with EEM was a game-changer for my business. Their attention to detail, responsiveness, and ability to position properties in the best possible light consistently delivers results. It's rare to find a team that understands both the market and the client experience this well.&rdquo;
            </p>
            <p className="text-white/30 text-xs mt-4 tracking-wider uppercase">
              Daniel Mercer, Agent
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 md:py-48">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="NYC architecture"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6 sm:mb-8">
            Limited Availability
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-normal text-white mb-6 sm:mb-8 leading-[1.1]">
            Is this the year you
            <br />
            <span className="italic">dominate your market?</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
            We partner with a limited number of agents to ensure exceptional results. Apply now to see if we're the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="btn-primary inline-block">
              Apply Now
            </Link>
            <Link href="/services" className="btn-outline inline-block">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
