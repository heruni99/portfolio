import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-8 py-24 max-md:px-6 max-md:py-16 sm:px-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        
        {/* Left Column: Contact Copy & Info Cards */}
        <div className="flex flex-col space-y-6 text-left">
          <p className="font-mono text-base font-bold text-rose">contact</p>
          
          <h2 className="font-serif text-5xl font-normal italic tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Let's Collaborate
          </h2>
          
          <p className="text-lg font-medium leading-relaxed text-inkSoft">
            Have a project in mind or interested in collaborating? Let me know what you're working on and I'll get back to you as soon as possible.
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line/80 glass-card px-4 py-2 text-xs font-bold text-ink w-fit">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for internships</span>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-4 pt-2">
            {/* Email Card */}
            <a
              href="mailto:herunisp@gmail.com"
              className="group flex items-center gap-4 rounded-2xl border border-line/70 glass-card p-5 transition-all duration-300 hover:border-rose hover:bg-rose/5 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-roseWash text-rose font-bold transition-transform duration-300 group-hover:scale-110">
                <svg className="h-5 w-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="flex flex-col text-left overflow-hidden">
                <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-inkSoft">Email</span>
                <span className="font-sans text-base font-bold text-ink transition-colors duration-300 group-hover:text-rose truncate">
                  herunisp@gmail.com
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/heruni-perera-5974032b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line/70 glass-card p-5 transition-all duration-300 hover:border-rose hover:bg-rose/5 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-roseWash text-rose font-bold transition-transform duration-300 group-hover:scale-110">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="flex flex-col text-left overflow-hidden">
                <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-inkSoft">LinkedIn</span>
                <span className="font-sans text-base font-bold text-ink transition-colors duration-300 group-hover:text-rose truncate">
                  linkedin.com/in/heruni-perera
                </span>
              </div>
            </a>
          </div>

          <p className="font-mono text-xs text-inkSoft pt-2">
            Response time: typically within 24 hours
          </p>
        </div>

        {/* Right Column: Glassmorphic Message Form */}
        <div className="rounded-3xl border border-line/80 glass-card p-8 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 text-left">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col space-y-2">
                <label className="font-mono text-xs font-bold text-ink">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl border border-line/70 bg-bg/50 px-4 py-3.5 text-sm font-medium text-ink placeholder:text-inkSoft/50 outline-none transition-all focus:border-rose focus:ring-2 focus:ring-rose/20"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-mono text-xs font-bold text-ink">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border border-line/70 bg-bg/50 px-4 py-3.5 text-sm font-medium text-ink placeholder:text-inkSoft/50 outline-none transition-all focus:border-rose focus:ring-2 focus:ring-rose/20"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-mono text-xs font-bold text-ink">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl border border-line/70 bg-bg/50 px-4 py-3.5 text-sm font-medium text-ink placeholder:text-inkSoft/50 outline-none transition-all focus:border-rose focus:ring-2 focus:ring-rose/20 resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose px-6 py-4 font-sans text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-roseDeep hover:shadow-xl hover:scale-[1.02] active:scale-98"
            >
              {submitted ? (
                <span className="flex items-center gap-2 text-emerald-200">
                  ✓ Message Sent!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                  Send Message
                </span>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
