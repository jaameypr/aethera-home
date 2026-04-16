const steps = [
  {
    number: "01",
    title: "Deploy in seconds",
    description:
      "Clone the repo and run ./run.sh up. The script handles everything automatically — generates secrets, creates data directories, waits for MongoDB, and starts the full stack. A first-run setup wizard walks you through creating the admin account.",
    code: "./run.sh up",
  },
  {
    number: "02",
    title: "Create projects & invite your team",
    description:
      "Group servers under named projects. Invite teammates with an email invite and assign their role. The per-project audit log records every action so nothing happens without a paper trail.",
    code: null,
  },
  {
    number: "03",
    title: "Manage everything from the browser",
    description:
      "From a single dashboard: launch servers, watch live console output, read CPU and RAM graphs, edit server.properties, browse the file system, trigger backups, and install mods — without ever opening a terminal.",
    code: null,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-[#0D0D0F] border-y border-[#1A1A1D]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4D4D8] mb-4">How it works</h2>
          <p className="text-[#71717A] text-lg">Up and running in minutes, not hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col gap-4">
              {/* Circle + line row */}
              <div className="flex items-center">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-[#7C3AED]">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-[#27272A] ml-4" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-[#D4D4D8]">{step.title}</h3>
              <p className="text-[#71717A] text-sm leading-relaxed">{step.description}</p>
              {step.code && (
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#09090B] border border-[#27272A] rounded-lg w-fit">
                  <span className="text-[#22C55E] font-mono text-xs select-all">{step.code}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
