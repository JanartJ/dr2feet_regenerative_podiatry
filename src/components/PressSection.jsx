import React from 'react';
import { motion } from 'framer-motion';
import { Award, Quote, ExternalLink } from 'lucide-react';

export default function PressSection() {
  const pressFeatures = [
    {
      outlet: 'ELLE',
      headline: 'The High-Heel Savior: Inside Manhattan’s Scarless Foot Surgery Miracle',
      quote: 'Dr. 2 Feet has fundamentally revolutionized foot aesthetics with micro-incision bunion corrections that leave zero visible scarring.',
      category: 'Cosmetic & Aesthetic Surgery'
    },
    {
      outlet: 'FORBES',
      headline: 'The Next Generation of Regenerative Podiatry',
      quote: 'How stem cell matrix grafts and high-concentration PRP are eliminating the need for joint replacement in active New Yorkers.',
      category: 'Innovation & Medical Tech'
    },
    {
      outlet: 'MEN’S HEALTH',
      headline: 'Back on the Track in 14 Days: Rapid Ankle & Heel Recovery',
      quote: 'For endurance runners and athletes, Dr. 2 Feet offers the fastest return-to-sport surgical protocols in the Tri-State area.',
      category: 'Sports Medicine'
    },
    {
      outlet: 'HARPER’S BAZAAR',
      headline: 'The Secret To Flawless Feet Before Gala Season',
      quote: 'Painless Onyfix nail restructuring and cosmetic toe reshaping have made this Manhattan practice the premier destination.',
      category: 'Luxury Foot Care'
    }
  ];

  const pressLogos = [
    'ELLE', 'FORBES', 'MEN’S HEALTH', 'HARPER’S BAZAAR', 'VOGUE', 'THE NEW YORK TIMES', 'COSMOPOLITAN'
  ];

  return (
    <section className="section-padding" style={{ background: '#FAF8F5', borderTop: '1px solid rgba(197, 160, 89, 0.2)', borderBottom: '1px solid rgba(197, 160, 89, 0.2)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <span className="section-badge">
            <Award size={14} /> As Seen In
          </span>

          <h2 
            className="font-serif" 
            style={{ 
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', 
              fontWeight: 500, 
              lineHeight: 1.1, 
              color: 'var(--text-dark-primary)',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            On The Right Foot. <br />
            <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>Media & Press Recognition</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)' }}>
            Recognized by leading international fashion, wellness, and medical publications for pioneering podiatric care.
          </p>
        </div>

        {/* Press Logo Marquee Row */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-full)',
            padding: '20px 40px',
            boxShadow: 'var(--shadow-card)',
            border: '1px solid var(--border-light-gold)',
            marginBottom: '60px',
            overflow: 'hidden'
          }}
        >
          <div className="animate-ticker" style={{ gap: '60px', alignItems: 'center' }}>
            {[...pressLogos, ...pressLogos].map((logo, idx) => (
              <span 
                key={idx} 
                className="font-serif"
                style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  letterSpacing: '3px', 
                  color: '#2D3139',
                  opacity: 0.8
                }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Press Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}
        >
          {pressFeatures.map((press, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="card-hover-gold"
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '32px 28px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold-dark)', letterSpacing: '2px' }}>
                    {press.outlet}
                  </span>
                  <Quote size={20} color="var(--gold-primary)" opacity={0.6} />
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--text-dark-primary)', lineHeight: 1.35, marginBottom: '12px' }}>
                  "{press.headline}"
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-dark-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {press.quote}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(197, 160, 89, 0.2)' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-dark)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {press.category}
                </span>
                <span style={{ color: 'var(--gold-dark)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.82rem', fontWeight: 600 }}>
                  Read Press <ExternalLink size={13} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
