import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Emergence | Cardinal',
  description: 'Emergence targets and degenerate states in Cardinal.',
}

const TARGETS = [
  ['Social groups', 'Consistent proximity clustering'],
  ['Settlements', 'Repeated return to fixed location'],
  ['Specialization', 'Scintillae consistently performing a single role'],
  ['Trade', 'Bidirectional resource transfer across Scintillae'],
  ['Leadership', 'Behavioral following patterns, resource deference'],
  ['Territorial behavior', 'Conflict triggered by location, not just scarcity'],
  ['Rituals', 'Repeated non-survival group behaviors'],
  ['Proto-language', 'Stable shared token set across a group'],
  ['Cultural identity', 'Group-specific behavior divergence from others'],
  ['Collapse', 'Population crash following resource or social failure'],
]

const DEGENERATE = [
  { title: 'Permanent stagnation', text: 'Scintillae survive but never form groups. Solo survival loops. No cultural transmission.' },
  { title: 'Extinction spiral', text: 'Population below critical mass. Reproduction fails. Cardinal goes quiet.' },
  { title: 'Monoculture lock', text: 'One behavioral pattern dominates. Mutation pressure can\'t break it.' },
  { title: 'Knowledge death', text: 'Critical survival technique lost between generations. Group regresses.' },
  { title: 'War equilibrium', text: 'Two groups in persistent low-grade conflict. Too weakened to collapse or stabilize.' },
]

const POST_MVP = [
  'Language emergence — token co-occurrence, stabilisation, dialect divergence across groups',
  'Naming system — scintillae develop names for recurring locations and entities',
  'Generational cultural inheritance — knowledge transmitted parent→child, always lossy',
  'Institutional behavior — settlements, leadership, norms, trade routes, rituals',
  'Terrain memory — desire paths form from repeated movement, visible as map heat layer',
  'Death traces — corpses as scavenger resource and fear memory trigger for witnesses',
  'Signal propagation — alarm calls spread beyond visual radius; herds react to distant threats',
  'Weather system — storms that tank temperature and hide prey, forcing adaptation',
  'Elder value — group survival rate measurably drops when last elder dies',
  'Farming emergence — agents tending depleted locations before respawn, unscripted',
  'Learned policy layer — RL or imitation for later generations shaped by cultural exposure',
  'World map expansion — gated by population density, scintillae push into new biomes',
]

const thStyle = { padding: '0.75rem 1rem', textAlign: 'left' as const, background: 'var(--bg-panel)', color: 'var(--accent)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, borderBottom: '1px solid var(--border-soft)' }
const tdStyle = { padding: '0.75rem 1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }

export default function EmergencePage() {
  return (
    <>
      <PageHero iconName="Sparkles" title="Emergence" desc="Things that might appear. Not guaranteed. Not defined." />

      {/* Targets table */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Targets</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>Inferred from behavior</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ overflowX: 'auto', border: '1px solid var(--border-soft)', borderRadius: '10px', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                <thead><tr><th style={thStyle}>Target</th><th style={thStyle}>Early indicator</th></tr></thead>
                <tbody>
                  {TARGETS.map(([target, indicator], i) => (
                    <tr key={target}>
                      <td style={{ ...tdStyle, borderBottom: i < TARGETS.length - 1 ? '1px solid var(--border-soft)' : 'none', color: 'var(--text)', fontWeight: 500 }}>{target}</td>
                      <td style={{ ...tdStyle, borderBottom: i < TARGETS.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>{indicator}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9375rem' }}>Nothing is hardcoded. Everything is inferred from behavior over time.</p>
          </Reveal>
        </div>
      </section>

      {/* Degenerate states */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Degenerate states in Cardinal</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>They&apos;re data, not bugs</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {DEGENERATE.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.07}>
                <article style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px', padding: '1.35rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, margin: '0 0 0.4rem', color: 'var(--text)' }}>{d.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--text-dim)' }}>{d.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35}>
            <blockquote style={{ margin: '0 0 2rem', padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', maxWidth: '36rem' }}>
              These states are interesting. They&apos;re not bugs. They&apos;re data.
            </blockquote>
          </Reveal>
          <Reveal delay={0.4}>
            <Link href="/simulation" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px', background: 'var(--crimson-bright)', color: '#fff', boxShadow: '0 4px 24px -6px var(--crimson-glow)' }}>
              Substrate loop <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Post-MVP */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Post-MVP</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 0.75rem', color: 'var(--text)' }}>Deferred until the survival loop is stable</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 1.5rem', fontSize: '0.9375rem' }}>Research targets, not MVP scope. Build order lives on the roadmap.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {POST_MVP.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: 'var(--crimson-bright)', marginTop: '0.55rem', display: 'block' }} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/roadmap" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px', background: 'var(--crimson-bright)', color: '#fff', boxShadow: '0 4px 24px -6px var(--crimson-glow)' }}>
              MVP Roadmap <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
