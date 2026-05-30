import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Observer | Cardinal',
  description: 'Observer layer: how the Administrator watches Cardinal without entering it.',
}

const MODES = [
  { title: 'Raw log stream', text: 'Every tick, every Scintilla, every action. For analysis.' },
  { title: 'Event feed', text: 'Significant events only, in readable form. For monitoring.' },
  { title: 'Chronicle summary', text: 'Compressed narrative from the chronicle tick. Readable as history.' },
  { title: 'Spatial view', text: '2D map render with Scintilla positions, territories, resource overlays, event markers.' },
  { title: 'Scintilla inspector', text: 'Full Continuity, relationship map, current need levels.' },
  { title: 'Lineage graph', text: 'Generational tree. Trait drift visualization across generations.' },
  { title: 'Knowledge map', text: 'Track a knowledge item across Scintillae and time. See it spread, mutate, or die.' },
  { title: 'Run controls', text: 'Backup, restore, and reset. Basic auth on the dashboard.' },
]

export default function ObserverPage() {
  return (
    <>
      <PageHero
        iconName="ScanEye"
        title="Observer layer"
        desc="Cardinal runs inside the Substrate. The Administrator watches through Express, without entering. The Observer layer doesn't touch Continuity. It only reads."
      />

      {/* Observation modes */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '1rem' }}>Observation modes</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1rem' }}>
            {MODES.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <article style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px', padding: '1.35rem', transition: 'border-color 0.25s' }}
                  
                  
                >
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, margin: '0 0 0.4rem', color: 'var(--text)' }}>{m.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--text-dim)' }}>{m.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-read))', marginInline: 'auto', textAlign: 'center' }}>
          <Reveal>
            <blockquote style={{ margin: '0 0 1.5rem', padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem, 3.5vw, 1.5rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', textAlign: 'left' }}>
              Civilization without design. Culture without instruction. History without author. Meaning without assignment.
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 2rem', fontSize: '0.9375rem' }}>And seeing what survives anyway.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px', background: 'var(--crimson-bright)', color: '#fff', boxShadow: '0 4px 24px -6px var(--crimson-glow)' }}>
              <ArrowLeft size={16} /> Back to overview
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
