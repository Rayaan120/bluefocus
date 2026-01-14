import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        eventType: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white pt-20">
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
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur text-white/85 px-6 py-3 rounded-full text-sm font-semibold border border-white/15">
          <span className="h-[2px] w-10 bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
          Get in touch
        </div>

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
            <div className="mt-10 flex flex-col gap-4">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("contact-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group w-full px-10 py-5 rounded-2xl bg-white text-[#206ca6] font-extrabold text-lg hover:shadow-2xl hover:shadow-white/15 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Fill the Form
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => window.open("https://wa.me/971000000000", "_blank")}
                className="w-full px-10 py-5 rounded-2xl border border-white/25 bg-white/5 text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                WhatsApp Us
                <ArrowRight className="w-6 h-6" />
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

      

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team is ready to help you create unforgettable events and
                  exhibitions. Get in touch with us today.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#206ca6] to-[#1a5685] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Blue Focus Events & Exhibitions
                      <br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#206ca6] to-[#1a5685] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600">+971 XX XXX XXXX</p>
                    <p className="text-gray-600">+971 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#206ca6] to-[#1a5685] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600">info@bluefocus.ae</p>
                    <p className="text-gray-600">sales@bluefocus.ae</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#206ca6] to-[#1a5685] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Sunday - Thursday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Friday - Saturday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand the importance of timely communication. Our team
                  typically responds to all inquiries within 24 hours during
                  business days.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-100 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    Thank you for contacting Blue Focus. We'll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#206ca6] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#206ca6] focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#206ca6] focus:border-transparent transition-all"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#206ca6] focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#206ca6] focus:border-transparent transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="exhibition">Exhibition</option>
                      <option value="conference">Conference</option>
                      <option value="product-launch">Product Launch</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#206ca6] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group px-8 py-4 bg-gradient-to-r from-[#206ca6] to-[#1a5685] text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#206ca6]/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#206ca6] to-[#1a5685] rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#b1b4ad] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Prefer to Talk Directly?
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Schedule a consultation call with our team to discuss your event
                requirements in detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+971XXXXXXXX"
                  className="px-10 py-5 bg-white text-[#206ca6] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-6 h-6" />
                  Call Now
                </a>
                <a
                  href="mailto:info@bluefocus.ae"
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-6 h-6" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
