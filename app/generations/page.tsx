import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Generations | Cardinal',
  description: 'Generational inheritance, reproduction, and death in Cardinal.',
}

const LIFE_STAGES = [
  ['Child', '0–5 yr', 'Very high', 'Very low', 'Low', 'No'],
  ['Adolescent', '5–15 yr', 'High', 'Moderate', 'Moderate', 'Rare'],
  ['Adult', '15–45 yr', 'Moderate', 'High', 'High', 'Yes'],
  ['Elder', '45+ yr', 'Low', 'Declining', 'Very high', 'No'],
]

const DEATH_CAUSES = [
  ['Starvation / dehydration / cold / injury', 'Health reaches 0'],
  ['Old age', 'Lifespan reached (45–75 sim years)'],
  ['Infant mortality', 'First 2 sim days, 15% chance'],
  ['Conflict', 'Lethal resolution'],
]

const INSTITUTIONAL = [
  { title: 'Settlements', text: 'Repeated return to a location. It becomes home.' },
  { title: 'Leadership', text: 'High trust + resource success. Proto-authority.' },
  { title: 'Norms', text: 'Behaviors punished or rewarded consistently.' },
  { title: 'Trade routes', text: 'Exchange paths that survive across Scintillae.' },
  { title: 'Rituals', text: 'Repeated group behaviors with no direct survival function.' },
]

const thStyle = { padding: '0.75rem 1rem', textAlign: 'left' as const, background: 'var(--bg-panel)', color: 'var(--accent)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, borderBottom: '1px solid var(--border-soft)' }
const tdStyle = { padding: '0.75rem 1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }

export default function GenerationsPage() {
  return (
    <>
      <PageHero iconName="GitBranch" title="Generations" desc="Children are not extensions of parents. They are new systems starting from near-zero." />

      {/* Life stages */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '1rem' }}>Life stages</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ overflowX: 'auto', border: '1px solid var(--border-soft)', borderRadius: '10px', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                <thead>
                  <tr>
                    {['Stage', 'Age', 'Learning', 'Survival', 'Continuity', 'Reproduction'].map(h => (
                      <th key={h} style={thStyle}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {LIFE_STAGES.map((row, i) => (
                    <tr key={row[0]}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ ...tdStyle, borderBottom: i < LIFE_STAGES.length - 1 ? '1px solid var(--border-soft)' : 'none', color: j === 0 ? 'var(--text)' : 'var(--text-muted)', fontWeight: j === 0 ? 500 : 400 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote style={{ margin: 0, padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', maxWidth: '40rem' }}>
              A group that protects its elders has better knowledge retention. A group that doesn&apos;t, forgets faster.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Reproduction */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }} className="split-grid">
          <div>
            <Reveal>
              <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Reproduction</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, lineHeight: 1.2, margin: '0 0 1.25rem', color: 'var(--text)' }}>Under conditions, not command</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ color: 'var(--text-muted)', maxWidth: '52ch', marginBottom: '1.5rem' }}>
                <p style={{ margin: '0 0 1rem' }}>Conditions-based, not scheduled. Trust threshold, resource surplus, shelter, safety, and bonding duration all required. Scintillae can&apos;t reproduce on first contact.</p>
                <p style={{ margin: '0 0 1rem' }}>Gestation is 9 simulated days. Mother needs decay faster. Pregnancy can fail. Infant mortality is 15% in the first 2 simulated days. Always one offspring.</p>
                <p style={{ margin: 0 }}>Cardinal doesn&apos;t go easier on children. That&apos;s intentional.</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <pre style={{ margin: 0, padding: '1.15rem 1.25rem', background: 'var(--bg-code)', border: '1px solid var(--border-soft)', borderRadius: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', lineHeight: 1.55, color: 'var(--text-muted)', overflowX: 'auto' }}>
                {`trait_child = weighted_avg(trait_parent_a, trait_parent_b) + mutation_noise`}
              </pre>
            </Reveal>
          </div>
          <aside>
            <Reveal delay={0.1}>
              <div style={{ padding: '1.25rem', background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, margin: '0 0 0.85rem', color: 'var(--text)' }}>Children inherit</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Genetic trait subset + mutation', 'Zero episodic Continuity', 'Weak procedural priming', 'Same survival pressure'].map((item, i, arr) => (
                    <li key={item} style={{ padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--text-dim)', borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
        <style>{`@media (min-width: 900px) { .split-grid { grid-template-columns: 1.15fr 0.85fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* Death */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Death</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>Four causes</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ overflowX: 'auto', border: '1px solid var(--border-soft)', borderRadius: '10px', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 400 }}>
                <thead><tr><th style={thStyle}>Cause</th><th style={thStyle}>Condition</th></tr></thead>
                <tbody>
                  {DEATH_CAUSES.map(([cause, condition], i) => (
                    <tr key={cause}>
                      <td style={{ ...tdStyle, borderBottom: i < DEATH_CAUSES.length - 1 ? '1px solid var(--border-soft)' : 'none' }}>{cause}</td>
                      <td style={{ ...tdStyle, borderBottom: i < DEATH_CAUSES.length - 1 ? '1px solid var(--border-soft)' : 'none', color: 'var(--text-dim)' }}>{condition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Institutional inheritance */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Institutional inheritance</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1rem', color: 'var(--text)' }}>Behaviors that didn&apos;t break</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote style={{ margin: '0 0 2rem', padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text-muted)', maxWidth: '36rem' }}>
              Post-MVP. Deferred until the survival loop is stable.
            </blockquote>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {INSTITUTIONAL.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px', padding: '1.35rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, margin: '0 0 0.4rem', color: 'var(--text)' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--text-dim)' }}>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35}>
            <p style={{ color: 'var(--text-muted)', maxWidth: '52ch', margin: '0 0 2rem', fontSize: '0.9375rem' }}>Transmission is always lossy. A technique passed through five Scintillae is not the same technique that started. This is a feature.</p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link href="/emergence" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px', background: 'var(--crimson-bright)', color: '#fff', boxShadow: '0 4px 24px -6px var(--crimson-glow)' }}>
              Emergence targets <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
