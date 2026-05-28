'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Map, Compass, BookMarked, Globe, Users, Layers,
  GitBranch, Sparkles, Cpu, ScanEye, Scroll, ChevronDown,
  Menu, X, Flame
} from 'lucide-react'
import { NAV_ITEMS } from '@/lib/nav'

const ICON_MAP: Record<string, React.ElementType> = {
  Home, Map, Compass, BookMarked, Globe, Users, Layers,
  GitBranch, Sparkles, Cpu, ScanEye, Scroll
}

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9000,
        height: 'var(--nav-height)', padding: '0 var(--gutter)',
        background: scrolled ? 'rgba(30,27,29,0.94)' : 'rgba(30,27,29,0.72)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-soft)' : 'transparent'}`,
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <div style={{
          width: '100%', maxWidth: '90rem', height: '100%',
          margin: '0 auto', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '1rem',
        }}>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
            textDecoration: 'none', color: 'var(--text)',
            fontFamily: 'var(--font-body)', fontSize: '1.0625rem',
            fontWeight: 600, letterSpacing: '0.02em', flexShrink: 0,
          }}>
            <span style={{ color: 'var(--crimson-bright)', display: 'flex' }}>
              <Flame size={20} strokeWidth={1.75} />
            </span>
            <span>Cardinal</span>
          </Link>

          {/* Desktop dropdown */}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }} className="desktop-nav">
            <div style={{ position: 'relative' }} ref={menuRef as any}>
              <button
                onClick={() => setMenuOpen(o => !o)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.45rem 0.75rem', borderRadius: '8px',
                  border: `1px solid ${menuOpen ? 'rgba(225,29,72,0.35)' : 'var(--border)'}`,
                  background: menuOpen ? 'rgba(225,29,72,0.08)' : 'var(--bg-panel)',
                  color: menuOpen ? 'var(--text)' : 'var(--text-muted)',
                  cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600,
                  letterSpacing: '0.04em', transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}
              >
                <Map size={14} />
                <span>Navigate</span>
                <motion.span animate={{ rotate: menuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'absolute', right: 0, top: 'calc(100% + 0.45rem)',
                      width: '14rem', maxHeight: 'min(70vh, 26rem)', overflowY: 'auto',
                      listStyle: 'none', margin: 0, padding: '0.35rem',
                      borderRadius: '12px', border: '1px solid var(--border)',
                      background: 'var(--bg-raised)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.45)', zIndex: 20,
                    }}
                  >
                    {NAV_ITEMS.map(item => {
                      const Icon = ICON_MAP[item.icon]
                      const active = pathname === item.href
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                              display: 'grid', gridTemplateColumns: '1rem 1fr',
                              alignItems: 'center', gap: '0.55rem',
                              padding: '0.5rem 0.6rem', borderRadius: '8px',
                              textDecoration: 'none', fontSize: '0.8125rem', fontWeight: 500,
                              color: active ? 'var(--accent)' : 'var(--text-muted)',
                              background: active ? 'rgba(225,29,72,0.12)' : 'transparent',
                              transition: 'background 0.15s, color 0.15s',
                            }}
                            onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = 'rgba(225,29,72,0.1)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}}
                            onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}}
                          >
                            <span style={{ color: active ? 'var(--accent)' : 'var(--crimson-bright)', display: 'flex' }}>
                              {Icon && <Icon size={14} />}
                            </span>
                            {item.label}
                          </Link>
                        </li>
                      )
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-toggle"
            aria-label="Open navigation"
            style={{
              display: 'none', alignItems: 'center', justifyContent: 'center',
              width: '2.75rem', height: '2.75rem', padding: 0,
              border: '1px solid var(--border)', borderRadius: '10px',
              background: 'var(--bg-panel)', color: 'var(--text)', cursor: 'pointer', flexShrink: 0,
            }}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 9500 }}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                background: 'rgba(10,8,9,0.55)', backdropFilter: 'blur(6px)',
                border: 'none', cursor: 'pointer',
              }}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{
                position: 'absolute', left: 0, right: 0, bottom: 0,
                maxHeight: 'min(88vh, 640px)',
                background: 'var(--bg-raised)', borderRadius: '20px 20px 0 0',
                border: '1px solid var(--border-soft)', borderBottom: 'none',
                boxShadow: '0 -24px 80px rgba(0,0,0,0.45)',
                display: 'flex', flexDirection: 'column',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.25rem 1.25rem 0.75rem',
                borderBottom: '1px solid var(--border-soft)',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500 }}>Navigate</span>
                <button onClick={() => setMobileOpen(false)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '2.5rem', height: '2.5rem', border: 'none', borderRadius: '8px',
                  background: 'var(--bg-panel)', color: 'var(--text-muted)', cursor: 'pointer',
                }}>
                  <X size={18} />
                </button>
              </div>
              <ul style={{
                listStyle: 'none', margin: 0, padding: '0.75rem 1rem 1.25rem',
                overflowY: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem',
              }}>
                {NAV_ITEMS.map(item => {
                  const Icon = ICON_MAP[item.icon]
                  const active = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link href={item.href} onClick={() => setMobileOpen(false)} style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                        gap: '0.5rem', padding: '1rem', textDecoration: 'none',
                        color: active ? 'var(--accent)' : 'var(--text-muted)',
                        background: active ? 'rgba(225,29,72,0.1)' : 'var(--bg-panel)',
                        border: `1px solid ${active ? 'rgba(225,29,72,0.45)' : 'var(--border-soft)'}`,
                        borderRadius: '12px', fontSize: '0.875rem', fontWeight: 500, minHeight: '4.5rem',
                      }}>
                        <span style={{ color: active ? 'var(--accent)' : 'var(--crimson-bright)' }}>
                          {Icon && <Icon size={18} />}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1080px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}
