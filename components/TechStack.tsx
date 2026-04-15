const stack = [
  "Next.js 16",
  "TypeScript",
  "MongoDB",
  "Docker",
  "Tailwind CSS v4",
  "shadcn/ui",
  "JWT Auth",
  "Vitest",
];

export default function TechStack() {
  return (
    <section className="py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs text-[#71717A] text-center mb-6 uppercase tracking-widest font-semibold">
          Built on battle-tested open source
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-[#71717A] text-sm font-medium hover:border-[#7C3AED]/50 hover:text-[#D4D4D8] transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
