'use client'

import { useState } from 'react'
import Link from 'next/link'

const enquiryTypes = [
  'Please select...',
  'Farmer / landowner',
  'Rural business or estate',
  'Developer or planning consultant',
  'Local Authority',
  'Community Energy Group',
  'Water infrastructure / IDB',
  'Academic / research',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    enquiryType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission — wire to Formspree, Resend, or similar in production
    // For now, mailto fallback
    const subject = `DHA Enquiry — ${formData.enquiryType || 'General'}`
    const body = `Name: ${formData.name}\nOrganisation: ${formData.organisation}\nEnquiry type: ${formData.enquiryType}\n\nMessage:\n${formData.message}`
    window.location.href = `mailto:paul.bird@dualharvestagrivoltaics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-bg" style={{ padding: 'clamp(4rem, 10vw, 7rem) 1.5rem clamp(3rem, 8vw, 5rem)' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Get in Touch</p>
          <h1 style={{ color: 'white', marginBottom: '1.25rem', maxWidth: '580px' }}>
            A first conversation is always<br />
            <span style={{ color: 'var(--gold)' }}>without obligation.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: '560px', lineHeight: 1.75 }}>
            Whether you are a farmer exploring options for the first time, a Local Authority assessing what agrivoltaics means for your managed assets, or a community energy group trying to understand what's viable — the starting point is a conversation.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>

            {/* Contact form */}
            <div>
              <p className="section-label" style={{ marginBottom: '1rem' }}>Send an enquiry</p>
              <h2 style={{ marginBottom: '1.5rem' }}>Tell us about your project.</h2>
              <div className="gold-divider" style={{ marginBottom: '2rem' }} />

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label className="form-label" htmlFor="name">Your name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="organisation">Your organisation</label>
                  <input
                    id="organisation"
                    type="text"
                    className="form-input"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    placeholder="Farm name, company, authority, group..."
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="enquiryType">What best describes your interest?</label>
                  <select
                    id="enquiryType"
                    className="form-input"
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    style={{ appearance: 'none', cursor: 'pointer' }}
                  >
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type === 'Please select...' ? '' : type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label" htmlFor="message">Your message *</label>
                  <textarea
                    id="message"
                    required
                    className="form-input"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your land, energy costs, and objectives. There are no wrong questions."
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', cursor: 'pointer' }}>
                  Send enquiry →
                </button>
              </form>

              <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '1rem', lineHeight: 1.6 }}>
                All enquiries are handled directly by Paul Bird. You will receive a personal response, not an automated reply. Response time is typically within one working day.
              </p>
            </div>

            {/* Contact details + info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              {/* Direct contact */}
              <div>
                <p className="section-label" style={{ marginBottom: '1rem' }}>Direct contact</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { label: 'Name', value: 'Paul Bird' },
                    { label: 'Title', value: 'Director, Dual Harvest Agrivoltaics Limited' },
                    { label: 'Email', value: 'paul.bird@dualharvestagrivoltaics.com', isEmail: true },
                    { label: 'Location', value: 'Sawtry, Cambridgeshire' },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', gap: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #E8E5DF' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold)', minWidth: '70px', paddingTop: '1px' }}>{item.label}</span>
                      {item.isEmail ? (
                        <a href={`mailto:${item.value}`} style={{ fontSize: '0.9rem', color: 'var(--navy)', textDecoration: 'none', fontWeight: 500 }}>{item.value}</a>
                      ) : (
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* No obligation note */}
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--off-white)', borderLeft: '4px solid var(--gold)' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>No minimum project size</h4>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
                  DHA advises across the full range of agrivoltaic configurations and client types. There is no minimum project size and no obligation attached to a first discussion. If you're at the early stages of thinking — that's the right time to start the conversation.
                </p>
              </div>

              {/* HTST link */}
              <div style={{
                padding: '1.5rem',
                border: '1px solid rgba(27,42,74,0.2)',
                backgroundColor: 'var(--navy)',
              }}>
                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Harvesting the Sun Twice</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  If your interest is primarily in the policy and planning evidence base rather than commercial consultancy, the campaign website may be the better starting point.
                </p>
                <a
                  href="https://harvestingthesuntwice.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--gold)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}
                >
                  harvestingthesuntwice.org →
                </a>
              </div>

              {/* Registered details */}
              <div style={{ fontSize: '0.8rem', color: '#999', lineHeight: 1.65 }}>
                <strong style={{ color: '#555' }}>Dual Harvest Agrivoltaics Limited</strong><br />
                Registered in England & Wales<br />
                Incorporated 29 March 2026<br />
                Independent consultancy — not affiliated with any panel manufacturer, installer, or developer.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
