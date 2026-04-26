import Image from "next/image";
import Link from "next/link";

const investorPillars = [
  {
    index: "01",
    title: "Long-Term Investment Strategy",
    description:
      "Built on resilience, focused on sustainable growth across market cycles.",
  },
  {
    index: "02",
    title: "Integrated Opportunities",
    description:
      "Access a diversified platform across development, capital, and innovation.",
  },
  {
    index: "03",
    title: "Disciplined Execution",
    description:
      "Driven by deep expertise, rigorous analysis, and operational precision.",
  },
];

const proofPoints = [
  {
    value: "5",
    label: "Core Businesses",
    detail: "Connected across development, capital, technology, and execution.",
  },
  {
    value: "1",
    label: "Integrated Platform",
    detail: "A unified structure designed to compound long-term value.",
  },
  {
    value: "Long-Term",
    label: "Investment Focus",
    detail: "Built for resilience across cycles rather than short-lived momentum.",
  },
  {
    value: "Data-Driven",
    label: "Decision Making",
    detail: "Guided by analysis, market intelligence, and disciplined judgment.",
  },
];

const platformCompanies = [
  {
    name: "AvranceCorp",
    description:
      "Developing modern communities with a focus on long-term value through strategic design and execution.",
    href: "/platform/avrancecorp",
    image: "/images/glass-tower.jpg",
    cta: "View Company",
    accent: "from-[rgba(37,99,235,0.92)] to-[rgba(30,64,175,0.82)]",
  },
  {
    name: "TradeRea",
    description:
      "A digital platform transforming access to real estate investment through structured opportunities and innovative technology.",
    href: "/platform/traderea",
    image: "/images/trading-screen.jpg",
    cta: "View Platform",
    accent: "from-[rgba(249,115,22,0.92)] to-[rgba(234,179,8,0.78)]",
  },
];

export default function LandingPage() {
  return (
    <div className="overflow-hidden bg-[var(--color-page-bg)] text-[var(--color-text)]">
      <section className="relative isolate">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(37,99,235,0.08)_0%,_rgba(255,255,255,0)_28%,_rgba(234,179,8,0.08)_100%)]" />
        <div className="absolute left-[-10rem] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[rgba(37,99,235,0.12)] blur-3xl" />
        <div className="absolute right-[-8rem] top-[10rem] h-[18rem] w-[18rem] rounded-full bg-[rgba(249,115,22,0.14)] blur-3xl" />

        <div className="relative mx-auto max-w-[1380px] px-6 pb-14 pt-10 lg:px-12 lg:pb-24 lg:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(37,99,235,0.14)] bg-white/78 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-dark)] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent-orange)]" />
                Egolia Group
              </div>

              <h1 className="mt-8 max-w-5xl text-[3.9rem] leading-[0.88] tracking-[-0.055em] sm:text-[5.4rem] lg:text-[8rem]">
                Let&apos;s Build
                <br />
                Long-Term
                <br />
                <span className="text-[var(--color-primary-dark)]">Value Together</span>
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                <span>Partner With Us</span>
                <span className="h-px w-12 bg-[rgba(15,23,42,0.18)]" />
                <span>Real Estate</span>
                <span className="h-px w-12 bg-[rgba(15,23,42,0.18)]" />
                <span>Investment Platform</span>
              </div>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] lg:text-[1.24rem]">
                We partner with forward-thinking investors to build sustainable,
                long-term value through disciplined strategy, strategic capital
                allocation, and operational excellence.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-orange)] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(249,115,22,0.28)] transition hover:-translate-y-0.5 hover:bg-[#e86810]"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/investor"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(15,23,42,0.12)] bg-white/82 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-text)] backdrop-blur-md transition hover:border-[rgba(37,99,235,0.28)] hover:text-[var(--color-primary-dark)]"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            <div className="relative min-h-[38rem]">
              <div className="absolute right-[4%] top-0 h-[70%] w-[72%] overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-[0_40px_110px_rgba(15,23,42,0.12)]">
                <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/images/glass-building.jpg"
                    alt="Egolia luxury development visual"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 32vw, 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.76)] via-[rgba(15,23,42,0.14)] to-[rgba(255,255,255,0.04)]" />
                </div>
              </div>

              <div className="absolute bottom-[4%] left-0 w-[58%] rounded-[2rem] border border-[rgba(15,23,42,0.08)] bg-[var(--color-primary-dark)] p-7 text-white shadow-[0_30px_80px_rgba(30,64,175,0.28)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/68">
                  Long-Term Value Creation
                </p>
                <p className="mt-4 text-[1.9rem] leading-[1.05]">
                  Strategic capital with an integrated, disciplined operating
                  model.
                </p>
              </div>

              <div className="absolute left-[20%] top-[14%] w-[12.5rem] rounded-[1.75rem] border border-[rgba(15,23,42,0.08)] bg-white/92 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  Platform Strength
                </p>
                <p className="mt-3 text-[3rem] leading-none text-[var(--color-primary-dark)]">
                  1
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                  Unified ecosystem for investment and development solutions.
                </p>
              </div>

              <div className="absolute bottom-[16%] right-[2%] w-[14rem] rounded-[1.75rem] border border-[rgba(234,179,8,0.18)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(255,248,224,0.9))] p-5 shadow-[0_24px_60px_rgba(234,179,8,0.14)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  Core Businesses
                </p>
                <p className="mt-3 text-[3rem] leading-none text-[var(--color-text)]">
                  4
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                  Designed for long-horizon growth, resilience, and strategic
                  scale.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-[rgba(15,23,42,0.08)] pt-8 md:grid-cols-3">
            {investorPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[1.75rem] border border-white bg-white/82 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] backdrop-blur-md"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-accent-orange)]">
                  {pillar.index}
                </p>
                <h3 className="mt-4 text-[1.6rem] leading-tight">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-7 text-[var(--color-text-muted)]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-[var(--color-border)] bg-[var(--color-section-bg)]">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.4),transparent)]" />
        <div className="mx-auto max-w-[1380px] px-6 py-24 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent-orange)]">
                For Investors
              </p>
              <h2 className="mt-5 text-[3.4rem] leading-[0.9] tracking-[-0.045em] lg:text-[5.2rem]">
                Investing for
                <br />
                Long-Term
                <br />
                Growth
              </h2>
              <p className="mt-7 max-w-md text-lg leading-8 text-[var(--color-text-muted)]">
                Egolia works alongside investors to deliver consistent,
                long-term performance through disciplined execution, strategic
                capital deployment, and integrated opportunities across our
                platform.
              </p>
            </div>

            <div className="grid gap-6">
              {investorPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={`grid gap-6 overflow-hidden rounded-[2rem] border border-[rgba(15,23,42,0.08)] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8 ${
                    index === 1 ? "lg:translate-x-10" : ""
                  }`}
                >
                  <div
                    className={`relative min-h-[18rem] overflow-hidden rounded-[1.5rem] ${
                      index === 0
                        ? "bg-[linear-gradient(135deg,_rgba(37,99,235,0.92),_rgba(30,64,175,0.86))]"
                        : index === 1
                          ? "bg-[linear-gradient(135deg,_rgba(255,255,255,0.2),_rgba(249,115,22,0.9))]"
                          : "bg-[linear-gradient(135deg,_rgba(15,23,42,0.92),_rgba(37,99,235,0.86))]"
                    }`}
                  >
                    <Image
                      src={
                        index === 0
                          ? "/images/residential.jpg"
                          : index === 1
                            ? "/images/city-skyline-hq.jpg"
                            : "/images/commercial.jpg"
                      }
                      alt={pillar.title}
                      fill
                      className="object-cover mix-blend-overlay opacity-70"
                      sizes="(min-width: 1024px) 28vw, 100vw"
                    />
                    <div className="absolute left-6 top-6 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                      {pillar.index}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="max-w-xs text-[1.8rem] leading-tight">
                        {pillar.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-[1.5rem] bg-[linear-gradient(180deg,_rgba(244,248,255,0.9),_rgba(255,255,255,1))] p-6">
                    <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                      {pillar.description}
                    </p>
                    <div className="mt-8 flex items-end justify-between border-t border-[rgba(15,23,42,0.08)] pt-6">
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                        Disciplined Investing
                      </p>
                      <span className="text-3xl text-[var(--color-primary-dark)]">
                        {pillar.index}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-6 py-24 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="overflow-hidden rounded-[2.3rem] border border-[rgba(15,23,42,0.08)] bg-[linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(37,99,235,0.94)_50%,_rgba(249,115,22,0.7)_140%)] p-8 text-white shadow-[0_38px_90px_rgba(15,23,42,0.18)] lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/68">
              Built for Long-Term Value
            </p>
            <h2 className="mt-5 max-w-3xl text-[3.5rem] leading-[0.92] tracking-[-0.05em] lg:text-[5rem]">
              Strategic capital, innovation, and disciplined execution.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              We combine strategic capital, innovation, and disciplined
              execution to deliver consistent value across every part of our
              platform.
            </p>
            <div className="relative mt-10 h-[18rem] overflow-hidden rounded-[1.8rem] border border-white/12">
              <Image
                src="/images/nyc-skyline.jpg"
                alt="Egolia skyline"
                fill
                className="object-cover opacity-72"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.6)] to-transparent" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {proofPoints.map((point, index) => (
              <article
                key={point.label}
                className={`rounded-[2rem] border p-7 shadow-[0_24px_60px_rgba(15,23,42,0.05)] ${
                  index === 0
                    ? "border-[rgba(37,99,235,0.14)] bg-white"
                    : index === 1
                      ? "border-[rgba(234,179,8,0.2)] bg-[linear-gradient(180deg,_rgba(255,255,255,1),_rgba(255,248,228,0.9))]"
                      : index === 2
                        ? "border-[rgba(15,23,42,0.08)] bg-[var(--color-section-bg)]"
                        : "border-[rgba(37,99,235,0.14)] bg-white"
                }`}
              >
                <p className="text-[2.6rem] leading-none tracking-[-0.05em] text-[var(--color-primary-dark)] lg:text-[3.3rem]">
                  {point.value}
                </p>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  {point.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                  {point.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-[var(--color-border)] bg-white">
        <div className="absolute left-1/2 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.08),transparent)] lg:block hidden" />
        <div className="mx-auto max-w-[1380px] px-6 py-24 lg:px-12">
          <div className="flex flex-col gap-5 lg:max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent-orange)]">
              Our Platform
            </p>
            <h2 className="text-[3.4rem] leading-[0.9] tracking-[-0.045em] lg:text-[5.4rem]">
              A unified ecosystem designed to deliver integrated investment and
              development solutions.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {platformCompanies.map((company, index) => (
              <article
                key={company.name}
                className={`group relative overflow-hidden rounded-[2.4rem] border border-[rgba(15,23,42,0.08)] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.08)] ${
                  index === 1 ? "lg:translate-y-12" : ""
                }`}
              >
                <div className="relative h-[26rem] overflow-hidden">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.86)] via-[rgba(15,23,42,0.2)] to-transparent" />
                  <div
                    className={`absolute left-6 top-6 rounded-full bg-gradient-to-r ${company.accent} px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white`}
                  >
                    Egolia Platform
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-[3rem] leading-none tracking-[-0.04em]">
                      {company.name}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
                    {company.description}
                  </p>
                  <Link
                    href={company.href}
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-[rgba(15,23,42,0.08)] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-primary-dark)] transition hover:border-[rgba(37,99,235,0.26)] hover:bg-[var(--color-section-bg)]"
                  >
                    {company.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-6 py-24 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[34rem] overflow-hidden rounded-[2.4rem] border border-[rgba(15,23,42,0.08)] bg-[var(--color-primary-dark)] shadow-[0_34px_90px_rgba(30,64,175,0.18)]">
            <Image
              src="/images/partnering.jpg"
              alt="Egolia firm overview"
              fill
              className="object-cover opacity-74"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.76)] via-[rgba(15,23,42,0.16)] to-transparent" />
            <div className="absolute inset-x-6 bottom-6 rounded-[1.8rem] border border-white/14 bg-white/10 p-6 text-white backdrop-blur-md">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/68">
                Our Firm
              </p>
              <p className="mt-4 text-[2rem] leading-tight">
                A disciplined approach built for consistency, resilience, and
                performance.
              </p>
            </div>
          </div>

          <div className="rounded-[2.4rem] border border-[rgba(15,23,42,0.08)] bg-[linear-gradient(180deg,_rgba(255,255,255,1),_rgba(244,248,255,0.92))] p-8 shadow-[0_28px_70px_rgba(15,23,42,0.06)] lg:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-accent-orange)]">
              Our Firm
            </p>
            <h2 className="mt-5 text-[3.5rem] leading-[0.9] tracking-[-0.05em] lg:text-[5.2rem]">
              A Disciplined
              <br />
              Approach to
              <br />
              Investment
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
              We focus on long-term value creation through strategic capital,
              innovation, and disciplined execution, ensuring consistency,
              resilience, and performance.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-[rgba(15,23,42,0.08)] bg-white p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  Capital Discipline
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                  Strategic capital allocation grounded in clarity, patience,
                  and long-term conviction.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-[rgba(15,23,42,0.08)] bg-white p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  Operating Excellence
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
                  Deep execution capabilities that support resilience,
                  consistency, and platform performance.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center justify-center rounded-full border border-[rgba(15,23,42,0.1)] bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-primary-dark)] transition hover:border-[rgba(37,99,235,0.28)] hover:bg-[var(--color-section-bg)]"
            >
              Our Firm
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-6 pb-24 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-[rgba(15,23,42,0.08)] bg-[linear-gradient(120deg,_rgba(15,23,42,0.98)_0%,_rgba(30,64,175,0.96)_45%,_rgba(249,115,22,0.88)_120%)] px-8 py-12 text-white shadow-[0_40px_100px_rgba(15,23,42,0.24)] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full border border-white/12" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/8 blur-3xl" />
          <div className="absolute bottom-[-3rem] left-[30%] h-44 w-44 rounded-full bg-[rgba(234,179,8,0.18)] blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/68">
                Building Long-Term Value
              </p>
              <h2 className="mt-5 max-w-4xl text-[3.3rem] leading-[0.9] tracking-[-0.05em] lg:text-[5.5rem]">
                We partner with investors to create sustainable growth through
                strategy, innovation, and disciplined execution.
              </h2>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <p className="max-w-md text-base leading-7 text-white/70 lg:text-right">
                Explore integrated opportunities across Egolia&apos;s platform
                and start a conversation built around long-term value.
              </p>
              <Link
                href="/investor"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-primary-dark)] transition hover:bg-[var(--color-section-bg)]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
