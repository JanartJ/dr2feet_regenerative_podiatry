import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, ShieldCheck, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function PatientExperience() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
      title: 'Luxury Manhattan Patient Lounge',
      desc: 'Designed with Italian leather seating, high-speed Wi-Fi, and private refreshment concierge.'
    },
    {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
      title: 'State-of-the-Art Surgical Suite',
      desc: 'Equipped with digital micro-fluoroscopic guidance and HEPA surgical air purification.'
    },
    {
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
      title: 'Advanced Regenerative Suite',
      desc: 'Private biological therapy rooms designed for tranquil PRP and stem cell infusions.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="section-padding" style={{ background: '#0D0F12', color: '#FAF8F5', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <span className="section-badge">
            <Building size={14} /> World-Class Comfort
          </span>

          <h2 
            className="font-serif" 
            style={{ 
              fontSize: 'clamp(2.4rem, 4vw, 3.8rem)', 
              fontWeight: 500, 
              lineHeight: 1.1, 
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            Patient-Centric Luxury & <br />
            <span className="shimmer-text" style={{ fontStyle: 'italic' }}>Transparent Logistics</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#A0A5B0', lineHeight: 1.65 }}>
            From your initial consultation to post-operative recovery, experience white-glove 
            concierge care in Manhattan's most sophisticated medical environment.
          </p>
        </div>

        {/* Gallery Carousel Stack */}
        <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card-dark)', border: '1px solid var(--border-dark-gold)', marginBottom: '60px' }}>
          <div style={{ height: '480px', position: 'relative' }}>
            <img
              src={galleryImages[currentSlide].url}
              alt={galleryImages[currentSlide].title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease' }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(13, 15, 18, 0.95) 100%)'
              }}
            />

            {/* Slider Caption Overlay */}
            <div style={{ position: 'absolute', bottom: '36px', left: '36px', right: '36px' }}>
              <span style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                EXAMINING OUR FACILITIES ({currentSlide + 1}/{galleryImages.length})
              </span>
              <h3 className="font-serif" style={{ fontSize: '2.2rem', marginTop: '4px', marginBottom: '8px' }}>
                {galleryImages[currentSlide].title}
              </h3>
              <p style={{ color: '#D0D4DD', fontSize: '1rem', maxWidth: '650px' }}>
                {galleryImages[currentSlide].desc}
              </p>
            </div>

            {/* Controls */}
            <div style={{ position: 'absolute', bottom: '36px', right: '36px', display: 'flex', gap: '12px' }}>
              <button
                onClick={prevSlide}
                style={{
                  background: 'rgba(13, 15, 18, 0.8)',
                  border: '1px solid var(--border-dark-gold)',
                  color: 'var(--gold-primary)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextSlide}
                style={{
                  background: 'rgba(13, 15, 18, 0.8)',
                  border: '1px solid var(--border-dark-gold)',
                  color: 'var(--gold-primary)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Transparency */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          <div style={{ background: '#15181C', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
            <h4 className="font-serif text-gold-gradient" style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
              Insurance & Out-of-Network Assistance
            </h4>
            <p style={{ color: '#9DA2AF', fontSize: '0.94rem', lineHeight: 1.6 }}>
              We participate with major commercial PPO insurance carriers and provide comprehensive out-of-network concierge billing verification prior to any treatment.
            </p>
          </div>

          <div style={{ background: '#15181C', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
            <h4 className="font-serif text-gold-gradient" style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
              Flexible 0% APR Surgical Financing
            </h4>
            <p style={{ color: '#9DA2AF', fontSize: '0.94rem', lineHeight: 1.6 }}>
              Partnered with CareCredit® and Alphaeon Credit to offer convenient 6, 12, and 24-month interest-free payment plans for elective aesthetic procedures.
            </p>
          </div>

          <div style={{ background: '#15181C', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
            <h4 className="font-serif text-gold-gradient" style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
              Transparent Upfront Pricing Guarantee
            </h4>
            <p style={{ color: '#9DA2AF', fontSize: '0.94rem', lineHeight: 1.6 }}>
              No surprise medical bills. Every patient receives a itemized surgical cost outline detailing facility fees, anesthesia, and post-operative follow-ups.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
