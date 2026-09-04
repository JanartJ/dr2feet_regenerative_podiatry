import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, GraduationCap, Stethoscope, Star, ArrowRight, X } from 'lucide-react';

export default function DoctorTeamSection({ onOpenBooking }) {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 'rivera',
      name: 'Dr. Miguel Rivera, DPM',
      role: 'Founder & Chief Surgical Director',
      specialty: 'Minimally Invasive Reconstructive Surgery',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
      education: 'NYU Langone Orthopedic Institute | Mount Sinai Hospital',
      bio: 'Dr. Miguel Rivera is a world-renowned podiatric surgeon specializing in aesthetic foot surgery and minimally invasive bunion correction. He pioneered the Micro-Incision Foot Technique in New York.',
      awards: ['Castle Connolly Top Doctor 2021-2026', 'New York Magazine Best Doctors', 'Vitals Compassionate Doctor Award'],
      certifications: ['Board Certified, American Board of Foot and Ankle Surgery', 'Fellow, American College of Foot and Ankle Surgeons']
    },
    {
      id: 'lin',
      name: 'Dr. Sarah Lin, DPM',
      role: 'Director of Regenerative Podiatry',
      specialty: 'Stem Cell Therapy & Aesthetic Toe Reshaping',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
      education: 'Columbia University Irving Medical Center | Weil Cornell Medicine',
      bio: 'Dr. Sarah Lin leads our Regenerative Medicine division. She specializes in non-surgical biological therapies including PRP, Amniotic Tissue Grafting, and aesthetic foot resurfacing.',
      awards: ['Top Podiatrist New York City', 'Healthgrades 5-Star Honor Roll', 'Leading Physicians of the World'],
      certifications: ['Board Certified, American Board of Podiatric Medicine', 'Certified Regenerative Medicine Specialist']
    },
    {
      id: 'vance',
      name: 'Dr. James Vance, DPM',
      role: 'Attending Foot & Ankle Surgeon',
      specialty: 'Sports Medicine & Arthroscopic Ankle Surgery',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
      education: 'Lenox Hill Hospital | Hospital for Special Surgery (HSS)',
      bio: 'Dr. Vance serves as official podiatric consultant to professional dancers, endurance runners, and collegiate athletes throughout the Tri-State area.',
      awards: ['Tri-State Sports Medicine Physician of the Year', 'Zocdoc Top Rated Surgeon'],
      certifications: ['Board Certified in Foot Surgery & Reconstructive Rearfoot/Ankle Surgery']
    }
  ];

  return (
    <section id="doctors" className="section-padding" style={{ background: '#0D0F12', color: '#FAF8F5', position: 'relative' }}>
      {/* Background Accent Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <span className="section-badge">
            <Stethoscope size={14} /> Feet First
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
            Meet Manhattan's Premier <br />
            <span className="shimmer-text" style={{ fontStyle: 'italic' }}>Foot & Ankle Specialists</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#A0A5B0', lineHeight: 1.65 }}>
            Our team of fellowship-trained podiatric surgeons are leaders in minimally invasive foot procedures, 
            cosmetic foot enhancement, and advanced cellular regeneration.
          </p>
        </div>

        {/* Doctor Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {doctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="card-hover-gold"
              style={{
                background: '#15181C',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Doctor Image Container */}
              <div style={{ height: '360px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={doc.image}
                  alt={doc.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, #15181C 100%)'
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(13, 15, 18, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--border-dark-gold)',
                    borderRadius: 'var(--radius-full)',
                    padding: '6px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    color: 'var(--gold-primary)',
                    fontWeight: 700
                  }}
                >
                  <Star size={13} fill="var(--gold-primary)" /> Castle Connolly Top Doctor
                </div>
              </div>

              {/* Doctor Details Body */}
              <div style={{ padding: '24px 28px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ color: 'var(--gold-primary)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                    {doc.specialty}
                  </span>
                  <h3 className="font-serif" style={{ fontSize: '1.7rem', marginTop: '6px', marginBottom: '4px' }}>
                    {doc.name}
                  </h3>
                  <p style={{ color: '#9095A0', fontSize: '0.9rem', marginBottom: '16px', fontWeight: 500 }}>
                    {doc.role}
                  </p>

                  <p style={{ fontSize: '0.94rem', color: '#D0D4DD', lineHeight: 1.55, marginBottom: '20px' }}>
                    {doc.bio}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(197, 160, 89, 0.15)', display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={() => setSelectedDoctor(doc)}
                    className="btn-outline-gold"
                    style={{ flex: 1, padding: '12px', fontSize: '0.82rem' }}
                  >
                    View Credentials
                  </button>
                  <button 
                    onClick={onOpenBooking}
                    className="btn-gold"
                    style={{ flex: 1, padding: '12px', fontSize: '0.82rem' }}
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- DOCTOR CREDENTIALS MODAL --- */}
      <AnimatePresence>
        {selectedDoctor && (
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
            onClick={() => setSelectedDoctor(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#15181C',
                border: '1px solid var(--border-dark-gold)',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '650px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '32px',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
              }}
            >
              <button
                onClick={() => setSelectedDoctor(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'transparent',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  color: 'var(--gold-primary)',
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

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold-primary)' }}
                />
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#FAF8F5' }}>{selectedDoctor.name}</h3>
                  <p style={{ color: 'var(--gold-primary)', fontWeight: 600, fontSize: '0.9rem' }}>{selectedDoctor.role}</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                    <GraduationCap size={18} /> Education & Fellowship
                  </h4>
                  <p style={{ color: '#D0D4DD', fontSize: '0.95rem' }}>{selectedDoctor.education}</p>
                </div>

                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                    <Award size={18} /> Board Certifications
                  </h4>
                  <ul style={{ paddingLeft: '20px', color: '#D0D4DD', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {selectedDoctor.certifications.map((cert, cIdx) => (
                      <li key={cIdx}>{cert}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                    <Star size={18} /> Awards & Honors
                  </h4>
                  <ul style={{ paddingLeft: '20px', color: '#D0D4DD', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {selectedDoctor.awards.map((award, aIdx) => (
                      <li key={aIdx}>{award}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(197, 160, 89, 0.2)' }}>
                  <button
                    className="btn-gold"
                    style={{ width: '100%' }}
                    onClick={() => {
                      setSelectedDoctor(null);
                      onOpenBooking();
                    }}
                  >
                    Schedule Consultation With {selectedDoctor.name.split(',')[0]}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
