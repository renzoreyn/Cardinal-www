'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
      el.classList.add('is-active')
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div ref={ref} style={{
      pointerEvents: 'none',
      position: 'fixed',
      width: '22rem',
      height: '22rem',
      marginLeft: '-11rem',
      marginTop: '-11rem',
      borderRadius: '50%',
      background: 'radial-gradient(circle, var(--crimson-glow) 0%, transparent 70%)',
      zIndex: 0,
      opacity: 0,
      transition: 'opacity 0.5s var(--ease-out)',
      mixBlendMode: 'screen',
    }} className="cursor-glow" />
  )
}
