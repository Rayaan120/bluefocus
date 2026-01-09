import { useEffect, useMemo, useState } from "react";
import { Star, TrendingUp, Users, Award, ArrowRight, Quote } from "lucide-react";


const reviews = [
  {
    id: 1,
    name: "Mohammed Al-Rashid",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Blue Focus transformed our corporate event into an unforgettable experience. Their attention to detail and professional execution exceeded all expectations. Highly recommended for any corporate event in Dubai!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    date: "1 month ago",
    comment:
      "Working with Blue Focus was seamless from start to finish. Their team handled our international exhibition with precision and creativity. The stand design was absolutely stunning and drew significant attention.",
  },
  {
    id: 3,
    name: "Ahmad Hassan",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Exceptional service and innovative solutions. Blue Focus delivered beyond what we imagined for our product launch. Their expertise in event management is truly world-class.",
  },
  {
    id: 4,
    name: "Emma Williams",
    rating: 5,
    date: "2 months ago",
    comment:
      "Professional, creative, and reliable. Blue Focus has been our go-to partner for exhibitions across the Middle East. Their team consistently delivers excellence.",
  },
];
const expertiseAreas = [
  "B2B Matchmaking",
  "Exhibitions",
  "Events",
  "Project Management",
  "Marketing Analysis",
  "Conceptualization",
  "Design Consultancy and Interiors",
  "Advertisements",
];
const inhouseServices = [
  "Program research and development",
  "Topic generation",
  "Content writing services",
  "Marketing",
  "Graphics designing",
  "Digital marketing",
  "Research",
  "Sales strategy",
  "Finance and Accounting",
  "Travel advisory",
  "Hospitality",
  "Legal consultancy",
  "Venue Setups",
  "Customized Solutions",
  "Structure buildups",
  "Printing and Publishing",
  "Promotional Items",
  "Customized corporate gifts items",
];

function Hero({ onNavigate }) {
  const heroImages = useMemo(
    () => [
      "/image/1.jpg",
      "/image/2.jpg",
      "/image/3.jpg",
      "/image/4.jpg",
      "/image/5.jpg",
    ],
    []
  );

  const slides = heroImages.filter(Boolean);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071a2a]">
      {/* Slideshow */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* image */}
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              draggable={false}
            />
            {/* subtle cinematic zoom layer */}
            <div
              className={`absolute inset-0 ${
                i === active ? "animate-[bfZoom_6s_ease-in-out_infinite]" : ""
              }`}
              style={{
                background:
                  "radial-gradient(1200px 600px at 20% 20%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(900px 500px at 80% 30%, rgba(32,108,166,0.18), transparent 55%), radial-gradient(900px 600px at 50% 90%, rgba(0,0,0,0.35), transparent 60%)",
              }}
            />
          </div>
        ))}

        {/* premium overlays */}
       <div className="absolute inset-0 bg-gradient-to-br from-[#04111d]/70 via-[#06233a]/45 to-[#04111d]/65" />

        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_30%_25%,rgba(177,180,173,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_75%_45%,rgba(32,108,166,0.22),transparent_58%)]" />

        {/* subtle grid / texture */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_35%,rgba(255,255,255,0.06),transparent_60%)]" />

      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes bfZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-10 w-full items-center">
            {/* Left: Editorial glass panel */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-white/85 backdrop-blur-md">
                <Award className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold tracking-wide">
                  15+ Years of Excellence in Dubai
                </span>
                <span className="mx-2 h-4 w-px bg-white/15" />
                <span className="text-xs uppercase tracking-[0.28em] text-white/70">
                  Events • Exhibitions • Experiences
                </span>
              </div>

              <div className="mt-7 max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] text-white">
                  Make Your Brand
                  <span className="block mt-3 bg-gradient-to-r from-[#b1b4ad] via-white to-[#a6d3ff] bg-clip-text text-transparent">
                    Impossible to Ignore
                  </span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
                  From high-stakes corporate events to standout exhibitions —
                  Blue Focus designs, builds, and delivers experiences that look
                  premium, feel effortless, and drive real business attention.
                </p>

                {/* CTA row */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate("contact")}
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#0b3f63] px-9 py-5 font-extrabold text-base md:text-lg hover:shadow-2xl hover:shadow-black/25 transition-all"
                  >
                    Start Your Project
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate("portfolio")}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-9 py-5 font-bold text-base md:text-lg text-white hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md"
                  >
                    View Our Work
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Proof strip */}
                <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
                  {[
                    { big: "500+", small: "Events Delivered" },
                    { big: "250+", small: "Happy Clients" },
                    { big: "15+", small: "Years Experience" },
                  ].map((m) => (
                    <div key={m.small} className="relative">
                      <div className="text-3xl md:text-4xl font-extrabold text-white">
                        {m.big}
                      </div>
                      <div className="mt-1 text-xs md:text-sm text-white/65 tracking-wide">
                        {m.small}
                      </div>
                      <div className="mt-3 h-[2px] w-14 bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: unique “slide control + mini caption” column */}
            <div className="lg:col-span-5">
              <div className="lg:ml-auto max-w-md">
                <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-7 shadow-2xl shadow-black/30">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold tracking-[0.22em] text-white/70 uppercase">
                      Showcase Reel
                    </div>
                    <div className="text-xs text-white/55">
                      {String(active + 1).padStart(2, "0")} /{" "}
                      {String(slides.length).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-2xl font-extrabold text-white leading-tight">
                      A moving backdrop that feels
                      <span className="block bg-gradient-to-r from-[#b1b4ad] to-white bg-clip-text text-transparent">
                        premium & alive
                      </span>
                    </div>
                    <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
                      Your hero is now a cinematic slideshow with clean overlays,
                      editorial typography, and minimal controls — made for
                      high-end brands.
                    </p>
                  </div>

                  {/* Dots */}
                  <div className="mt-7 flex items-center gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActive(i)}
                        className={`h-2.5 rounded-full transition-all ${
                          i === active
                            ? "w-10 bg-white"
                            : "w-2.5 bg-white/35 hover:bg-white/55"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* tiny hint row */}
                  <div className="mt-6 flex items-center justify-between text-xs text-white/55">
                    <span>Crossfade • Soft zoom • Premium overlays</span>
                    <span className="tracking-[0.18em] uppercase">Blue Focus</span>
                  </div>
                </div>

                {/* bottom floating ribbon */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 text-white/70 text-sm">
                  Fast response • Clear scope • On-time delivery • Dubai, UAE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
}
export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
        <Hero onNavigate={onNavigate} />

     

              
              
            
          
          {/* Warm Welcome — Signature Editorial (No Cards) */}
<section className="relative py-28 bg-white overflow-hidden">
  {/* Watermark + soft gradients */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[980px] h-[980px] bg-[#206ca6]/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 right-[-160px] w-[680px] h-[680px] bg-[#b1b4ad]/18 rounded-full blur-3xl" />

    {/* Big watermark word */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[80px] sm:text-[120px] lg:text-[160px] font-extrabold tracking-tight text-gray-900/5 select-none whitespace-nowrap">
      BLUE FOCUS
    </div>

    {/* Subtle lines */}
    <div className="absolute left-0 right-0 top-[140px] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    <div className="absolute left-0 right-0 bottom-[110px] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    {/* Small label row */}
    <div className="flex items-center justify-between gap-6">
      <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-gray-500 uppercase">
      
        <span className="h-[2px] w-10 bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
        Welcome Message
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm text-gray-500">
        <span className="inline-flex items-center gap-2">
          <Award className="w-4 h-4 text-[#206ca6]" />
          15+ Years
        </span>
        <span className="inline-flex items-center gap-2">
          <Users className="w-4 h-4 text-[#206ca6]" />
          Corporate + Government
        </span>
        <span className="inline-flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#206ca6]" />
          UAE & Beyond
        </span>
      </div>
    </div>

    {/* Main composition */}
    <div className="mt-10 grid lg:grid-cols-12 gap-14 items-start">
      {/* Left: headline + pull quote */}
      <div className="lg:col-span-5">
        <div className="mb-8">
  <img
    src="/image/bluefocus-logo.png"
    alt="Blue Focus Logo"
    className="h-30 sm:h-29 w-auto"
  />
  <div className="mt-4 flex items-center gap-4">
    <div className="h-[4px] w-20 rounded-full bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
    <div className="h-px flex-1 bg-gray-200" />
  </div>
</div>

        <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.03] text-gray-900">
          A Warm Welcome
          <span className="block mt-3 bg-gradient-to-r from-[#206ca6] via-[#1a5685] to-[#0d3d5c] bg-clip-text text-transparent">
            from Blue Focus
          </span>
        </h2>

        {/* Underline flourish */}
        <div className="mt-6 flex items-center gap-4">
          <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
          We connect industries, ideas, and opportunities — then translate them
          into world-class events and exhibitions with detail-perfect execution.
        </p>

        {/* Elegant pull-quote (no box) */}
        <div className="mt-10 relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#206ca6] via-[#1a5685] to-[#b1b4ad]" />
          <p className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
            “Trusted by businesses that demand precision, speed, and a standout
            brand experience.”
          </p>
          <p className="mt-2 text-sm tracking-wide text-gray-500 uppercase">
            Blue Focus • Dubai, UAE
          </p>
        </div>

        {/* CTAs (simple, premium) */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="group px-8 py-4 rounded-xl bg-[#206ca6] text-white font-semibold hover:bg-[#1a5685] transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-[#206ca6]/20"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate("portfolio")}
            className="px-8 py-4 rounded-xl bg-transparent text-gray-900 font-semibold border border-gray-300 hover:border-[#206ca6]/50 hover:text-[#206ca6] transition-colors inline-flex items-center justify-center gap-2"
          >
            See Our Work
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right: body copy + “flow” highlights */}
      <div className="lg:col-span-7">
        {/* Body text */}
        <div className="space-y-7 text-lg text-gray-700 leading-relaxed">
          <p>
            Blue Focus connects industries around the world — intelligence and
            skilled industrial expertise enable professionals and businesses to
            grow by connecting them with knowledge, ideas and opportunities in
            the regions. With our winner attitude and drive innovation, we
            provide world-class solutions to corporates for their business
            needs.
          </p>

          <p>
            Blue Focus is a leading provider of expert services, meaning that we
            are exclusively positioned to help our client’s country requirements
            & provide them with professional consulting services. Our exclusive
            associations with subject matter will help our clients to tackle
            challenging business and performance issues that require timely
            execution or advanced levels of experience.
          </p>

          <p className="font-semibold text-gray-900">
            Blue Focus have helped steer companies and corporates through a
            multitude of challenges facing today’s businesses.
          </p>
        </div>

        {/* Flow line (unique, no cards) */}
        <div className="mt-12">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold tracking-[0.22em] text-gray-500 uppercase">
              How we deliver
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="mt-7 grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Connect",
                desc: "Linking brands with the right partners, ideas, and opportunities.",
              },
              {
                title: "Create",
                desc: "Design-led concepts built for attention, clarity, and impact.",
              },
              {
                title: "Deliver",
                desc: "Timely execution with precision, quality, and confidence.",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative pl-7">
                {/* dot + line (not a card) */}
                <div className="absolute left-0 top-[10px] w-3 h-3 rounded-full bg-[#206ca6]" />
                <div className="absolute left-[5px] top-[22px] bottom-0 w-px bg-gradient-to-b from-[#206ca6]/60 to-transparent" />
                <div className="text-xl font-extrabold text-gray-900">
                  {step.title}
                </div>
                <div className="mt-2 text-gray-600 leading-relaxed">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal metrics row (no boxes) */}
        <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-4 text-gray-600">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-gray-900">500+</span>
            <span className="text-sm tracking-wide">Events</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-gray-900">250+</span>
            <span className="text-sm tracking-wide">Clients</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-extrabold text-gray-900">15+</span>
            <span className="text-sm tracking-wide">Years</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Our Area of Expertise (No cards) */}
<section className="relative py-24 bg-white overflow-hidden">
  {/* Background accents */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#206ca6]/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 right-[-160px] w-[650px] h-[650px] bg-[#b1b4ad]/18 rounded-full blur-3xl" />

    {/* Watermark */}
    <div className="absolute top-10 right-[-40px] text-[72px] sm:text-[110px] lg:text-[140px] font-extrabold tracking-tight text-gray-900/5 select-none whitespace-nowrap">
      EXPERTISE
    </div>

    {/* Subtle horizontal line */}
    <div className="absolute left-0 right-0 top-[120px] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    {/* Heading */}
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-6">
        <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-gray-500 uppercase">
          <span className="h-[2px] w-10 bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
          Our Area of Expertise
        </div>

        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Expertise that turns ideas into
          <span className="block bg-gradient-to-r from-[#206ca6] via-[#1a5685] to-[#0d3d5c] bg-clip-text text-transparent">
            standout experiences
          </span>
        </h2>
      </div>

      <div className="lg:col-span-6">
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          From strategy to execution, our team covers every key capability needed
          to deliver world-class events, exhibitions, and brand experiences —
          with precision and creativity.
        </p>
      </div>
    </div>

    {/* List */}
    <div className="mt-14 grid md:grid-cols-2 gap-x-14 gap-y-6">
      {expertiseAreas.map((item, index) => (
        <div key={item} className="flex items-start gap-5 group">
          {/* Gradient number (not a card) */}
          <div className="mt-1 w-10 shrink-0">
            <div className="text-sm font-bold text-[#206ca6]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="mt-2 h-[2px] w-10 bg-gradient-to-r from-[#206ca6] to-[#b1b4ad] opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="text-xl font-semibold text-gray-900 group-hover:text-[#206ca6] transition-colors">
              {item}
            </div>
            <div className="mt-2 h-px w-full bg-gradient-to-r from-gray-200 via-gray-200 to-transparent" />
          </div>
        </div>
      ))}
    </div>

    {/* Bottom actions */}
    <div className="mt-14 flex flex-col sm:flex-row gap-4">
      <button
        type="button"
        onClick={() => onNavigate("services")}
        className="group px-8 py-4 rounded-xl bg-[#206ca6] text-white font-semibold hover:bg-[#1a5685] transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-[#206ca6]/20"
      >
        Explore Services
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate("contact")}
        className="px-8 py-4 rounded-xl bg-transparent text-gray-900 font-semibold border border-gray-300 hover:border-[#206ca6]/50 hover:text-[#206ca6] transition-colors inline-flex items-center justify-center gap-2"
      >
        Talk to Our Team
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
</section>
{/* Our Inhouse Management Services (No cards) */}
{/* Our Inhouse Management Services — Manifesto Layout (No cards / no boxes) */}
<section className="relative py-28 bg-white overflow-hidden">
  {/* Ambient background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#206ca6]/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-56 right-[-220px] w-[860px] h-[860px] bg-[#b1b4ad]/18 rounded-full blur-3xl" />
    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:52px_52px]" />

    {/* Watermark */}
    <div className="absolute top-10 right-[-60px] text-[90px] sm:text-[130px] lg:text-[180px] font-extrabold tracking-tight text-gray-900/5 select-none whitespace-nowrap">
      INHOUSE
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-12 gap-14 items-start">
      {/* Left “editorial spine” */}
      <div className="lg:col-span-4">
        <div className="flex items-start gap-6">
          {/* vertical gradient spine */}
          <div className="w-[3px] h-[320px] rounded-full bg-gradient-to-b from-[#206ca6] via-[#1a5685] to-[#b1b4ad]" />

          <div>
            <div className="text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase">
              Our Inhouse
            </div>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Management
              <span className="block mt-2 bg-gradient-to-r from-[#206ca6] via-[#1a5685] to-[#0d3d5c] bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              A complete support ecosystem — research, content, marketing,
              operations, logistics, production, and finishing — all handled
              under one roof.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="group px-8 py-4 rounded-xl bg-[#206ca6] text-white font-semibold hover:bg-[#1a5685] transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-[#206ca6]/20"
              >
                Request a Proposal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("services")}
                className="px-8 py-4 rounded-xl bg-transparent text-gray-900 font-semibold border border-gray-300 hover:border-[#206ca6]/50 hover:text-[#206ca6] transition-colors inline-flex items-center justify-center gap-2"
              >
                See Full Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* subtle divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-gray-200 via-gray-200 to-transparent" />
      </div>

      {/* Right list: flowing + big faint numbers */}
      <div className="lg:col-span-8">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase">
            What we cover
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-10">
          {inhouseServices.map((item, i) => (
            <div key={`${item}-${i}`} className="relative">
              {/* big faint number behind */}
              <div className="absolute -top-7 -left-2 text-5xl font-extrabold text-gray-900/5 select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* tiny accent */}
              <div className="h-[2px] w-10 bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />

              <div className="mt-3 text-lg font-semibold text-gray-900 leading-snug">
                {item}
              </div>

              <div className="mt-3 h-px w-full bg-gradient-to-r from-gray-200 to-transparent" />
            </div>
          ))}
        </div>

        {/* bottom line */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
    </div>
  </div>
</section>


        
      
      

     
      

      
      

      <div className="relative overflow-hidden">
  {/* Marquee ribbon */}
  <div className="relative bg-[#0b1220] border-y border-white/10">
    <style>{`
      @keyframes bf_marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
      <div className="overflow-hidden">
        <div
          className="flex whitespace-nowrap gap-10 text-white/70 text-sm tracking-[0.35em] uppercase"
          style={{ animation: "bf_marquee 18s linear infinite" }}
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10">
              <span className="text-white/80 font-semibold">Blue Focus</span>
              <span>Events</span>
              <span>Exhibitions</span>
              <span>Concept</span>
              <span>Design</span>
              <span>Build</span>
              <span>Execute</span>
              <span className="text-white/80 font-semibold">Dubai • UAE</span>
              <span>•</span>
              <span className="text-white/80 font-semibold">Let’s Talk</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Main CTA */}
  <div className="relative bg-gradient-to-br from-gray-950 via-[#0d3d5c] to-gray-950 py-24">
    {/* Unique diagonal spotlight */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-[#206ca6]/25 blur-3xl rounded-full" />
      <div className="absolute -bottom-56 right-[-260px] w-[900px] h-[900px] bg-[#b1b4ad]/16 blur-3xl rounded-full" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -left-40 top-0 h-full w-[520px] rotate-12 bg-white/5 blur-2xl" />
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.22em] uppercase text-white/70">
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
            Your next project starts here
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold text-white leading-[1.05]">
            Let’s create a{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#b1b4ad] to-white bg-clip-text text-transparent">
                standout brand moment
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-[10px] rounded-full bg-[#206ca6]/25" />
            </span>
            .
          </h2>

          <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
            From concept to execution — events, exhibitions, creative direction,
            production, and on-ground delivery. One team. One timeline. Premium results.
          </p>

          {/* Minimal proof line (not boxes) */}
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-white/70">
            <span className="font-semibold text-white">15+ years</span>
            <span className="opacity-40">•</span>
            <span><span className="font-semibold text-white">500+</span> events delivered</span>
            <span className="opacity-40">•</span>
            <span><span className="font-semibold text-white">250+</span> clients</span>
          </div>
        </div>

        {/* Right actions */}
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="group w-full px-10 py-5 rounded-2xl bg-white text-[#206ca6] font-extrabold text-lg hover:shadow-2xl hover:shadow-white/15 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Book a Free Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate("portfolio")}
              className="w-full px-10 py-5 rounded-2xl border border-white/25 bg-white/5 text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Recent Work
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Tiny helper text */}
            <div className="pt-2 text-sm text-white/55 leading-relaxed">
              Fast response • Clear scope • On-time delivery
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
  </div>
</div>

    </div>
  );
}
