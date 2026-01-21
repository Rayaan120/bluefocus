import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

/* -------------------- CONSTANTS -------------------- */
 // Chatbase bot loader

 
const BRAND = {
  BLUE_FOCUS: "Blue Focus",
};

const BLUE_CATS = ["Events", "Exhibitions", "Interiors"];

const ease = [0.2, 0.8, 0.2, 1];

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.25, ease } },
};

/* -------------------- DATASET -------------------- */

const makeItems = (prefix, title, subtitle, folder, count) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    title,
    subtitle,
    image: `/image/portfolio/${folder}/${prefix}-${String(i + 1).padStart(2, "0")}.jpg`,
  }));

const dataset = {
  "Blue Focus": {
    Events: makeItems("event", "Corporate Event", "Dubai, UAE", "events", 60),
    Exhibitions: makeItems(
      "exhibition",
      "Exhibition Stand",
      "Dubai World Trade Centre",
      "exhibitions",
      26
    ),
    Interiors: makeItems(
      "interior",
      "Interior Fit-Out",
      "UAE",
      "interiors",
      19
    ),
  },
};

/* -------------------- MAIN COMPONENT -------------------- */

export default function PortfolioProjectsUltraBlueSections({
  onNavigate = () => {},
  data = dataset,
}) {
   const [view, setView] = useState("blueCats");
  const [blueCat, setBlueCat] = useState("Events");
  const [activeId, setActiveId] = useState(null);

  const blue = data[BRAND.BLUE_FOCUS] || {};
  const list = blue?.[blueCat] || [];
  const [fullscreenItem, setFullscreenItem] = useState(null);
  useEffect(() => {
  if (!fullscreenItem) return;

  const handleKey = (e) => {
    if (e.key === "Escape") setFullscreenItem(null);

    if (e.key === "ArrowRight") {
      const index = list.findIndex(i => i.id === fullscreenItem.id);
      if (index < list.length - 1) {
        setFullscreenItem(list[index + 1]);
      }
    }

    if (e.key === "ArrowLeft") {
      const index = list.findIndex(i => i.id === fullscreenItem.id);
      if (index > 0) {
        setFullscreenItem(list[index - 1]);
      }
    }
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [fullscreenItem, list]);

useEffect(() => {
  if (fullscreenItem) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [fullscreenItem]);

 

  const openBlueCategory = (cat) => {
    setBlueCat(cat);
    setView("blueList");
    setActiveId((blue?.[cat] || [])?.[0]?.id ?? null);
  };

  const goBack = () => setView("blueCats");
   useEffect(() => {
    if (document.getElementById("zCU5sv5A4DOdf87pPt4E8")) return;

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "zCU5sv5A4DOdf87pPt4E8"; // Replace with your actual bot ID if needed
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  const [hoverCat, setHoverCat] = useState(null);

const CATEGORY_BG = {
  Events: "/image/portfolio/events/event-01.jpg",
  Exhibitions: "/image/portfolio/exhibitions/exhibition-01.jpg",
  Interiors: "/image/portfolio/interiors/interior-01.jpg",
};

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[#206ca6]/12 rounded-full blur-3xl" />
        <div className="absolute -bottom-80 right-[-420px] w-[1100px] h-[1100px] bg-[#b1b4ad]/18 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] lg:text-[260px] font-extrabold text-gray-900/5 select-none">
          PROJECTS
        </div>
        {/* Hover background image */}
<AnimatePresence>
  {hoverCat && (
    <motion.div
      key={hoverCat}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.55 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease }}
      className="absolute inset-0 z-[1]"
    >
      {/* Background image */}
      <img
        src={CATEGORY_BG[hoverCat]}
        alt={hoverCat}
        className="w-full h-full object-cover"
      />

      {/* Light contrast wash (NOT white) */}
      <div className="absolute inset-0 bg-black/20" />
    </motion.div>
  )}
</AnimatePresence>


      </div>
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-28">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <motion.h2
              variants={fade}
              initial="hidden"
              animate="show"
              className="text-5xl sm:text-6xl font-extrabold text-gray-900"
            >
              Projects
            </motion.h2>
            <p className="mt-3 text-gray-600 text-base sm:text-lg">
              {BRAND.BLUE_FOCUS} {view === "blueList" && `• ${blueCat}`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {view === "blueList" && (
              <button
                onClick={goBack}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm font-semibold hover:border-[#206ca6]/40 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* CONTENT */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {view === "blueCats" && (
              <motion.div
                key="cats"
                variants={fade}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <CategoryPanels
  categories={BLUE_CATS}
  onSelect={openBlueCategory}
  onHover={setHoverCat}
/>

              </motion.div>
            )}

            {view === "blueList" && (
              <motion.div
                key="gallery"
                variants={fade}
                initial="hidden"
                animate="show"
                exit="exit"
              >
         <AnimatePresence>
  {fullscreenItem && (
    <motion.div
      key="fullscreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center px-6"
      onClick={() => setFullscreenItem(null)}
    >
      {/* Close */}
      <button
        onClick={() => setFullscreenItem(null)}
        className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl"
      >
        ×
      </button>

      {/* Left */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          const i = list.findIndex(x => x.id === fullscreenItem.id);
          if (i > 0) setFullscreenItem(list[i - 1]);
        }}
        className="absolute left-6 text-white/60 hover:text-white text-5xl"
      >
        ‹
      </button>

      {/* Right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          const i = list.findIndex(x => x.id === fullscreenItem.id);
          if (i < list.length - 1) setFullscreenItem(list[i + 1]);
        }}
        className="absolute right-6 text-white/60 hover:text-white text-5xl"
      >
        ›
      </button>

      {/* Image */}
      <motion.img
  src={fullscreenItem.image}
  alt={fullscreenItem.title}
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.96 }}
  transition={{ duration: 0.4, ease }}
 className="
  mt-6
  max-h-[78vh]
  max-w-[86vw]
  object-contain
  rounded-2xl
  shadow-2xl
"

  onClick={(e) => e.stopPropagation()}
/>

    </motion.div>
  )}
</AnimatePresence>


                <GalleryView
  items={list}
  activeId={activeId}
  setActiveId={setActiveId}
  onOpenFullscreen={setFullscreenItem}
/>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CATEGORY PANELS -------------------- */

function CategoryPanels({ categories, onSelect, onHover }) {

  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {categories.map((c) => (
        <button
  key={c}
  onMouseEnter={() => onHover(c)}
  onMouseLeave={() => onHover(null)}
  onClick={() => onSelect(c)}
  className="rounded-[28px] border border-gray-200 bg-white/70 backdrop-blur p-8 text-left hover:border-[#206ca6]/30 transition"
>

          <div className="text-xs font-semibold tracking-[0.34em] uppercase text-gray-500">
            Category
          </div>
          <div className="mt-3 text-2xl font-extrabold text-gray-900">
            {c}
          </div>
          <div className="mt-2 text-gray-600 text-sm">
            Open {c} gallery
          </div>
        </button>
      ))}
    </div>
  );
}

/* -------------------- GALLERY VIEW -------------------- */

function GalleryView({ items, activeId, setActiveId, onOpenFullscreen }) {

  return (
    <div className="rounded-[32px] border border-gray-200 bg-white/70 backdrop-blur p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, i) => {
          
          const active = item.id === activeId;

          return (
            <motion.button
              key={item.id}
              type="button"
              onMouseEnter={() => setActiveId(item.id)}
              onClick={() => onOpenFullscreen(item)}

              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.45 }}
              className={`relative overflow-hidden rounded-2xl border ${
                active ? "border-[#206ca6]" : "border-gray-200"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[180px] sm:h-[220px] w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/40">
  <span className="px-4 py-2 rounded-full bg-white/90 text-sm font-semibold">
    View
  </span>
</div>

            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
