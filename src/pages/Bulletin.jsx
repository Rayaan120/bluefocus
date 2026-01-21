import { useState, useEffect } from "react";
import { ArrowRight, Bell, Sparkles, Mail, Newspaper } from "lucide-react";

export default function Bulletin({ onNavigate }) {
  const [email, setEmail] = useState("");

  const handleNotify = (e) => {
    e.preventDefault();
    // UI-only placeholder — wire this to EmailJS/DB later
    setEmail("");
  };
useEffect(() => {
    if (document.getElementById("zCU5sv5A4DOdf87pPt4E8")) return;

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "zCU5sv5A4DOdf87pPt4E8"; // Replace with your actual bot ID if needed
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* COMING SOON — Cinematic */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081527] via-[#0d3d5c] to-[#081527]">
        {/* Background art */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[1100px] h-[780px] bg-[#206ca6]/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-80 right-[-360px] w-[980px] h-[980px] bg-[#b1b4ad]/16 blur-3xl rounded-full" />
          <div className="absolute -bottom-72 left-[-320px] w-[820px] h-[820px] bg-white/6 blur-3xl rounded-full" />

          {/* grid */}
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />
          {/* grain */}
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* diagonal sheen */}
          <div className="absolute -left-52 top-0 h-full w-[540px] rotate-[18deg] bg-white/6 blur-2xl" />

          {/* watermark */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[84px] sm:text-[140px] lg:text-[230px] font-extrabold tracking-tight text-white/5 select-none whitespace-nowrap">
            BULLETIN
          </div>
        </div>

        {/* Marquee ribbon (unique but subtle) */}
        <div className="relative border-b border-white/10 bg-[#0b1220]/70 backdrop-blur">
          <style>{`
            @keyframes bf_bulletin_marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <div className="overflow-hidden">
              <div
                className="flex whitespace-nowrap gap-10 text-white/70 text-sm tracking-[0.35em] uppercase"
                style={{ animation: "bf_bulletin_marquee 18s linear infinite" }}
              >
                {Array.from({ length: 2 }).map((_, k) => (
                  <div key={k} className="flex gap-10">
                    <span className="text-white/85 font-semibold">Blue Focus</span>
                    <span>News</span>
                    <span>Updates</span>
                    <span>Announcements</span>
                    <span>Insights</span>
                    <span>Behind The Scenes</span>
                    <span className="text-white/85 font-semibold">Coming Soon</span>
                    <span>•</span>
                    <span className="text-white/85 font-semibold">Dubai • UAE</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            {/* Left */}
            <div className="lg:col-span-7">
             

              <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white leading-[1.02]">
                Something
                <span className="block mt-3 bg-gradient-to-r from-[#b1b4ad] via-white to-[#206ca6] bg-clip-text text-transparent">
                  worth subscribing to.
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
                We’re building a premium bulletin featuring event highlights, new
                launches, behind-the-scenes stories, and curated industry insights.
                Stay close — it’s launching soon.
              </p>

              {/* Proof line */}
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-white/70">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#b1b4ad]" />
                  <span className="font-semibold text-white">Curated updates</span>
                </span>
                <span className="opacity-40">•</span>
                <span className="inline-flex items-center gap-2">
                  <Bell className="w-4 h-4 text-[#206ca6]" />
                  <span>Launch announcements</span>
                </span>
                <span className="opacity-40">•</span>
                <span className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white/70" />
                  <span>No spam</span>
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3">

                <button
  type="button"
  onClick={() => onNavigate("contact")}
  className="
    group inline-flex items-center justify-center gap-2
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
  Get Notified
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
</button>


               <button
  type="button"
  onClick={() => onNavigate("home")}
  className="
    group inline-flex items-center justify-center gap-2
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
  Back to Home
  <ArrowRight className="w-4 h-4" />
</button>

              </div>

              <div className="mt-6 text-sm text-white/55">
                Tip: share your requirement via Contact — we’ll respond quickly.
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* subtle outer frame */}
                <div className="absolute -inset-4 rounded-[34px] border border-white/15 bg-white/5 backdrop-blur" />

                <div className="relative rounded-[28px] border border-white/15 bg-white/8 backdrop-blur p-8 overflow-hidden">
                  {/* top shimmer line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                  <div className="text-sm font-semibold tracking-[0.32em] uppercase text-white/70">
                    Launch Status
                  </div>

                  <div className="mt-4 text-3xl font-extrabold text-white">
                    Coming Soon
                  </div>

                  <p className="mt-4 text-white/75 leading-relaxed">
                    Enter your email to get the first update when we go live.
                  </p>

                  {/* notify form */}
                  <form onSubmit={handleNotify} className="mt-8">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1">
                        <label className="sr-only">Email</label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 outline-none focus:border-white/30"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-4 rounded-2xl bg-[#206ca6] text-white font-extrabold hover:bg-[#1a5685] transition inline-flex items-center justify-center gap-2"
                      >
                        Notify Me
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="mt-3 text-sm text-white/50">
                      We’ll only email you for bulletin updates.
                    </div>
                  </form>

                  {/* countdown-style display (visual only) */}
                  <div className="mt-10">
                    <div className="text-sm font-semibold tracking-[0.28em] uppercase text-white/60">
                      Launch window
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-3">
                      {[
                        { label: "Days", value: "—" },
                        { label: "Hours", value: "—" },
                        { label: "Mins", value: "—" },
                        { label: "Secs", value: "—" },
                      ].map((x) => (
                        <div
                          key={x.label}
                          className="rounded-2xl border border-white/15 bg-white/8 p-4 text-center"
                        >
                          <div className="text-2xl font-extrabold text-white">
                            {x.value}
                          </div>
                          <div className="mt-1 text-xs tracking-[0.28em] uppercase text-white/60">
                            {x.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* bottom accent */}
                  <div className="mt-10 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#206ca6] to-[#b1b4ad]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
      </section>
    </div>
  );
}
