import {
  Target,
  Eye,
  Heart,
  Award,
  TrendingUp,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Sparkles, Handshake, ShieldCheck, Headphones } from "lucide-react";
import { MessageSquareText } from "lucide-react";

const ourTeamText = {
  title: "Our Team",
  intro:
    "We have selected the finest talents in the industry to help manifest your vision into reality.",
  body: [
    "Our expert team comprises of friendly and well-experienced architects, designers, engineers, and project managers.",
    "We will guide and follow up with you from day one until the finale.",
    "Remember we are your partners in this industry and we promise to make the whole process stress-free.",
    "After all, the common objective is to make your clients associations seamless and successful.",
  ],
  ribbon: [
    "Architects",
    "Designers",
    "Engineers",
    "Project Managers",
    "Client-First",
    "Precision",
    "Stress-Free Delivery",
  ],
};

const ceoMessage = {
  label: "Message from Co-Founder and CEO",
  title: "A warm welcome from Blue Focus.",
  body: [
    "Our company was started in 2008 on the philosophy of providing excellent service to clients with the highest standards. True enough, Blue Focus legacy remains reliable and have met and exceeded our business partner's expectations. The continued support and trust of our clients have resulted to the growth of more activities under our wing.",
    "To date we now have many enterprises providing various industry solutions. With the stimulating and demanding cycle the industry has today, we are confident and steadfast in our ability to surpass any challenge for the subsequent reasons.",
    "Our business solutions are client-focused, our value is in our dedicated employees who are experts in their fields, we stand by the culture of teamwork, quality, trust, precision, and added value to ensure client satisfaction.",
    "Our policy is centered on providing business partners an array of products and services with a strong conviction that client is king, deserving only of the best. We bring this to fruition by instilling best quality in all our solutions.",
    "Now and in the years to come, we are professionally and technically equipped and ready to whatever developments the industries beckon. As a trendsetter in the business, we are optimistic on taking the position and full responsibility of a primary provider of professional services and quality products both in the region and international market.",
    "With this regard, I hope that the information you find here gives you an overview of the solutions and services you can expect and more when teaming up with Blue Focus. We look forward to offering you a journey towards a fruitful Blue Focus experience.",
  ],
  signOff: "Best Wishes,",
  name: "Alishan Zafar",
  role: "Co-Founder and CEO",
};

const visionParagraphs = [
  "With the influx of modern-day business, an aspiration was born to meet the needs of clients. Henceforth, Blue Focus progressed and has become highly recognized in the expert field today.",
  "Our mission is to provide professional advice and solutions. With a team that comprises of the finest talents, industry experience and marketing expertise we are here to assist you in meeting your market objectives now and yet to come.",
  "We aim to be the principal provider of turnkey solutions not just in the national but also in the international scene, and we believe we can achieve this through guided teamwork and professionalism that will exceed your expectations.",
  "Our values have always been, from the very beginning, focused on commitment to excellent service, innovation, honesty, and integrity.",
  "Our first step in reaching your target is by understanding and listening to your needs.",
];

export default function About({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* HERO — Premium / Unique */}
<div className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-[#0d3550] to-gray-950">
  {/* Background: glow + grid + noise */}
  <div className="absolute inset-0 pointer-events-none">
    {/* large glows */}
    <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] bg-[#206ca6]/18 rounded-full blur-3xl" />
    <div className="absolute -bottom-72 right-[-260px] w-[980px] h-[980px] bg-[#b1b4ad]/14 rounded-full blur-3xl" />
    <div className="absolute -bottom-80 left-[-260px] w-[820px] h-[820px] bg-white/6 rounded-full blur-3xl" />

    {/* subtle grid */}
    <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:56px_56px]" />
    {/* noise */}
    <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:22px_22px]" />

    {/* watermark */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[90px] sm:text-[140px] lg:text-[220px] font-extrabold tracking-tight text-white/5 select-none whitespace-nowrap">
      BLUE FOCUS
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-32">
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      {/* LEFT */}
      <div className="lg:col-span-7">
        <div className="inline-flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur">
            ABOUT BLUE FOCUS
            <span className="w-1.5 h-1.5 rounded-full bg-[#b1b4ad]" />
          </span>

          <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#206ca6]/20 border border-[#206ca6]/40 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
            Since 2009
          </span>
        </div>

        <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.03]">
          Crafting Memorable
          <span className="block mt-3 bg-gradient-to-r from-[#b1b4ad] via-white to-[#206ca6] bg-clip-text text-transparent">
            Experiences That Feel Larger Than Life
          </span>
        </h1>

        <p className="mt-7 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
          We’re a Dubai-based events & exhibitions company transforming visions
          into extraordinary realities — with innovation, precision, and
          flawless execution.
        </p>

        {/* CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="group px-8 py-4 rounded-xl bg-white text-gray-950 font-bold inline-flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-white/10 transition-all"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate("portfolio")}
            className="px-8 py-4 rounded-xl border border-white/25 text-white font-bold hover:border-white/50 hover:bg-white/5 transition-all inline-flex items-center justify-center gap-2"
          >
            View Our Work
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust strip */}
        <div className="mt-12 flex flex-wrap items-center gap-4 text-white/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#206ca6]" />
            <span className="text-sm font-semibold tracking-wide">Corporate</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#b1b4ad]" />
            <span className="text-sm font-semibold tracking-wide">Exhibitions</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span className="text-sm font-semibold tracking-wide">Turnkey Delivery</span>
          </div>
        </div>
      </div>

      {/* RIGHT — Hero Sculpture */}
      <div className="lg:col-span-5">
        <div className="relative">
          {/* floating glass panels */}
          <div className="absolute -top-8 -left-8 w-40 h-40 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl rotate-6" />
          <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-3xl bg-[#206ca6]/15 border border-[#206ca6]/30 backdrop-blur-xl -rotate-6" />

          <div className="relative rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
            {/* top shimmer line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <div className="p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-[0.28em] uppercase text-white/60">
                    Experience Blueprint
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-white">
                    From concept to finale
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-white">
                  <div className="text-xs text-white/70">Trusted</div>
                  <div className="text-lg font-extrabold">2009+</div>
                </div>
              </div>

              {/* Rings / arcs */}
              <div className="mt-7 relative h-56 sm:h-60 rounded-2xl bg-gradient-to-br from-white/8 to-white/3 border border-white/10 overflow-hidden">
                <svg
                  viewBox="0 0 600 280"
                  className="absolute inset-0 w-full h-full"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="arc" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#206ca6" stopOpacity="0.95" />
                      <stop offset="55%" stopColor="#ffffff" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#b1b4ad" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M70 220 C 170 50, 430 50, 530 220"
                    fill="none"
                    stroke="url(#arc)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                  <path
                    d="M110 220 C 190 90, 410 90, 490 220"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.25"
                    strokeDasharray="7 10"
                  />
                  <circle cx="70" cy="220" r="7" fill="#206ca6" />
                  <circle cx="530" cy="220" r="7" fill="#b1b4ad" />
                </svg>

                {/* mini labels */}
                <div className="absolute left-5 top-5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold text-white/80">
                  Strategy
                </div>
                <div className="absolute right-5 top-5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold text-white/80">
                  Execution
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-[#206ca6]/20 border border-[#206ca6]/30 px-4 py-2 text-xs font-semibold text-white">
                  Precision • Passion • Impact
                </div>
              </div>

              {/* quick stats */}
              <div className="mt-7 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/6 border border-white/10 p-4">
                  <div className="text-xs text-white/60">Delivery</div>
                  <div className="mt-1 text-lg font-extrabold text-white">On time</div>
                </div>
                <div className="rounded-2xl bg-white/6 border border-white/10 p-4">
                  <div className="text-xs text-white/60">Quality</div>
                  <div className="mt-1 text-lg font-extrabold text-white">Premium</div>
                </div>
                <div className="rounded-2xl bg-white/6 border border-white/10 p-4">
                  <div className="text-xs text-white/60">Support</div>
                  <div className="mt-1 text-lg font-extrabold text-white">24/7</div>
                </div>
              </div>
            </div>

            {/* bottom glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[520px] h-[220px] bg-[#206ca6]/20 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  </div>

      </div>

      
            

            
              
          
        
    {/* OUR VISION — Magazine Spread (Unique & Different) */}
<section className="relative py-32 bg-white overflow-hidden">
  {/* Background art */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] bg-[#206ca6]/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-64 right-[-320px] w-[980px] h-[980px] bg-[#b1b4ad]/18 rounded-full blur-3xl" />

    {/* Paper grain */}
    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:24px_24px]" />

    {/* Watermark */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[92px] sm:text-[140px] lg:text-[220px] font-extrabold tracking-tight text-gray-900/5 select-none whitespace-nowrap">
      VISION
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    {/* Top label row */}
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold tracking-[0.28em] uppercase text-gray-500">
        Our Vision
      </span>
      <div className="h-px flex-1 bg-gray-200" />
      <span className="hidden md:inline text-sm text-gray-500">
        A statement of purpose
      </span>
    </div>

    {/* Headline */}
    <div className="mt-12 max-w-5xl">
      <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-gray-900">
        Built on professionalism,
        <span className="block mt-3 bg-gradient-to-r from-[#206ca6] via-[#1a5685] to-[#0d3d5c] bg-clip-text text-transparent">
          guided teamwork, and integrity.
        </span>
      </h2>
      <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
        We exist to connect people, knowledge, and opportunities — and translate
        them into turnkey solutions that exceed expectations.
      </p>
    </div>

    {/* Magazine spread */}
    <div className="mt-16 relative">
      {/* Giant quote marks */}
      <div className="absolute -top-10 left-0 text-[80px] md:text-[120px] font-extrabold text-gray-900/10 select-none">
        “
      </div>
      <div className="absolute -bottom-10 right-0 text-[80px] md:text-[120px] font-extrabold text-gray-900/10 select-none">
        ”
      </div>

      {/* Center spine */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-3 h-3 rounded-full bg-[#206ca6]" />
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 w-3 h-3 rounded-full bg-[#b1b4ad]" />

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left page */}
        <div className="lg:col-span-6">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              With the influx of modern-day business, an aspiration was born to
              meet the needs of clients. Henceforth, Blue Focus progressed and
              has become highly recognized in the expert field today.
            </p>

            <p className="text-gray-900 font-semibold">
              Our mission is to provide professional advice and solutions. With
              a team that comprises of the finest talents, industry experience
              and marketing expertise we are here to assist you in meeting your
              market objectives now and yet to come.
            </p>
          </div>
        
          {/* small signature accent */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          {/* LEFT: editorial insight */}
  <div className="lg:col-span-7 relative pl-8">
    {/* vertical accent */}
    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#206ca6] to-[#b1b4ad]" />

    <div className="text-sm font-semibold tracking-[0.32em] uppercase text-gray-500">
      Our Approach
    </div>

    <p className="mt-4 text-2xl font-semibold text-gray-900 leading-snug max-w-xl">
      Listening first.
      <span className="block text-gray-700 font-normal">
        Delivering with precision.
      </span>
    </p>

    <div className="mt-4 text-sm text-gray-500 italic">
      — Blue Focus Philosophy
    </div>
  </div>
        </div>
        

        {/* Right page */}
        <div className="lg:col-span-6">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              We aim to be the principal provider of turnkey solutions not just
              in the national but also in the international scene, and we
              believe we can achieve this through guided teamwork and
              professionalism that will exceed your expectations.
            </p>

            <p>
              Our values have always been, from the very beginning, focused on
              commitment to excellent service, innovation, honesty, and
              integrity.
            </p>

            <p className="text-gray-900 font-semibold">
              Our first step in reaching your target is by understanding and
              listening to your needs.
            </p>
          </div>

          {/* CTA strip (not a card) */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="group px-8 py-4 rounded-xl bg-[#206ca6] text-white font-bold hover:bg-[#1a5685] transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#206ca6]/20"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate("portfolio")}
              className="px-8 py-4 rounded-xl border border-gray-300 text-gray-900 font-bold hover:border-[#206ca6]/50 hover:text-[#206ca6] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Our Work
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* bottom line */}
    <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
  </div>
</section>
{/* CEO MESSAGE — Signature Letter (Unique / No Cards) */}
<section className="relative pt-12 pb-28 -mt-36 bg-white overflow-hidden">


  {/* ambient background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[980px] h-[980px] bg-[#206ca6]/8 rounded-full blur-3xl" />
    <div className="absolute -bottom-52 right-[-240px] w-[880px] h-[880px] bg-[#b1b4ad]/14 rounded-full blur-3xl" />
    <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:26px_26px]" />

    {/* big quote watermark */}
    <div className="absolute top-10 left-10 text-[120px] md:text-[180px] font-extrabold text-gray-900/5 select-none">
      “
    </div>
    <div className="absolute bottom-10 right-10 text-[120px] md:text-[180px] font-extrabold text-gray-900/5 select-none">
      ”
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    {/* header row */}
    <div className="flex items-center gap-4">
      <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.24em] uppercase text-gray-500">
        <MessageSquareText className="w-4 h-4 text-[#206ca6]" />
        {ceoMessage.label}
      </span>
      <div className="h-px flex-1 bg-gray-200" />
    </div>

    <div className="mt-10 grid lg:grid-cols-12 gap-12 items-start">
      {/* left: title + meta */}
      <div className="lg:col-span-4">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          {ceoMessage.title}
          <span className="block mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          A note on our legacy, standards, and commitment to client success —
          written from leadership.
        </p>

        {/* subtle “stamp” */}
        <div className="mt-10">
          <div className="text-sm font-semibold tracking-[0.22em] uppercase text-gray-500">
            Dubai • UAE
          </div>
          <div className="mt-2 text-2xl font-extrabold text-gray-900">
            Blue Focus
          </div>
        </div>
      </div>

      {/* right: letter */}
      <div className="lg:col-span-8">
        <div className="relative">
          {/* ink spine */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#206ca6] via-[#1a5685] to-[#b1b4ad]" />

          <div className="pl-8 md:pl-10">
            {/* letter body */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {ceoMessage.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* sign-off */}
            <div className="mt-10">
              <p className="text-gray-700">{ceoMessage.signOff}</p>

              {/* signature-like name */}
              <div className="mt-3 inline-block">
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  {ceoMessage.name}
                </div>
                <div className="mt-1 text-sm tracking-[0.22em] uppercase text-gray-500">
                  {ceoMessage.role}
                </div>
                <div className="mt-3 h-px w-48 bg-gradient-to-r from-gray-300 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* bottom separator */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </div>
  </div>
</section>

{/* OUR TEAM — Orbit Composition (Unique / No cards) */}
<section className="relative pt-12 pb-28 -mt-36 bg-white overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[1150px] h-[1150px] bg-[#206ca6]/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-72 right-[-380px] w-[980px] h-[980px] bg-[#b1b4ad]/16 rounded-full blur-3xl" />
    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:26px_26px]" />

    {/* watermark */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[90px] sm:text-[150px] lg:text-[240px] font-extrabold tracking-tight text-gray-900/5 select-none whitespace-nowrap">
      OUR TEAM
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    {/* Title row */}
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold tracking-[0.28em] uppercase text-gray-500">
        Our Team
      </span>
      <div className="h-px flex-1 bg-gray-200" />
    </div>

    <div className="mt-12 grid lg:grid-cols-12 gap-12 items-center">
      {/* Left callouts */}
      <div className="lg:col-span-4 space-y-10">
        <div className="relative pl-8">
          <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#206ca6]" />
          <div className="absolute left-[5px] top-5 h-full w-px bg-gradient-to-b from-[#206ca6]/60 to-transparent" />
          <div className="text-sm font-semibold tracking-[0.22em] uppercase text-gray-500">
            Talent built for execution
          </div>
          <p className="mt-3 text-xl font-semibold text-gray-900 leading-snug">
            We have selected the finest talents in the industry to help manifest
            your vision into reality.
          </p>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#b1b4ad]" />
          <div className="absolute left-[5px] top-5 h-full w-px bg-gradient-to-b from-[#b1b4ad]/70 to-transparent" />
          <div className="text-sm font-semibold tracking-[0.22em] uppercase text-gray-500">
            Real specialists
          </div>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            Architects, designers, engineers, and project managers — friendly,
            experienced, and aligned on one goal: results.
          </p>
        </div>
      </div>

      {/* Center orbit */}
      <div className="lg:col-span-4 flex items-center justify-center">
        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]">
          {/* orbit svg */}
          <svg
            viewBox="0 0 420 420"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <path
  id="orbitPath"
  d="M210,45 a165,165 0 1,1 -0.1,0"
/>

              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#206ca6" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#1a5685" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#b1b4ad" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* rings */}
            <circle cx="210" cy="210" r="150" fill="none" stroke="url(#ringGrad)" strokeWidth="2.2" />
            <circle cx="210" cy="210" r="118" fill="none" stroke="#e5e7eb" strokeWidth="1.4" strokeDasharray="6 10" />
            <circle cx="210" cy="210" r="86" fill="none" stroke="#e5e7eb" strokeWidth="1.2" strokeDasharray="2 10" />

            {/* orbit text */}
           <text
  fontSize="11"
  fontWeight="700"
  fill="#64748b"
  letterSpacing="3"
  dominantBaseline="middle"
>
  <textPath href="#orbitPath" startOffset="5%" dy="-2">
    ARCHITECTS • DESIGNERS • ENGINEERS • PROJECT MANAGERS •
    ARCHITECTS • DESIGNERS • ENGINEERS • PROJECT MANAGERS •
  </textPath>
</text>


            {/* dots */}
            <circle cx="210" cy="60" r="5" fill="#206ca6" />
            <circle cx="360" cy="210" r="5" fill="#1a5685" />
            <circle cx="210" cy="360" r="5" fill="#b1b4ad" />
            <circle cx="60" cy="210" r="5" fill="#206ca6" />
          </svg>

          {/* center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm font-semibold tracking-[0.28em] uppercase text-gray-500">
                Blue Focus Team
              </div>
              <div className="mt-3 text-4xl font-extrabold text-gray-900 leading-tight">
                Stress-Free
                <span className="block bg-gradient-to-r from-[#206ca6] via-[#1a5685] to-[#0d3d5c] bg-clip-text text-transparent">
                  Delivery
                </span>
              </div>
              <div className="mt-5 mx-auto h-[3px] w-16 rounded-full bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
            </div>
          </div>
        </div>
      </div>

      {/* Right callouts */}
      <div className="lg:col-span-4 space-y-10">
        <div className="relative pl-8">
          <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#206ca6]" />
          <div className="absolute left-[5px] top-5 h-full w-px bg-gradient-to-b from-[#206ca6]/60 to-transparent" />
          <div className="text-sm font-semibold tracking-[0.22em] uppercase text-gray-500">
            Guided from start to finish
          </div>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            We guide and follow up with you from day one until the finale —
            clear communication, smooth coordination, zero chaos.
          </p>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#b1b4ad]" />
          <div className="absolute left-[5px] top-5 h-full w-px bg-gradient-to-b from-[#b1b4ad]/70 to-transparent" />
          <div className="text-sm font-semibold tracking-[0.22em] uppercase text-gray-500">
            One shared objective
          </div>
          <p className="mt-3 text-xl font-semibold text-gray-900 leading-snug">
            To make your clients’ associations seamless and successful.
          </p>
        </div>
      </div>
    </div>

    {/* Actions */}
    <div className="mt-16 flex flex-col sm:flex-row gap-4">
      <button
        type="button"
        onClick={() => onNavigate("contact")}
        className="group px-8 py-4 rounded-xl bg-[#206ca6] text-white font-bold hover:bg-[#1a5685] transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#206ca6]/20"
      >
        Talk to Our Team
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate("portfolio")}
        className="px-8 py-4 rounded-xl border border-gray-300 text-gray-900 font-bold hover:border-[#206ca6]/50 hover:text-[#206ca6] transition-all duration-300 inline-flex items-center justify-center gap-2"
      >
        See What We’ve Delivered
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>

    <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
  </div>
</section>


      

     <div className="relative overflow-hidden">
  {/* Marquee ribbon */}
  <div className="relative bg-[#0b1220] border-y border-white/10">
    <style>{`
      @keyframes bf_marquee_cta {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
      <div className="overflow-hidden">
        <div
          className="flex whitespace-nowrap gap-10 text-white/70 text-sm tracking-[0.35em] uppercase"
          style={{ animation: "bf_marquee_cta 18s linear infinite" }}
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10">
              <span className="text-white/80 font-semibold">Blue Focus</span>
              <span>Corporate Events</span>
              <span>Exhibitions</span>
              <span>Concept</span>
              <span>Design</span>
              <span>Build</span>
              <span>Execute</span>
              <span className="text-white/80 font-semibold">Dubai • UAE</span>
              <span>•</span>
              <span className="text-white/80 font-semibold">Start Today</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Main CTA */}
  <div className="relative bg-gradient-to-br from-gray-950 via-[#0d3d5c] to-gray-950 pt-16 pb-24">
    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-[#206ca6]/25 blur-3xl rounded-full" />
      <div className="absolute -bottom-56 right-[-260px] w-[900px] h-[900px] bg-[#b1b4ad]/16 blur-3xl rounded-full" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -left-40 top-0 h-full w-[520px] rotate-12 bg-white/5 blur-2xl" />

      {/* watermark */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[72px] sm:text-[110px] lg:text-[170px] font-extrabold tracking-tight text-white/5 select-none whitespace-nowrap">
        LET’S TALK
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.22em] uppercase text-white/70">
            <span className="h-[2px] w-10 bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
            Let’s build something memorable
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold text-white leading-[1.05]">
            Let’s create{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#b1b4ad] to-white bg-clip-text text-transparent">
                something amazing
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-[10px] rounded-full bg-[#206ca6]/25" />
            </span>{" "}
            together.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
            Join the hundreds of satisfied clients who trust Blue Focus for
            their most important events — and expect premium delivery from day one.
          </p>

          {/* Proof line */}
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-white/70">
            <span className="font-semibold text-white">Fast response</span>
            <span className="opacity-40">•</span>
            <span>
              <span className="font-semibold text-white">Clear scope</span>
            </span>
            <span className="opacity-40">•</span>
            <span>
              <span className="font-semibold text-white">On-time delivery</span>
            </span>
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
              Get in Touch
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate("portfolio")}
              className="w-full px-10 py-5 rounded-2xl border border-white/25 bg-white/5 text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Our Work
              <ArrowRight className="w-6 h-6" />
            </button>

            <div className="pt-2 text-sm text-white/55 leading-relaxed">
              No pressure — share your requirements and we’ll respond fast.
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
