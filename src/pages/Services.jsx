import {
  Calendar,
  Lightbulb,
  PenTool,
  BarChart3,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useMemo, useState } from "react";


const servicesData = [
  {
    id: "project-management",
    title: "Project Management",
    desc:
      "Project management improves productivity and reduces costs and workload. The ultimate goal of project management and planning is efficiency. We help you create reusable processes, templates, and procedures to mitigate risk and improve delivery speed.",
    bullets: [
      "Reusable processes & templates",
      "Risk mitigation through planning",
      "Faster delivery with clear methodology",
    ],
  },
  {
    id: "corporate-exhibitions",
    title: "Corporate Exhibitions",
    desc:
      "Trade shows have evolved into sophisticated exhibition concepts. We deliver effective turnkey solutions through teamwork and executed with extreme precision—helping your brand stand apart from competitors.",
    bullets: [
      "Turnkey exhibition solutions",
      "Precision execution & planning",
      "Design + build aligned to goals",
    ],
  },
  {
    id: "corporate-events",
    title: "Corporate Events (Conferences & Seminars)",
    desc:
      "We initiate and coordinate programs end-to-end with a focus on your requirements. Our approach ensures best-in-class arrangements and continuous improvement for a competitive advantage.",
    bullets: [
      "Best state-of-the-art standards",
      "High-profile speakers coordination",
      "Knowledge-sharing formats",
      "Private + government sector engagement",
    ],
  },
  {
    id: "b2b-matchmaking",
    title: "B2B Matchmaking",
    desc:
      "We structure interactions to save time, avoid mindless prospecting, and align stakeholders through meaningful one-to-one agendas.",
    bullets: ["Curated 1:1 agendas", "Time-saving matchmaking", "Aligned stakeholders"],
  },
  {
    id: "b2b-online",
    title: "B2B Matchmaking — Online",
    desc:
      "Online matchmaking helps you expand reach. Showcase products, connect with decision-makers, attend seminars, and communicate with business owners at scale.",
    bullets: [
      "Wider audience connection",
      "Live sessions & demos support",
      "Real-time Q&A engagement",
    ],
  },
  {
    id: "leisure-events",
    title: "Leisure Events",
    desc:
      "From planning to rehearsal and direction, we handle details from décor to production so your celebration feels effortless and refined.",
    bullets: ["End-to-end planning", "Direction & rehearsal support", "Décor + production details"],
  },
  {
    id: "industrial-analysis",
    title: "Industrial Analysis",
    desc:
      "Industry analysis helps businesses understand their position, threats, and opportunities, and focus resources to build capabilities that deliver a competitive advantage.",
    bullets: ["Threat & opportunity mapping", "Competitive positioning", "Strategy support"],
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    desc:
      "We help brand owners explore insights and determine future strategies to drive growth. Optimize go-to-market approach, reach the right consumers, and stand out from competition.",
    bullets: ["Brand insights & direction", "Go-to-market optimization", "Distinct positioning"],
  },
  {
    id: "creative-development",
    title: "Creative Development",
    desc:
      "Our team includes architects, designers, engineers, executives, and project managers. We guide you from day one until the finale—keeping the process stress-free and results-driven.",
    bullets: ["Creative + technical expertise", "From concept to completion", "Stress-free delivery"],
  },
  {
    id: "customized-solutions",
    title: "Customized Solutions",
    desc:
      "From brand awareness to launching new products, we translate strategy into sophisticated stand solutions. Create maximum impact with custom concepts tailored to your goals.",
    bullets: [
      "Industry advisory",
      "3D stand conceptualization",
      "On-site project management",
      "Design, branding & graphics",
      "Show / exhibition analysis",
    ],
  },
  {
    id: "promotional-solutions",
    title: "Promotional Solutions",
    desc:
      "Portable displays for brand awareness—easy to assemble and travel-ready, with graphics that can be interchanged and reused.",
    bullets: ["Pop-up stands", "Roll-up stands", "Banner displays", "POS units", "Flags", "Brochure holders"],
  },
];

const services = [
  {
    icon: Calendar,
    title: "Event Management",
    description:
      "End-to-end event planning and execution that brings your vision to life with precision and creativity.",
    features: [
      "Corporate events and conferences",
      "Product launches and brand activations",
      "Gala dinners and award ceremonies",
      "Team building and corporate retreats",
    ],
    color: "from-[#206ca6] to-[#1a5685]",
  },
  {
    icon: PenTool,
    title: "Exhibition Design",
    description:
      "Stunning exhibition stands and displays that capture attention and drive engagement at trade shows.",
    features: [
      "3D stand conceptualization",
      "Custom booth design and fabrication",
      "Interactive display solutions",
      "Modular and reusable systems",
    ],
    color: "from-[#b1b4ad] to-[#8a8d86]",
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description:
      "Strategic brand positioning and creative direction that resonates with your target audience.",
    features: [
      "Brand identity development",
      "Visual communication design",
      "Marketing collateral creation",
      "Brand guidelines and standards",
    ],
    color: "from-gray-800 to-gray-900",
  },
  {
    icon: BarChart3,
    title: "Project Management",
    description:
      "Dedicated project oversight ensuring seamless execution from concept through completion.",
    features: [
      "Timeline and budget management",
      "Vendor coordination and logistics",
      "Quality control and supervision",
      "Post-event analysis and reporting",
    ],
    color: "from-[#1a5685] to-[#0d3d5c]",
  },
  {
    icon: Users,
    title: "Consulting Services",
    description:
      "Expert advisory on market trends, industry insights, and strategic event planning.",
    features: [
      "Market analysis and research",
      "Industry advisory services",
      "Strategic planning consultation",
      "ROI optimization strategies",
    ],
    color: "from-[#206ca6] to-[#1a5685]",
  },
  {
    icon: Sparkles,
    title: "Creative Production",
    description:
      "Innovative multimedia production and content creation for immersive brand experiences.",
    features: [
      "Audio-visual production",
      "Content creation and copywriting",
      "Photography and videography",
      "Digital and print media design",
    ],
    color: "from-gray-700 to-gray-800",
  },
];

export default function Services({ onNavigate }) {
      const [active, setActive] = useState(servicesData[0].id);

  const current = useMemo(
    () => servicesData.find((s) => s.id === active) || servicesData[0],
    [active]
  );

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="relative bg-gradient-to-br from-[#206ca6] via-[#1a5685] to-[#0d3d5c] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b1b4ad] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/30 mb-8">
              OUR SERVICES
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Comprehensive Solutions for
              <span className="block bg-gradient-to-r from-[#b1b4ad] to-white bg-clip-text text-transparent">
                Every Occasion
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From concept to completion, we deliver turnkey solutions that
              exceed expectations and create lasting impressions.
            </p>
          </div>
        </div>
      </div>
      {/* CINEMATIC SERVICES STAGE (Ultra-Unique / No Cards) */}
<section className="relative py-28 overflow-hidden bg-white">
  {/* background theatre */}
  <div className="absolute inset-0 pointer-events-none">
    {/* soft spotlight */}
    <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] bg-[#206ca6]/12 rounded-full blur-3xl" />
    <div className="absolute -bottom-72 right-[-360px] w-[980px] h-[980px] bg-[#b1b4ad]/14 rounded-full blur-3xl" />

    {/* grain */}
    <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:28px_28px]" />

    {/* big watermark */}
    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[90px] sm:text-[150px] lg:text-[240px] font-extrabold tracking-tight text-gray-900/5 select-none whitespace-nowrap">
      BLUE FOCUS
    </div>

    {/* diagonal light beam */}
    <div className="absolute -left-40 top-20 w-[1200px] h-[520px] rotate-[-10deg] bg-gradient-to-r from-[#206ca6]/0 via-[#206ca6]/10 to-[#206ca6]/0 blur-2xl" />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    {/* top label */}
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold tracking-[0.34em] uppercase text-gray-500">
        Services
      </span>
      <div className="h-px flex-1 bg-gray-200" />
      <span className="hidden md:inline text-sm text-gray-500">
        Pick a capability • See the story
      </span>
    </div>

    {/* marquee line */}
    <div className="mt-10 overflow-hidden">
      <div className="whitespace-nowrap animate-[marquee_18s_linear_infinite] text-gray-400/80 font-semibold tracking-widest">
        {servicesData.map((s) => (
          <span key={s.id} className="mx-6">
            • {s.title.toUpperCase()}
          </span>
        ))}
        {servicesData.map((s) => (
          <span key={`${s.id}-dup`} className="mx-6">
            • {s.title.toUpperCase()}
          </span>
        ))}
      </div>

      {/* animation keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>

    <div className="mt-16 grid lg:grid-cols-12 gap-14 items-start">
      {/* LEFT: rail selector */}
      <div className="lg:col-span-5">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.03] text-gray-900">
          A service menu,
          <span className="block mt-3 bg-gradient-to-r from-[#206ca6] via-[#1a5685] to-[#0d3d5c] bg-clip-text text-transparent">
            designed like a stage.
          </span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
          Explore each capability as a “chapter” — curated, premium, and built
          for execution with precision.
        </p>

        <div className="mt-10 relative">
          {/* rail */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

          <div className="space-y-3">
            {servicesData.map((s, idx) => {
              const isActive = s.id === active;

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s.id)}
                  className="w-full text-left group"
                >
                  <div className="flex items-center gap-4">
                    {/* dot */}
                    <div className="relative w-9 shrink-0">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-[#206ca6] text-white shadow-lg shadow-[#206ca6]/30"
                            : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      {/* glow ring (only active) */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full ring-2 ring-[#206ca6]/30 animate-pulse" />
                      )}
                    </div>

                    {/* title + underline */}
                    <div className="flex-1">
                      <div
                        className={`text-lg font-semibold transition-colors ${
                          isActive
                            ? "text-gray-900"
                            : "text-gray-700 group-hover:text-gray-900"
                        }`}
                      >
                        {s.title}
                      </div>

                      <div className="mt-3 relative h-px w-full bg-gray-200/70 overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#206ca6]/70 to-transparent transition-all duration-500 ${
                            isActive ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT: cinematic details */}
      <div className="lg:col-span-7">
        {/* top “spotlight bar” */}
        <div className="flex items-center gap-4">
          <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm font-semibold tracking-[0.28em] uppercase text-gray-500">
            Chapter
          </span>
        </div>

        <div className="mt-10 relative">
          {/* spotlight overlay */}
          <div className="absolute -inset-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-[#206ca6]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-[#b1b4ad]/12 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <div className="text-sm font-semibold tracking-[0.34em] uppercase text-gray-500">
              {servicesData.findIndex((x) => x.id === active) + 1 < 10
                ? `0${servicesData.findIndex((x) => x.id === active) + 1}`
                : `${servicesData.findIndex((x) => x.id === active) + 1}`}
              <span className="mx-3 text-gray-300">/</span>
              {servicesData.length}
            </div>

            <h3 className="mt-4 text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.05]">
              {current.title}
            </h3>

            <p className="mt-7 text-lg md:text-xl text-gray-700 leading-relaxed">
              {current.desc}
            </p>

            {/* bullets as “type-lines” */}
            {current.bullets?.length ? (
              <div className="mt-12 space-y-4">
                {current.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-4">
                    <div className="mt-[10px] w-2 h-2 rounded-full bg-[#206ca6]" />
                    <div className="flex-1">
                      <div className="text-lg text-gray-800 leading-relaxed">
                        {b}
                      </div>
                      <div className="mt-3 h-px w-full bg-gradient-to-r from-gray-200 via-gray-200 to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {/* actions */}
            <div className="mt-14 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="group px-8 py-4 rounded-xl bg-[#206ca6] text-white font-bold hover:bg-[#1a5685] transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#206ca6]/20"
              >
                Talk to Us About This
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("portfolio")}
                className="px-8 py-4 rounded-xl border border-gray-300 text-gray-900 font-bold hover:border-[#206ca6]/50 hover:text-[#206ca6] transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                See Related Work
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
    </div>
  </div>
</section>


     
        

      <div className="py-24 bg-gradient-to-br from-[#206ca6] to-[#1a5685] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let's discuss how our services can elevate your next event or
            exhibition.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="group px-10 py-5 bg-white text-[#206ca6] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 inline-flex items-center gap-2"
          >
            Schedule a Consultation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
