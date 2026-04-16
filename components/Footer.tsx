import Image from "next/image";
import Link from "next/link";

const GITHUB_URL = "https://github.com/jaameypr/aethera-next";
const GITHUB_HOME_URL = "https://github.com/jaameypr/aethera-home";
const DISCORD_URL = "https://discord.getaethera.de";
const MIT_URL = "https://github.com/jaameypr/aethera-next?tab=MIT-1-ov-file";

export default function Footer() {
  return (
    <footer className="py-14 px-6 border-t border-[#27272A]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <Image src="/logo.png" alt="Aethera Logo" width={40} height={40} style={{
            height: "auto",
            maskImage: "radial-gradient(circle, black 45%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle, black 45%, transparent 75%)",
          }} />
        <p className="text-[#71717A] text-sm">Self-hosted game server management.</p>
        <p className="text-[#71717A] text-sm">
          Built with ♥ and open-sourced on{" "}
          <a
            href={GITHUB_HOME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4D4D8] hover:text-[#7C3AED] transition-colors"
          >
            GitHub
          </a>
        </p>
        <div className="flex items-center gap-6 mt-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717A] hover:text-[#D4D4D8] transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717A] hover:text-[#D4D4D8] transition-colors text-sm"
          >
            Discord
          </a>
          <a
            href={MIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717A] hover:text-[#D4D4D8] transition-colors text-sm"
          >
            License: MIT
          </a>
          <Link
            href="/imprint"
            className="text-[#71717A] hover:text-[#D4D4D8] transition-colors text-sm"
          >
            Imprint
          </Link>
        </div>
      </div>
    </footer>
  );
}
