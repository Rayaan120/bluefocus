import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from 'react-icons/fa';


export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  services: [],
  message: "",
});


const [sent, setSent] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.phone) {
    alert("Please provide your email and phone number to proceed.");
    return;
  }

  try {
    await emailjs.send(
      "service_wpyjduc",
      "template_np4xnyo",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        services: formData.services.join(", "),
        message: formData.message,
      },
      "_MaMl2caEo5gsW8HH"
    );
    setSent(true);

   

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      services: [],
      message: "",
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Something went wrong. Please try again later.");
  }
};

  useEffect(() => {
    if (document.getElementById("zCU5sv5A4DOdf87pPt4E8")) return;

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "zCU5sv5A4DOdf87pPt4E8"; // Replace with your actual bot ID if needed
    script.defer = true;
    document.body.appendChild(script);
  }, []);
const servicesList = [
  "Corporate Events",
  "Corporate Exhibitions",
  "Project Management",
  "B2B Matchmaking",
  "B2B Matchmaking – Online",
  "Leisure Events",
  "Industrial Analysis",
  "Brand Strategy",
  "Creative Development",
  "Customized Solutions",
  "Promotional Solutions",
];
const toggleService = (service) => {
  setFormData((prev) => ({
    ...prev,
    services: prev.services.includes(service)
      ? prev.services.filter((s) => s !== service)
      : [...prev.services, service],
  }));
};


  return (
    <div className="min-h-screen bg-white">
     {/* CONTACT HERO — Cinematic / Unique */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#06111f] via-[#0d3d5c] to-[#06111f] pt-28 pb-24">
  {/* background art */}
  <div className="absolute inset-0 pointer-events-none">
    {/* glows */}
    <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[1200px] h-[820px] bg-[#206ca6]/30 blur-3xl rounded-full" />
    <div className="absolute -bottom-72 right-[-320px] w-[980px] h-[980px] bg-[#b1b4ad]/14 blur-3xl rounded-full" />
    <div className="absolute -bottom-72 left-[-360px] w-[920px] h-[920px] bg-white/6 blur-3xl rounded-full" />

    {/* grid */}
    <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />

    {/* diagonal sheen */}
    <div className="absolute -left-56 top-0 h-full w-[560px] rotate-[14deg] bg-white/6 blur-2xl" />

    {/* watermark */}
    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[90px] sm:text-[150px] lg:text-[240px] font-extrabold tracking-tight text-white/5 select-none whitespace-nowrap">
      CONTACT
    </div>
  </div>

  {/* marquee ribbon */}
  <style>{`
    @keyframes bf_contact_marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}</style>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-12 gap-14 items-center">
      {/* LEFT: copy */}
      <div className="lg:col-span-7">
       

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white leading-[1.02]">
          Let’s start a
          <span className="block mt-3 bg-gradient-to-r from-[#b1b4ad] via-white to-[#206ca6] bg-clip-text text-transparent">
            conversation that converts.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
          Tell us what you’re planning — we’ll respond fast with a clear scope,
          timeline, and next steps. From concept to on-ground delivery, we’ve got you.
        </p>

        {/* proof line */}
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-white/70">
          <span>
            <span className="font-semibold text-white">Fast response</span> (same day)
          </span>
          <span className="opacity-40">•</span>
          <span>
            <span className="font-semibold text-white">Clear scope</span> + budget guidance
          </span>
          <span className="opacity-40">•</span>
          <span>
            <span className="font-semibold text-white">Dubai • UAE</span>
          </span>
        </div>

        {/* moving ribbon */}
        <div className="mt-12 overflow-hidden border-t border-white/10 pt-6">
          <div
            className="flex whitespace-nowrap gap-10 text-white/60 text-sm tracking-[0.35em] uppercase"
            style={{ animation: "bf_contact_marquee 22s linear infinite" }}
          >
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-10">
                <span className="text-white/80 font-semibold">Events</span>
                <span>Exhibitions</span>
                <span>Brand Activations</span>
                <span>Design + Build</span>
                <span>Production</span>
                <span>Logistics</span>
                <span className="text-white/80 font-semibold">Let’s Talk</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: “contact-ready” panel */}
      <div className="lg:col-span-5">
        <div className="relative">
          {/* outer frame */}
          <div className="absolute -inset-4 rounded-[34px] border border-white/15 bg-white/5 backdrop-blur" />

          <div className="relative rounded-[28px] border border-white/15 bg-white/8 backdrop-blur p-8 overflow-hidden">
            <div className="text-sm font-semibold tracking-[0.32em] uppercase text-white/70">
              Next steps
            </div>

            <div className="mt-6 text-3xl font-extrabold text-white leading-tight">
              Share the brief.
              <span className="block text-white/80">We’ll handle the rest.</span>
            </div>

            <div className="mt-8 space-y-3 text-white/80 text-sm">
              {[
                "Tell us your event type + date",
                "Share venue/location + audience size",
                "We reply with scope + timeline",
                "Optional: site visit + proposal",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-[#206ca6]" />
                  <span className="leading-relaxed">{t}</span>
                </div>
              ))}
            </div>

            {/* quick actions */}
            <div className="mt-8 flex flex-col gap-3">

             <button
  type="button"
  onClick={() => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
  className="
    group w-full
    inline-flex items-center justify-center gap-2
    px-8 py-[12px]
    rounded-xl
    bg-white/90 text-[#206ca6]
    text-[14px] font-semibold
    backdrop-blur-md
    transition-all duration-300
    hover:bg-white
    hover:shadow-lg hover:shadow-white/20
    focus:outline-none
  "
>
  Fill the Form
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
</button>


              <button
  type="button"
  onClick={() => window.open("https://wa.me/971551508999", "_blank")}
  className="
    group w-full
    inline-flex items-center justify-center gap-2
    px-8 py-[12px]
    rounded-xl
    bg-white/10
    text-white
    text-[14px] font-medium
    backdrop-blur-md
    border border-white/25
    transition-all duration-300
    hover:bg-white/15
    hover:border-white/40
    focus:outline-none
  "
>
  WhatsApp Us
  <ArrowRight className="w-4 h-4" />
</button>


              <div className="pt-2 text-sm text-white/55 leading-relaxed">
                Fast response • Clear scope • On-time delivery
              </div>
            </div>

            <div className="mt-10 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* bottom fade */}
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
  
</section>

      

      {/* ===================== INTENT ===================== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-[200px] md:text-[300px] font-extrabold text-gray-900/5 select-none">
          CONNECT
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-7xl font-extrabold leading-[1.02] text-gray-900">
              You’re not filling a form.
              <span className="block mt-4 text-gray-500">
                You’re starting a collaboration.
              </span>
            </h2>

            <p className="mt-8 text-2xl text-gray-600 leading-relaxed">
              We work with brands that value clarity, precision, and execution.
              If that sounds like you — let’s talk.
            </p>
          </div>
        </div>
      </section>


      {/* ===================== CHOICES ===================== */}
     <section className="py-28 bg-[#f7f9fc]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-8">

      {/* BOOK A CALL */}
      <a
        href="tel:+971551508999"
        className="
          group relative p-10 bg-white border border-gray-200
          transition-all duration-500
          hover:bg-[#206ca6]
          cursor-pointer
        "
      >
        <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-white">
          Book a Call
        </h3>
        <p className="mt-4 text-gray-600 group-hover:text-white/80">
          Quick clarity. Direct conversation.
        </p>
        <div className="mt-10 text-sm tracking-widest uppercase font-semibold text-[#206ca6] group-hover:text-white">
          Call now →
        </div>
      </a>

      {/* SEND A BRIEF */}
      <button
        type="button"
        onClick={() => {
          const el = document.getElementById("contact-form");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="
          group relative p-10 bg-white border border-gray-200
          transition-all duration-500
          hover:bg-black
          text-left
        "
      >
        <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-white">
          Send a Brief
        </h3>
        <p className="mt-4 text-gray-600 group-hover:text-white/70">
          Share your idea. We’ll reply with scope.
        </p>
        <div className="mt-10 text-sm tracking-widest uppercase font-semibold text-gray-900 group-hover:text-white">
          Write to us →
        </div>
      </button>

      {/* VISIT US */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Blue+Focus+Events+Dubai"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group relative p-10 bg-white border border-gray-200
          transition-all duration-500
          hover:bg-[#0d3d5c]
          cursor-pointer
        "
      >
        <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-white">
          Visit Us
        </h3>
        <p className="mt-4 text-gray-600 group-hover:text-white/80">
          Dubai-based. Meetings & site visits.
        </p>
        <div className="mt-10 text-sm tracking-widest uppercase font-semibold text-[#206ca6] group-hover:text-white">
          Open map →
        </div>
      </a>

    </div>
  </div>
</section>


      {/* ===================== FORM ===================== */}
      <section id="contact-form" className="py-36 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-extrabold text-gray-900">
            Tell us what you’re planning.
          </h2>

          <p className="mt-6 text-xl text-gray-600">
            The more context you share, the better we can respond.
          </p>

          <form onSubmit={handleSubmit} className="mt-20 space-y-14">

            {[
              ["Full Name", "name"],
              ["Email", "email"],
              ["Phone", "phone"],
              ["Company", "company"],
            ].map(([label, name]) => (
              <div key={name}>
                <label className="block text-sm tracking-widest uppercase text-gray-500 mb-3">
                  {label}
                </label>
                <input
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="
                    w-full border-b border-gray-300
                    py-4 text-xl
                    focus:outline-none focus:border-[#206ca6]
                    transition-all
                  "
                />
                <p className="mt-2 text-sm text-gray-500">
  Required — we use this only to respond to your inquiry.
</p>

              </div>
            ))}
          {/* SERVICES SELECTION */}
<div>
  <label className="block text-sm tracking-widest uppercase text-gray-500 mb-6">
    Services you’re interested in (optional)
  </label>

  <div className="flex flex-wrap gap-3">
    {servicesList.map((service) => {
      const active = formData.services.includes(service);

      return (
        <button
          key={service}
          type="button"
          onClick={() => toggleService(service)}
          className={`
            px-5 py-2.5
            rounded-full
            border
            text-sm font-semibold
            transition-all duration-300
            ${
              active
                ? "bg-[#206ca6] border-[#206ca6] text-white shadow-md"
                : "bg-white border-gray-300 text-gray-700 hover:border-[#206ca6]"
            }
          `}
        >
          {service}
        </button>
      );
    })}
  </div>

  {/* helper text */}
  <p className="mt-4 text-sm text-gray-500">
    You can select more than one option.
  </p>
</div>

            <div>
              <label className="block text-sm tracking-widest uppercase text-gray-500 mb-3">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="
                  w-full border-b border-gray-300
                  py-4 text-xl resize-none
                  focus:outline-none focus:border-[#206ca6]
                "
              />
            </div>
          {sent && (
  <div className="flex items-center gap-3 text-green-600">
    <CheckCircle className="w-5 h-5" />
    <span>Your message has been sent successfully.</span>
  </div>
)}

            <button
              type="submit"
              className="
                mt-16 text-2xl font-extrabold text-[#206ca6]
                hover:underline underline-offset-8
                transition-all
              "
            >
              Send message →
            </button>
          </form>
        </div>
      </section>


      {/* ===================== OUTRO ===================== */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold">
            Serious about your next project?
          </h2>

          <p className="mt-6 text-xl text-white/70">
            So are we. Let’s build something that stands out.
          </p>

          <div className="mt-10 text-sm tracking-widest uppercase text-white/50">
            Blue Focus • Dubai • Events • Exhibitions
          </div>
        </div>
         <a
  href="https://wa.me/971551508999"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-20 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center z-50 transition-colors duration-300"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp className="h-6 w-6" />
</a>
      </section>
    </div>
  );
}
