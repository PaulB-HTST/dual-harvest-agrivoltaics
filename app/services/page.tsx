import Link from 'next/link'

const tiers = [
  {
    number: 'Tier 1',
    name: 'Site & Configuration Assessment',
    duration: '2–3 days',
    description: 'Screen your land for agrivoltaic potential. Which configuration suits your site, soil, crops, and energy profile? A clear recommendation with supporting rationale — before you commit to anything.',
    features: ['Land & crop suitability review', 'Configuration shortlist (from 16 options)', 'Energy demand & generation profile', 'Planning risk summary', 'Clear go/no-go recommendation'],
    cta: 'Start with a Tier 1 Assessment',
  },
  {
    number: 'Tier 2',
    name: 'Technical & Planning Analysis',
    duration: '1–2 weeks',
    description: 'Detailed technical assessment of your chosen configuration. Energy yield modelling, crop compatibility, grid connection strategy, and UK planning advice including local authority and NSIP/DCO considerations.',
    features: ['Energy yield & BESS sizing', 'Crop & biodiversity compatibility', 'Grid connection strategy', 'UK planning & DCO guidance', 'Developer & landowner negotiation support'],
    cta: 'Commission a Tier 2 Analysis',
  },
  {
    number: 'Tier 3',
    name: 'Full Project Support',
    duration: 'Ongoing',
    description: 'End-to-end support from concept to consent. Includes Tiers 1 and 2, plus stakeholder engagement, planning representations, developer negotiation, and implementation oversight.',
    features: ['All Tier 1 & 2 deliverables', 'Planning representation & DCO submissions', 'Stakeholder & community engagement', 'Developer contract review', 'Implementation oversight'],
    cta: 'Discuss Full Project Support',
  },
]

const lifecycle = [
  { stage: '1', label: 'Site Screening', tiers: 'Tier 1' },
  { stage: '2', label: 'Configuration Selection', tiers: 'Tier 1 · Tier 2' },
  { stage: '3', label: 'Planning & Permitting', tiers: 'Tier 2 · Tier 3' },
  { stage: '4', label: 'Developer Engagement', tiers: 'Tier 2 · Tier 3' },
  { stage: '5', label: 'Implementation', tiers: 'Tier 3' },
  { stage: '6', label: 'Ongoing Advisory', tiers: 'Tier 3' },
]

const families = [
  {
    name: 'Field Systems',
    icon: '⚡',
    configs: [
      'Vertical Bifacial PV (VBPV)',
      'Fixed Tilted Bifacial PV — elevated',
      'Single-axis tracker — elevated',
      'Wide-span inter-row systems',
    ],
  },
  {
    name: 'Protected Cropping & Horticulture',
    icon: '🌿',
    configs: [
      'Canopy / pergola systems',
      'Greenhouse-integrated PV',
      'Polytunnel roof systems',
      'Orchard & vineyard canopy',
    ],
  },
  {
    name: 'Water Systems',
    icon: '💧',
    configs: [
      'Floating PV (floatovoltaics) — reservoir',
      'Floating PV — irrigation pond',
      'Canal-top solar',
      'Constructed wetland integration',
    ],
  },
  {
    name: 'Agroforestry & Ecology',
    icon: '🌳',
    configs: [
      'Silvopastoral PV — woodland edge',
      'Hedgerow & buffer strip integration',
      'Biodiversity net gain systems',
    ],
  },
  {
    name: 'Farm Infrastructure',
    icon: '🏗️',
    configs: [
      'Barn & building-integrated PV',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--navy-dark)',
        padding: '5rem 1.5rem 4rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <p style={{
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1rem',
          }}>Our Services</p>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
          }}>The right configuration.<br />
            <span style={{ color: 'var(--gold)' }}>The right outcome.</span>
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>
            Dual Harvest Agrivoltaics works across all 16 proven agrivoltaic configurations —
            helping farmers, landowners, and rural businesses find the system that delivers
            for their land, their crops, and their energy needs.
          </p>
          <Link href="/contact" className="btn-primary">Talk to us about your site</Link>
        </div>
      </section>

      {/* Three Tiers */}
      <section style={{
        backgroundColor: 'var(--cream)',
        padding: '5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '0.75rem',
            }}>How We Work</p>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--navy-dark)',
              marginBottom: '1rem',
            }}>Structured around your project.</h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--navy-mid)',
              maxWidth: '36rem',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>Three tiers of service — from fast site screening to full planning support.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {tiers.map((tier, i) => (
              <div key={i} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 2px 20px rgba(27,42,74,0.08)',
                display: 'flex',
                flexDirection: 'column',
                borderTop: '4px solid var(--gold)',
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '0.5rem',
                }}>{tier.number}</div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--navy-dark)',
                  marginBottom: '0.4rem',
                  lineHeight: 1.3,
                }}>{tier.name}</h3>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--green)',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}>{tier.duration}</div>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--navy-mid)',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  flexGrow: 1,
                }}>{tier.description}</p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 2rem 0',
                }}>
                  {tier.features.map((f, j) => (
                    <li key={j} style={{
                      fontSize: '0.85rem',
                      color: 'var(--navy-dark)',
                      padding: '0.4rem 0',
                      borderBottom: '1px solid rgba(27,42,74,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary" style={{
                  textAlign: 'center',
                  fontSize: '0.85rem',
                  padding: '0.7rem 1.25rem',
                }}>{tier.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Lifecycle */}
      <section style={{
        backgroundColor: 'var(--navy-dark)',
        padding: '5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '0.75rem',
            }}>Where We Fit</p>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: 'white',
            }}>From first conversation to final consent.</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
          }}>
            {lifecycle.map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '10px',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                border: '1px solid rgba(212,160,23,0.2)',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gold)',
                  color: 'var(--navy-dark)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                }}>{item.stage}</div>
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}>{item.label}</div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--gold)',
                  fontWeight: 500,
                }}>{item.tiers}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16 Configurations */}
      <section style={{
        backgroundColor: 'white',
        padding: '5rem 1.5rem',
      }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '0.75rem',
            }}>Our Coverage</p>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--navy-dark)',
              marginBottom: '1rem',
            }}>16 configurations. 5 families.</h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--navy-mid)',
              maxWidth: '40rem',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Dual Harvest Agrivoltaics covers the full range of proven agrivoltaic systems —
              every configuration chosen on its merits for your land, your crops, and your energy goals.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {families.map((family, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--cream)',
                borderRadius: '10px',
                padding: '1.75rem',
                borderLeft: '4px solid var(--green)',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{family.icon}</div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--navy-dark)',
                  marginBottom: '1rem',
                }}>{family.name}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {family.configs.map((c, j) => (
                    <li key={j} style={{
                      fontSize: '0.85rem',
                      color: 'var(--navy-mid)',
                      padding: '0.35rem 0',
                      borderBottom: '1px solid rgba(27,42,74,0.06)',
                      display: 'flex',
                      gap: '0.5rem',
                    }}>
                      <span style={{ color: 'var(--green)', flexShrink: 0 }}>▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: 'var(--gold)',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 800,
            color: 'var(--navy-dark)',
            marginBottom: '1rem',
          }}>Not sure which tier you need?</h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--navy-dark)',
            marginBottom: '2rem',
            lineHeight: 1.7,
            opacity: 0.85,
          }}>Tell us about your site and we'll tell you where to start. No obligation, no jargon.</p>
          <Link href="/contact" style={{
            backgroundColor: 'var(--navy-dark)',
            color: 'white',
            padding: '0.85rem 2rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.95rem',
            display: 'inline-block',
          }}>Talk to us about your site</Link>
        </div>
      </section>
    </main>
  )
}
