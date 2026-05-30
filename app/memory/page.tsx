import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Continuity & Language | Cardinal',
  description: 'Continuity and language in Cardinal: layers, tokens, knowledge artifacts.',
}

const LAYERS = [
  ['Episodic', 'Specific events ("fire here, survived")', 'Fast'],
  ['Semantic', 'Generalized beliefs ("fire = dangerous")', 'Medium'],
  ['Procedural', 'Action patterns that worked', 'Slow'],
  ['Social', 'Who matters, threat level, trust', 'Medium'],
]

const LANGUAGE_STEPS = [
  { num: '01', title: 'Co-occurrence', desc: 'Repeated signal with context creates weak association in both Scintillae.' },
  { num: '02', title: 'Stabilization', desc: 'Reinforcement across interactions stabilizes into a shared token.' },
  { num: '03', title: 'Imitation', desc: 'Stable tokens transmit to nearby Scintillae.' },
  { num: '04', title: 'Generations', desc: 'Token sets grow, compress, and specialize over time.' },
]

const KNOWLEDGE_CARDS = [
  { title: 'Spread', text: 'Through communication and observation.' },
  { title: 'Mutate', text: 'Confidence degrades. Meaning shifts.' },
  { title: 'Decay', text: 'If no Scintilla practices or transmits it.' },
  { title: 'Myth', text: 'Token survives in social Continuity without anyone knowing how to use it.' },
  { title: 'Fog of war', text: 'Explored set per Scintilla. Confidence decay. Location sharing through social Continuity.' },
]

const thStyle = { padding: '0.75rem 1rem', textAlign: 'left' as const, background: 'var(--bg-panel)', color: 'var(--accent)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, borderBottom: '1px solid var(--border-soft)' }
const tdStyle = { padding: '0.75rem 1rem', color: 'var(--text-muted)' }

export default function MemoryPage() {
  return (
    <>
      <PageHero iconName="Layers" title="Continuity & communication" desc="Continuity is not stable. It fades, distorts, and gets rewritten over time." />

      {/* Layers table */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '1rem' }}>Layers within Continuity</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ overflowX: 'auto', border: '1px solid var(--border-soft)', borderRadius: '10px', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', minWidth: 480 }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Layer</th>
                    <th style={thStyle}>Stores</th>
                    <th style={thStyle}>Decay</th>
                  </tr>
                </thead>
                <tbody>
                  {LAYERS.map(([layer, stores, decay], i) => (
                    <tr key={layer}>
                      <td style={{ ...tdStyle, borderBottom: i < LAYERS.length - 1 ? '1px solid var(--border-soft)' : 'none', fontWeight: 500, color: 'var(--text)' }}>{layer}</td>
                      <td style={{ ...tdStyle, borderBottom: i < LAYERS.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>{stores}</td>
                      <td style={{ ...tdStyle, borderBottom: i < LAYERS.length - 1 ? '1px solid var(--border-soft)' : 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--text-dim)' }}>{decay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote style={{ margin: 0, padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', maxWidth: '40rem' }}>
              What survives in Continuity is what gets used. What gets used shapes what the next generation learns.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Language */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Communication</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, lineHeight: 1.2, margin: '0 0 1.25rem', color: 'var(--text)' }}>There is no language at the start</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color: 'var(--text-muted)', maxWidth: '52ch', margin: '0 0 2rem' }}>Only primitive signals: postural/gestural cues, emotional state broadcast, basic intentional signals (approach, flee, follow, threat).</p>
          </Reveal>

          {/* Timeline flow */}
          <div style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '2rem' }}>
            <div style={{ position: 'absolute', left: '0.25rem', top: '0.35rem', bottom: '0.35rem', width: 2, background: 'linear-gradient(180deg, var(--crimson-bright), var(--border))', borderRadius: 1 }} />
            {LANGUAGE_STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div style={{ position: 'relative', padding: '1rem 0 1rem 1.25rem' }}>
                  <div style={{ position: 'absolute', left: '-1.35rem', top: '1.35rem', width: 8, height: 8, borderRadius: '50%', background: 'var(--bg-raised)', border: '2px solid var(--crimson-bright)' }} />
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--crimson-bright)', margin: '0 0 0.25rem' }}>{step.num}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, margin: '0 0 0.25rem', color: 'var(--text)' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: '0.9375rem', lineHeight: 1.55 }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>Designed to produce shared reference. The minimum viable unit of culture.</p>
          </Reveal>
        </div>
      </section>

      {/* Knowledge artifact */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Knowledge artifact</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>Discrete, moving, changing</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <pre style={{ margin: '0 0 2rem', padding: '1.15rem 1.25rem', background: 'var(--bg-code)', border: '1px solid var(--border-soft)', borderRadius: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', lineHeight: 1.55, color: 'var(--text-muted)', overflowX: 'auto' }}>
{`{
  "id": "knowledge_fire",
  "type": "procedural",
  "origin_scintilla": "scintilla_0042",
  "origin_generation": 1,
  "current_confidence": 0.87,
  "spread_count": 14,
  "mutation_count": 2,
  "last_transmitted": "tick_18903",
  "status": "active"
}`}
            </pre>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {KNOWLEDGE_CARDS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <article style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px', padding: '1.35rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, margin: '0 0 0.4rem', color: 'var(--text)' }}>{c.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--text-dim)' }}>{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <Link href="/generations" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px', background: 'var(--crimson-bright)', color: '#fff', boxShadow: '0 4px 24px -6px var(--crimson-glow)' }}>
              Generations <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
