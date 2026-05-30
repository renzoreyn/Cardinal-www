import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Scintillae | Cardinal',
  description: 'Scintillae in Cardinal: perception, needs, survival.',
}

const PERCEPTION = [
  { title: 'Local radius vision', text: 'Forests reduce range. Plains extend it.' },
  { title: 'Proximity detection', text: 'Entity awareness within local bounds only.' },
  { title: 'Environmental sampling', text: 'Resource smell, temperature gradient, sound approximation.' },
  { title: 'Directional awareness', text: 'Which way something is, not just that it exists.' },
  { title: 'Fog of war', text: 'Explored cells only. Confidence decays. Shared locations pass through social Continuity.' },
]

const NEEDS = [
  ['Hunger', 'Health degradation, cognitive slowdown'],
  ['Thirst', 'Faster health degradation'],
  ['Temperature', 'Hypothermia / heat exhaustion'],
  ['Fatigue', 'Reduced perception, impaired action'],
  ['Health', 'Death at zero'],
  ['Safety', 'Elevated fear state, avoidance behavior'],
  ['Fear', 'Decision distortion, flight responses'],
]

const ACTIONS = ['Foraging and hunting', 'Gathering and caching', 'Crafting primitives', 'Shelter and fire', 'Migration', 'Cooperation', 'Conflict']

const thStyle = { padding: '0.75rem 1rem', textAlign: 'left' as const, background: 'var(--bg-panel)', color: 'var(--accent)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, borderBottom: '1px solid var(--border-soft)' }
const tdStyle = { padding: '0.75rem 1rem', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-soft)' }

export default function AgentsPage() {
  return (
    <>
      <PageHero iconName="Sparkles" title="Scintillae" desc="Scintillae spawn as blank systems. No Continuity. No culture. No explanation of Cardinal." />

      {/* Initialization */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '1rem' }}>Initialization</p>
            <pre style={{ margin: '0 0 1.5rem', padding: '1.15rem 1.25rem', background: 'var(--bg-code)', border: '1px solid var(--border-soft)', borderRadius: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', lineHeight: 1.55, color: 'var(--text-muted)', overflowX: 'auto' }}>
              {`Scintilla A\nScintilla B\n\nand survival pressure.`}
            </pre>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote style={{ margin: '0 0 1.5rem', padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', maxWidth: '36rem' }}>
              Starting conditions matter.
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ color: 'var(--text-muted)', maxWidth: '52ch' }}>
              <p style={{ margin: '0 0 1rem' }}>Default run: 30 Scintillae in 3 groups, resource-moderate zone, dispersed spawn. Must find each other.</p>
              <p style={{ margin: 0 }}>Stress-test runs: 4 Scintillae in a harsh biome. Open sandbox: 30 in a valley with rivers on three sides. The starting condition is part of the experiment design.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Perception */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Perception</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>No knowledge that wasn&apos;t earned</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1rem' }}>
            {PERCEPTION.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <article style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px', padding: '1.35rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, margin: '0 0 0.4rem', color: 'var(--text)' }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--text-dim)' }}>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-dim)', fontSize: '0.9375rem' }}>No global awareness. No map of Cardinal.</p>
          </Reveal>
        </div>
      </section>

      {/* Needs */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Needs system</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>They&apos;re decay functions</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ overflowX: 'auto', border: '1px solid var(--border-soft)', borderRadius: '10px', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem', minWidth: 480 }}>
                <thead><tr><th style={thStyle}>Need</th><th style={thStyle}>Failure consequence</th></tr></thead>
                <tbody>
                  {NEEDS.map(([need, consequence], i) => (
                    <tr key={need}><td style={{ ...tdStyle, borderBottom: i < NEEDS.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>{need}</td><td style={{ ...tdStyle, borderBottom: i < NEEDS.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>{consequence}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ color: 'var(--text-muted)', maxWidth: '52ch', margin: 0 }}>Needs aren&apos;t philosophical. Ignore them long enough and the Scintilla stops. A fatigued, fearful Scintilla makes worse decisions about food. A Scintilla with zero stamina cannot run from a predator — they can only wait.</p>
          </Reveal>
        </div>
      </section>

      {/* Continuity / Tendencies */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'linear-gradient(180deg, var(--bg-raised) 0%, var(--bg-panel) 50%, var(--bg-raised) 100%)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }} className="split-grid">
          <div>
            <Reveal>
              <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Continuity</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, lineHeight: 1.2, margin: '0 0 1.25rem', color: 'var(--text)' }}>Weights, not story</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ color: 'var(--text-muted)', maxWidth: '52ch', marginBottom: '1.5rem' }}>
                <p style={{ margin: '0 0 1rem' }}>Curiosity, aggression, sociability, trust (per-relationship), fear, loyalty, ambition. Noise applied to decision-making under pressure.</p>
                <p style={{ margin: 0 }}>Tendencies shift through experience. Slowly, not dramatically. The Substrate reads and writes this state each tick.</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote style={{ margin: '0 0 2rem', padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', maxWidth: '36rem' }}>
                Survival is the selection pressure. There&apos;s no score. There&apos;s no win state. There&apos;s just the next generation, or there isn&apos;t.
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/memory" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px', background: 'var(--crimson-bright)', color: '#fff', boxShadow: '0 4px 24px -6px var(--crimson-glow)' }}>
                Continuity & communication <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <aside>
            <Reveal delay={0.1}>
              <div style={{ padding: '1.25rem', background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, margin: '0 0 0.85rem', color: 'var(--text)' }}>Survival actions</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {ACTIONS.map((a, i, arr) => (
                    <li key={a} style={{ padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--text-dim)', borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>{a}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
        <style>{`@media (min-width: 900px) { .split-grid { grid-template-columns: 1.15fr 0.85fr !important; gap: 3rem !important; } }`}</style>
      </section>
    </>
  )
}
