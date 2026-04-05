// About.jsx - Company info and contact details
export default function About() {
  return (
    <div className="page-wrapper" style={{ background: '#0d0d0d', minHeight: '100vh' }}>
      <div className="container py-5">

        <div className="mb-5 fade-in">
          <h2 className="section-title">About <span>CarBreezy</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="row g-5">
          {/* Left: Company story */}
          <div className="col-12 col-lg-7">
            <div style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '2rem' }}>
              <h4 style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, marginBottom: '1rem' }}>
                Who We Are
              </h4>
              <p style={{ color: '#ccc', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                CarBreezy is a leading automotive digital marketplace that seeks to make car buying and selling easy, transparent and efficient.
              </p>
              <p style={{ color: '#ccc', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Your car buying destiny is in your hands, but we will help you every step of the way. We built this site to make car buying as fast and easy as possible.
              </p>
              <p style={{ color: '#ccc', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                From discovery to delivery, consumers can use CarBreezy to explore vehicles from an expansive, cross-brand selection of inventory from our vast network.
              </p>
              <p style={{ color: '#ccc', lineHeight: 1.8 }}>
                CarBreezy has built a trusted brand and a strong reputation for providing consumers with useful tools, research, market context and pricing transparency as they embark on their car-buying journey.
              </p>

              {/* Mission pillars */}
              <div className="row g-3 mt-2">
                {[
                  { icon: 'bi-shield-check',  title: 'Transparency',  desc: 'No hidden fees. Real market prices.' },
                  { icon: 'bi-lightning-charge', title: 'Speed',       desc: 'Browse and buy from your phone.' },
                  { icon: 'bi-people',         title: 'Community',    desc: 'Trusted by thousands of buyers.' },
                ].map(item => (
                  <div key={item.title} className="col-12 col-sm-4">
                    <div style={{ textAlign: 'center', padding: '1rem', background: '#1a1a1a', borderRadius: '8px' }}>
                      <i className={`bi ${item.icon}`} style={{ color: '#CC0000', fontSize: '1.8rem', display: 'block', marginBottom: '0.5rem' }}></i>
                      <p style={{ color: '#fff', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, marginBottom: '4px' }}>{item.title}</p>
                      <p style={{ color: '#aaa', fontSize: '0.82rem', marginBottom: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="col-12 col-lg-5">
            <div style={{ background: '#141414', border: '1px solid #2a2a2a', borderLeft: '3px solid #CC0000', borderRadius: '10px', padding: '2rem' }}>
              <h4 style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, marginBottom: '1.5rem' }}>
                Contact Information
              </h4>
              {[
                { icon: 'bi-envelope-fill',   label: 'Email',   value: 'info@carbreezy.com' },
                { icon: 'bi-telephone-fill',  label: 'Phone',   value: '+1 (800) 555-CAR1' },
                { icon: 'bi-geo-alt-fill',    label: 'Address', value: '123 AutoDrive Boulevard, Detroit, MI 48201, USA' },
                { icon: 'bi-clock-fill',      label: 'Hours',   value: 'Mon–Sat: 9AM – 7PM EST' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    background: 'rgba(204,0,0,0.15)', border: '1px solid #CC0000',
                    borderRadius: '8px', width: '42px', height: '42px', minWidth: '42px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className={`bi ${item.icon}`} style={{ color: '#CC0000', fontSize: '1rem' }}></i>
                  </div>
                  <div>
                    <p style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: '2px' }}>{item.label}</p>
                    <p style={{ color: '#fff', fontWeight: 500, marginBottom: 0, fontSize: '0.95rem' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
