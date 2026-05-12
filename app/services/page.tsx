import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agrivoltaic Services',
  description: 'Independent advice across 16 agrivoltaic configurations for UK conditions — from vertical bifacial PV on arable land to floatovoltaics on farm reservoirs.',
}

const families = [
  {
    id: 'field',
    title: 'Field Systems',
    subtitle: 'For arable, mixed, and grassland farms',
    colour: '#1B2A4A',
    configs: [
      {
        name: 'Vertical Bifacial PV (VBPV)',
        desc: 'Panels mounted vertically in east-west rows, generating power from both faces simultaneously — morning from the east, evening from the west. This dual-peak generation profile aligns with periods of peak grid demand and significantly reduces battery storage requirements. At row spacings of 8–10 metres, 80–90% of the land between rows remains fully productive.',
        bestFor: 'Winter wheat, barley, oilseed rape, grass leys, mixed arable rotations.',
        advantages: 'Dual-peak generation; high crop productivity retention; low visual impact; no microplastics risk.',
      },
      {
        name: 'Single-Axis Tracking (SAT)',
        desc: 'Panels mounted on a horizontal tracking axis, rotating through the day to follow the sun\'s arc. SAT systems generate significantly more energy per panel than fixed systems. Two orientations are available — north-south tracking (conventional) and east-west tracking (lower wind loading, suits exposed sites).',
        bestFor: 'Potatoes, maize, permanent grassland, lower-intensity arable rotations.',
        advantages: 'Higher energy yield than fixed systems; adjustable elevation for machinery clearance.',
      },
      {
        name: 'Dual-Axis Tracking (DAT)',
        desc: 'Panels track both azimuth and elevation, optimising generation throughout every hour of every day. Particularly relevant at UK latitudes where low winter sun angles significantly reduce the output of fixed systems.',
        bestFor: 'High-value energy use cases; constrained land area; significant winter energy demand.',
        advantages: 'Maximum energy yield; strong winter performance at UK latitudes; suits off-grid ambitions.',
      },
      {
        name: 'Agri-Boundary / Headland VBPV',
        desc: 'VBPV installed on field boundaries, headlands, or alongside existing hedgerows and drainage channels — without crossing into the productive field area. The smallest possible agricultural footprint and the simplest planning case.',
        bestFor: 'Farms new to agrivoltaics; planning-sensitive sites; operations where productive acreage cannot be compromised.',
        advantages: 'Zero productive land impact; lowest planning risk; fastest route to farm energy generation.',
      },
    ],
  },
  {
    id: 'horticulture',
    title: 'Protected Cropping & Horticulture',
    subtitle: 'For soft fruit, salad, vine, and glasshouse operations',
    colour: '#2D5016',
    configs: [
      {
        name: 'Fixed Overhead Canopy APV',
        desc: 'A rigid elevated structure at 4–5 metres, carrying semi-transparent photovoltaic panels above the crop canopy. Reduces heat stress in summer, mitigates late frost risk in spring, and retains soil moisture — whilst generating energy from the panels above.',
        bestFor: 'Soft fruit, salads, herbs, cut flowers, nursery crops.',
        advantages: 'Microclimate management; frost mitigation; moisture retention; dual income stream.',
      },
      {
        name: 'Polytunnel-Integrated BIPV',
        desc: 'Semi-transparent or spectrally-selective PV panels integrated with polytunnel structures in three ways: retrofitted over existing polythene fabric (lowest disruption); retrofitted into the structure replacing a proportion of covering; or specified into new builds. The over-fabric retrofit allows installation without disturbing the cropping environment.',
        bestFor: 'Strawberries, tomatoes, cucumbers, leafy crops, ornamentals.',
        advantages: 'Three retrofit pathways; reduced polythene consumption; energy generation with minimal operational disruption.',
      },
      {
        name: 'Glasshouse-Integrated BIPV / CEA',
        desc: 'Thin-film photovoltaic glazing — available at 0–80% light transmission — integrated into glasshouse roof and wall panels. Combined with battery storage and private wire design, a fully integrated glasshouse system can approach energy self-sufficiency.',
        bestFor: 'Tomatoes, peppers, ornamentals, microgreens, high-value controlled-environment production.',
        advantages: 'Energy self-sufficiency potential; reduced grid dependency; bespoke panel sizing.',
      },
      {
        name: 'Horticultural Shade-Net APV',
        desc: 'Semi-transparent PV integrated into open-sided shade netting systems — lower capital cost than rigid canopy, suited to operations already using netting for pest exclusion or sun protection.',
        bestFor: 'Strawberries, blueberries, raspberries, nursery stock, salad crops.',
        advantages: 'Lower capital cost; compatible with existing netting infrastructure; flexible and relocatable.',
      },
      {
        name: 'Mushroom & Shade-Crop APV',
        desc: 'Dense, near-opaque panel arrays providing deep shade conditions required by crops that cannot tolerate direct sunlight. High energy yield from the panel area whilst enabling productive cultivation beneath.',
        bestFor: 'Mushrooms, forced rhubarb, ginseng, medicinal herbs.',
        advantages: 'High energy yield from dense coverage; productive use of land unsuitable for conventional crops.',
      },
      {
        name: 'Viticulturevoltaics',
        desc: 'PV integrated with UK vineyard operations — overhead canopy above vine rows or inter-row vertical systems. With 256 commercial wine producers operating across England and Wales, and vineyard area having grown over 400% since 2004, the UK wine industry has reached the scale where agrivoltaic investment is commercially viable. Spring frost protection is a material benefit, particularly for northern vineyards.',
        bestFor: 'UK vineyard operations; particularly Kent, Sussex, Hampshire, Severn Valley, Southwest, and northern vineyards where frost risk is highest.',
        advantages: 'Frost protection for early bud-break varieties; dual income; growing market with limited specialist adviser presence.',
      },
    ],
  },
  {
    id: 'water',
    title: 'Water Systems',
    subtitle: 'For reservoirs, irrigation ponds, drainage dykes, and wetland infrastructure',
    colour: '#1B5E8A',
    configs: [
      {
        name: 'Floatovoltaic (FPV)',
        desc: 'Six dry springs in eight years have driven significant farm reservoir investment across East Anglia and the East Midlands, whilst rising grid energy costs continue to erode the economics of irrigation pumping. Floatovoltaic systems address both pressures from the same asset — generating energy from the water surface, reducing evaporation from the stored water beneath, and improving panel efficiency through natural water cooling.',
        bestFor: 'Farm irrigation reservoirs; drainage ponds; IDB-managed water bodies; arable and horticultural holdings.',
        advantages: 'No productive land used; evaporation reduction extends effective reservoir storage; offsets irrigation pumping costs.',
      },
      {
        name: 'Aquavoltaic / Canal-Top Solar',
        desc: 'PV installed over irrigation channels, drainage dykes, or canals — supported on bridging structures above the water surface. Reduces evaporation from linear water infrastructure. The Association of Drainage Authorities manages water infrastructure serving over 1.2 million hectares — the linear drainage channels within IDB districts represent a largely untapped corridor for canal-top solar.',
        bestFor: 'Linear water infrastructure; IDB-managed drainage systems; irrigation channel networks.',
        advantages: 'Zero land footprint; evaporation reduction; suited to long, linear water management systems.',
      },
      {
        name: 'Peatland & Wetland Adjacent FPV',
        desc: 'Floating or near-floating PV systems on rewetted peatland or managed wetland — supporting the economics of peatland restoration programmes by generating an energy revenue stream from land being taken out of agricultural production.',
        bestFor: 'Rewetting programmes; ELMS higher-tier agreements; nature recovery projects.',
        advantages: 'Revenue stream for peatland restoration; compatible with wetland ecology; ELMS scheme alignment.',
      },
    ],
  },
  {
    id: 'agroforestry',
    title: 'Agroforestry & Ecology',
    subtitle: 'For tree crop, orchard, and biodiversity-led operations',
    colour: '#3D6B20',
    configs: [
      {
        name: 'Silvovoltaic',
        desc: 'PV integrated within fruit, nut, or shelter-belt tree rows — inter-row vertical systems or elevated arrays above young tree plantings. Compatible with Environmental Land Management scheme higher-tier agroforestry agreements. Long-term carbon, biodiversity, and soil health co-benefits compound over the installation lifetime.',
        bestFor: 'Dessert apple, pear, cherry orchards; hazel and walnut; willow coppice; new agroforestry plantings.',
        advantages: 'ELM scheme compatibility; long-term carbon and biodiversity co-benefits; dual income during tree establishment.',
      },
      {
        name: 'Beevoltaics / Pollinator APV',
        desc: 'An understorey management approach applicable to any panel configuration — establishing managed wildflower and pollinator habitat between and beneath panels. Increasingly relevant to Biodiversity Net Gain requirements in planning applications.',
        bestFor: 'Any configuration where understorey management is a planning or ecological objective.',
        advantages: 'Biodiversity Net Gain contribution; planning support; pollination services for adjacent crops.',
      },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Farm Infrastructure',
    subtitle: 'For dairy, poultry, arable storage, and mixed farm buildings',
    colour: '#4A3A1B',
    configs: [
      {
        name: 'Livestock Building-Integrated PV (Barn BIPV)',
        desc: 'Photovoltaic panels integrated into the roofs and south-facing elevations of farm buildings — dairy sheds, poultry houses, grain stores, farm workshops. Building-integrated PV on a large dairy or poultry unit can supply a significant proportion of operational energy demand.',
        bestFor: 'Dairy farms; intensive poultry; large arable storage buildings; mixed farms with high energy demand.',
        advantages: 'No land footprint; immediate energy cost reduction; lowest planning risk; natural entry point for farms new to solar.',
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ padding: 'clamp(4rem, 10vw, 7rem) 1.5rem clamp(3rem, 8vw, 5rem)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Agrivoltaic Solutions</p>
          <h1 style={{ color: 'white', marginBottom: '1.25rem', maxWidth: '640px' }}>
            Every farm is different.<br />
            <span style={{ color: 'var(--gold)' }}>Every configuration has its place.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: 1.75 }}>
            We help you find the right fit — across 16 configurations, 5 families, and the full range of UK land, crop, and water contexts.
          </p>
        </div>
      </section>

      {/* Not a farmer callout */}
      <section style={{ padding: '2rem 1.5rem', backgroundColor: '#EFF4FB', borderBottom: '1px solid #D4DCEC' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div className="callout-box" style={{ maxWidth: '800px' }}>
            <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '0.5rem' }}>Not a farmer? This page is still for you.</strong>
            <p style={{ fontSize: '0.95rem', margin: 0, lineHeight: 1.7 }}>
              Local Authorities, Community Energy Groups, and water infrastructure bodies manage significant land and water assets where agrivoltaic deployment is viable. The configuration families below apply equally to publicly managed reservoirs, IDB drainage infrastructure, and community-owned land. <Link href="/contact" style={{ color: 'var(--gold)', fontWeight: 600 }}>Contact us</Link> if you're unsure where to start.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: 'clamp(3rem, 6vw, 4rem) 1.5rem', backgroundColor: 'var(--off-white)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Agrivoltaics is not a single technology — it is a family of approaches, each suited to a different combination of land type, crop, water infrastructure, and financial objective. Dual Harvest Agrivoltaics advises across the full range of commercially relevant configurations for UK conditions and latitudes. We don't start with a product. We start with your land.
          </p>
        </div>
      </section>

      {/* Configuration Families */}
      {families.map((family, fi) => (
        <section
          key={family.id}
          style={{
            padding: 'clamp(3rem, 8vw, 5rem) 1.5rem',
            backgroundColor: fi % 2 === 0 ? 'var(--white)' : 'var(--off-white)',
          }}
        >
          <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
            {/* Family header */}
            <div style={{ marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '2px solid var(--gold)' }}>
              <p className="section-label" style={{ marginBottom: '0.5rem' }}>Configuration Family {fi + 1}</p>
              <h2 style={{ marginBottom: '0.35rem' }}>{family.title}</h2>
              <p style={{ color: '#666', fontStyle: 'italic', fontSize: '1rem', margin: 0 }}>{family.subtitle}</p>
            </div>

            {/* Configurations */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '1.5rem',
            }}>
              {family.configs.map((config) => (
                <div key={config.name} className="service-card">
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--navy)' }}>{config.name}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1rem', color: '#444' }}>{config.desc}</p>
                  <div style={{ borderTop: '1px solid #E8E5DF', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)' }}>Best suited to: </span>
                      <span style={{ fontSize: '0.8rem', color: '#555' }}>{config.bestFor}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)' }}>Key advantages: </span>
                      <span style={{ fontSize: '0.8rem', color: '#555' }}>{config.advantages}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{
        padding: '3.5rem 1.5rem',
        background: 'linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%)',
        borderTop: '3px solid var(--gold)',
      }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Not sure which configuration suits your site?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
            That's exactly what we're here for. Tell us about your land, your energy costs, and your objectives — we'll tell you what's possible.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Talk to us →
          </Link>
        </div>
      </section>
    </>
  )
}
