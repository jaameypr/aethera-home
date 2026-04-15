const GITHUB_URL = "https://github.com/jaameypr/aethera-home";

export default function OpenSourceCTA() {
  return (
    <section className="py-24 px-6 bg-[#18181B] border-y border-[#27272A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#7C3AED]/10 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F4F4F5] mb-6 leading-tight">
          Free forever.{" "}
          <span className="text-[#7C3AED]">Self-hosted forever.</span>
        </h2>
        <p className="text-[#71717A] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Aethera will never have a SaaS tier, a usage cap, or a phone-home requirement. The source
          code is on GitHub, MIT licensed, and yours to run, fork, and extend. Pull requests are
          welcome.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium rounded-md transition-colors"
          >
            View the source on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
