import React, { useState, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'
import { Orbit as OrbitIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SolarSystemItem {
  id: string
  label: string
  type?: string
  badge?: string
  desc?: string
  color: string
  svg: ReactNode
}

export interface OrbitConfig {
  id: string
  name: string
  radiusClass: string
  radiusPx: number
  speed: number
  items: SolarSystemItem[]
}

export interface SolarSystemProps extends HTMLAttributes<HTMLDivElement> {
  centerLogo?: string | ReactNode
  centerLogoAlt?: string
  orbits?: OrbitConfig[]
  isPaused?: boolean
  speedMultiplier?: number
}

const IconImg = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="h-5 w-5 object-contain" loading="lazy" decoding="async" />
)

const DefaultIcons = {
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  docker: <IconImg src="https://cdn.simpleicons.org/docker/2496ED" alt="" />,
  kubernetes: <IconImg src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="" />,
  azure: <IconImg src="/Logo/azure.png" alt="" />,
  openai: <IconImg src="https://cdn.simpleicons.org/openai/FFFFFF" alt="" />,
  claude: <IconImg src="https://cdn.simpleicons.org/anthropic/D4A27F" alt="" />,
  codex: <IconImg src="/Logo/codex.svg" alt="" />,
  neo4j: <IconImg src="/Logo/neo4j.png" alt="" />,
  ollama: <IconImg src="https://cdn.simpleicons.org/ollama/FFFFFF" alt="" />,
  copilot: <IconImg src="https://cdn.simpleicons.org/githubcopilot/FFFFFF" alt="" />,
  sap: <IconImg src="https://cdn.simpleicons.org/sap/0FAAFF" alt="" />,
  agentic: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="#38BDF8" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#38BDF8" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
}

export const DEFAULT_ORBITS: OrbitConfig[] = [
  {
    id: 'inner',
    name: 'Inner Ring',
    radiusClass: 'var(--ss-radius-inner)',
    radiusPx: 175,
    speed: 22,
    items: [
      { id: 'react', label: 'React', color: '#61DAFB', svg: DefaultIcons.react },
      { id: 'docker', label: 'Docker', color: '#2496ED', svg: DefaultIcons.docker },
      { id: 'kubernetes', label: 'Kubernetes', color: '#326CE5', svg: DefaultIcons.kubernetes },
      { id: 'azure', label: 'Azure', color: '#0078D4', svg: DefaultIcons.azure },
    ],
  },
  {
    id: 'mid',
    name: 'Middle Ring',
    radiusClass: 'var(--ss-radius-mid)',
    radiusPx: 285,
    speed: 34,
    items: [
      { id: 'openai', label: 'OpenAI', color: '#FFFFFF', svg: DefaultIcons.openai },
      { id: 'claude', label: 'Claude', color: '#D4A27F', svg: DefaultIcons.claude },
      { id: 'codex', label: 'Codex', color: '#10A37F', svg: DefaultIcons.codex },
      { id: 'neo4j', label: 'Neo4j', color: '#008CC1', svg: DefaultIcons.neo4j },
    ],
  },
  {
    id: 'outer',
    name: 'Outer Ring',
    radiusClass: 'var(--ss-radius-outer)',
    radiusPx: 395,
    speed: 48,
    items: [
      { id: 'ollama', label: 'Ollama', color: '#FFFFFF', svg: DefaultIcons.ollama },
      { id: 'copilot', label: 'Copilot', color: '#FFFFFF', svg: DefaultIcons.copilot },
      { id: 'sap', label: 'SAP', color: '#0FAAFF', svg: DefaultIcons.sap },
      { id: 'agentic', label: 'Agentic AI', color: '#38BDF8', svg: DefaultIcons.agentic },
    ],
  },
]

const SOLAR_SYSTEM_CSS = `
.solar-system-root {
  --ss-radius-inner: 175px;
  --ss-radius-mid: 285px;
  --ss-radius-outer: 395px;
}

@media (max-width: 768px) {
  .solar-system-root {
    --ss-radius-inner: 100px;
    --ss-radius-mid: 165px;
    --ss-radius-outer: 230px;
  }
}

@media (max-width: 480px) {
  .solar-system-root {
    --ss-radius-inner: 70px;
    --ss-radius-mid: 115px;
    --ss-radius-outer: 160px;
  }
}

@keyframes ss-orbit-move {
  0% { transform: translate(-50%, -50%) rotateZ(0deg) translateX(var(--orbit-radius)); }
  100% { transform: translate(-50%, -50%) rotateZ(-360deg) translateX(var(--orbit-radius)); }
}

@keyframes ss-billboard-cancel {
  0% { transform: translate(-50%, -50%) rotateZ(0deg) rotateY(10deg) rotateX(-65deg); }
  100% { transform: translate(-50%, -50%) rotateZ(360deg) rotateY(10deg) rotateX(-65deg); }
}

@keyframes ss-sun-pulse {
  0% { transform: scale(0.9); opacity: 0.7; }
  100% { transform: scale(1.1); opacity: 1; }
}

@keyframes ss-spin-cw {
  0% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
  100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(360deg); }
}

@keyframes ss-spin-ccw {
  0% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
  100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(-360deg); }
}

.solar-system-root .animate-ss-orbit {
  animation: ss-orbit-move var(--orbit-duration) linear infinite;
  animation-play-state: var(--orbit-play-state);
}

.solar-system-root .animate-ss-billboard {
  animation: ss-billboard-cancel var(--orbit-duration) linear infinite;
  animation-play-state: var(--orbit-play-state);
}

.solar-system-root .animate-ss-sun-pulse {
  animation: ss-sun-pulse 4s ease-in-out infinite alternate;
}

.solar-system-root .animate-ss-spin-cw {
  animation: ss-spin-cw 20s linear infinite;
}

.solar-system-root .animate-ss-spin-ccw {
  animation: ss-spin-ccw 30s linear infinite;
}

.solar-system-root .orbit-logo-card {
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.45rem 0.95rem;
  background: color-mix(in srgb, var(--background) 72%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid color-mix(in srgb, var(--foreground) 10%, transparent);
  border-radius: 100px;
  font-weight: 600;
  color: var(--foreground);
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  pointer-events: auto;
  transition: border-color 0.3s, color 0.3s, background 0.3s, box-shadow 0.3s, scale 0.3s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
`

type OrbitStyle = CSSProperties & {
  '--orbit-radius'?: string
  '--orbit-duration'?: string
  '--orbit-play-state'?: string
  '--hover-color'?: string
}

export const SolarSystem = React.forwardRef<HTMLDivElement, SolarSystemProps>(
  (
    {
      centerLogo,
      centerLogoAlt = 'zCon Solutions',
      orbits = DEFAULT_ORBITS,
      isPaused = false,
      speedMultiplier = 1,
      className,
      ...props
    },
    ref,
  ) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    const dustItems = [
      { delay: '-4s', radius: '165px', color: '#0096e6' },
      { delay: '-11s', radius: '260px', color: '#38bdf8' },
      { delay: '-19s', radius: '340px', color: '#e11d48' },
      { delay: '-28s', radius: '395px', color: '#0096e6' },
      { delay: '-7s', radius: '200px', color: '#a855f7' },
      { delay: '-15s', radius: '365px', color: '#eab308' },
      { delay: '-23s', radius: '430px', color: '#38bdf8' },
    ]

    const playState = isPaused ? 'paused' : 'running'

    return (
      <div
        ref={ref}
        className={cn(
          'solar-system-root relative flex h-[320px] w-full max-w-[940px] select-none items-center justify-center overflow-visible perspective-[1200px] md:h-[450px]',
          className,
        )}
        {...props}
      >
        <style dangerouslySetInnerHTML={{ __html: SOLAR_SYSTEM_CSS }} />

        <div
          className="absolute flex h-[360px] w-[360px] items-center justify-center md:h-[940px] md:w-[940px]"
          style={{
            transform: 'rotateX(65deg) rotateY(-10deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className="pointer-events-none absolute z-20 flex h-[100px] w-[100px] items-center justify-center md:h-[130px] md:w-[130px]"
            style={{
              transform: 'rotateY(10deg) rotateX(-65deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="animate-ss-sun-pulse absolute z-10 h-[90px] w-[90px] rounded-full bg-primary/25 blur-md md:h-[120px] md:w-[120px]" />

            {centerLogo ? (
              typeof centerLogo === 'string' ? (
                <img
                  className="relative z-20 h-14 w-14 rounded-full border-2 border-primary/40 object-cover shadow-[0_0_30px_rgba(0,150,230,0.35)] md:h-20 md:w-20"
                  src={centerLogo}
                  alt={centerLogoAlt}
                  width={80}
                  height={80}
                />
              ) : (
                <div className="relative z-20 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/40 bg-background p-2 shadow-[0_0_30px_rgba(0,150,230,0.35)] md:h-20 md:w-20">
                  {centerLogo}
                </div>
              )
            ) : (
              <div className="relative z-20 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/40 bg-background p-2 shadow-[0_0_30px_rgba(0,150,230,0.35)] md:h-20 md:w-20">
                <OrbitIcon className="h-8 w-8 animate-spin text-primary" style={{ animationDuration: '10s' }} />
              </div>
            )}

            <div className="animate-ss-spin-cw pointer-events-none absolute h-[110px] w-[110px] rounded-full border border-dashed border-primary/25 md:h-[140px] md:w-[140px]" />
            <div className="animate-ss-spin-ccw pointer-events-none absolute h-[150px] w-[150px] rounded-full border border-dashed border-primary/15 md:h-[185px] md:w-[185px]" />
          </div>

          {dustItems.map((dust, idx) => {
            const style: OrbitStyle = {
              background: dust.color,
              boxShadow: `0 0 6px ${dust.color}`,
              animationDelay: dust.delay,
              animationPlayState: playState,
              animationDuration: `${24 / speedMultiplier}s`,
              '--orbit-radius': dust.radius,
              '--orbit-duration': `${24 / speedMultiplier}s`,
              '--orbit-play-state': playState,
            }
            return (
              <div
                key={idx}
                className="animate-ss-orbit pointer-events-none absolute top-1/2 left-1/2 h-1 w-1 rounded-full opacity-40"
                style={style}
              />
            )
          })}

          {orbits.map((orbit) => (
            <React.Fragment key={orbit.id}>
              <div
                className="pointer-events-none absolute rounded-full border border-dashed border-border/80"
                style={{
                  width: `calc(2 * ${orbit.radiusClass})`,
                  height: `calc(2 * ${orbit.radiusClass})`,
                  boxShadow:
                    'inset 0 0 25px color-mix(in srgb, var(--foreground) 2%, transparent), 0 0 25px color-mix(in srgb, var(--foreground) 2%, transparent)',
                }}
              />

              {orbit.items.map((item, idx, arr) => {
                const delayValue = -(orbit.speed / arr.length) * idx
                const durationValue = orbit.speed / speedMultiplier
                const isHovered = hoveredId === item.id
                const orbitStyle: OrbitStyle = {
                  animationDelay: `${delayValue}s`,
                  animationDuration: `${durationValue}s`,
                  animationPlayState: playState,
                  '--orbit-radius': orbit.radiusClass,
                  '--orbit-duration': `${durationValue}s`,
                  '--orbit-play-state': playState,
                  '--hover-color': item.color,
                  zIndex: isHovered ? 30 : 10,
                  transformStyle: 'preserve-3d',
                }
                const cardStyle: OrbitStyle = {
                  animationDelay: `${delayValue}s`,
                  animationDuration: `${durationValue}s`,
                  animationPlayState: playState,
                  borderColor: isHovered ? item.color : undefined,
                  boxShadow: isHovered
                    ? `0 0 20px rgba(0, 0, 0, 0.45), 0 0 15px ${item.color}55`
                    : undefined,
                  scale: isHovered ? 1.05 : 1,
                  '--orbit-duration': `${durationValue}s`,
                  '--orbit-play-state': playState,
                }

                return (
                  <div
                    key={item.id}
                    className="animate-ss-orbit pointer-events-none absolute top-1/2 left-1/2 h-0 w-0"
                    style={orbitStyle}
                  >
                    <div
                      className="pointer-events-none absolute top-1/2 right-0 z-0 h-[1.5px] origin-right -translate-y-1/2 transition-opacity duration-300"
                      style={{
                        width: orbit.radiusClass,
                        opacity: isHovered ? 1 : 0,
                        background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.15) 20%, ${item.color} 80%, ${item.color} 100%)`,
                        boxShadow: `0 0 8px ${item.color}, 0 0 16px ${item.color}40`,
                      }}
                    />

                    <div
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="orbit-logo-card animate-ss-billboard"
                      style={cardStyle}
                    >
                      <div
                        className="transition-transform duration-300"
                        style={{
                          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                          color: item.color,
                        }}
                      >
                        {item.svg}
                      </div>
                      <span className="text-[11px] tracking-tight md:text-[13px]">{item.label}</span>
                    </div>
                  </div>
                )
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  },
)

SolarSystem.displayName = 'SolarSystem'
