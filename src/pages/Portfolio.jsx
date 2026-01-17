import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CornerDownRight } from "lucide-react";

/**
 * UPDATE REQUEST:
 * Blue Focus → Exhibitions should open a “Sections” screen with:
 * Diamond Meat, Alpha Med, CICPA, Department of Transport - Abu Dhabi,
 * Al Quadra, Biolitec, HKS, Tridonic, Viking Gulf, SAS, Dominator, BCG,
 * Silgan, Juel Neilsen, Maz, Multiple Projects
 *
 * NOTE: You repeated a few names (Diamond Meat, Dominator, Silgan, DoT Abu Dhabi).
 * I am deduping them in the UI (looks cleaner).
 */

const BRAND = {
  
  BLUE_FOCUS: "Blue Focus",
};

const BLUE_CATS = ["Events", "Exhibitions", "Kiosks"];

// Events sub-sections (already done)
const EVENTS_SECTIONS = ["Multiple Events Setups", "Art Dubai", "Horizon", "Union Properties"];

// ✅ Exhibitions sub-sections (deduped)
const EXHIBITIONS_SECTIONS = [
  "Diamond Meat",
  "Alpha Med",
  "CICPA",
  "Department of Transport - Abu Dhabi",
  "Al Quadra",
  "Biolitec",
  "HKS",
  "Tridonic",
  "Viking Gulf",
  "SAS",
  "Dominator",
  "BCG",
  "Silgan",
  "Juel Neilsen",
  "Maz",
  "Multiple Projects",
];
// ✅ Kiosks sub-sections
const KIOSKS_SECTIONS = [
  "Smitha",
  "Etisalat",
  "Cash and Credit",
  "Sharjah Government - Book Fair",
  "Biolitec",
  "Government of Dubai - Meydan",
  "Gold Property",
  "Presidential Guards",
  "Cihan",
  "Senso",
];

const ease = [0.2, 0.8, 0.2, 1];

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.25, ease } },
};

/* -------------------- 30 ART HEIR IMAGES (REPLACE) -------------------- */


/* -------------------- SAMPLE DATA (REPLACE WITH YOURS) -------------------- */
const dataset = {
  [BRAND.ART_HEIR]: [
    {
      id: "ah-1",
      year: 2025,
      title: "Singapore Odyssea: A Journey Through Time",
      subtitle: "National Museum of Singapore",
      location: "Singapore",
      date: "2025",
      image:
        "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2000&q=80",
    },
  ],

  /**
   * Blue Focus structure (now):
   * Events: { sectionName: [projects...] }
   * Exhibitions: { sectionName: [projects...] }
   * Kiosks: [projects...]  (leave as direct list for now)
   */
  [BRAND.BLUE_FOCUS]: {
    Events: Object.fromEntries(EVENTS_SECTIONS.map((s, i) => [s, demoList(`bf-ev-${i}`)])),
    Exhibitions: Object.fromEntries(EXHIBITIONS_SECTIONS.map((s, i) => [s, demoList(`bf-ex-${i}`)])),
     Kiosks: Object.fromEntries(
    KIOSKS_SECTIONS.map((s, i) => [s, demoList(`bf-ki-${i}`)])
  ),
  },
};

function demoList(prefix) {
  return [
    {
      id: `${prefix}-1`,
      year: 2025,
      title: "Project Title Placeholder",
      subtitle: "Short description / client / venue",
      location: "Dubai, UAE",
      date: "2025",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80",
    },
  ];
}
/* ------------------------------------------------------------------------ */

export default function PortfolioProjectsUltraBlueSections({
  onNavigate = () => {},
  data = dataset,
  
}) {
  /**
   * view:
   *  "root"
   *  "artheir"
   *  "blueCats"
   *  "blueEventsSections"
   *  "blueExhibitionsSections"
   *  "blueList"
   */
 const [view, setView] = useState("blueCats");


  const [blueCat, setBlueCat] = useState("Events");

  // selected sub-section when Events / Exhibitions
  const [eventSection, setEventSection] = useState(EVENTS_SECTIONS[0]);
  const [exhibitionSection, setExhibitionSection] = useState(EXHIBITIONS_SECTIONS[0]);
  const [kioskSection, setKioskSection] = useState(KIOSKS_SECTIONS[0]);

  // list hover selection
  const [activeId, setActiveId] = useState(null);

 

  
  const blue = data[BRAND.BLUE_FOCUS] || {};

  const eventsObj = blue?.Events || {};
  const exhibitionsObj = blue?.Exhibitions || {};

  const list = useMemo(() => {
   

    if (view === "blueList") {
      if (blueCat === "Events") return (eventsObj?.[eventSection] || []);
      if (blueCat === "Exhibitions") return (exhibitionsObj?.[exhibitionSection] || []);
      if (blueCat === "Kiosks") return kiosksObj?.[kioskSection] || [];
    }

    return [];
  }, [
    
    blue,
    blueCat,
    eventsObj,
    exhibitionsObj,
    
    eventSection,
    exhibitionSection,
    
  ]);

  const poster = useMemo(() => {
  if (!list?.length) return null;
  return list.find((p) => p.id === activeId) || list[0];
}, [list, activeId]);


  const headerLine =
  view === "blueCats"
    ? "Blue Focus"
    : view === "blueEventsSections"
    ? "Blue Focus — Events"
    : view === "blueExhibitionsSections"
    ? "Blue Focus — Exhibitions"
    : view === "blueKiosksSections"
    ? "Blue Focus — Kiosks"
    : blueCat === "Events"
    ? `Events • ${eventSection}`
    : blueCat === "Exhibitions"
    ? `Exhibitions • ${exhibitionSection}`
    : `Kiosks • ${kioskSection}`;


  const goBack = () => {
  if (view === "blueEventsSections") return setView("blueCats");
  if (view === "blueExhibitionsSections") return setView("blueCats");
  if (view === "blueKiosksSections") return setView("blueCats");

  if (view === "blueList") {
    if (blueCat === "Events") return setView("blueEventsSections");
    if (blueCat === "Exhibitions") return setView("blueExhibitionsSections");
    if (blueCat === "Kiosks") return setView("blueKiosksSections");
  }
};


  

  const enterBlueFocus = () => {
    setView("blueCats");
    setBlueCat("Events");
    setEventSection(EVENTS_SECTIONS[0]);
    setExhibitionSection(EXHIBITIONS_SECTIONS[0]);
    setActiveId(null);
  };

  const openBlueCategory = (cat) => {
    setBlueCat(cat);

    if (cat === "Events") {
      setView("blueEventsSections");
      const sec = EVENTS_SECTIONS[0];
      setEventSection(sec);
      setActiveId((eventsObj?.[sec] || [])?.[0]?.id ?? null);
      return;
    }

    if (cat === "Exhibitions") {
      setView("blueExhibitionsSections");
      const sec = EXHIBITIONS_SECTIONS[0];
      setExhibitionSection(sec);
      setActiveId((exhibitionsObj?.[sec] || [])?.[0]?.id ?? null);
      return;
    }

    // Kiosks → list directly
    if (cat === "Kiosks") {
    setView("blueKiosksSections");
    setKioskSection(KIOSKS_SECTIONS[0]);
    setActiveId((kiosksObj?.[KIOSKS_SECTIONS[0]] || [])?.[0]?.id ?? null);
    return;
  }
  };

  const openEventsSection = (sec) => {
    setEventSection(sec);
    setView("blueList");
    setActiveId((eventsObj?.[sec] || [])?.[0]?.id ?? null);
  };

  const openExhibitionsSection = (sec) => {
    setExhibitionSection(sec);
    setView("blueList");
    setActiveId((exhibitionsObj?.[sec] || [])?.[0]?.id ?? null);
  };
  const kiosksObj = blue?.Kiosks || {};


  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[#206ca6]/12 rounded-full blur-3xl" />
        <div className="absolute -bottom-80 right-[-420px] w-[1100px] h-[1100px] bg-[#b1b4ad]/18 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[84px] sm:text-[150px] lg:text-[240px] font-extrabold tracking-tight text-gray-900/5 select-none whitespace-nowrap">
          PROJECTS
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-28">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <motion.h2
              initial="hidden"
              animate="show"
              variants={fade}
              className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Projects
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fade}
              transition={{ delay: 0.06 }}
              className="mt-3 text-gray-600 text-base sm:text-lg"
            >
              {headerLine}
            </motion.p>
          </div>

          <div className="flex items-center gap-3">
            {view !== "root" && (
              <button
                onClick={goBack}
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-4 py-2 text-sm font-semibold text-gray-800 hover:border-[#206ca6]/40 hover:text-[#206ca6] transition"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                Back
              </button>
            )}
            <button
              onClick={() => onNavigate("contact")}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT */}
          <div className="lg:col-span-7 flex flex-col min-h-[680px]">
            <AnimatePresence mode="wait">
              {view === "root" && (
                <motion.div key="root" variants={fade} initial="hidden" animate="show" exit="exit" className="h-full">
                  <StudioTiles
                    leftTitle={BRAND.ART_HEIR}
                    rightTitle={BRAND.BLUE_FOCUS}
                    onLeft={enterArtHeir}
                    onRight={enterBlueFocus}
                  />
                </motion.div>
              )}

              {view === "blueCats" && (
                <motion.div key="blueCats" variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col">
                  <CategoryPanels categories={BLUE_CATS} active={blueCat} onSelect={openBlueCategory} />
                </motion.div>
              )}

              {view === "blueEventsSections" && (
                <motion.div key="blueEventsSections" variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col">
                  <SectionsPanels
                    label="Events"
                    subtitle="Choose a section to open its project list."
                    sections={EVENTS_SECTIONS}
                    onSelect={openEventsSection}
                  />
                </motion.div>
              )}

              {/* ✅ NEW: Exhibitions sections screen */}
              {view === "blueExhibitionsSections" && (
                <motion.div key="blueExhibitionsSections" variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col">
                  <SectionsPanels
                    label="Exhibitions"
                    subtitle="Choose a client/project to open its exhibition list."
                    sections={EXHIBITIONS_SECTIONS}
                    onSelect={openExhibitionsSection}
                    gridCols="sm:grid-cols-2"
                  />
                </motion.div>
              )}
              {view === "blueKiosksSections" && (
  <motion.div
    key="blueKiosksSections"
    variants={fade}
    initial="hidden"
    animate="show"
    exit="exit"
    className="h-full flex flex-col"
  >
    <SectionsPanels
      label="Kiosks"
      subtitle="Choose a kiosk client to view projects."
      sections={KIOSKS_SECTIONS}
      onSelect={(sec) => {
        setKioskSection(sec);
        setView("blueList");
        setActiveId((kiosksObj?.[sec] || [])?.[0]?.id ?? null);
      }}
      gridCols="sm:grid-cols-2"
    />
  </motion.div>
)}


              {view === "artheir" && (
                <motion.div key="artheir" variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col">
                  <ArtHeirGallery30
                    images={(artHeirImages || []).slice(0, 30)}
                    onHover={(img) => setHoverImage(img)}
                    onLeave={() => setHoverImage(null)}
                  />

                  <div className="mt-10">
                    <ProjectsTypoList
                      projects={artHeirProjects}
                      activeId={activeId}
                      setActiveId={(id) => {
                        setHoverImage(null);
                        setActiveId(id);
                      }}
                    />
                  </div>
                </motion.div>
              )}

              {view === "blueList" && (
                <motion.div key="blueList" variants={fade} initial="hidden" animate="show" exit="exit" className="h-full flex flex-col">
                  <ProjectsTypoList projects={list} activeId={activeId} setActiveId={setActiveId} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">
            <LivingPoster
              view={view}
              poster={poster}
              fallbackTitle={view === "root" ? "Choose a studio" : headerLine}
              onPrimary={() => onNavigate("contact")}
              onSecondary={() => onNavigate("services")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- COMPONENTS (REUSED) -------------------- */

function CategoryPanels({ categories, active, onSelect }) {
  return (
    <div className="grid sm:grid-cols-3 gap-5">
      {categories.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            onClick={() => onSelect(c)}
            className={`group relative text-left rounded-[28px] border bg-white/70 backdrop-blur p-7 transition overflow-hidden
              ${
                isActive
                  ? "border-[#206ca6]/35 shadow-[0_40px_110px_-70px_rgba(32,108,166,0.6)]"
                  : "border-gray-200 hover:border-[#206ca6]/25 hover:bg-white"
              }`}
          >
            <div className={`absolute inset-x-0 top-0 h-1 ${isActive ? "bg-[#206ca6]" : "bg-gray-200"}`} />
            <div className="text-xs font-semibold tracking-[0.34em] uppercase text-gray-500">Category</div>
            <div className={`mt-2 text-2xl font-extrabold tracking-tight ${isActive ? "text-[#206ca6]" : "text-gray-900"}`}>
              {c}
            </div>
            <div className="mt-2 text-gray-600 text-sm leading-relaxed">
              {c === "Events" || c === "Exhibitions" ? `Open ${c} → then choose a section.` : `Explore ${c} projects in an editorial list.`}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-gray-900">
              Select
              <CornerDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </button>
        );
      })}
    </div>
  );
}

function SectionsPanels({ label, subtitle, sections, onSelect, gridCols = "sm:grid-cols-2" }) {
  return (
    <div className="rounded-[32px] border border-gray-200 bg-white/70 backdrop-blur p-6 shadow-[0_45px_110px_-85px_rgba(15,23,42,0.45)]">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs font-semibold tracking-[0.34em] uppercase text-gray-500">{label}</div>
          <div className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Choose a Section</div>
          <div className="mt-2 text-gray-600 text-sm">{subtitle}</div>
        </div>
        <div className="hidden sm:block text-xs font-semibold tracking-[0.34em] uppercase text-gray-400">
          Blue Focus • {label}
        </div>
      </div>

      <div className={`mt-6 grid ${gridCols} gap-5`}>
        {sections.map((s, i) => (
          <button
            key={`${label}-${s}`}
            onClick={() => onSelect(s)}
            className="group relative text-left rounded-[28px] border border-gray-200 bg-white/70 hover:bg-white hover:border-[#206ca6]/25 p-7 transition overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold tracking-[0.34em] uppercase text-gray-500">
                  {label} {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 group-hover:text-[#206ca6] transition-colors">
                  {s}
                </div>
                <div className="mt-2 text-gray-600 text-sm">Open curated projects for {s}.</div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-[#206ca6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ArtHeirGallery30({ images, onHover, onLeave }) {
  return (
    <div className="rounded-[32px] border border-gray-200 bg-white/70 backdrop-blur p-6 overflow-hidden shadow-[0_45px_110px_-85px_rgba(15,23,42,0.45)]">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-xs font-semibold tracking-[0.34em] uppercase text-gray-500">Gallery</div>
          <div className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Art Heir — 30 Visuals</div>
          <div className="mt-2 text-gray-600 text-sm">Hover any image to update the poster on the right.</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((img, i) => {
          const tall = i % 9 === 0 || i % 9 === 4;
          return (
            <motion.button
              key={img.id}
              type="button"
              onMouseEnter={() => onHover?.(img)}
              onMouseLeave={() => onLeave?.()}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease }}
            >
              <img
                src={img.image}
                alt={img.title || "Art Heir"}
                className={`w-full object-cover transition-transform duration-700 ${
                  tall ? "h-[240px] sm:h-[290px]" : "h-[170px] sm:h-[210px]"
                } group-hover:scale-[1.06]`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-70 group-hover:opacity-90 transition" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-xs font-semibold tracking-[0.32em] uppercase text-white/75">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {img.title && (
                  <div className="mt-1 text-sm font-extrabold text-white leading-tight line-clamp-2">{img.title}</div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function LivingPoster({ view, poster, fallbackTitle, onPrimary, onSecondary }) {
  const hasPoster = !!poster;

  return (
    <div className="h-full min-h-[680px] rounded-[34px] border border-gray-200 bg-white/70 backdrop-blur overflow-hidden shadow-[0_60px_140px_-90px_rgba(15,23,42,0.55)]">
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={hasPoster ? poster.id : "empty"}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.55, ease }}
            className="absolute inset-0"
          >
            <img
              src={
                hasPoster
                  ? poster.image
                  : "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80"
              }
              alt={hasPoster ? poster.title : "poster"}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/18 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative h-full flex flex-col justify-end p-7 sm:p-8">
          <div className="text-white">
            <div className="text-2xl sm:text-3xl font-extrabold leading-tight">
              {hasPoster ? poster.title : fallbackTitle}
            </div>
            <div className="mt-2 text-white/80 text-base sm:text-lg">
              {hasPoster ? poster.subtitle : "A bold editorial layout — no cards, no clutter."}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button onClick={onPrimary} className="rounded-2xl bg-white text-gray-900 font-extrabold py-3.5 hover:bg-gray-100 transition">
              Work With Us
            </button>
            <button onClick={onSecondary} className="rounded-2xl border border-white/28 bg-white/10 text-white font-extrabold py-3.5 hover:bg-white/15 transition">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudioTiles({ leftTitle, rightTitle, onLeft, onRight }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6 h-full">
      <button
        onClick={onLeft}
        className="group relative text-left rounded-[32px] border border-gray-200 bg-white/70 backdrop-blur p-9 overflow-hidden hover:border-[#206ca6]/35 hover:shadow-[0_55px_130px_-90px_rgba(32,108,166,0.75)] transition"
      >
        <div className="text-xs font-semibold tracking-[0.34em] uppercase text-gray-500">Studio 01</div>
        <div className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">{leftTitle}</div>
        <div className="mt-3 text-gray-600 text-sm leading-relaxed">Opens Art Heir gallery + list.</div>
        <div className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#206ca6]">
          Open <ArrowUpRight className="w-4 h-4" />
        </div>
      </button>

      <button
        onClick={onRight}
        className="group relative text-left rounded-[32px] border border-gray-200 bg-gray-900 text-white p-9 overflow-hidden hover:bg-gray-800 transition"
      >
        <div className="text-xs font-semibold tracking-[0.34em] uppercase text-white/65">Studio 02</div>
        <div className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">{rightTitle}</div>
        <div className="mt-3 text-white/70 text-sm leading-relaxed">Events + Exhibitions now open into sections (as requested).</div>
        <div className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-white">
          Select Category <ArrowUpRight className="w-4 h-4" />
        </div>
      </button>
    </div>
  );
}

function ProjectsTypoList({ projects, activeId, setActiveId }) {
  const grouped = useMemo(() => {
    const map = new Map();
    projects.forEach((p) => {
      const y = p.year || "—";
      if (!map.has(y)) map.set(y, []);
      map.get(y).push(p);
    });
    return Array.from(map.entries()).sort((a, b) => Number(b[0]) - Number(a[0]));
  }, [projects]);

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
      <div className="pl-6">
        {grouped.map(([year, items]) => (
          <div key={year} className="py-2">
            {items.map((p, idx) => {
              const active = p.id === activeId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onMouseEnter={() => setActiveId(p.id)}
                  onFocus={() => setActiveId(p.id)}
                  onClick={() => setActiveId(p.id)}
                  className="group w-full text-left"
                >
                  <div className="grid grid-cols-12 gap-6 items-start py-7">
                    <div className="col-span-12 sm:col-span-2">
                      <div className="text-gray-900 font-extrabold text-lg sm:text-xl">
                        {idx === 0 ? year : ""}
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-10">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors ${active ? "text-[#206ca6]" : "text-gray-900 group-hover:text-[#206ca6]"}`}>
                            {p.title}
                          </div>
                          <div className="mt-1 text-base sm:text-lg text-gray-600">{p.subtitle}</div>
                        </div>
                        <ArrowUpRight className={`w-6 h-6 shrink-0 transition-all ${active ? "text-[#206ca6] translate-x-0.5 -translate-y-0.5" : "text-gray-300 group-hover:text-[#206ca6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                      </div>

                      <div className="mt-4 text-sm text-gray-500">
                        <span className="font-semibold text-gray-700">{p.location}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span>{p.date}</span>
                      </div>

                      <div className={`mt-6 h-px w-full transition ${active ? "bg-gradient-to-r from-[#206ca6]/40 via-gray-200 to-transparent" : "bg-gradient-to-r from-transparent via-gray-200 to-transparent"}`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
