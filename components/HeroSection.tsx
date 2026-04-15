const GITHUB_URL = "https://github.com/jaameypr/aethera-home";
const DISCORD_URL = "#";

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7C3AED]/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#27272A] bg-[#18181B] text-xs text-[#71717A] mb-8 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
          Open source · MIT Licensed · Free forever
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F4F4F5] leading-tight tracking-tight mb-6">
          Your game servers.{" "}
          <span className="text-[#7C3AED]">Your infrastructure.</span>{" "}
          Your rules.
        </h1>

        <p className="text-lg md:text-xl text-[#71717A] leading-relaxed mb-10 max-w-3xl mx-auto">
          Aethera is a free, open-source, self-hosted control panel for managing Minecraft game
          servers — built for teams who want full control without paying for managed hosting. Spin up
          servers, manage mods, stream live console output, and collaborate with your team, all from
          a clean browser-based UI running on your own hardware.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-medium rounded-md transition-colors"
          >
            ⭐ Star on GitHub
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-[#3f3f46] hover:border-[#52525b] text-[#A1A1AA] hover:text-[#F4F4F5] text-sm font-medium rounded-md transition-colors"
          >
            💬 Join Discord
          </a>
        </div>

        <p className="text-sm text-[#71717A]">
          Open source · Self-hosted · MIT Licensed · Built with Next.js + Docker
        </p>
      </div>
    </section>
  );
}
