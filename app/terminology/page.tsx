import type { Metadata } from 'next'
import { Globe, Sparkles, Layers, Cpu, ScanEye } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Lexicon | Cardinal',
  description: 'Cardinal terminology: the precise language of the simulation.',
}

const TERMS = [
  { id: 'cardinal', icon: Globe, title: 'Cardinal', latin: 'the world itself', def: 'The world itself.', note: 'Terrain, seasons, Scintillae, resources, conflict, settlement. Everything experienced from inside.', includes: null },
  { id: 'scintilla', icon: Sparkles, title: 'Scintilla', latin: 'pl. Scintillae', def: 'The synthetic soul. The persistent thing that makes each inhabitant irreducibly themselves.', note: null, includes: null },
  { id: 'continuity', icon: Layers, title: 'Continuity', latin: 'current state of a Scintilla', def: 'The current state of a Scintilla.', note: 'What the Substrate reads and writes each tick.', includes: ['memories', 'values', 'emotional state', 'relationships', 'wounds'] },
  { id: 'substrate', icon: Cpu, title: 'the Substrate', latin: 'engine', def: 'The engine that reads and writes Scintillae. Invisible to everyone inside.', note: null, includes: null },
  { id: 'administrator', icon: ScanEye, title: 'the Administrator', latin: 'us', def: 'Us.', note: 'The Observer layer is how the Administrator watches Cardinal without entering it.', includes: null },
]

export default function TerminologyPage() {
  return (
    <>
      <PageHero iconName="BookMarked" title="The Lexicon" desc="Cardinal uses precise terminology. These words mean specific things." />
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-read))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Hierarchy</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-muted)', background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '10px', padding: '1rem 1.25rem', margin: '0 0 2.5rem' }}>
              Administrator → Substrate → Scintillae → Continuity → Cardinal
            </p>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {TERMS.map((term, i) => {
              const Icon = term.icon
              return (
                <Reveal key={term.id} delay={i * 0.08}>
                  <article id={term.id} style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '14px', padding: '1.5rem 1.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.75rem', height: '2.75rem', borderRadius: '10px', background: 'rgba(225,29,72,0.1)', color: 'var(--crimson-bright)', flexShrink: 0 }}>
                        <Icon size={26} />
                      </div>
                      <div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, margin: 0, color: 'var(--text)', lineHeight: 1.2 }}>{term.title}</h2>
                        <p style={{ margin: '0.2rem 0 0', fontSize: '0.8125rem', color: 'var(--crimson-bright)', fontWeight: 500 }}>{term.latin}</p>
                      </div>
                    </div>
                    <p style={{ margin: '0 0 0.75rem', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{term.def}</p>
                    {term.includes && (
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {term.includes.map(inc => (
                          <li key={inc} style={{ padding: '0.25rem 0.65rem', fontSize: '0.75rem', fontWeight: 500, border: '1px solid var(--border-soft)', borderRadius: '100px', color: 'var(--text-dim)', background: 'var(--bg-raised)' }}>{inc}</li>
                        ))}
                      </ul>
                    )}
                    {term.note && <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-dim)', fontStyle: 'italic', lineHeight: 1.55 }}>{term.note}</p>}
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
