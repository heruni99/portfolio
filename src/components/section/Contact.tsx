export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-12 py-24 text-center max-md:px-6 max-md:py-16">
      <p className="mb-3 font-mono text-base text-roseDeep">contact</p>
      <h2 className="mb-4 text-4xl font-semibold tracking-tight">Let's talk</h2>
      <p className="mx-auto mb-10 max-w-[54ch] text-lg text-inkSoft">
        I'm actively looking for internship opportunities. Reach out if you'd like to chat
        about a role, a project, or anything in between.
      </p>
      <div className="flex justify-center gap-5">
        <a href="mailto:you@email.com" className="rounded-xl border border-rose bg-rose px-7 py-3.5 text-base font-medium text-white hover:bg-roseDeep">
          Email me →
        </a>
        <a href="#" className="rounded-xl border border-rose px-7 py-3.5 text-base font-medium text-roseDeep hover:bg-roseWash">
          LinkedIn →
        </a>
        <a href="#" className="rounded-xl border border-rose px-7 py-3.5 text-base font-medium text-roseDeep hover:bg-roseWash">
          GitHub →
        </a>
      </div>
    </section>
  );
}
