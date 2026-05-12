import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Dual Harvest Agrivoltaics — built on evidence, grounded in farming, independent of any technology supplier. Director Paul Bird brings 40 years of engineering experience and Lincolnshire farming heritage.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ padding: 'clamp(4rem, 10vw, 7rem) 1.5rem clamp(3rem, 8vw, 5rem)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>About Dual Harvest Agrivoltaics</p>
          <h1 style={{ color: 'white', marginBottom: '1.25rem', maxWidth: '680px' }}>
            Built on evidence.<br />
            <span style={{ color: 'var(--gold)' }}>Grounded in farming.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '560px', lineHeight: 1.75 }}>
            Independent of any technology supplier. Informed by the UK's leading agrivoltaic evidence base.
          </p>
        </div>
      </section>

      {/* Why this consultancy exists */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Why this consultancy exists</p>
              <h2 style={{ marginBottom: '1.5rem' }}>A false choice — and why we exist to challenge it.</h2>
              <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
              <p style={{ fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.8 }}>
                The pressure on UK farmers, landowners, and rural businesses to reduce energy costs is real and growing. Grid-supplied electricity is expensive, unreliable, and — for operations with significant pumping, refrigeration, or controlled-environment energy demands — an increasingly unsustainable overhead.
              </p>
              <p style={{ fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.8 }}>
                At the same time, the debate about solar energy on agricultural land has been dominated by a single configuration: large-scale ground-mounted arrays that remove land from productive use. For many landowners, that has meant choosing between energy security and food production.
              </p>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.6 }}>
                Dual Harvest Agrivoltaics exists because that is a false choice.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: '⚡', title: 'The energy problem is real', desc: 'Grid costs are rising. Energy independence is increasingly urgent for farms, businesses, and communities.' },
                { icon: '🌾', title: 'The land compromise is not inevitable', desc: 'Agrivoltaic configurations exist that generate clean energy whilst preserving or enhancing productive land use.' },
                { icon: '🔬', title: 'The evidence is there — if you know where to look', desc: 'DHA draws on a continuously updated, independently scrutinised evidence base to advise with precision.' },
                { icon: '📋', title: 'Independent advice is rare', desc: 'Most solar advisers represent a supply chain. DHA represents the client — not a product.' },
              ].map((point) => (
                <div key={point.title} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', border: '1px solid #E8E5DF', borderLeft: '4px solid var(--gold)' }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{point.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>{point.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.65, margin: 0 }}>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Director */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', backgroundColor: 'var(--navy)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>The Director</p>
              <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Paul Bird</h2>
              <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.8 }}>
                He brings two things that most energy consultants don't: a farming background and an engineering discipline.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.8 }}>
                Paul grew up in a Lincolnshire arable farming family — a landscape that produces 15% of total UK agricultural output and sits at the centre of every current debate about solar deployment on productive land.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.8 }}>
                His professional career spans 40 years of mechanical engineering, most recently as Senior Mechanical Design Engineer at Ocado Technology, where he holds multiple registered patents. Engineering disciplines — systems thinking, evidence-based decision-making, honest assessment of what works and what doesn't — are the method by which DHA evaluates agrivoltaic configurations and advises clients.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                He came to solar energy not as an industry insider, but as someone who looked at the data and found a significant gap between what the evidence supported and what was being deployed at scale across UK agricultural land.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { value: '40+', label: 'Years engineering experience', sub: 'Senior Mechanical Design Engineer, Ocado Technology' },
                { value: 'Multiple', label: 'Registered patents', sub: 'From Ocado Technology Innovation programme' },
                { value: 'Lincolnshire', label: 'Farming heritage', sub: 'Arable roots in the UK\'s most productive agricultural corridor' },
                { value: 'ADV. CERT', label: 'Autodesk Inventor', sub: 'Advanced Inventor Certification' },
                { value: '2026', label: 'Company incorporated', sub: 'Dual Harvest Agrivoltaics Ltd — 29/03/2026' },
              ].map((stat) => (
                <div key={stat.label} style={{
                  padding: '1.25rem 1.5rem',
                  border: '1px solid rgba(212,160,23,0.25)',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                }}>
                  <div style={{ flexShrink: 0, minWidth: '70px' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>{stat.value}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.2rem' }}>{stat.label}</div>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The evidence base */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', backgroundColor: 'var(--off-white)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>The evidence base</p>
            <h2 style={{ marginBottom: '1.5rem' }}>Informed by the UK's leading agrivoltaic advocacy programme.</h2>
            <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
            <p style={{ fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.8 }}>
              Dual Harvest Agrivoltaics is the commercial consultancy arm of the Harvesting the Sun Twice campaign — the UK's leading evidence-based advocacy programme for agrivoltaic solar on agricultural land.
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.8 }}>
              The campaign holds the only formal written government acknowledgement — from the Department for Energy Security and Net Zero — that agrivoltaics may have an important role to play in reconciling large-scale energy deployment with food security objectives. That acknowledgement was given in response to a sustained, evidence-led campaign conducted by this practice.
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.8 }}>
              The distinction between campaign and consultancy is deliberate. Harvesting the Sun Twice advocates for agrivoltaics as a policy matter. Dual Harvest Agrivoltaics advises individual clients on what is right for their specific land, operation, and objectives. The evidence base informs both — but the commercial work is independent of the campaign, and independent of any technology supplier or developer.
            </p>
            <div style={{
              padding: '1.5rem 2rem',
              borderLeft: '4px solid var(--gold)',
              backgroundColor: 'white',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#444',
              lineHeight: 1.75,
              marginBottom: '2rem',
            }}>
              DHA does not represent any panel manufacturer, installer, or energy developer. Advice is given in the client's interest, not in the interest of any supply chain.
            </div>
            <a
              href="https://harvestingthesuntwice.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy"
              style={{ display: 'inline-flex' }}
            >
              Visit Harvesting the Sun Twice →
            </a>
          </div>
        </div>
      </section>

      {/* ARC */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>The Agrivoltaics Research Centre</p>
              <h2 style={{ marginBottom: '1.5rem' }}>The UK's first multi-technology agrivoltaic research campus.</h2>
              <div className="gold-divider" style={{ marginBottom: '1.5rem' }} />
              <p style={{ fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.8 }}>
                DHA is a founding consortium member of the Agrivoltaics Research Centre — proposed as the UK's first dedicated multi-technology agrivoltaic demonstration, research, and education campus.
              </p>
              <p style={{ fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.8 }}>
                The ARC will host seven distinct agrivoltaic configurations on a single working farm in the South Lincolnshire / North Cambridgeshire corridor, monitored independently by two Queen's Anniversary Prize-winning academic institutions.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                When operational, DHA clients will have access to the most credible independently validated UK agrivoltaic performance data available — generated under UK conditions, on UK soils, at UK latitudes.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'University of Lincoln LIAT', desc: 'Agrivoltaic systems engineering, crop science, and energy yield. Queen\'s Anniversary Prize.' },
                { label: 'Cranfield University SABS', desc: 'UK National Reference Centre for Soils. Soil health, water management, and agroforestry science. Queen\'s Anniversary Prize ×5.' },
                { label: 'VerticalPV UK Ltd', desc: 'UK distributor for Next2Sun GmbH — world-leading VBPV specialist. Zone 1 technology partner.' },
                { label: 'IPV Flexgen Ltd', desc: 'Award-winning development, planning, and construction. Grid connection and BESS expertise. Zone 5 lead.' },
                { label: 'Polysolar Ltd', desc: 'Cambridge-based UK manufacturer of transparent thin-film BIPV glazing. Zones 3, 4, and 5.' },
              ].map((partner) => (
                <div key={partner.label} style={{
                  padding: '1.1rem 1.25rem',
                  border: '1px solid #E8E5DF',
                  borderLeft: '3px solid var(--gold)',
                }}>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.3rem', color: 'var(--navy)' }}>{partner.label}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.6, margin: 0 }}>{partner.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', backgroundColor: 'var(--light-grey)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Who we work with</p>
            <h2>From arable farms to Local Authorities.</h2>
            <div className="gold-divider" style={{ margin: '1rem auto 0' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}>
            {[
              { title: 'Farmers & Landowners', desc: 'Practical, independent guidance on reducing energy costs and exploring new income streams without compromising productive land. The starting point is always the land, the crop, and the operation — not a preferred technology.' },
              { title: 'Rural Businesses & Estates', desc: 'From horticultural and glasshouse operations facing acute energy cost pressure, to large mixed estates exploring structured diversification with evidence-based financial cases.' },
              { title: 'Developers & Planning Consultants', desc: 'Independent agrivoltaic expertise that will stand up at DCO examination and public inquiry. DHA does not represent any technology supplier or developer — that independence is the asset in a contested planning context.' },
              { title: 'Local Authorities', desc: 'Managing public land, reservoir infrastructure, or civic buildings with energy and net zero commitments. DHA advises on applicable configurations, planning considerations, and how to frame the case for elected members and local stakeholders.' },
              { title: 'Community Energy Groups', desc: 'Agrivoltaic systems — because they preserve agricultural productivity — carry a fundamentally different community narrative to conventional ground-mounted arrays. DHA helps groups understand viable configurations and build a credible planning and engagement case.' },
              { title: 'Water Infrastructure Bodies', desc: 'Internal Drainage Boards, Anglian Water, Water Resources East, and farm reservoir operators — for whom floatovoltaic deployment offers energy generation, evaporation reduction, and improved water storage economics from a single installation.' },
            ].map((audience) => (
              <div key={audience.title} style={{
                padding: '1.75rem',
                backgroundColor: 'white',
                borderTop: '3px solid var(--gold)',
              }}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{audience.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.75, margin: 0 }}>{audience.desc}</p>
              </div>
            ))}
          </div>

          {/* LA/Community callout */}
          <div style={{
            padding: '2.5rem',
            backgroundColor: 'var(--navy)',
            border: '1px solid rgba(212,160,23,0.3)',
          }}>
            <p className="section-label" style={{ marginBottom: '1rem' }}>For Local Authorities and Community Energy Groups</p>
            <h3 style={{ color: 'white', marginBottom: '1.25rem' }}>The food security argument changes the planning conversation entirely.</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', lineHeight: 1.8 }}>
              The DESNZ formal acknowledgement that agrivoltaics may have an important role in reconciling energy deployment with food security — the first such written acknowledgement from UK government — was secured through the Harvesting the Sun Twice campaign, the evidence base on which this consultancy is built. That policy context is directly relevant to every planning application, every community consultation, and every Local Authority net zero strategy that involves solar on agricultural or managed land.
            </p>
            <Link href="/contact" className="btn-primary">
              Start the conversation →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '3.5rem 1.5rem',
        background: 'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)',
        borderTop: '3px solid var(--gold)',
      }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Talk to us about your project.</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            No minimum project size. No obligation.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  )
}
