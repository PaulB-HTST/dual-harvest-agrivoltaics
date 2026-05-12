import Link from 'next/link'

const serviceLinks = [
  'Vertical Bifacial PV',
  'Single-Axis Tracking',
  'Floatovoltaic',
  'Canopy & Pergola APV',
  'Polytunnel BIPV',
  'Viticulturevoltaics',
]

const siteLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--navy-dark)', color: 'white', paddingTop: '4rem' }}>

      {/* Gold top border */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--gold) 0%, transparent 60%)' }} />

      <div style={{ maxWidth: '88rem', margin: '0 auto', padding: '3rem 1.5rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{
                fontWeight: 800,
                fontSize: '1.1rem',
                color: 'white',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
              }}>DUAL HARVEST</div>
              <div style={{
                fontWeight: 400,
                fontSize: '0.65rem',
                color: 'var(--gold)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}>AGRIVOLTAICS LIMITED</div>
              <div style={{
                fontStyle: 'italic',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.6)',
              }}>Harvesting land. Harvesting light.</div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ height: '2px', width: '3rem', backgroundColor: 'var(--gold)', marginBottom: '1rem' }} />
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
                Independent agrivoltaic consultancy advising across the full range of configurations for UK conditions and latitudes.
              </p>
            </div>
            <div>
              <a href="mailto:paul.bird@dualharvestagrivoltaics.com" className="footer-link" style={{ display: 'block', marginBottom: '0.35rem' }}>
                paul.bird@dualharvestagrivoltaics.com
              </a>
              <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' }}>Sawtry, Cambridgeshire</span>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 style={{
              color: 'white',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {serviceLinks.map((service) => (
                <li key={service} style={{ marginBottom: '0.6rem' }}>
                  <Link href="/services" className="footer-link">
                    {service}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '0.5rem' }}>
                <Link href="/services" style={{ color: 'var(--gold)', fontSize: '0.875rem', textDecoration: 'none', fontWeight: 600 }}>
                  View all 16 configurations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation column */}
          <div>
            <h4 style={{
              color: 'white',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {siteLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '0.6rem' }}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campaign column */}
          <div>
            <h4 style={{
              color: 'white',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>Associated Campaign</h4>
            <div style={{
              border: '1px solid rgba(212,160,23,0.3)',
              padding: '1.25rem',
              borderRadius: '2px',
            }}>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginBottom: '0.5rem' }}>
                Harvesting the Sun Twice
              </div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                UK-wide evidence-based advocacy programme for agrivoltaic solar on agricultural land.
              </p>
              <a
                href="https://harvestingthesuntwice.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--gold)', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 600 }}
              >
                harvestingthesuntwice.org →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            © {new Date().getFullYear()} Dual Harvest Agrivoltaics Limited. Registered in England & Wales. Incorporated 29/03/2026.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            Independent consultancy. Not affiliated with any panel manufacturer, installer, or developer.
          </p>
        </div>
      </div>
    </footer>
  )
}
