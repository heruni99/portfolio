export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-12 py-24 text-center max-md:px-6 max-md:py-16">
      <p className="mb-3 font-mono text-base font-bold text-rose">contact</p>
      <h2 className="mb-4 text-4xl font-semibold tracking-tight text-ink">Let's talk</h2>
      <p className="mx-auto mb-10 max-w-[54ch] text-lg text-inkSoft">
        I'm actively looking for internship opportunities. Reach out if you'd like to chat
        about a role, a project, or anything in between.
      </p>
      <div className="flex justify-center flex-wrap gap-5">
        <a href="mailto:herunisp@gmail.com" className="rounded-full bg-gradient-to-r from-rose to-roseDeep px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
          Email me →
        </a>
        <a href="https://www.linkedin.com/in/heruni-perera-5974032b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="rounded-full border border-line/70 glass-card px-8 py-3.5 text-base font-bold text-ink transition-all hover:border-rose hover:text-rose">
          LinkedIn →
        </a>
        <a href="https://github.com/heruni99" target="_blank" rel="noopener noreferrer" className="rounded-full border border-line/70 glass-card px-8 py-3.5 text-base font-bold text-ink transition-all hover:border-rose hover:text-rose">
          GitHub →
        </a>
      </div>
    </section>
  );
}
