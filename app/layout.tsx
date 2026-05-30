import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

export const metadata: Metadata = {
  title: 'Cardinal | Research',
  description: 'Cardinal: an experimental autonomous civilization simulation. Research documentation.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" aria-hidden="true" />
        <CursorGlow />
        <Nav />
        <main style={{ position: 'relative', zIndex: 2 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
