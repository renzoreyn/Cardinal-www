import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Substrate | Cardinal',
  description: 'The Substrate: ticks, events, and immutable history in Cardinal.',
}

const TICKS = [
  {
    label: 'Micro tick',
    title: 'Every frame',
    desc: 'Scintilla movement and physics. Resource consumption and regeneration. Environmental state update. Collision and proximity detection.',
  },
  {
    label: 'Cognitive tick',
    title: 'Every N micro ticks',
    desc: 'Need state evaluation. Action selection via policy. Continuity read/write. Social evaluation. Communication signal emission and reception.',
  },
  {
    label: 'Chronicle tick',
    title: 'Every simulated day',
    desc: 'Event aggregation and tagging. Continuity decay application. History compression. Cultural marker evaluation. Groq narration. SQLite flush.',
  },
]

const STACK = [
  { title: 'Engine', text: 'Node.js' },
  { title: 'Persistence', text: 'SQLite / better-sqlite3' },
  { title: 'LLM', text: 'Groq' },
  { title: 'World grid', text: 'Float32Array, 1000×1000, 4 channels — biomes from Azgaar voronoi rasterization' },
  { title: 'Deploy', text: 'Railway' },
  { title: 'Observer', text: 'Express + HTML/CSS/JS (Railway) — Vercel frontend split planned Phase 06' },
]

const EVENTS = [
  'EVENT_SCINTILLA_BORN', 'EVENT_SCINTILLA_DIED', 'EVENT_SCINTILLA_REPRODUCED',
  'EVENT_KNOWLEDGE_TRANSFERRED', 'EVENT_KNOWLEDGE_LOST', 'EVENT_FIRE_DISCOVERED',
  'EVENT_SHELTER_BUILT', 'EVENT_CONFLICT_INITIATED', 'EVENT_CONFLICT_RESOLVED',
  'EVENT_SETTLEMENT_FORMED', 'EVENT_LANGUAGE_TOKEN_FORMED', 'EVENT_SEASON_CHANGED',
]

export default function SimulationPage() {
  return (
    <>
      <PageHero iconName="Cpu" title="Substrate loop" desc="The Substrate only appends history. Nothing inside Cardinal gets edited out." />

      {/* Ticks */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '1rem' }}>Ticks</p>
          </Reveal>
          <div style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '2rem' }}>
            <div style={{ position: 'absolute', left: '0.25rem', top: '0.35rem', bottom: '0.35rem', width: 2, background: 'linear-gradient(180deg, var(--crimson-bright), var(--border))', borderRadius: 1 }} />
            {TICKS.map((tick, i) => (
              <Reveal key={tick.label} delay={i * 0.1}>
                <div style={{ position: 'relative', padding: '1rem 0 1rem 1.25rem' }}>
                  <div style={{ position: 'absolute', left: '-1.35rem', top: '1.35rem', width: 8, height: 8, borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--crimson-bright)' }} />
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--crimson-bright)', margin: '0 0 0.25rem' }}>{tick.label}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, margin: '0 0 0.25rem', color: 'var(--text)' }}>{tick.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: '0.9375rem', lineHeight: 1.55 }}>{tick.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35}>
            <blockquote style={{ margin: 0, padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', maxWidth: '40rem' }}>
              95% pure heuristic JS. Groq only for chronicle narration, Continuity distillation, and communication utterances, through <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72em', color: 'var(--text-muted)', background: 'var(--bg-code)', padding: '0.1em 0.35em', borderRadius: 3, fontStyle: 'normal' }}>groq/client.js</code> only.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Implementation */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Implementation</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>What the Substrate runs on</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {STACK.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <article style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px', padding: '1.35rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, margin: '0 0 0.4rem', color: 'var(--text)' }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--text-dim)' }}>{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <pre style={{ margin: 0, padding: '1.15rem 1.25rem', background: 'var(--bg-code)', border: '1px solid var(--border-soft)', borderRadius: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', lineHeight: 1.55, color: 'var(--text-muted)', overflowX: 'auto' }}>
{`cardinal/
├── world/          # grid, seasons, entities
├── scintillae/     # state, perception, policy
├── continuity/     # layers, decay, knowledge
├── communication/  # signals, language
├── substrate/      # micro, cognitive, chronicle ticks
├── db/             # schema, flush
├── observer/       # immutable event log
├── groq/           # all Groq calls
├── config.js
└── index.js`}
            </pre>
          </Reveal>
        </div>
      </section>

      {/* Events */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'linear-gradient(180deg, var(--bg-raised) 0%, var(--bg-panel) 50%, var(--bg-raised) 100%)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Event system</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>Immutable events</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {EVENTS.map(e => (
                <span key={e} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '6px' }}>
                  {e}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ color: 'var(--text-muted)', maxWidth: '52ch', margin: 0, fontSize: '0.9375rem' }}>
              Chronicle tick reads the event stream and builds compressed narrative: not &ldquo;scintilla 0042 gathered berries at tick 18273&rdquo; but &ldquo;group near the river valley has sustained itself on river resources for 14 simulated years.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Logging */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-read))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Logging</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>The why alongside the what</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <pre style={{ margin: '0 0 1.5rem', padding: '1.15rem 1.25rem', background: 'var(--bg-code)', border: '1px solid var(--border-soft)', borderRadius: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', lineHeight: 1.55, color: 'var(--text-muted)', overflowX: 'auto' }}>
{`{
  "tick": 18273,
  "scintilla": "scintilla_0042",
  "action": "gather",
  "resource": "berries",
  "location": [22, 91],
  "need_state": {
    "hunger": 0.61,
    "thirst": 0.43,
    "fatigue": 0.28,
    "fear": 0.12
  },
  "trigger": "hunger_threshold_crossed"
}`}
            </pre>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem', fontSize: '0.9375rem' }}>An action without its trigger is just noise. Invisible to Scintillae. Readable by the Administrator.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/observer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px', background: 'var(--crimson-bright)', color: '#fff', boxShadow: '0 4px 24px -6px var(--crimson-glow)' }}>
              Observer layer <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
