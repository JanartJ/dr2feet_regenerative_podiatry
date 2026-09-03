import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Calendar, Navigation, Subscript, CheckCircle2 } from 'lucide-react';

export default function LocationsSection({ onOpenBooking }) {
  const [activeLocation, setActiveLocation] = useState('downtown');

  const locations = {
    downtown: {
      name: 'Downtown Manhattan - Wall Street',
      address: '111 Broadway, Suite 1302, New York, NY 10006',
      phone: '(212) 404-2800',
      hours: 'Mon - Fri: 8:00 AM - 6:30 PM | Sat: By Appointment',
      subway: 'Subway Access: 4, 5 to Wall St | 1, R, W to Rector St (2 Min Walk)',
      mapImage: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=80&w=800',
      officeImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      features: ['Private Surgical Suite', 'On-Site Digital X-Ray', 'PRP Biological Lab', 'Valet Parking Assistance']
    },
    midtown: {
      name: 'Midtown Manhattan - Park Avenue / Grand Central',
      address: '501 Fifth Avenue, Suite 1002, New York, NY 10017',
      phone: '(212) 203-2000',
      hours: 'Mon - Fri: 8:00 AM - 7:00 PM | Sat: 9:00 AM - 2:00 PM',
      subway: 'Subway Access: 4, 5, 6, 7 to Grand Central | B, D, F, M to Bryant Park',
      mapImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800',
      officeImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      features: ['Fluoroscopic Micro-Surgery Room', 'Laser Toenail Therapy Suite', 'Aesthetic Foot Lounge', 'Direct Subway Tunnel Access']
    }
  };

  const currentLoc = locations[activeLocation];

  return (
    <section id="locations" className="section-padding" style={{ background: '#FAF8F5', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <span className="section-badge">
            <MapPin size={14} /> Premier Manhattan Clinics
          </span>

          <h2 
            className="font-serif" 
            style={{ 
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)', 
              fontWeight: 500, 
              lineHeight: 1.1, 
              color: 'var(--text-dark-primary)',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            Where To Find The Best <br />
            <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>Manhattan Podiatrists</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-dark-secondary)' }}>
            Two state-of-the-art surgical facilities located in Downtown Wall Street and Midtown Fifth Avenue.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
          <button
            onClick={() => setActiveLocation('downtown')}
            style={{
              background: activeLocation === 'downtown' ? 'var(--gold-gradient)' : '#FFFFFF',
              color: activeLocation === 'downtown' ? '#0E1012' : 'var(--text-dark-primary)',
              border: activeLocation === 'downtown' ? 'none' : '1px solid var(--border-light-gold)',
              padding: '14px 32px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: activeLocation === 'downtown' ? 'var(--shadow-gold-glow)' : 'var(--shadow-card)',
              transition: 'all 0.3s ease'
            }}
          >
            Downtown Office (Wall St)
          </button>
          <button
            onClick={() => setActiveLocation('midtown')}
            style={{
              background: activeLocation === 'midtown' ? 'var(--gold-gradient)' : '#FFFFFF',
              color: activeLocation === 'midtown' ? '#0E1012' : 'var(--text-dark-primary)',
              border: activeLocation === 'midtown' ? 'none' : '1px solid var(--border-light-gold)',
              padding: '14px 32px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: activeLocation === 'midtown' ? 'var(--shadow-gold-glow)' : 'var(--shadow-card)',
              transition: 'all 0.3s ease'
            }}
          >
            Midtown Office (Fifth Ave)
          </button>
        </div>

        {/* Active Location Display Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLocation}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              boxShadow: 'var(--shadow-card)',
              border: '1px solid var(--border-light-gold)'
            }}
          >
            {/* Left Info Column */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: 'var(--gold-dark)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  MANHATTAN SURGICAL CENTER
                </span>
                <h3 className="font-serif" style={{ fontSize: '2rem', color: 'var(--text-dark-primary)', marginTop: '4px', marginBottom: '20px' }}>
                  {currentLoc.name}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <MapPin size={20} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-dark-primary)', display: 'block', fontSize: '0.92rem' }}>Address</strong>
                      <span style={{ color: 'var(--text-dark-secondary)', fontSize: '0.94rem' }}>{currentLoc.address}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <Phone size={20} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-dark-primary)', display: 'block', fontSize: '0.92rem' }}>Direct Line</strong>
                      <a href={`tel:${currentLoc.phone.replace(/[^0-9]/g, '')}`} style={{ color: 'var(--gold-dark)', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
                        {currentLoc.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <Clock size={20} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-dark-primary)', display: 'block', fontSize: '0.92rem' }}>Operating Hours</strong>
                      <span style={{ color: 'var(--text-dark-secondary)', fontSize: '0.92rem' }}>{currentLoc.hours}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <Navigation size={20} color="var(--gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-dark-primary)', display: 'block', fontSize: '0.92rem' }}>Transit & Subway</strong>
                      <span style={{ color: 'var(--text-dark-secondary)', fontSize: '0.92rem' }}>{currentLoc.subway}</span>
                    </div>
                  </div>
                </div>

                {/* Amenities List */}
                <div style={{ background: 'var(--bg-light-warm)', padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
                  <h4 style={{ color: 'var(--gold-dark)', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Facility Amenities
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {currentLoc.features.map((feat, fIdx) => (
                      <span key={fIdx} style={{ fontSize: '0.86rem', color: 'var(--text-dark-primary)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}>
                        <CheckCircle2 size={14} color="var(--gold-dark)" /> {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="btn-gold" style={{ width: '100%' }} onClick={onOpenBooking}>
                <Calendar size={18} /> Schedule At {activeLocation === 'downtown' ? 'Downtown' : 'Midtown'} Office
              </button>
            </div>

            {/* Right Map Visual Box */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', minHeight: '380px' }}>
              <img
                src={currentLoc.officeImage}
                alt={currentLoc.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(13, 15, 18, 0.8) 100%)' }} />
              
              <div 
                className="glass-dark"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  color: '#FAF8F5',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '0.8rem' }}>
                    INTERACTIVE MAP DIRECTION
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#D0D4DD' }}>
                    Open in Apple / Google Maps
                  </div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(currentLoc.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                  style={{ padding: '8px 16px', fontSize: '0.78rem' }}
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
