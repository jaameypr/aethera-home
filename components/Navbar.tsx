import Image from "next/image";
import Link from "next/link";

const GITHUB_URL = "https://github.com/jaameypr/aethera-home";
const DISCORD_URL = "#";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090B]/90 backdrop-blur-sm border-b border-[#27272A]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Aethera Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="font-bold text-xl text-[#F4F4F5] tracking-tight">Aethera</span>
        </Link>
        <div className="flex items-center gap-6">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717A] hover:text-[#F4F4F5] transition-colors text-sm font-medium"
          >
            GitHub ↗
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717A] hover:text-[#F4F4F5] transition-colors text-sm font-medium"
          >
            Discord ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
