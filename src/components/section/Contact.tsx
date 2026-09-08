export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-12 py-20 text-center max-md:px-6 max-md:py-14">
      <p className="mb-2.5 font-mono text-sm text-roseDeep">contact</p>
      <h2 className="mb-3.5 text-3xl font-semibold tracking-tight">Let's talk</h2>
      <p className="mx-auto mb-8 max-w-[48ch] text-base text-inkSoft">
        I'm actively looking for internship opportunities. Reach out if you'd like to chat
        about a role, a project, or anything in between.
      </p>
      <div className="flex justify-center gap-4">
        <a href="mailto:you@email.com" className="rounded-lg border border-rose bg-rose px-6 py-3 text-sm font-medium text-white hover:bg-roseDeep">
          Email me →
        </a>
        <a href="#" className="rounded-lg border border-rose px-6 py-3 text-sm font-medium text-roseDeep hover:bg-roseWash">
          LinkedIn →
        </a>
        <a href="#" className="rounded-lg border border-rose px-6 py-3 text-sm font-medium text-roseDeep hover:bg-roseWash">
          GitHub →
        </a>
      </div>
    </section>
  );
}
