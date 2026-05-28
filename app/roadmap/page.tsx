import type { Metadata } from 'next'
import {} from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Roadmap | Cardinal',
  description: 'Cardinal build roadmap — from substrate to civilisation emergence.',
}

const PHASES = [
  {
    num: '01', title: 'Foundation', done: true,
    items: [
      'Project scaffold, folder structure, config.js',
      'SQLite schema, flush-to-disk on chronicle tick',
      'World grid — Float32Array, 4 channels (R/T/C/H)',
      'Entity spawning (flora, fauna, terrain)',
      'Season cycle — 4 seasons, 24 days each, 1hr = 1 sim day',
    ]
  },
  {
    num: '02', title: 'Scintillae', done: true,
    items: [
      'Scintilla spawn, needs decay (satiety / thirst / fatigue / health / safety / fear)',
      'Aging and life stages (child / adolescent / adult / elder)',
      'Death — starvation, thirst, predator, old age',
      'Perception — local radius, fog of war, biome modifiers',
      'Heuristic policy — action selection by need urgency',
      'Persistent goal system — commit windows, directional wander',
      'Stamina — fast-cycling bar, drains on hunt/flee, slows movement',
      'Skills via procedural memory — forage/hunt/drink improve with practice',
    ]
  },
  {
    num: '03', title: 'Substrate', done: true,
    items: [
      'Micro tick loop (20/sec), cognitive tick (every 5 micro), chronicle tick (every sim day)',
      'Immutable event log via EventEmitter + SQLite',
      'SIGINT handler, clean shutdown with flush',
      'Railway deploy, persistent volume, env vars',
    ]
  },
  {
    num: '04', title: 'World fidelity', done: true,
    items: [
      'Azgaar map integration — 1000×1000 voronoi grid, real biome data',
      'Biome rasterization — voronoi polygons stamped into grid, per-cell biome lookup',
      'Entity biome gating — water only on river/coastline, prey only on plains/forest',
      'Resource stock system — each flora/fauna has finite stock, depletes, respawns with new random amount',
      'Fauna AI — taunt system, apex chase, prey flock/flee, large prey charge',
      'Day/night cycle — perception penalty, fear baseline, stamina cost, canvas overlay',
      'Land cell precomputation — iterate only non-ocean cells in regen/decay loops',
    ]
  },
  {
    num: '05', title: 'World generation', done: false,
    items: [
      'Chunk-based entity placement — 50×50 cell chunks, feature budgets per biome type',
      'Biome feature budgets — guaranteed minimums, controlled maximums per chunk',
      'Apex separation enforcement — minimum distance between predator spawns (~80 cells)',
      'Spawn anchor from entity density — post-gen scan, not grid resource channel',
      'Haven lock — anchor 0 always at Azgaar spawnHavenCenter',
    ]
  },
  {
    num: '06', title: 'Observer split', done: false,
    items: [
      'Admin.js split — clean JSON API endpoints (Railway) vs frontend console (Vercel)',
      'CORS + bearer token auth replacing session cookie',
      'Cardinal Time smooth interpolation — server source of truth, 5s poll, client-side fill',
      'Event feed filter — type dropdown (deaths / food / social / all), activity counter in strip',
      'Map inspect mode — click any entity/scintilla for inline detail panel',
    ]
  },
  {
    num: '07', title: 'Continuity', done: false,
    items: [
      'Memory layers active — episodic / semantic / procedural / social decay and reinforcement',
      'Knowledge artifacts — lifecycle (spread / mutate / decay / myth), confidence tracking',
      'Knowledge gates behavior — agents who know a location path there, those who don\'t wander',
      'Fear distortion — memories recalled under high fear are less accurate',
      'Elder knowledge value — elder procedural memory stabilises group survival rate',
    ]
  },
  {
    num: '08', title: 'Social layer', done: false,
    items: [
      'Reproduction and gestation — trust threshold, bonding duration, shelter condition',
      'Genetic inheritance with mutation — trait weighted average + noise',
      'Group identity — in-group vs stranger distinction in policy',
      'Group formation detection and DB write',
      'Primitive signals — approach / flee / follow / threat tokens',
      'Terrain memory — desire paths accumulate from repeated movement, decay slowly',
      'Death leaves traces — corpse as scavenger resource, fear memory trigger for witnesses',
    ]
  },
  {
    num: '09', title: 'Groq integration', done: false,
    items: [
      'Chronicle narration — one paragraph per sim day from event stream, per-group + global',
      'Continuity distillation — episodic → semantic compression via Groq',
      'Communication utterances — inter-scintilla signals with LLM-generated content',
      'Groq client with rate limit handling, retry, token budget',
    ]
  },
  {
    num: '10', title: 'Language', done: false,
    items: [
      'Signal co-occurrence tracking — repeated signal + context = weak association',
      'Token stabilisation — reinforced associations become shared tokens',
      'Token transmission — imitation spreads stable tokens to nearby agents',
      'Dialect divergence — cross-group token overlap tracking',
      'Semantic drift — meaning of a token changes over 10 generations',
      'Naming system — scintillae develop names for recurring entities/locations',
    ]
  },
  {
    num: '11', title: 'Institutional emergence', done: false,
    items: [
      'Settlements — repeated return to fixed location becomes home, detectable as DB pattern',
      'Leadership — high trust + resource success → proto-authority, others defer',
      'Norms — consistently punished/rewarded behaviors become social rules',
      'Trade routes — resource exchange paths that survive across individual agents',
      'Rituals — repeated group behaviors with no direct survival function',
      'Farming seed — agents tending depleted resource locations before respawn',
    ]
  },
]

const SECTIONS = [
  { label: 'Infrastructure', heading: 'Getting the world to exist', phases: ['01', '02', '03', '04'] },
  { label: 'Current work', heading: 'Survival loop stabilisation', phases: ['05', '06'] },
  { label: 'Social emergence', heading: 'First signs of civilisation', phases: ['07', '08', '09'] },
  { label: 'Deep emergence', heading: "What we're actually watching for", phases: ['10', '11'] },
]

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        iconName="Map"
        title={<>Build <em style={{ fontStyle: 'italic', color: 'var(--crimson-bright)' }}>Roadmap</em></>}
        desc="From nothing to a stable civilisation loop. Each phase unlocks the next. Nothing is skipped."
      />

      {SECTIONS.map(section => (
        <section key={section.label} style={{ padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
          <div style={{ width: 'min(calc(100% - 2 * var(--gutter)), var(--max-wide))', marginInline: 'auto' }}>
            <Reveal>
              <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--crimson-bright)', marginBottom: '0.75rem' }}>{section.label}</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem, 4.5vw, 2.5rem)', fontWeight: 500, margin: '0 0 2rem', color: 'var(--text)' }}>{section.heading}</h2>
            </Reveal>

            {PHASES.filter(p => section.phases.includes(p.num)).map((phase, i) => (
              <Reveal key={phase.num} delay={i * 0.06}>
                <div style={{
                  marginBottom: '1.5rem',
                  background: phase.done ? 'rgba(225,29,72,0.04)' : 'var(--bg-raised)',
                  border: `1px solid ${phase.done ? 'rgba(225,29,72,0.2)' : 'var(--border-soft)'}`,
                  borderRadius: '12px', overflow: 'hidden',
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-soft)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--text-dim)' }}>Phase {phase.num}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, color: 'var(--text)' }}>{phase.title}</span>
                    </div>
                    {phase.done && (
                      <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--crimson-bright)', background: 'rgba(225,29,72,0.1)', padding: '0.2rem 0.6rem', borderRadius: '100px' }}>Complete</span>
                    )}
                  </div>
                  <ul style={{ listStyle: 'none', padding: '0.75rem 1.25rem 1rem', margin: 0 }}>
                    {phase.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', padding: '0.4rem 0', fontSize: '0.9rem', color: phase.done ? 'var(--text-muted)' : 'var(--text-dim)', lineHeight: 1.5 }}>
                        <span style={{
                          flexShrink: 0, width: '16px', height: '16px', marginTop: '1px',
                          borderRadius: '4px', border: `2px solid ${phase.done ? 'var(--crimson-bright)' : 'var(--border)'}`,
                          background: phase.done ? 'var(--crimson-bright)' : 'transparent',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          {phase.done && <span style={{ color: '#fff', fontSize: '10px', lineHeight: 1 }}>✓</span>}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
