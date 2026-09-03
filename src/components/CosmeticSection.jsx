import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, X } from 'lucide-react';

export default function CosmeticSection({ onOpenBooking }) {
  const [activeModal, setActiveModal] = useState(null);

  const cosmeticServices = [
    {
      id: 'bunion',
      title: 'Aesthetic Micro-Bunionectomy',
      tag: 'MOST REQUESTED',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
      description: 'Correct painful foot bumps without large unsightly scars. Our micro-incision method realigns the joint while maintaining elegant foot contours.',
      details: 'Conducted under local twilight sedation. Walk out in a designer post-op shoe with hidden micro-incisions.'
    },
    {
      id: 'onyfix',
      title: 'Onyfix® Nail Correction System',
      tag: 'NON-SURGICAL',
      image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=800',
      description: 'Painless, non-invasive composite band that naturally reshapes involuted or ingrown toenails as they grow, restoring beautiful nail shape.',
      details: 'Zero needles, zero pain, zero downtime. Ideal for patients with delicate nail beds who want immediate cosmetic relief.'
    },
    {
      id: 'fatpad',
      title: 'High-Heel Cushion Fat Pad Restoration',
      tag: 'LUXURY COMFORT',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
      description: 'Injectable bio-cushioning (Sculptra / Dermal Matrix) restores natural padding beneath the ball of the foot for painless stiletto wear.',
      details: 'Popular among Manhattan executives and runway models looking to wear luxury high heels comfortably for 12+ hours.'
    },
    {
      id: 'toe-shortening',
      title: 'Aesthetic Toe Shortening & Realignment',
      tag: 'AESTHETIC SURGERY',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      description: 'Shorten overly long 2nd or 3rd toes that rub against shoes or cause aesthetic distress in open-toed footwear.',
      details: 'Precision bone reshaping under internal absorbable pin stabilization. Leaves pristine, smooth toe proportions.'
    },
    {
      id: 'laser-nail',
      title: 'Lunula Q-Switched Laser Toenail Therapy',
      tag: 'FDA CLEARED',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      description: 'Dual-wave cold laser light eradicates stubborn fungal pathogens beneath the nail plate for clear, healthy nail growth.',
      details: 'Painless 12-minute sessions. No oral liver-taxing anti-fungal medications needed.'
    },
    {
      id: 'corn-removal',
      title: 'Permanent Micro-Corn Eradication',
      tag: 'PRECISION MEDICINE',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
      description: 'Surgically smoothen the underlying bone spur responsible for recurring painful toe corns, eliminating them permanently.',
      details: 'Outpatient 15-minute procedure under local numbing with immediate return to regular footwear.'
    }
  ];

  return (
    <section id="cosmetic" className="section-padding" style={{ background: '#FAF8F5' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <span className="section-badge">
            <Sparkles size={14} /> Aesthetic Excellence
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
            Cosmetic Foot Surgery <br />
            <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>In Manhattan, NY</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-dark-secondary)', lineHeight: 1.65 }}>
            Combine flawless foot cosmetics with uncompromised bio-mechanical function. 
            Designed for New Yorkers who demand beautiful, pain-free feet in any shoe.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {cosmeticServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-hover-gold"
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--gold-gradient)', color: '#0E1012', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '1px', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                  {service.tag}
                </div>
              </div>

              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--text-dark-primary)', marginBottom: '10px' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-dark-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {service.description}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    className="btn-outline-gold"
                    style={{ flex: 1, padding: '12px', fontSize: '0.82rem' }}
                    onClick={() => setActiveModal(service)}
                  >
                    Learn More
                  </button>
                  <button 
                    className="btn-gold"
                    style={{ flex: 1, padding: '12px', fontSize: '0.82rem' }}
                    onClick={onOpenBooking}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* --- SERVICE MODAL --- */}
      <AnimatePresence>
        {activeModal && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '600px',
                width: '100%',
                padding: '36px',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
                border: '1px solid var(--border-light-gold)'
              }}
            >
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'transparent',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>

              <span style={{ color: 'var(--gold-dark)', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {activeModal.tag}
              </span>
              <h3 className="font-serif" style={{ fontSize: '2rem', color: 'var(--text-dark-primary)', marginTop: '4px', marginBottom: '16px' }}>
                {activeModal.title}
              </h3>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
                {activeModal.description}
              </p>

              <div style={{ background: 'var(--bg-light-warm)', padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
                <h4 style={{ color: 'var(--gold-dark)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                  Procedure & Recovery Details
                </h4>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-dark-primary)', lineHeight: 1.55 }}>
                  {activeModal.details}
                </p>
              </div>

              <button
                className="btn-gold"
                style={{ width: '100%' }}
                onClick={() => {
                  setActiveModal(null);
                  onOpenBooking();
                }}
              >
                Schedule {activeModal.title} Consultation
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
