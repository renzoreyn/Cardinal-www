'use client'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import type { LucideProps } from 'lucide-react'

interface Props {
  iconName: string
  title: React.ReactNode
  desc: string
}

export default function PageHero({ iconName, title, desc }: Props) {
  const Icon = ((Icons as unknown as Record<string, React.ComponentType<{size?: number}>>))[iconName]
  
  return (
    <header style={{
      padding: 'calc(var(--nav-height) + 2rem) var(--gutter) 2.5rem',
      position: 'relative', minHeight: '42vh', display: 'flex', alignItems: 'flex-end',
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 'min(70vw, 420px)', height: 'min(70vw, 420px)', top: '-8%', right: '-12%', borderRadius: '50%', filter: 'blur(70px)', opacity: 0.25, background: 'radial-gradient(circle, var(--crimson-bright) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '3rem 3rem' }} />
      </div>
      <div style={{ maxWidth: 'var(--max-wide)', marginInline: 'auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} style={{ color: 'var(--crimson-bright)', marginBottom: '1rem' }}>
          {Icon && <Icon size={40} />}
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem, 5vw, 3rem)', fontWeight: 500, margin: '0 0 0.75rem', lineHeight: 1.15, color: 'var(--text)' }}>
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: '38rem', margin: 0 }}>
          {desc}
        </motion.p>
      </div>
    </header>
  )
}
