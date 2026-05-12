import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Evidence, analysis, and policy developments from the agrivoltaics landscape — informing how Dual Harvest Agrivoltaics advises clients.',
}

const insights = [
  {
    category: 'Policy & Planning',
    categoryColour: '#1B2A4A',
    title: 'The first written government acknowledgement — what it means and what comes next',
    summary: 'In April 2026, the Department for Energy Security and Net Zero formally acknowledged in writing that agrivoltaics may have an important role to play in reconciling large-scale energy deployment with food security. It was the first such acknowledgement from UK government. This piece sets out what was said, why it matters, and what the policy transition from acknowledgement to embedded planning guidance will require.',
    date: 'April 2026',
    readTime: '7 min read',
  },
  {
    category: 'Water & Land',
    categoryColour: '#1B5E8A',
    title: 'The reservoir and the solar panel — why East Anglia\'s drought crisis makes the case for floatovoltaics',
    summary: 'Six dry springs in eight years. April 2026 the third driest on record for East Anglia. Farmers investing millions in reservoir storage whilst facing rising energy costs to pump it. This piece examines the compounding water and energy pressures on East Anglian and Fenland farming operations — and why floatovoltaic deployment on farm reservoirs addresses both from a single asset.',
    date: 'May 2026',
    readTime: '8 min read',
  },
  {
    category: 'Technology & Evidence',
    categoryColour: '#2D5016',
    title: 'One farm, sixteen configurations — a guide to agrivoltaic options for UK conditions',
    summary: 'Agrivoltaics is not a single technology. From vertical bifacial panels on arable land to floating arrays on irrigation reservoirs, polytunnel-integrated glazing to silvovoltaic agroforestry, the range of configurations available for UK latitudes and land types is broader than most advisers acknowledge. This piece maps the full landscape — what each configuration does, who it suits, and what the UK evidence base currently supports.',
    date: 'May 2026',
    readTime: '10 min read',
  },
]

const pipeline = [
  'The BESS paradox — why vertical bifacial generation profiles reduce battery storage requirements and what that means for whole-system economics',
  'Viticulturevoltaics — the UK wine industry\'s energy and frost problem, and why 256 producers represent an underserved market',
  'BMV land and the planning debate — what the evidence actually says about agricultural productivity under agrivoltaic systems',
  'The ARC — what the UK\'s first multi-technology agrivoltaic research campus will measure, and why it matters for planning',
  'Community energy and agrivoltaics — why dual-use configurations change the planning conversation for community-led schemes',
  'Microplastics and solar grazing — the evidence on PET backsheet degradation and what glass-glass panel construction means for soil health',
]

const categories = ['All', 'Policy & Planning', 'Technology & Evidence', 'Water & Land', 'Community & Local']

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ padding: 'clamp(4rem, 10vw, 7rem) 1.5rem clamp(3rem, 8vw, 5rem)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Insights</p>
          <h1 style={{ color: 'white', marginBottom: '1.25rem', maxWidth: '640px' }}>
            Evidence, analysis, and policy<br />
            <span style={{ color: 'var(--gold)' }}>from the agrivoltaics landscape.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.75 }}>
            Not a content marketing channel. A working record of the evidence base that underpins how DHA advises clients.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section style={{ padding: '1.5rem', backgroundColor: 'var(--off-white)', borderBottom: '1px solid #E0DDD8' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {categories.map((cat, i) => (
              <button
                key={cat}
                style={{
                  padding: '0.5rem 1.25rem',
                  border: i === 0 ? '2px solid var(--gold)' : '2px solid #D4D0C8',
                  backgroundColor: i === 0 ? 'var(--gold)' : 'transparent',
                  color: i === 0 ? 'var(--navy-dark)' : '#555',
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights grid */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}>
            {insights.map((insight) => (
              <article key={insight.title} className="insight-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'white',
                    backgroundColor: insight.categoryColour,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '2px',
                  }}>
                    {insight.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#999' }}>{insight.readTime}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>{insight.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.75, flexGrow: 1, marginBottom: '1.25rem' }}>{insight.summary}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #E8E5DF' }}>
                  <span style={{ fontSize: '0.8rem', color: '#999' }}>{insight.date}</span>
                  <Link href="/insights" style={{ color: 'var(--gold)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon */}
          <div style={{
            padding: '2.5rem',
            backgroundColor: 'var(--off-white)',
            borderTop: '3px solid var(--gold)',
          }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Coming soon</p>
            <h3 style={{ marginBottom: '1.5rem' }}>Topics in the pipeline</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
              {pipeline.map((item) => (
                <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: '#444', lineHeight: 1.65 }}>
                  <span style={{ color: 'var(--gold)', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Subscribe note */}
      <section style={{ padding: '3rem 1.5rem', backgroundColor: 'var(--navy)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h3 style={{ color: 'white', marginBottom: '0.75rem' }}>Stay informed</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
            Insights are published as evidence and analysis become available. If you would like to be notified when new pieces are published, get in touch.
          </p>
          <a
            href="mailto:paul.bird@dualharvestagrivoltaics.com?subject=Insights notifications"
            className="btn-primary"
          >
            Subscribe to updates →
          </a>
        </div>
      </section>
    </>
  )
}
