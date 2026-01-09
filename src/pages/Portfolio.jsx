import { useState } from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const categories = [
  "All",
  "Corporate Events",
  "Exhibitions",
  "Product Launches",
  "Conferences",
];

const projects = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    category: "Conferences",
    location: "Dubai World Trade Centre",
    date: "March 2024",
    description:
      "A groundbreaking technology conference bringing together 5,000+ industry leaders.",
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Luxury Auto Expo",
    category: "Exhibitions",
    location: "Dubai International Convention Centre",
    date: "February 2024",
    description:
      "Premium automotive exhibition showcasing the latest luxury vehicles.",
    image:
      "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Global Banking Forum",
    category: "Corporate Events",
    location: "Burj Al Arab",
    date: "January 2024",
    description:
      "Exclusive financial services networking event for C-level executives.",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Smart Device Launch",
    category: "Product Launches",
    location: "Armani Hotel Dubai",
    date: "December 2023",
    description: "High-profile product unveiling for a leading technology brand.",
    image:
      "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "Healthcare Innovation Expo",
    category: "Exhibitions",
    location: "Dubai World Trade Centre",
    date: "November 2023",
    description:
      "Medical technology exhibition featuring cutting-edge healthcare solutions.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "Annual Gala Dinner",
    category: "Corporate Events",
    location: "Atlantis The Palm",
    date: "October 2023",
    description: "Spectacular awards ceremony celebrating excellence in business.",
    image:
      "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Portfolio({ onNavigate }) {
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="relative bg-gradient-to-br from-[#206ca6] via-[#1a5685] to-[#0d3d5c] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#b1b4ad] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/30 mb-8">
              OUR PORTFOLIO
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Showcasing Our
              <span className="block bg-gradient-to-r from-[#b1b4ad] to-white bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our portfolio of exceptional events and exhibitions that
              have made lasting impacts across various industries.
            </p>
          </div>
        </div>
      </div>

      {/* PORTFOLIO — STUDIO REEL (ULTRA UNIQUE / NO CARDS) */}
{/* PORTFOLIO — JOURNEY WALL */}
<section className="bg-white">
  {projects.map((project, index) => (
    <div key={project.id} className="relative">
      {/* Year marker */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32">
        <div className="flex items-center gap-6">
          <span className="text-5xl font-extrabold text-gray-900">
            {project.date.split(" ")[1]}
          </span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>
      </div>

      {/* Full-bleed image */}
      <div className="mt-12 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[75vh] object-cover"
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Editorial text */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">
            {project.category}
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            {project.title}
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#206ca6]" />
              {project.location}
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#206ca6]" />
              {project.date}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("contact")}
            className="mt-10 inline-flex items-center gap-3 text-[#206ca6] font-semibold tracking-wide group"
          >
            Start a Similar Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </div>
  ))}
</section>


      
    </div>
  );
}
