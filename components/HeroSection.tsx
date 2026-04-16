import { MessageCircle } from "lucide-react";

const GITHUB_URL = "https://github.com/jaameypr/aethera-next";
const DISCORD_URL = "https://discord.getaethera.de";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#7C3AED]/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#27272A] bg-[#18181B] text-xs text-[#71717A] mb-8 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
          ⛏ Built for Minecraft · MIT Licensed · Free forever
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#D4D4D8] leading-tight tracking-tight mb-6">
          Your Minecraft servers.{" "}
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
            <GithubIcon className="w-4 h-4" />
            Star on GitHub
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-[#3f3f46] hover:border-[#52525b] text-[#A1A1AA] hover:text-[#D4D4D8] text-sm font-medium rounded-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Join Discord
          </a>
        </div>

        <p className="text-sm text-[#71717A]">
          Open source · Self-hosted · MIT Licensed · Built with Next.js + Docker
        </p>
      </div>
    </section>
  );
}
