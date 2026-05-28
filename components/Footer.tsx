import Link from 'next/link'
import { Flame, Heart } from 'lucide-react'
import { FOOTER_LINKS } from '@/lib/nav'

export default function Footer() {
  return (
    <footer style={{
      padding: '3rem var(--gutter) 2rem',
      borderTop: '1px solid var(--border-soft)',
      background: 'var(--bg-raised)',
      position: 'relative', zIndex: 2,
    }}>
      <div style={{
        maxWidth: 'var(--max-wide)', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--crimson-bright)' }}><Flame size={18} strokeWidth={1.75} /></span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 500 }}>Cardinal</span>
          </div>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9375rem', lineHeight: 1.55, maxWidth: '24rem', margin: 0 }}>
            An experimental autonomous civilization simulation. Scintillae start with nothing. Whatever structure appears is emergent.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 0.75rem' }}>Core</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {FOOTER_LINKS.core.map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'block', padding: '0.3rem 0' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 0.75rem' }}>Systems</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {FOOTER_LINKS.systems.map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', display: 'block', padding: '0.3rem 0' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{
        maxWidth: 'var(--max-wide)', margin: '2rem auto 0',
        paddingTop: '1.25rem', borderTop: '1px solid var(--border-soft)',
        fontSize: '0.75rem', color: 'var(--text-dim)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.35rem',
      }}>
        <span>Cardinal - autonomous civilization simulation</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
          Made with <Heart size={12} fill="var(--crimson-bright)" stroke="var(--crimson-bright)" /> by <a href="https://renzoreyn.dev" target="_blank">@renzoreyn</a>
        </span>
      </div>
    </footer>
  )
}
