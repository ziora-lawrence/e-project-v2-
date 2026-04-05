// Contact.jsx - Team member profiles (6 cards) + contact info
// NO contact form as requested — just team bios and contact details
// Fill in the placeholder details below with your real info!

// =====================================================
// EDIT THIS ARRAY WITH YOUR REAL TEAM DETAILS
// =====================================================
const TEAM_MEMBERS = [
  {
    id: 1,
    name:   'Team Member 1',        // ← Change this
    role:   'Project Lead',          // ← Change this
    phone:  '+000 000 0000',         // ← Change this
    email:  'member1@carbreezy.com', // ← Change this
    bio:    'Add your bio here. Tell us about your role in the CarBreezy project and what you contributed.',
    image:  null, // ← Replace with: import img1 from '../assets/team/member1.jpg' then put img1 here
  },
  {
    id: 2,
    name:   'Team Member 2',
    role:   'Frontend Developer',
    phone:  '+000 000 0000',
    email:  'member2@carbreezy.com',
    bio:    'Add your bio here. Tell us about your role in the CarBreezy project and what you contributed.',
    image:  null,
  },
  {
    id: 3,
    name:   'Team Member 3',
    role:   'UI/UX Designer',
    phone:  '+000 000 0000',
    email:  'member3@carbreezy.com',
    bio:    'Add your bio here. Tell us about your role in the CarBreezy project and what you contributed.',
    image:  null,
  },
  {
    id: 4,
    name:   'Team Member 4',
    role:   'Backend Developer',
    phone:  '+000 000 0000',
    email:  'member4@carbreezy.com',
    bio:    'Add your bio here. Tell us about your role in the CarBreezy project and what you contributed.',
    image:  null,
  },
  {
    id: 5,
    name:   'Team Member 5',
    role:   'Data Manager',
    phone:  '+000 000 0000',
    email:  'member5@carbreezy.com',
    bio:    'Add your bio here. Tell us about your role in the CarBreezy project and what you contributed.',
    image:  null,
  },
  {
    id: 6,
    name:   'Team Member 6',
    role:   'QA & Testing',
    phone:  '+000 000 0000',
    email:  'member6@carbreezy.com',
    bio:    'Add your bio here. Tell us about your role in the CarBreezy project and what you contributed.',
    image:  null,
  },
]

// Generates initials from a name e.g. "Daniel Iwuji" → "DI"
function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// Avatar colors cycling through team
const AVATAR_COLORS = ['#CC0000','#006699','#009944','#8800cc','#cc6600','#009988']

export default function Contact() {
  return (
    <div className="page-wrapper" style={{ background: '#0d0d0d', minHeight: '100vh' }}>
      <div className="container py-5">

        {/* Page header */}
        <div className="mb-5 fade-in text-center">
          <h2 className="section-title">Meet the <span>Team</span></h2>
          <div className="section-divider mx-auto"></div>
          <p style={{ color: '#aaa', maxWidth: '540px', margin: '0 auto' }}>
            The CarBreezy team is made up of 6 passionate individuals committed to transforming the car buying experience.
          </p>
        </div>

        {/* ===== 6 TEAM MEMBER CARDS ===== */}
        <div className="row g-4 mb-5">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={member.id} className="col-12 col-sm-6 col-lg-4">
              <div
                style={{
                  background: '#141414',
                  border: '1px solid #2a2a2a',
                  borderTop: `3px solid ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`,
                  borderRadius: '10px',
                  padding: '1.75rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 8px 24px ${AVATAR_COLORS[i % AVATAR_COLORS.length]}33`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Profile image or initials avatar */}
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '1rem',
                    border: `3px solid ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: member.image ? 'transparent' : '#1a1a1a',
                    flexShrink: 0,
                  }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    // Shows initials if no photo yet
                    <span
                      style={{
                        color: AVATAR_COLORS[i % AVATAR_COLORS.length],
                        fontFamily: 'Rajdhani, sans-serif',
                        fontWeight: 700,
                        fontSize: '1.8rem',
                      }}
                    >
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>

                {/* Name & Role */}
                <h5
                  style={{
                    color: '#fff',
                    fontFamily: 'Rajdhani, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    marginBottom: '4px',
                  }}
                >
                  {member.name}
                </h5>
                <span
                  style={{
                    background: `${AVATAR_COLORS[i % AVATAR_COLORS.length]}22`,
                    color: AVATAR_COLORS[i % AVATAR_COLORS.length],
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '3px 12px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    marginBottom: '1rem',
                    border: `1px solid ${AVATAR_COLORS[i % AVATAR_COLORS.length]}55`,
                  }}
                >
                  {member.role}
                </span>

                {/* Bio */}
                <p
                  style={{
                    color: '#aaa',
                    fontSize: '0.85rem',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}
                >
                  {member.bio}
                </p>

                {/* Contact details */}
                <div style={{ width: '100%', borderTop: '1px solid #2a2a2a', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
                    <i className="bi bi-telephone-fill" style={{ color: '#CC0000', fontSize: '0.85rem' }}></i>
                    <span style={{ color: '#ccc', fontSize: '0.85rem' }}>{member.phone}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <i className="bi bi-envelope-fill" style={{ color: '#CC0000', fontSize: '0.85rem' }}></i>
                    <a
                      href={`mailto:${member.email}`}
                      style={{ color: '#ccc', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#CC0000'}
                      onMouseLeave={e => e.target.style.color = '#ccc'}
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General contact info section */}
        <div
          style={{
            background: '#141414',
            border: '1px solid #2a2a2a',
            borderLeft: '3px solid #CC0000',
            borderRadius: '10px',
            padding: '2rem',
          }}
        >
          <h4 style={{ color: '#CC0000', fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, marginBottom: '1.5rem' }}>
            General Enquiries
          </h4>
          <div className="row g-3">
            {[
              { icon: 'bi-envelope-fill',  label: 'Email',   value: 'info@carbreezy.com' },
              { icon: 'bi-telephone-fill', label: 'Phone',   value: '+1 (800) 555-CAR1' },
              { icon: 'bi-geo-alt-fill',   label: 'Address', value: '123 AutoDrive Boulevard, Detroit, MI 48201, USA' },
              { icon: 'bi-clock-fill',     label: 'Hours',   value: 'Monday – Saturday: 9AM – 7PM EST' },
            ].map(item => (
              <div key={item.label} className="col-12 col-md-6">
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    background: 'rgba(204,0,0,0.15)', borderRadius: '8px',
                    width: '40px', height: '40px', minWidth: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid #CC000055',
                  }}>
                    <i className={`bi ${item.icon}`} style={{ color: '#CC0000' }}></i>
                  </div>
                  <div>
                    <p style={{ color: '#aaa', fontSize: '0.8rem', marginBottom: '2px' }}>{item.label}</p>
                    <p style={{ color: '#fff', marginBottom: 0, fontWeight: 500 }}>{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
