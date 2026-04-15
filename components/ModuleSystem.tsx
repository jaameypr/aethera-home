import { Bot, Mail, Share2, HardDrive } from "lucide-react";
import type { ReactNode } from "react";

interface Module {
  icon: ReactNode;
  title: string;
  badge: string;
  builtIn: boolean;
  tagline: string;
  description: string;
}

const modules: Module[] = [
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Discord Bot",
    badge: "discord",
    builtIn: false,
    tagline: "Server events in your Discord, automatically.",
    description:
      "A standalone Spring Boot + JDA app that runs alongside the panel. Link a project to your guild with a one-time code — the bot posts rich embeds whenever a server starts, stops, errors, or completes a backup. Includes a /whitelist command so players can request access directly from Discord, with managers approving from the channel.",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "SMTP Mailer",
    badge: "smtp",
    builtIn: false,
    tagline: "Transactional email without a third-party service.",
    description:
      "Adds email delivery to your installation via a simple internal mail API. Currently powers password reset flows — temporary passwords go straight to the user's inbox instead of out-of-band. Connects to any standard SMTP server. If not installed, the panel silently falls back without breaking anything.",
  },
  {
    icon: <Share2 className="w-5 h-5" />,
    title: "Paperview File Sharing",
    badge: "paperview",
    builtIn: false,
    tagline: "Share files and backups with a public link — no object storage required.",
    description:
      "Upload a backup to Paperview with one click — the panel streams the archive in 5 MB chunks and Paperview returns a versioned share link. Supports optional expiry dates. Also doubles as the module registry host: the installable-module list is a Paperview share, refreshed every five minutes with no panel restart needed.",
  },
  {
    icon: <HardDrive className="w-5 h-5" />,
    title: "Async Backup Worker",
    badge: "module",
    builtIn: false,
    tagline: "Offload backup processing to a dedicated Java service.",
    description:
      "Aethera ships with a built-in Node.js backup worker that handles jobs in the background. Install this module to route all backup tasks to an external Spring Boot service instead — it takes over scheduling, archiving, and progress reporting, freeing the panel process entirely. Ideal for large installs where backup load is heavy.",
  },
];

export default function ModuleSystem() {
  return (
    <section className="py-20 px-6 bg-[#0D0D0F] border-y border-[#1A1A1D]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4D4D8] mb-4">
            Extend Aethera with one-click modules.
          </h2>
          <p className="text-[#71717A] text-lg max-w-2xl mx-auto">
            Optional add-ons that run as Docker containers alongside the panel on the same{" "}
            <code className="text-[#22D3EE] font-mono text-base">aethera-net</code> network.
            Install, configure, and remove them from the admin panel — no command line needed.
            Each module gets an isolated container and an auto-provisioned API key at install time.
          </p>
        </div>

        {/* Module cards — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="bg-[#09090B] border border-[#27272A] rounded-xl p-6 flex flex-col gap-4 hover:border-[#7C3AED]/40 transition-colors"
            >
              {/* Card header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED] flex-shrink-0">
                    {mod.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#D4D4D8]">{mod.title}</h3>
                </div>
                <span
                  className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${
                    mod.builtIn
                      ? "bg-[#22D3EE]/10 border-[#22D3EE]/30 text-[#22D3EE]"
                      : "bg-[#7C3AED]/10 border-[#7C3AED]/30 text-[#7C3AED]"
                  }`}
                >
                  {mod.badge}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-[#D4D4D8] text-sm font-medium">{mod.tagline}</p>

              {/* Divider */}
              <div className="h-px bg-[#27272A]" />

              {/* Full description */}
              <p className="text-[#71717A] text-sm leading-relaxed">{mod.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
