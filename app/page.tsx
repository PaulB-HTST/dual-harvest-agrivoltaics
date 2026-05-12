import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dual Harvest Agrivoltaics | UK Agrivoltaic Consultancy',
  description: 'Independent agrivoltaic consultancy helping farmers, landowners, Local Authorities, and developers reduce energy costs whilst keeping land productive. Harvesting land. Harvesting light.',
}

const services = [
  { title: 'Field Systems', desc: 'Vertical Bifacial PV, Single & Dual-Axis Tracking, Boundary VBPV for arable and mixed farms.', icon: '⚡' },
  { title: 'Protected Cropping', desc: 'Overhead canopy, polytunnel BIPV, glasshouse CEA, shade-net, and viticulturevoltaics.', icon: '🌿' },
  { title: 'Water Systems', desc: 'Floatovoltaic, aquavoltaic, and peatland FPV on reservoirs, drainage, and managed water.', icon: '💧' },
  { title: 'Agroforestry & Ecology', desc: 'Silvovoltaic systems and pollinator APV for tree crops and biodiversity-led operations.', icon: '🌳' },
  { title: 'Farm Infrastructure', desc: 'Building-integrated PV on dairy sheds, poultry houses, grain stores, and farm workshops.', icon: '🏗️' },
]

const audiences = [
  { title: 'Farmers & Landowners', desc: 'Reduce energy costs and explore new income streams without compromising productive land.' },
  { title: 'Rural Businesses', desc: 'Glasshouse growers, vineyards, and mixed estates facing unsustainable energy overheads.' },
  { title: 'Local Authorities', desc: 'Managed land, reservoirs, and public buildings with net zero and energy resilience objectives.' },
  { title: 'Community Energy', desc: 'Dual-use configurations that generate local energy without displacing food production.' },
  { title: 'Developers & Planners', desc: 'Independent expertise for DCO applications, EIAs, and community engagement programmes.' },
  { title: 'Water Infrastructure', desc: 'IDBs, water utilities, and reservoir operators with managed water assets.' },
]

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero-bg" style={{ padding: 'clamp(5rem, 12vw, 9rem) 1.5rem clamp(4rem, 10vw, 7rem)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px' }}>
            <p className="section-label fade-in-up" style={{ marginBottom: '1.25rem' }}>
              UK Agrivoltaic Consultancy
            </p>
            <h1 style={{ color: 'white', marginBottom: '1.5rem' }} className="fade-in-up-delay-1">
              Your land. The sun.<br />
              <span style={{ color: 'var(--gold)' }}>A smarter energy solution.</span>
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
              maxWidth: '600px',
            }} className="fade-in-up-delay-2">
              Rising grid costs are driving landowners, farmers, and developers to seek alternatives. Agrivoltaics offers not just a route to energy independence, but a set of compounding benefits most advisers haven't told you about.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="fade-in-up-delay-3">
              <Link href="/services" className="btn-primary">
                Discover what's possible →
              </Link>
              <Link href="/contact" className="btn-outline">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ──────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', backgroundColor: 'var(--off-white)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>The problem we solve</p>
            <h2 style={{ marginBottom: '1.5rem' }}>The energy cost challenge is real. The choice between energy and food production is not.</h2>
            <div className="gold-divider" style={{ margin: '0 auto 1.5rem' }} />
            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', marginBottom: '1rem' }}>
              Grid-supplied energy is expensive, unreliable, and increasingly difficult to justify. Whether you're managing an arable farm, a commercial estate, a reservoir, or a development site, the pressure to reduce energy costs is real — and growing.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)' }}>
              The question isn't whether to act. It's how to act in a way that doesn't compromise what you already have.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>What we do</p>
            <h2>16 configurations. One independent adviser.</h2>
            <div className="gold-divider" style={{ margin: '1rem auto 1.5rem' }} />
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              We advise across the full range of commercially relevant agrivoltaic configurations for UK conditions and latitudes. We don't start with a product. We start with your land.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}>
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--mid-grey)', lineHeight: 1.7 }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/services" className="btn-navy">
              View all configurations →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', backgroundColor: 'var(--navy)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>The benefits you may not have considered</p>
            <h2 style={{ color: 'white' }}>More than an energy case.</h2>
            <div className="gold-divider" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            {[
              { title: 'Reduced grid costs', desc: 'Dual-peak generation profiles reduce battery storage requirements and grid reinforcement costs.', stat: '~52%', statLabel: 'BESS reduction' },
              { title: 'Land productivity retained', desc: 'Well-designed agrivoltaic systems maintain 80–90% of land productivity beneath and between panels.', stat: '80–90%', statLabel: 'Productivity retained' },
              { title: 'Planning credibility', desc: 'Configurations that support food security arguments — increasingly relevant under the Land Use Framework.', stat: '1st', statLabel: 'UK Govt acknowledgement' },
              { title: 'Whole-system financials', desc: 'A financial case that holds up under scrutiny from planners, investors, and communities.', stat: '£25–35bn', statLabel: 'Whole-system savings' },
              { title: 'Water resilience', desc: 'Floatovoltaic systems reduce reservoir evaporation and offset irrigation pumping costs simultaneously.', stat: '6 of 8', statLabel: 'Dry springs: East Anglia' },
              { title: 'Community support', desc: 'Dual-use configurations carry a fundamentally different narrative at planning and community consultation.', stat: '↑', statLabel: 'Planning defensibility' },
            ].map((benefit) => (
              <div key={benefit.title} style={{
                padding: '1.75rem',
                border: '1px solid rgba(212,160,23,0.2)',
                borderTop: '3px solid var(--gold)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 600 }}>{benefit.title}</h4>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '1rem' }}>
                    <div style={{ color: 'var(--gold)', fontSize: '1.1rem', fontWeight: 800, lineHeight: 1 }}>{benefit.stat}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{benefit.statLabel}</div>
                  </div>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH ─────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', backgroundColor: 'var(--light-grey)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Who we work with</p>
            <h2>From arable farms to Local Authorities.</h2>
            <div className="gold-divider" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {audiences.map((audience) => (
              <div key={audience.title} style={{
                padding: '1.5rem',
                backgroundColor: 'white',
                borderLeft: '4px solid var(--gold)',
              }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{audience.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.65, margin: 0 }}>{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY DHA ──────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Why Dual Harvest</p>
              <h2 style={{ marginBottom: '1.5rem' }}>Built on evidence. Grounded in farming.</h2>
              <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
              <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                Our work is grounded in the evidence base developed through the Harvesting the Sun Twice campaign — the UK's leading advocacy programme for agrivoltaic solar on agricultural land.
              </p>
              <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                Paul Bird, Director, brings 40 years of mechanical engineering experience, Lincolnshire arable farming heritage, and deep familiarity with the UK planning system, grid policy, and agrivoltaic technology.
              </p>
              <p style={{
                fontStyle: 'italic',
                color: '#555',
                borderLeft: '3px solid var(--gold)',
                paddingLeft: '1rem',
                marginBottom: '2rem',
                fontSize: '0.95rem',
              }}>
                DHA does not represent any panel manufacturer, installer, or energy developer. Advice is given in the client's interest.
              </p>
              <Link href="/about" className="btn-navy">
                About Dual Harvest →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Engineering experience', value: '40+ years', sub: 'Senior Design Engineer, Ocado Technology · Multiple registered patents' },
                { label: 'Farming heritage', value: 'Lincolnshire', sub: 'Arable farming roots in the UK\'s most productive agricultural corridor' },
                { label: 'Government acknowledgement', value: 'DESNZ 2026', sub: 'First written UK govt acknowledgement of agrivoltaics\' role in food-energy policy' },
                { label: 'Configurations covered', value: '16', sub: 'Full UK agrivoltaic taxonomy across 5 configuration families' },
              ].map((stat) => (
                <div key={stat.label} style={{
                  padding: '1.25rem 1.5rem',
                  border: '1px solid #E8E5DF',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#999', marginTop: '2px' }}>{stat.label}</div>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6, margin: 0 }}>{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ────────────────────────────────────────────────────── */}
      <section style={{
        padding: '3.5rem 1.5rem',
        background: 'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)',
        borderTop: '3px solid var(--gold)',
      }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Not sure which configuration is right for your site?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Start with a conversation. No obligation.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Talk to us about your project →
          </Link>
        </div>
      </section>
    </>
  )
}
