const features = [
  {
    icon: "🐳",
    title: "Docker-Native",
    description:
      "Zero SSH. Full Control. Aethera talks directly to the Docker daemon to create, start, stop, and monitor your server containers. No SSH tunnels, no shell scripts, no guesswork. Every server is a container you fully own.",
  },
  {
    icon: "🎮",
    title: "Minecraft-First",
    description:
      "Every server type, out of the box. Vanilla, Paper, Spigot, Purpur, Forge, Fabric — and full pack-driven support for CurseForge and Modrinth modpacks. Version, loader, and loader version are resolved automatically from pack metadata.",
  },
  {
    icon: "👥",
    title: "Team & Permissions",
    description:
      "Built for teams, not just solo hosters. Invite members to projects and assign roles: Owner, Admin, Manager, Viewer. Fine-tune individual server permissions — who can start, stop, access the console, manage files, or trigger backups — per user, per server.",
  },
  {
    icon: "💾",
    title: "Backup System",
    description:
      "Selective, async, reliable. Choose exactly what to back up: world data, config, mods, plugins, datapacks. Large backups run asynchronously in a background worker so the UI never freezes. Download as .tar.gz, restore in-place, or import archives from external tools.",
  },
  {
    icon: "📦",
    title: "Mods, Plugins & Datapacks",
    description:
      "Full content lifecycle in-browser. Add Modrinth or CurseForge mods on top of any pack, suppress bundled mods without touching the pack, upload .mrpack files directly, manage plugins for Bukkit/Spigot/Paper, and handle datapacks per world — all without an FTP client.",
  },
  {
    icon: "🔔",
    title: "Discord Integration",
    description:
      "Keep your community in the loop. Link any project to a Discord guild with a one-time verification code. The bot posts server events — started, stopped, backup created, error — as rich embeds to your status channel automatically.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F4F4F5] mb-4">
            Everything you need to run game servers
          </h2>
          <p className="text-[#71717A] text-lg max-w-2xl mx-auto">
            Designed from the ground up for self-hosters who want full control, not another managed
            service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#18181B] border border-[#27272A] rounded-xl p-6 hover:border-[#7C3AED]/50 transition-colors group"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-base font-semibold text-[#F4F4F5] mb-3 group-hover:text-[#7C3AED] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#71717A] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
