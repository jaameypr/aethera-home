const modules = [
  {
    icon: "🤖",
    title: "Discord Bot",
    badge: "discord",
    builtIn: false,
    tagline: "Server events in your Discord, automatically.",
    description:
      "The Discord module is a standalone Spring Boot + JDA application that runs as a Docker container alongside the panel. Once installed and invited to your Discord guild, project managers can link their Aethera project to a guild using a one-time verification code generated in the panel. From that point on, the bot automatically posts rich embed notifications to a #aethera, #server-status, or first available text channel whenever a server starts, stops, encounters an error, or a backup completes. The module also polls server console logs at regular intervals and exposes a whitelist approval flow: players can request whitelist access via a /whitelist Discord command, and managers approve or deny the request directly from Discord — the panel processes the callback and updates the server automatically. Authentication between the module and the panel uses the auto-provisioned API key; network isolation on aethera-net provides an additional security boundary.",
  },
  {
    icon: "📧",
    title: "SMTP Mailer",
    badge: "smtp",
    builtIn: false,
    tagline: "Transactional email without a third-party service.",
    description:
      "The SMTP module adds email delivery capabilities to your Aethera installation. Once running, it provides a simple internal mail API that the panel calls whenever a transactional email needs to be sent. Currently this powers password reset emails: when an admin resets a user's password from the admin panel, the new temporary password is delivered directly to the user's email address instead of having to be communicated out-of-band. The module connects to any standard SMTP server (Gmail, Mailgun, self-hosted Postfix — anything) using credentials you configure in the module's env vars. If the SMTP module is not installed or not running, the panel gracefully falls back to silent mode without breaking the reset flow.",
  },
  {
    icon: "📄",
    title: "Paperview File Sharing",
    badge: "paperview",
    builtIn: false,
    tagline: "Share files and backups with a public link — no object storage required.",
    description:
      "Paperview is Aethera's built-in file viewer and sharing module. It runs as a Docker container and exposes a public-facing UI for browsing and downloading files that have been shared from the panel. Its primary integration is with the backup system: after creating a backup, you can upload it to Paperview with a single click — the panel streams the archive to Paperview in 5 MB chunks (safe for multi-gigabyte backups), and Paperview generates a versioned share link you can send to anyone. Optionally set an expiry date so the link auto-expires after a defined period. Paperview also doubles as the module registry host — the list of installable modules is itself a Paperview share, fetched and cached by the panel every five minutes. This means the registry can be updated by simply publishing a new version of the share, with no panel restart required.",
  },
  {
    icon: "⚙️",
    title: "Async Backup Worker",
    badge: "built-in",
    builtIn: true,
    tagline: "Large backups, zero UI freezes.",
    description:
      "Unlike most backup solutions that block the web process until the archive is done, Aethera dispatches every backup as a background job to an isolated Node.js worker process. The worker connects to MongoDB independently, streams server data from disk directly into a .tar.gz archive without loading it into memory, and writes live progress updates back to an AsyncJob document — which the panel UI polls via Server-Sent Events so you watch a real progress bar rather than a spinner. Backups can include any combination of: world data, config files, mods, plugins, and datapacks. When the panel restarts, any jobs that were left in a running or pending state (e.g. after a crash) are automatically resolved during startup cleanup so the job list never shows stale \"stuck\" entries.",
  },
];

export default function ModuleSystem() {
  return (
    <section className="py-20 px-6 bg-[#18181B] border-y border-[#27272A]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F4F4F5] mb-4">
            Extend Aethera with one-click modules.
          </h2>
          <p className="text-[#71717A] text-lg max-w-3xl mx-auto">
            Aethera&apos;s module system lets you install optional add-ons as Docker containers that
            run alongside the panel on the same internal{" "}
            <code className="text-[#22D3EE] font-mono text-base">aethera-net</code> network. Modules
            are listed in a remote registry, browsable from the admin panel — install, configure,
            start, stop, update, or remove them without ever touching the command line. Each module
            gets its own isolated container, its own auto-assigned host port, and communicates with
            the panel over the internal network only. Modules that need to call back into Aethera
            receive an auto-provisioned API key injected into their environment at install time. SSO
            between the panel and a module is handled via short-lived JWTs signed with your{" "}
            <code className="text-[#22D3EE] font-mono text-base">JWT_SECRET</code>.
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
                  <span className="text-2xl">{mod.icon}</span>
                  <h3 className="text-base font-semibold text-[#F4F4F5]">{mod.title}</h3>
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
              <p className="text-[#F4F4F5] text-sm font-medium">{mod.tagline}</p>

              {/* Divider */}
              <div className="h-px bg-[#27272A]" />

              {/* Full description */}
              <p className="text-[#71717A] text-sm leading-relaxed">{mod.description}</p>

              {mod.builtIn && (
                <div className="flex items-center gap-2 text-xs text-[#22D3EE]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                  No install required — ships with every Aethera instance
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
