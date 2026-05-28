import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Philosophy | Cardinal',
  description: 'Cardinal system philosophy: emergence over scripted simulation.',
}

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        iconName="Compass"
        title="System philosophy"
        desc="Cardinal is not scripted. The Substrate doesn't hand out governments, economies, or meaning. Those have to emerge."
      />

      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }} className="split-grid">
          <div>
            <Reveal>
              <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Pressure, not plot</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, lineHeight: 1.2, margin: '0 0 1.25rem', color: 'var(--text)' }}>
                If those appear, they&apos;re not implemented
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ color: 'var(--text-muted)', maxWidth: '52ch', marginBottom: '1rem' }}>
                <p style={{ margin: '0 0 1rem' }}>No predefined governments, professions, morality systems, economies, technology trees, or social hierarchies.</p>
                <p style={{ margin: '0 0 1rem' }}><strong style={{ color: 'var(--text)' }}>They emerge.</strong></p>
                <p style={{ margin: 0 }}>Everything comes from pressure: resources, geography, Continuity, survival, interaction between Scintillae.</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote style={{ margin: '2rem 0', padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem, 3.5vw, 1.5rem)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', maxWidth: '36rem' }}>
                Scintillae are not smart. The Substrate is.
              </blockquote>
            </Reveal>
          </div>
          <aside>
            <Reveal delay={0.1}>
              <div style={{ padding: '1.25rem', background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, margin: '0 0 0.85rem', color: 'var(--text)' }}>Not handed to them</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Governments', 'Professions', 'Morality systems', 'Economies', 'Technology trees', 'Social hierarchies'].map((item, i, arr) => (
                    <li key={item} style={{ padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--text-dim)', borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none', lineHeight: 1.45 }}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
        <style>{`@media (min-width: 900px) { .split-grid { grid-template-columns: 1.15fr 0.85fr !important; gap: 3rem !important; } }`}</style>
      </section>

      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Complexity</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.5rem', color: 'var(--text)' }}>Shallow by design</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ color: 'var(--text-muted)', maxWidth: '52ch', marginBottom: '2rem' }}>
              <p style={{ margin: '0 0 1rem' }}>Complexity emerges from interaction, not from individual Scintilla intelligence.</p>
              <p style={{ margin: 0 }}>The policy is intentionally shallow: no lookahead planning beyond 2–3 steps, no abstract goal representation, no concept of &quot;self&quot; beyond internal state pressure. MVP runs ~95% on pure heuristic JS. Groq enters only for chronicle narration, Continuity distillation, and communication utterances.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <pre style={{ margin: '1.5rem 0', padding: '1.15rem 1.25rem', background: 'var(--bg-code)', border: '1px solid var(--border-soft)', borderRadius: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', lineHeight: 1.55, color: 'var(--text-muted)', overflowX: 'auto' }}>
              <code>
                <span style={{ display: 'block', marginBottom: '0.9rem', paddingBottom: '0.9rem', borderBottom: '1px solid var(--border-soft)', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--accent)' }}>A_t</span> = policy(<span style={{ color: 'var(--accent)' }}>S_t</span>, <span style={{ color: 'var(--accent)' }}>O_t</span>, <span style={{ color: 'var(--accent)' }}>M_t</span>)
                </span>
                {[
                  ['S_t', 'internal state (needs + tendencies)'],
                  ['O_t', 'current observation (local perception)'],
                  ['M_t', 'Continuity state'],
                  ['A_t', 'chosen action'],
                ].map(([k, v]) => (
                  <span key={k} style={{ display: 'block', margin: '0.4rem 0', paddingLeft: '0.75rem', borderLeft: '2px solid rgba(225,29,72,0.35)' }}>
                    <span style={{ color: 'var(--accent)' }}>{k}</span> = {v}
                  </span>
                ))}
              </code>
            </pre>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Future consideration</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.25rem', color: 'var(--text)' }}>Descendants are shaped by what survived</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ color: 'var(--text-muted)', maxWidth: '52ch', marginBottom: '2rem' }}>
              <p style={{ margin: '0 0 1rem' }}>Introducing a learned policy layer (via lightweight RL or imitation from social observation) for Scintillae in later generations that have accumulated cultural exposure.</p>
              <p style={{ margin: 0 }}><strong style={{ color: 'var(--text)' }}>First-generation Scintillae are pure heuristic.</strong> Descendants are shaped by what survived.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link href="/world" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px', background: 'var(--crimson-bright)', color: '#fff', boxShadow: '0 4px 24px -6px var(--crimson-glow)' }}>
                Inside Cardinal <ArrowRight size={16} />
              </Link>
              <Link href="/agents" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px', background: 'var(--bg-panel)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                Scintillae <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
