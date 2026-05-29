import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Inside Cardinal | Cardinal',
  description: 'Inside Cardinal: environment, seasons, degenerate states.',
}

const FIELDS = [
  { formula: 'R(x, y, t)', icon: '🌾', title: 'Resource density', text: 'Regenerates slowly. Depletes under sustained use.' },
  { formula: 'T(x, y, t)', icon: '🌡', title: 'Temperature', text: 'Varies by season. Cold stress, heat stress.' },
  { formula: 'C(x, y)', icon: '👣', title: 'Traversal cost', text: 'Static per terrain type.' },
  { formula: 'H(x, y, t)', icon: '💀', title: 'Hazard probability', text: 'Accumulates from events.' },
]

const ENTITIES = [
  { title: 'Small prey', text: 'Low risk. 0.4 hunger yield (stock 4–12 per herd). Respawns with random new stock.' },
  { title: 'Large prey', text: 'High risk. 0.8 hunger yield. Respawns every 15 sim days.' },
  { title: 'Apex', text: 'Lethal. Patrols a radius, attacks on proximity. Respawns every 30 sim days.' },
  { title: 'Flora', text: 'Berry bush, fruit tree, hardwood, reed. Seasonal availability. Some finite.' },
  { title: 'Water source', text: 'Infinite. Detectable from 8 cells. First Scintilla to find it has a survival edge.' },
  { title: 'Terrain objects', text: 'Cave (natural shelter), rock deposit (finite, never respawns). Scarcity drives migration.' },
]

const DEGENERATE = [
  { label: 'Collapse', title: 'Resource collapse', desc: 'Sustained overharvesting depletes a region permanently. Scintillae either migrate or die. This is not a bug.' },
  { label: 'Hazard', title: 'Dead zone formation', desc: 'Areas permanently hazardous through event accumulation: fire spread, disease, territorial conflict residue.' },
  { label: 'Isolation', title: 'Isolation pocket', desc: 'Geography that cuts off agent groups from the rest of Cardinal — potentially forcing independent development.' },
]

const tableStyle = { width: '100%', borderCollapse: 'collapse' as const, fontSize: '0.875rem' }
const thStyle = { padding: '0.75rem 1rem', textAlign: 'left' as const, background: 'var(--bg-panel)', color: 'var(--accent)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, borderBottom: '1px solid var(--border-soft)' }
const tdStyle = { padding: '0.75rem 1rem', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-soft)' }

export default function WorldPage() {
  return (
    <>
      <PageHero iconName="Globe" title="Inside Cardinal" desc="Everything is just terrain until Scintillae start treating it like something more." />

      {/* Environment */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Environment</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, lineHeight: 1.2, margin: '0 0 1.25rem', color: 'var(--text)' }}>Persistent space inside Cardinal</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ color: 'var(--text-muted)', maxWidth: '52ch', marginBottom: '2rem' }}>
              <p style={{ margin: '0 0 1rem' }}>MVP runs on a 1000×1000 grid in memory, roughly 10km². Nothing is handed in at spawn.</p>
              <p style={{ margin: 0 }}>Post-MVP, Cardinal can scale toward a ~10km continent. Expansion stays gated by Scintilla population density and exploration. Cardinal doesn&apos;t grow until something pushes into it.</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {[['1000²', 'Grid cells'], ['0', 'Starting knowledge']].map(([v, l]) => (
                <div key={v} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, color: 'var(--crimson-bright)', marginBottom: '0.35rem' }}>{v}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', listStyle: 'none', padding: 0, margin: 0 }}>
              {['Forests', 'Rivers', 'Mountains', 'Plains', 'Caves', 'Coastlines', 'Dangerous zones'].map(b => (
                <li key={b} style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', fontWeight: 500, border: '1px solid var(--border-soft)', borderRadius: '100px', color: 'var(--text-muted)', background: 'var(--bg-panel)' }}>{b}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Fields */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'linear-gradient(180deg, var(--bg-raised) 0%, var(--bg-panel) 50%, var(--bg-raised) 100%)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Environment fields</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>Time-dependent pressure</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1rem' }}>
            {FIELDS.map((f, i) => (
              <Reveal key={f.formula} delay={i * 0.07}>
                <article style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px', padding: '1.35rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>{f.formula}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, margin: '0 0 0.4rem', color: 'var(--text)' }}>{f.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--text-dim)' }}>{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal cycle */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }} className="split-grid">
          <div>
            <Reveal>
              <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Seasonal cycle</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, lineHeight: 1.2, margin: '0 0 1.25rem', color: 'var(--text)' }}>They just notice food gets harder</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <pre style={{ margin: '0 0 1.5rem', padding: '1.15rem 1.25rem', background: 'var(--bg-code)', border: '1px solid var(--border-soft)', borderRadius: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', lineHeight: 1.55, color: 'var(--text-muted)', overflowX: 'auto' }}>
                {`1 real hour  = 1 simulated day\n1 real month = ~1 simulated year (4 seasons)`}
              </pre>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ color: 'var(--text-muted)', maxWidth: '52ch' }}>
                <p style={{ margin: '0 0 1rem' }}>Scintillae don&apos;t know what seasons are. They just notice that food gets harder to find, and it gets cold, and some of them don&apos;t survive it.</p>
                <p style={{ margin: 0 }}><strong style={{ color: 'var(--text)' }}>That&apos;s the point.</strong></p>
              </div>
            </Reveal>
          </div>
          <aside>
            <Reveal delay={0.1}>
              <div style={{ padding: '1.25rem', background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, margin: '0 0 0.85rem', color: 'var(--text)' }}>Seasons affect</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Resource availability', 'Temperature fields', 'Migration incentives', 'Reproduction timing'].map((item, i, arr) => (
                    <li key={item} style={{ padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--text-dim)', borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
        <style>{`@media (min-width: 900px) { .split-grid { grid-template-columns: 1.15fr 0.85fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* Entities */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'linear-gradient(180deg, var(--bg-raised) 0%, var(--bg-panel) 50%, var(--bg-raised) 100%)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Entities</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.25rem', color: 'var(--text)' }}>Discovered, not given</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote style={{ margin: '0 0 2rem', padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', maxWidth: '36rem' }}>
              None of it is known at spawn. Knowledge dies with the carrier if untransmitted.
            </blockquote>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1rem' }}>
            {ENTITIES.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <article style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px', padding: '1.35rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, margin: '0 0 0.4rem', color: 'var(--text)' }}>{e.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--text-dim)' }}>{e.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Degenerate states */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Degenerate states in Cardinal</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 2rem', color: 'var(--text)' }}>Failure modes worth tracking</h2>
          </Reveal>
          <div style={{ paddingLeft: '1.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '0.25rem', top: '0.35rem', bottom: '0.35rem', width: 2, background: 'linear-gradient(180deg, var(--crimson-bright), var(--border))', borderRadius: 1 }} />
            {DEGENERATE.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <div style={{ position: 'relative', padding: '1rem 0 1rem 1.25rem' }}>
                  <div style={{ position: 'absolute', left: '-1.35rem', top: '1.35rem', width: 8, height: 8, borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--crimson-bright)' }} />
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.25rem', marginTop: 0 }}>{d.label}</p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, margin: '0 0 0.25rem', color: 'var(--text)' }}>{d.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-dim)', fontSize: '0.9375rem', lineHeight: 1.55 }}>{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/agents" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px', background: 'var(--crimson-bright)', color: '#fff', boxShadow: '0 4px 24px -6px var(--crimson-glow)' }}>
                Scintillae <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
