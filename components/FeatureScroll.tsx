'use client';

import { useEffect, useRef, useState, memo } from 'react';

const FRAME_COUNT = 8;

interface FrameData {
  label: string;
  headline: string;
  subline: string;
  accent: string;
}

const frames: FrameData[] = [
  {
    label: 'ORGANIZATION',
    headline: 'Your servers, organized.',
    subline: 'Group servers into projects, invite your team, and track every action in the audit log.',
    accent: '#7C3AED',
  },
  {
    label: 'CONTROL',
    headline: 'Start. Stop. Done.',
    subline: 'Full server lifecycle from the browser — create, launch, soft-stop, or wipe in one click.',
    accent: '#7C3AED',
  },
  {
    label: 'VISIBILITY',
    headline: 'Watch it run.',
    subline: 'Live console output, streamed directly from Docker. Send commands without opening a terminal.',
    accent: '#22D3EE',
  },
  {
    label: 'PERFORMANCE',
    headline: 'CPU. RAM. Right now.',
    subline: "Live resource graphs pulled from Docker stats. Know what's running hot before your players do.",
    accent: '#22D3EE',
  },
  {
    label: 'MODS & PLUGINS',
    headline: 'Everything in one place.',
    subline: 'Mods from Modrinth or CurseForge, plugins, datapacks, and .mrpack uploads — all in-browser.',
    accent: '#7C3AED',
  },
  {
    label: 'BACKUPS',
    headline: 'Choose what matters.',
    subline: 'Pick world, config, mods, plugins, or datapacks. Backups run in the background — the UI never freezes.',
    accent: '#22D3EE',
  },
  {
    label: 'FILES',
    headline: 'Browse. Edit. Save.',
    subline: "Navigate your server's full data directory and edit files directly — no FTP, no SSH.",
    accent: '#7C3AED',
  },
  {
    label: 'RESOURCE CONTROL',
    headline: 'Templates with guardrails.',
    subline: 'Pre-define server templates with a RAM cap. Managers can initialize them — nothing more.',
    accent: '#22D3EE',
  },
];

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

// ─── Background Components ────────────────────────────────────────────────────

const BgProjects = memo(function BgProjects() {
  const cards = [
    { x: -190, y: -30, rotate: -4, delay: '0s' },
    { x: 10, y: 40, rotate: 1, delay: '0.8s' },
    { x: 200, y: -15, rotate: 3, delay: '1.6s' },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      {cards.map((c, i) => (
        <div
          key={i}
          className="absolute w-52 h-32 rounded-xl border border-[#7C3AED]/40 bg-[#18181B]/60"
          style={{
            left: `calc(50% + ${c.x}px - 104px)`,
            top: `calc(50% + ${c.y}px - 64px)`,
            transform: `rotate(${c.rotate}deg)`,
            opacity: 0.25,
            animation: `featureFloat 4s ease-in-out ${c.delay} infinite alternate`,
          }}
        >
          <div className="p-4 space-y-2">
            <div className="h-2 w-24 rounded-full bg-[#7C3AED]/50" />
            <div className="h-1.5 w-32 rounded-full bg-[#3f3f46]" />
            <div className="h-1.5 w-20 rounded-full bg-[#3f3f46]" />
            <div className="mt-3 flex gap-2">
              {[0, 1, 2].map((j) => (
                <div key={j} className="h-5 w-10 rounded bg-[#27272A]" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

const BgLifecycle = memo(function BgLifecycle() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <div className="relative flex items-center justify-center">
        {[280, 196, 112].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#7C3AED]"
            style={{
              width: size,
              height: size,
              opacity: 0.15 + i * 0.05,
              animation: `powerPulse ${2.5 + i * 0.6}s ease-in-out ${i * 0.5}s infinite`,
            }}
          />
        ))}
        <div
          className="relative z-10 w-10 h-10 rounded-full bg-[#7C3AED]/50 flex items-center justify-center"
          style={{ animation: 'powerPulse 2s ease-in-out infinite' }}
        >
          <div className="w-4 h-4 rounded-full bg-[#7C3AED]" />
        </div>
      </div>
    </div>
  );
});

const CONSOLE_LINES = [
  { text: '$ ./run.sh up', color: '#F4F4F5' },
  { text: 'Starting aethera and mongo...', color: '#71717A' },
  { text: '[compose] ✓  aethera-db  started', color: '#22D3EE' },
  { text: '[compose] ✓  aethera     started', color: '#22D3EE' },
  { text: 'Panel ready → http://localhost:3000', color: '#7C3AED' },
  { text: '> Server "survival" starting...', color: '#71717A' },
  { text: '> Done (2.4s)! TPS: 19.8  MSPT: 3.1', color: '#22D3EE' },
  { text: '> Player Steve joined the game', color: '#F4F4F5' },
  { text: '█', color: '#71717A' },
];

const BgConsole = memo(function BgConsole() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <div
        className="w-[420px] bg-[#09090B] border border-[#27272A] rounded-xl overflow-hidden opacity-[0.22]"
        style={{ animation: 'featureFloat 5s ease-in-out infinite alternate' }}
      >
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#27272A] bg-[#18181B]">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
          <span className="ml-2 text-[10px] font-mono text-[#71717A]">aethera — bash</span>
        </div>
        <div className="p-4 space-y-1.5 font-mono text-[11px]">
          {CONSOLE_LINES.map((line, i) => (
            <div key={i} style={{ color: line.color }}>
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

const BgMetrics = memo(function BgMetrics() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <div className="opacity-[0.22]">
        <svg width="500" height="190" viewBox="0 0 500 190" fill="none">
          <defs>
            <linearGradient id="cpuGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ramGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1="35" y1={20 + i * 38} x2="500" y2={20 + i * 38}
              stroke="#27272A" strokeWidth="1" strokeDasharray="4 6"
            />
          ))}
          {/* Y labels */}
          {['100%', '75%', '50%', '25%'].map((label, i) => (
            <text key={label} x="0" y={25 + i * 38} fill="#3f3f46" fontSize="9" fontFamily="monospace">
              {label}
            </text>
          ))}
          {/* CPU fill */}
          <polygon
            points="35,155 35,110 95,78 155,92 215,55 275,70 335,44 395,58 455,38 500,48 500,155"
            fill="url(#cpuGrad)"
          />
          {/* CPU line */}
          <polyline
            points="35,110 95,78 155,92 215,55 275,70 335,44 395,58 455,38 500,48"
            stroke="#7C3AED" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"
          />
          {/* RAM fill */}
          <polygon
            points="35,155 35,132 95,120 155,126 215,108 275,116 335,98 395,106 455,92 500,100 500,155"
            fill="url(#ramGrad)"
          />
          {/* RAM line */}
          <polyline
            points="35,132 95,120 155,126 215,108 275,116 335,98 395,106 455,92 500,100"
            stroke="#22D3EE" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"
          />
          {/* X axis */}
          <line x1="35" y1="155" x2="500" y2="155" stroke="#27272A" strokeWidth="1" />
        </svg>
        <div className="flex gap-5 justify-center mt-2 text-[10px] font-mono">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 rounded bg-[#7C3AED]" />
            <span className="text-[#3f3f46]">CPU</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 rounded bg-[#22D3EE]" />
            <span className="text-[#3f3f46]">RAM</span>
          </div>
        </div>
      </div>
    </div>
  );
});

const BgContent = memo(function BgContent() {
  const items = Array.from({ length: 12 }, (_, i) => ({
    col: i % 4,
    row: Math.floor(i / 4),
    delay: `${(i * 0.22).toFixed(2)}s`,
    size: 38 + (i % 3) * 14,
  }));
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      <div className="relative w-[480px] h-[250px] opacity-[0.15]">
        {items.map((item, i) => (
          <div
            key={i}
            className="absolute rounded-xl border border-[#7C3AED]/60 bg-[#7C3AED]/10"
            style={{
              width: item.size,
              height: item.size,
              left: `calc(${item.col * 25}% + ${12.5 - item.size / 2}%)`,
              top: `calc(${item.row * 34}% + ${17 - item.size / 2}%)`,
              animation: `featureFloat ${3.5 + (i % 3) * 0.8}s ease-in-out ${item.delay} infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  );
});

const BACKUP_SEGS = [
  { label: 'world', w: '76%', delay: '0s' },
  { label: 'config', w: '100%', delay: '0.25s' },
  { label: 'mods', w: '52%', delay: '0.5s' },
  { label: 'plugins', w: '33%', delay: '0.75s' },
  { label: 'datapacks', w: '18%', delay: '1s' },
];

const BgBackups = memo(function BgBackups() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <div className="w-[400px] opacity-[0.22] space-y-3.5">
        <div className="font-mono text-xs text-[#71717A] flex justify-between mb-1">
          <span>world_backup_apr2026.tar.gz</span>
          <span className="text-[#22D3EE]">● running</span>
        </div>
        {BACKUP_SEGS.map((seg) => (
          <div key={seg.label}>
            <div className="flex justify-between font-mono text-[10px] text-[#3f3f46] mb-1.5">
              <span>{seg.label}</span>
              <span>{seg.w}</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#27272A] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#22D3EE] origin-left"
                style={{
                  width: seg.w,
                  animation: `barScaleLoop 3.5s ease-in-out ${seg.delay} infinite`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

const FILE_TREE = [
  { depth: 0, name: '📁 survival', active: false },
  { depth: 1, name: '📁 world', active: false },
  { depth: 2, name: '📄 level.dat', active: false },
  { depth: 2, name: '📁 region', active: false },
  { depth: 1, name: '📄 server.properties', active: true },
  { depth: 1, name: '📁 plugins', active: false },
  { depth: 2, name: '📦 EssentialsX-2.21.0.jar', active: false },
  { depth: 2, name: '📦 LuckPerms-5.4.98.jar', active: false },
  { depth: 1, name: '📁 mods', active: false },
  { depth: 2, name: '🧩 sodium-0.6.0.jar', active: false },
];

const BgFiles = memo(function BgFiles() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <div
        className="w-[300px] bg-[#09090B] border border-[#27272A] rounded-xl overflow-hidden opacity-[0.22]"
        style={{ animation: 'featureFloat 5s ease-in-out 1s infinite alternate' }}
      >
        <div className="px-4 py-2.5 border-b border-[#27272A] bg-[#18181B] text-[10px] font-mono text-[#71717A]">
          File Manager — survival
        </div>
        <div className="p-3 space-y-0.5 font-mono text-[11px]">
          {FILE_TREE.map((item, i) => (
            <div
              key={i}
              className={`py-0.5 rounded ${
                item.active ? 'bg-[#7C3AED]/20 text-[#7C3AED]' : 'text-[#71717A]'
              }`}
              style={{ paddingLeft: `${item.depth * 14 + 8}px` }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

const BgBlueprints = memo(function BgBlueprints() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="bpDots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#22D3EE" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bpDots)" />
        </svg>
      </div>
      {/* Template card */}
      <div
        className="relative w-64 bg-[#18181B] border border-[#22D3EE]/40 rounded-xl p-5 opacity-[0.25]"
        style={{ animation: 'featureFloat 5s ease-in-out 0.5s infinite alternate' }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-[#22D3EE]">Blueprint</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] border border-[#22D3EE]/30 text-[#22D3EE] font-mono">
            template
          </span>
        </div>
        <div className="h-2 w-28 rounded-full bg-[#22D3EE]/30 mb-5" />
        <div className="text-[10px] font-mono text-[#71717A] flex justify-between mb-1.5">
          <span>RAM</span>
          <span>4 GB cap</span>
        </div>
        <div className="relative h-2 bg-[#27272A] rounded-full overflow-visible mb-1">
          <div className="h-full w-[62%] bg-[#22D3EE]/60 rounded-full" />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-0.5 h-5 bg-red-400/70 rounded-full"
            style={{ left: 'calc(62% - 1px)' }}
          />
        </div>
        <div className="text-right text-[10px] font-mono text-red-400/60 pr-[35%]">▲ max</div>
        <div className="mt-4 space-y-2">
          <div className="h-1.5 w-32 rounded-full bg-[#27272A]" />
          <div className="h-1.5 w-20 rounded-full bg-[#27272A]" />
        </div>
      </div>
    </div>
  );
});

function FrameBackground({ index }: { index: number }) {
  switch (index) {
    case 0: return <BgProjects />;
    case 1: return <BgLifecycle />;
    case 2: return <BgConsole />;
    case 3: return <BgMetrics />;
    case 4: return <BgContent />;
    case 5: return <BgBackups />;
    case 6: return <BgFiles />;
    case 7: return <BgBlueprints />;
    default: return null;
  }
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FeatureScroll() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const update = () => {
      if (outerRef.current) {
        const rect = outerRef.current.getBoundingClientRect();
        const scrolled = -rect.top;
        const total = rect.height - window.innerHeight;
        if (total > 0) {
          const p = Math.max(0, Math.min(1, scrolled / total));
          // Only trigger a re-render when progress meaningfully changes
          setProgress(prev => (Math.abs(prev - p) > 0.001 ? p : prev));
        }
      }
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const frameFloat = progress * (FRAME_COUNT - 1);
  const currentFrame = Math.min(Math.floor(frameFloat), FRAME_COUNT - 1);
  const rawT = frameFloat - currentFrame;
  const t = easeInOut(rawT);

  const activeDot = t >= 0.5 ? Math.min(currentFrame + 1, FRAME_COUNT - 1) : currentFrame;

  return (
    <>
      {/* Section intro */}
      <section className="py-16 px-6 border-t border-[#27272A]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-[#71717A] leading-relaxed">
            Everything you need, nothing you don&apos;t.{' '}
            <span className="text-[#F4F4F5]">No plugins. No SaaS tier. No phone-home.</span>{' '}
            The features below ship in every install.
          </p>
        </div>
      </section>

      {/* Sticky scroll outer — 700vh so user scrolls through 8 frames */}
      <div ref={outerRef} style={{ height: '700vh' }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden bg-[#09090B]">
          {frames.map((frame, i) => {
            const isLast = i === FRAME_COUNT - 1;
            let opacity: number;
            if (i === currentFrame) {
              opacity = isLast ? 1 : 1 - t;
            } else if (i === currentFrame + 1) {
              opacity = t;
            } else {
              opacity = 0;
            }

            const textY =
              i === currentFrame
                ? -t * 28
                : i === currentFrame + 1
                ? (1 - t) * 28
                : 28;

            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{ opacity, willChange: 'opacity' }}
                aria-hidden={opacity < 0.1}
              >
                <FrameBackground index={i} />
                <div
                  className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8"
                  style={{ transform: `translateY(${textY}px)`, willChange: 'transform' }}
                >
                  <span
                    className="block text-[11px] font-bold tracking-[0.3em] uppercase mb-6"
                    style={{ color: frame.accent }}
                  >
                    {frame.label}
                  </span>
                  <h2
                    className="font-bold text-[#F4F4F5] leading-[1.05] tracking-tight mb-6 max-w-3xl"
                    style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
                  >
                    {frame.headline}
                  </h2>
                  <p className="text-xl md:text-2xl text-[#71717A] max-w-xl leading-relaxed">
                    {frame.subline}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Progress dots — right edge */}
          <div
            className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30"
            aria-hidden="true"
          >
            {frames.map((frame, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: i === activeDot ? 8 : 5,
                  height: i === activeDot ? 8 : 5,
                  backgroundColor: i === activeDot ? frame.accent : '#3f3f46',
                  transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* Frame counter — bottom center */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] text-[#3f3f46] z-20 tabular-nums">
            {String(activeDot + 1).padStart(2, '0')} / {String(FRAME_COUNT).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Transition out line */}
      <div className="py-14 px-6 text-center border-t border-[#27272A]">
        <p className="text-lg text-[#71717A]">
          And when you&apos;re ready to go further —{' '}
          <span className="text-[#F4F4F5]">there are modules for that.</span>{' '}
          <span className="text-[#7C3AED]">↓</span>
        </p>
      </div>
    </>
  );
}
