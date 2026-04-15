import { Info } from "lucide-react";

const commands = [
  { cmd: "./run.sh up", desc: "Build and start the full stack (app + MongoDB)" },
  { cmd: "./run.sh down", desc: "Stop and remove all containers" },
  { cmd: "./run.sh restart", desc: "Restart running containers without rebuild" },
  { cmd: "./run.sh logs", desc: "Tail live container logs" },
  {
    cmd: "./run.sh rebuild",
    desc: "Pull latest Git changes, rebuild and redeploy the app container — database and data are preserved. Add --wipe-servers to also remove all game-server containers and data.",
  },
  {
    cmd: "./run.sh wipe-servers",
    desc: "Interactively destroy all managed game-server containers and their data (prompts for confirmation).",
  },
  { cmd: "./run.sh status", desc: "Show current container status" },
  { cmd: "./run.sh seed", desc: "Run the admin seed script inside the running container" },
];

export default function DeploySection() {
  return (
    <section className="py-20 px-6 border-t border-[#27272A]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F4F4F5] mb-4">
            One script. Everything handled.
          </h2>
          <p className="text-[#71717A] text-lg max-w-2xl mx-auto">
            Aethera ships with a single shell script —{" "}
            <code className="text-[#22D3EE] font-mono text-base">run.sh</code> — that handles your
            entire lifecycle. No Makefile, no manual compose commands, no guesswork. Clone the repo,
            run one command, and Aethera is live.
          </p>
        </div>

        {/* Terminal code block */}
        <div className="bg-[#09090B] border border-[#27272A] rounded-xl overflow-hidden mb-5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272A] bg-[#18181B]">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-2 text-xs text-[#71717A] font-mono">bash</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-5 overflow-x-auto">
            <div className="space-y-1">
              <div className="text-[#71717A] select-none"># 1. Clone the repo</div>
              <div className="flex flex-wrap gap-x-1.5">
                <span className="text-[#22D3EE]">git clone</span>
                <span className="text-[#F4F4F5]">https://github.com/jaameypr/aethera-next</span>
                <span className="text-[#71717A]">&amp;&amp;</span>
                <span className="text-[#22D3EE]">cd</span>
                <span className="text-[#F4F4F5]">aethera</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-[#71717A] select-none"># 2. Start everything</div>
              <div>
                <span className="text-[#7C3AED]">./run.sh</span>
                <span className="text-[#F4F4F5]"> up</span>
              </div>
            </div>
          </div>
        </div>

        {/* "That's it" explanation card */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-xl p-6 mb-8 text-sm text-[#71717A] leading-relaxed">
          <span className="text-[#F4F4F5] font-semibold">That&apos;s it.</span> On first run,{" "}
          <code className="text-[#22D3EE] font-mono">run.sh</code> automatically copies{" "}
          <code className="text-[#22D3EE] font-mono">.env.example</code> to{" "}
          <code className="text-[#22D3EE] font-mono">.env</code>, generates a cryptographically
          random <code className="text-[#22D3EE] font-mono">JWT_SECRET</code> and{" "}
          <code className="text-[#22D3EE] font-mono">MONGO_PASS</code> using{" "}
          <code className="text-[#22D3EE] font-mono">openssl</code>, creates all required data
          directories on disk, waits for MongoDB to pass its health check, then starts both the app
          and database containers with a single{" "}
          <code className="text-[#22D3EE] font-mono">docker compose up -d --build</code>. The panel
          is ready at{" "}
          <code className="text-[#7C3AED] font-mono">http://localhost:3000</code> and the first-run
          setup wizard will walk you through creating the admin account.
        </div>

        {/* Command reference table */}
        <h3 className="text-base font-semibold text-[#F4F4F5] mb-3">Full command reference</h3>
        <div className="border border-[#27272A] rounded-xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#18181B] border-b border-[#27272A]">
                <th className="text-left px-5 py-3 text-[#71717A] font-medium whitespace-nowrap">
                  Command
                </th>
                <th className="text-left px-5 py-3 text-[#71717A] font-medium">What it does</th>
              </tr>
            </thead>
            <tbody>
              {commands.map((row, i) => (
                <tr
                  key={row.cmd}
                  className={`border-t border-[#27272A] hover:bg-[#18181B] transition-colors ${
                    i === 0 ? "border-t-0" : ""
                  }`}
                >
                  <td className="px-5 py-3.5 font-mono text-[#7C3AED] whitespace-nowrap align-top">
                    {row.cmd}
                  </td>
                  <td className="px-5 py-3.5 text-[#71717A] leading-relaxed">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Under-the-hood callout */}
        <div className="mt-5 flex gap-4 p-5 bg-[#18181B] border border-[#22D3EE]/20 rounded-xl">
          <div className="shrink-0 mt-0.5 text-[#22D3EE]">
            <Info className="w-4 h-4" />
          </div>
          <p className="text-sm text-[#71717A] leading-relaxed">
            <span className="text-[#F4F4F5] font-medium">.env migration is automatic. </span>
            If you&apos;re upgrading from an older install that used a bare{" "}
            <code className="text-[#22D3EE] font-mono">MONGODB_URI</code>, the script detects it,
            generates{" "}
            <code className="text-[#22D3EE] font-mono">MONGO_USER</code>/
            <code className="text-[#22D3EE] font-mono">MONGO_PASS</code>, and patches your{" "}
            <code className="text-[#22D3EE] font-mono">.env</code> in-place — with clear
            instructions to re-init MongoDB with a{" "}
            <code className="text-[#22D3EE] font-mono">docker compose down -v</code>. No manual
            config surgery required.
          </p>
        </div>
      </div>
    </section>
  );
}
