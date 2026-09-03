import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, HeartPulse, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function TaglineSection() {
  const highlights = [
    {
      icon: <Zap size={22} color="var(--gold-primary)" />,
      title: 'Rapid Return To Activity',
      description: 'Our proprietary minimally invasive techniques allow most patients to walk out of surgery the very same day.'
    },
    {
      icon: <Award size={22} color="var(--gold-primary)" />,
      title: 'Board Certified Excellence',
      description: 'Ranked top podiatric surgeons in New York by Castle Connolly, Vitals, and Healthgrades.'
    },
    {
      icon: <HeartPulse size={22} color="var(--gold-primary)" />,
      title: 'Stem Cell & PRP Innovation',
      description: 'Harness your body’s natural cellular repair to accelerate healing of plantar fasciitis, tendonitis, and arthritis.'
    }
  ];

  return (
    <section id="tagline" className="section-padding" style={{ background: 'var(--bg-light-ivory)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <span className="section-badge">
            <Award size={14} /> The Dr. 2 Feet Standard
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
            The City Grinds. <br />
            <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>We Keep You Moving.</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-dark-secondary)', lineHeight: 1.7 }}>
            New York City demands precision, speed, and uncompromised stamina. At Dr. 2 Feet, 
            we combine advanced surgical artistry with cutting-edge regenerative medicine 
            so pain never slows down your stride.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div 
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                position: 'relative',
                border: '1px solid var(--border-light-gold)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                alt="Dr. 2 Feet Surgical Excellence"
                style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(13, 15, 18, 0.85) 100%)'
                }}
              />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', color: '#FAF8F5' }}>
                <span style={{ color: 'var(--gold-light)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                  STATE-OF-THE-ART MANHATTAN FACILITY
                </span>
                <h4 className="font-serif" style={{ fontSize: '1.5rem', marginTop: '4px' }}>
                  Precision Minimally Invasive Suite
                </h4>
              </div>
            </div>

            {/* Floating Gold Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-dark"
              style={{
                position: 'absolute',
                top: '30px',
                right: '-20px',
                padding: '20px 24px',
                borderRadius: 'var(--radius-md)',
                color: '#FAF8F5',
                maxWidth: '260px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                display: 'none', md: 'block'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontSize: '0.8rem', fontWeight: 700 }}>
                <CheckCircle2 size={16} /> SCARLESS INCISIONS
              </div>
              <p style={{ fontSize: '0.88rem', color: '#D0D4DD', marginTop: '6px', lineHeight: 1.4 }}>
                Micro-incisions smaller than 3mm for elegant aesthetic healing.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Highlights Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="card-hover-gold"
                style={{
                  background: 'var(--bg-light-card)',
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div 
                    style={{
                      background: 'rgba(197, 160, 89, 0.12)',
                      padding: '12px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(197, 160, 89, 0.25)'
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-dark-primary)', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.96rem', color: 'var(--text-dark-secondary)', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
