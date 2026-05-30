'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Microscope, ArrowRight, ChevronRight, UsersRound, Repeat,
  MessageCircle, Landmark, TrendingDown, Dna
} from 'lucide-react'
import Reveal from '@/components/Reveal'

const CARDS = [
  { icon: UsersRound, title: 'Stable societies', text: 'Emergence of groups that persist beyond individual survival loops.' },
  { icon: Repeat, title: 'Cultural transmission', text: 'Knowledge and behavior carried across generations, always lossy, always shifting.' },
  { icon: MessageCircle, title: 'Language formation', text: 'Shared reference as the minimum viable unit of culture. Not NLP. Not grammar by design.' },
  { icon: Landmark, title: 'Institutional behavior', text: "Behaviors that didn't break across enough time to become load-bearing." },
  { icon: TrendingDown, title: 'Collapse vs equilibrium', text: "Extinction is always plausible. Never guaranteed. There's no win state." },
  { icon: Dna, title: 'Lineage drift', text: 'Genetic and cultural inheritance with mutation. Convergence is a failure mode worth studying.' },
]

const METRICS = [
  { value: '1000²', label: 'Grid (live)' },
  { value: '30', label: 'Starting Scintillae - 3 groups, dispersed' },
  { value: '20m', label: '= 1 sim day' },
  { value: '2d', label: '= 1 sim year' },
  { value: '4', label: 'Seasons per year' },
  { value: '0', label: 'Starting knowledge' },
]

const PILLS = ['Artificial life', 'Multi-Scintilla reinforcement learning', 'Complex adaptive systems', 'Computational anthropology', 'Evolutionary simulation']

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '100svh', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'calc(var(--nav-height) + 2rem) var(--gutter) clamp(2.5rem, 8vw, 4rem)',
        position: 'relative',
      }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', width: 'min(70vw, 420px)', height: 'min(70vw, 420px)',
            top: '-8%', right: '-12%', borderRadius: '50%', filter: 'blur(70px)', opacity: 0.35,
            background: 'radial-gradient(circle, var(--crimson-bright) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', width: 'min(55vw, 320px)', height: 'min(55vw, 320px)',
            bottom: '5%', left: '-18%', borderRadius: '50%', filter: 'blur(70px)', opacity: 0.35,
            background: 'radial-gradient(circle, var(--crimson-dim) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.4,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '3rem 3rem',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '44rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem',
            }}
          >
            <Microscope size={16} />
            Research documentation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 6.5vw, 3.75rem)',
              fontWeight: 500, lineHeight: 1.12, margin: '0 0 1rem',
              letterSpacing: '-0.01em', color: 'var(--text)',
            }}
          >
            What happens when you{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--crimson-bright)' }}>don&apos;t</em>{' '}
            tell a system what civilization is?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: 1.65,
              color: 'var(--text-muted)', maxWidth: '34rem', margin: '0 0 1.75rem',
            }}
          >
            Cardinal is an experimental autonomous civilization simulation focused on emergent behavior, generational learning, and socio-cultural formation among Scintillae.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
          >
            <Link href="/philosophy" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600,
              letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px',
              background: 'var(--crimson-bright)', color: '#fff',
              boxShadow: '0 4px 24px -6px var(--crimson-glow)',
              transition: 'transform 0.25s var(--ease-out), background 0.25s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = ''}
            >
              Enter the archive <ArrowRight size={16} />
            </Link>
            <Link href="/roadmap" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600,
              letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px',
              background: 'var(--bg-panel)', color: 'var(--text-muted)',
              border: '1px solid var(--border)', transition: 'color 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--text-dim)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
            >
              MVP Roadmap <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          fontSize: '0.625rem', letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--text-dim)',
        }} className="hero-scroll">
          <span>scroll</span>
          <div style={{ width: 1, height: '2.5rem', background: 'linear-gradient(180deg, var(--crimson-bright), transparent)' }} />
        </div>
        <style>{`@media (max-width: 768px) { .hero-scroll { display: none; } }`}</style>
      </section>

      {/* Story: Cardinal without history */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{
          width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))',
          marginInline: 'auto',
          display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start',
        }} className="split-grid">
          <div>
            <Reveal>
              <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                Chapter I
                <span style={{ flex: 1, maxWidth: '4rem', height: 1, background: 'linear-gradient(90deg, var(--border), transparent)', display: 'block' }} />
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, lineHeight: 1.2, margin: '0 0 1.25rem', color: 'var(--text)' }}>
                Cardinal without history
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ color: 'var(--text-muted)', maxWidth: '52ch' }}>
                <p style={{ margin: '0 0 1rem' }}>Scintillae don&apos;t start with Continuity, culture, or structure. Just survival pressure and time inside Cardinal.</p>
                <p style={{ margin: '0 0 1rem' }}>The question is simple: what happens when you don&apos;t tell a system what civilization is, and you just let it happen anyway?</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote style={{
                margin: '2rem 0', padding: '1.25rem 0 1.25rem 1.25rem',
                borderLeft: '3px solid var(--crimson-bright)',
                fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem, 3.5vw, 1.5rem)',
                fontWeight: 400, fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', maxWidth: '36rem',
              }}>
                Nothing is handed to them. Not even meaning.
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/terminology" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.5rem',
                padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600,
                letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px',
                background: 'var(--bg-panel)', color: 'var(--text-muted)', border: '1px solid var(--border)',
              }}>
                Read the lexicon: Cardinal, Scintilla, Substrate <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <aside>
            <Reveal delay={0.1}>
              <div style={{ padding: '1.25rem', background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, margin: '0 0 0.85rem', color: 'var(--text)' }}>System built around</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['No initial Continuity', 'Minimal innate knowledge', 'Survival-driven utility', 'Learning, communication, reproduction', 'Adaptation over time'].map((item, i, arr) => (
                    <li key={item} style={{ padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--text-dim)', borderBottom: i < arr.length - 1 ? '1px solid var(--border-soft)' : 'none', lineHeight: 1.45 }}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
        <style>{`@media (min-width: 900px) { .split-grid { grid-template-columns: 1.15fr 0.85fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* Cards: Primary targets */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              Primary targets
              <span style={{ flex: 1, maxWidth: '4rem', height: 1, background: 'linear-gradient(90deg, var(--border), transparent)', display: 'block' }} />
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, lineHeight: 1.2, margin: '0 0 1.25rem', color: 'var(--text)' }}>
              What we watch for
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {CARDS.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <article style={{ background: 'var(--bg-panel)', border: '1px solid var(--border-soft)', borderRadius: '12px', padding: '1.35rem', height: '100%', transition: 'border-color 0.25s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(225,29,72,0.3)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-soft)'}
                >
                  <div style={{ color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}><Icon size={28} /></div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, margin: '0 0 0.4rem', color: 'var(--text)' }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--text-dim)' }}>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration + Metrics */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'linear-gradient(180deg, var(--bg-raised) 0%, var(--bg-panel) 50%, var(--bg-raised) 100%)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Inspiration</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, lineHeight: 1.2, margin: '0 0 1.25rem', color: 'var(--text)' }}>Standing on several fields</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', listStyle: 'none', padding: 0, margin: '1.25rem 0 0' }}>
              {PILLS.map(p => (
                <li key={p} style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem', fontWeight: 500, border: '1px solid var(--border-soft)', borderRadius: '100px', color: 'var(--text-muted)', background: 'var(--bg-panel)' }}>{p}</li>
              ))}
            </ul>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
            {METRICS.map(({ value, label }, i) => (
              <Reveal key={value + label} delay={i * 0.06}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, color: 'var(--crimson-bright)', marginBottom: '0.35rem' }}>{value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', letterSpacing: '0.04em', lineHeight: 1.4 }}>{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-read))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Long-term vision</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, lineHeight: 1.2, margin: '0 0 1.25rem', color: 'var(--text)' }}>Watching structure appear</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ color: 'var(--text-muted)', maxWidth: '52ch' }}>
              <p style={{ margin: '0 0 1rem' }}>Cardinal is not about controlling outcomes. It&apos;s about watching structure appear where nothing structured was placed.</p>
              <p style={{ margin: '0 0 1rem' }}><strong style={{ color: 'var(--text)' }}>Civilization without design.</strong> Culture without instruction. History without author. Meaning without assignment.</p>
              <p style={{ margin: '0 0 1rem' }}>And seeing what survives anyway.</p>
              <p style={{ margin: 0 }}>The interesting question isn&apos;t whether they build something. It&apos;s what they build <em>with</em> when the only material available is each other.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
              <Link href="/roadmap" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600,
                letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px',
                background: 'var(--crimson-bright)', color: '#fff',
                boxShadow: '0 4px 24px -6px var(--crimson-glow)',
              }}>
                MVP Roadmap <ArrowRight size={16} />
              </Link>
              <Link href="/world" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.8rem 1.35rem', fontSize: '0.8125rem', fontWeight: 600,
                letterSpacing: '0.04em', textDecoration: 'none', borderRadius: '8px',
                background: 'var(--bg-panel)', color: 'var(--text-muted)', border: '1px solid var(--border)',
              }}>
                Inside Cardinal <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
