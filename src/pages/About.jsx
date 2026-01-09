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
      <div className="relative bg-gradient-to-br from-gray-900 via-[#206ca6] to-gray-900 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#b1b4ad] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/30 mb-8">
              ABOUT BLUE FOCUS
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Memorable
              <span className="block bg-gradient-to-r from-[#b1b4ad] to-white bg-clip-text text-transparent">
                Experiences Since 2009
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We are a leading events and exhibitions company based in Dubai,
              dedicated to transforming visions into extraordinary realities
              through innovation, precision, and passion.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-[#206ca6]/10 text-[#206ca6] px-6 py-3 rounded-full text-sm font-semibold">
                OUR STORY
              </div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                15+ Years of Excellence in the UAE
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize the events and
                exhibitions industry in the Middle East, Blue Focus has grown
                from a small team of passionate professionals to one of Dubai's
                most trusted event management companies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey has been marked by continuous innovation, unwavering
                commitment to quality, and an obsession with client
                satisfaction. We've had the privilege of working with some of
                the region's most prestigious brands and organizations,
                delivering over 500 successful events across various industries.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-gradient-to-br from-[#206ca6] to-[#1a5685] rounded-2xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Events Delivered</div>
                </div>
                <div className="bg-gray-900 rounded-2xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">250+</div>
                  <div className="text-white/80">Satisfied Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-[#206ca6]/20 to-[#206ca6]/5 rounded-2xl"></div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#b1b4ad]/20 to-[#b1b4ad]/5 rounded-2xl"></div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-900/20 to-gray-900/5 rounded-2xl"></div>
                  <div className="aspect-square bg-gradient-to-br from-[#206ca6]/20 to-[#206ca6]/5 rounded-2xl"></div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                  <Award className="w-16 h-16 text-[#206ca6] mx-auto mb-4" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">15+</div>
                    <div className="text-gray-600 mt-1">Years Experience</div>
                  </div>
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
<section className="relative py-28 bg-white overflow-hidden">
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
<section className="relative py-28 bg-white overflow-hidden">
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
                d="M210,60 a150,150 0 1,1 -0.1,0"
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
            <text fontSize="13" fontWeight="700" fill="#64748b" letterSpacing="3">
              <textPath href="#orbitPath" startOffset="5%">
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


      

      <div className="py-24 bg-gradient-to-br from-[#206ca6] to-[#1a5685] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join the hundreds of satisfied clients who trust Blue Focus for
            their most important events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="group px-10 py-5 bg-white text-[#206ca6] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("portfolio")}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
