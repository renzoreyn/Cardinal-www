import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Field Notes | Cardinal',
  description: 'Cardinal field notes - observations from each simulation run.',
}

const RUNS = [
    {
    num: 'Run 05',
    phase: 'Phase 4',
    outcome: 'concluded',
    date: 'Spring Year 0 - Day 0 to Day 17',
    pop: '30 spawned - status unknown (chronicle broken)',
    map: '1000×1000 Azgaar grid',
    body: [
      'Longest run to date: 17 real hours, 17 simulated days. All three groups landed on river biome cells - spawn anchor is now pulling biome scores correctly. Entity counts at boot: 191 apex, 3482 small prey, 587 large prey, 11507 berry bushes, 4500 water sources, 36411 total entities across the 1000×1000 grid.',
      'The simulation ran continuously and did not crash. However the chronicle tick failed on every single simulated day with ReferenceError: dayPhase is not defined in population.js:400. This means 17 daily summaries were never written, no DB snapshots were taken, and survival state across the run is unobserved. The Scintillae were alive and ticking - the Substrate just wasn\'t watching.',
      'The resource formatting bug from Run 05 persists: spawn anchor logs show resource=%.2f instead of an actual value, meaning the anchor scoring function is passing an unformatted float string through a printf-style placeholder that never gets evaluated.',
    ],
    findings: [
      'Chronicle tick broken for entire run - dayPhase is not defined in population.js:400, needs to be passed into or computed inside chronicleTick()',
      'Simulation itself is stable: 17 hours continuous uptime, no crashes, no process exits',
      '191 apex still spawning - density unchanged from Run 05, fear baseline remains artificially elevated',
      'Spawn anchor biome scoring working (all three groups landed on river cells) but resource=%.2f format bug still present',
      'No survival data recoverable for this run - without chronicle ticks, there are no DB records of what happened',
      'Priority before Run 07: fix dayPhase reference, add chronicle smoke test on boot',
    ],
  },
  {
    num: 'Run 04',
    phase: 'Phase 2',
    outcome: 'extinction',
    date: 'Day 0–1',
    pop: '30 spawned - 0 survived',
    map: '200×200 procedural grid',
    body: [
      'All deaths from starvation. Goal commit window was 60 ticks; food 8 cells away required 160 ticks to reach. Agents walked toward targets for 60 ticks, replanned, walked again, never arrived anywhere. Every agent starved while technically pursuing food.',
    ],
    findings: [
      'Root cause: commit window (60t) shorter than travel time (160t for 8-cell distance)',
      '700+ socialise interactions recorded for adjacent pair - cooldown system added after this run',
      'Cardinal Time stopped interpolating - client-side ×24 multiplier removed, broke live clock',
    ],
  },
  {
    num: 'Run 01–03',
    phase: 'Phase 2',
    outcome: 'extinction',
    date: 'Day 0–4',
    pop: '30 spawned - 0 survived',
    map: '200×200 procedural grid',
    body: [
      'Three consecutive extinction runs. All deaths from starvation. The forage action was firing but never completing - moveToward() moved at 0.05 units/tick, food was 8+ cells away, and the policy re-selected the closest prey every cognitive tick, constantly interrupting approach. Agents showed 16,000+ forage interactions in 4 days with zero successful eats. One anomaly: s_b11 reached 88% satiety, suggesting the execution path was valid but the targeting lock was broken for all others.',
    ],
    findings: [
      'Forage execution broken: target lock not persisted across cognitive ticks',
      'No persistent goal state - agents chose a new target every 5 micro ticks',
      'Wander behavior was random-angle-per-tick - drunk walk, no ground covered',
      'Entity spawning not biome-gated - water sources in forests, prey in ocean',
      '200×200 grid mismatch with 1000×1000 Azgaar map - coordinate scaling errors throughout',
    ],
  },
]

const OUTCOME_COLORS: Record<string, string> = {
  ongoing: 'rgba(34,197,94,0.15)',
  extinction: 'rgba(225,29,72,0.12)',
}

const OUTCOME_TEXT: Record<string, string> = {
  ongoing: '#4ade80',
  extinction: 'var(--accent)',
}

export default function RunsPage() {
  return (
    <>
      <PageHero
        iconName="Scroll"
        title={`Field Notes`}
        desc="Every run is data. Collapse, stagnation, and survival are all outcomes worth recording."
      />

      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Phase 2 - Survival loop</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 2rem', color: 'var(--text)' }}>Run log</h2>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {RUNS.map((run, i) => (
              <Reveal key={run.num} delay={i * 0.08}>
                <div style={{ background: 'var(--bg-raised)', border: '1px solid var(--border-soft)', borderRadius: '14px', overflow: 'hidden' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-soft)', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, color: 'var(--text)' }}>{run.num}</span>
                      <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-dim)', background: 'var(--bg-panel)', padding: '0.2rem 0.55rem', borderRadius: '100px' }}>{run.phase}</span>
                    </div>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: OUTCOME_TEXT[run.outcome], background: OUTCOME_COLORS[run.outcome], padding: '0.2rem 0.65rem', borderRadius: '100px' }}>
                      {run.outcome}
                    </span>
                  </div>

                  {/* Meta */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border-soft)', fontSize: '0.8125rem', color: 'var(--text-dim)' }}>
                    <span>{run.date}</span>
                    <span>{run.pop}</span>
                    <span>{run.map}</span>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-soft)' }}>
                    {run.body.map((para, j) => (
                      <p key={j} style={{ margin: j < run.body.length - 1 ? '0 0 0.75rem' : 0, fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)' }}>{para}</p>
                    ))}
                  </div>

                  {/* Findings */}
                  <div style={{ padding: '1rem 1.25rem' }}>
                    <h4 style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 0.75rem' }}>Key findings</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {run.findings.map((f, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                          <span style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: 'var(--crimson-bright)', marginTop: '0.5rem', display: 'block' }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol */}
      <section style={{ padding: 'clamp(3.5rem, 10vw, 6.5rem) 0', background: 'var(--bg-raised)' }}>
        <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-read))', marginInline: 'auto' }}>
          <Reveal>
            <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>Protocol</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 1.25rem', color: 'var(--text)' }}>How runs are observed</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ color: 'var(--text-muted)', maxWidth: '52ch', marginBottom: '2rem' }}>
              <p style={{ margin: '0 0 1rem' }}>Each run is allowed to reach its natural conclusion - extinction, stable equilibrium, or reproduction. Runs are not terminated early unless a fatal infrastructure bug is confirmed.</p>
              <p style={{ margin: '0 0 1rem' }}>Observations are recorded by day: entity counts, survival rates, notable events (first reproduction, first group contact, first resource depletion cycle). Memory tab snapshots are taken on notable agents every 2–3 days.</p>
              <p style={{ margin: 0 }}>The Administrator does not intervene in outcomes. God commands exist only for infrastructure testing, not to prevent collapse.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote style={{ margin: 0, padding: '1.25rem 0 1.25rem 1.25rem', borderLeft: '3px solid var(--crimson-bright)', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontStyle: 'italic', lineHeight: 1.45, color: 'var(--text)', maxWidth: '36rem' }}>
              Collapse is data. Extinction is data. Survival is data. None of these outcomes is a failure.
            </blockquote>
          </Reveal>
        </div>
      </section>
    </>
  )
}
