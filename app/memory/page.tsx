import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = { title: 'Continuity | Cardinal' }

export default function Page() {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '6rem', paddingInline: 'var(--gutter)', minHeight: '60vh' }}>
      <div style={{ maxWidth: 'var(--max-read)', marginInline: 'auto' }}>
        <Reveal>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 500, color: 'var(--text)', margin: '0 0 1.5rem' }}>Continuity</h1>
          <p style={{ color: 'var(--text-muted)' }}>Documentation for this section is being written. Check the <a href="/roadmap" style={{ color: 'var(--accent)' }}>roadmap</a> for progress.</p>
        </Reveal>
      </div>
    </div>
  )
}
