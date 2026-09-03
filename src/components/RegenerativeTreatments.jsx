import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, CheckCircle2, Sparkles, ArrowRight, Dna, Activity, ShieldCheck } from 'lucide-react';

export default function RegenerativeTreatments({ onOpenBooking }) {
  const treatments = [
    {
      id: 'prp',
      name: 'Platelet-Rich Plasma (PRP) Therapy',
      subtitle: 'High-Concentration Autologous Growth Factor Injections',
      icon: <Activity size={24} color="var(--gold-primary)" />,
      description: 'PRP therapy harnesses your blood’s concentrated platelets to stimulate natural cellular repair in damaged plantar fascia, Achilles tendons, and osteoarthritic foot joints.',
      candidates: 'Plantar fasciitis, Achilles tendonitis, chronic ankle instability, joint cartilage wear.',
      recovery: 'Zero downtime. Resume light daily walking immediately after 30-minute in-office treatment.'
    },
    {
      id: 'stemcell',
      name: 'Stem Cell & Exosome Biologics',
      subtitle: 'Advanced Cellular Regeneration for Complex Cartilage Repair',
      icon: <Dna size={24} color="var(--gold-primary)" />,
      description: 'Extracellular vesicles and mesenchymal signaling proteins stimulate profound tissue renewal, bypassing traditional fusion surgeries for severe arthritis and ligament tears.',
      candidates: 'Severe foot osteoarthritis, non-healing tendon ruptures, bone spur inflammation.',
      recovery: 'Mild localized tenderness for 24-48 hours. Rapid tissue regeneration over 4 to 8 weeks.'
    },
    {
      id: 'amniotic',
      name: 'Amniotic Tissue Matrix Grafting',
      subtitle: 'Placental Allograft Scaffold for Chronic Wound & Joint Renewal',
      icon: <Sparkles size={24} color="var(--gold-primary)" />,
      description: 'Amniotic membrane matrix rich in hyaluronic acid, anti-inflammatory cytokines, and collagen scaffolds that heal resistant diabetic foot ulcers and joint degeneration.',
      candidates: 'Non-healing foot wounds, tendon adhesions, chronic joint stiffness, postsurgical scar softening.',
      recovery: 'Pain-free application under local numbing. Progressive healing within 1 to 3 weeks.'
    },
    {
      id: 'eswt',
      name: 'Shockwave Therapy (ESWT)',
      subtitle: 'High-Energy Acoustic Pulse Technology for Calcifications',
      icon: <HeartPulse size={24} color="var(--gold-primary)" />,
      description: 'Non-invasive acoustic waves break up heel spur calcifications and trigger neovascularization to flood damaged tissue with oxygenated blood flow.',
      candidates: 'Heel spurs, plantar fasciitis, insertional tendonitis, morton’s neuroma.',
      recovery: 'Immediate walking. No anesthesia or needles required.'
    }
  ];

  const [activeTreatment, setActiveTreatment] = useState(treatments[0]);

  return (
    <section id="regenerative" className="section-padding" style={{ background: '#090B0E', color: '#FAF8F5', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <span className="section-badge">
            <HeartPulse size={14} /> Biological Healing
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
            Specialized <br />
            <span className="shimmer-text" style={{ fontStyle: 'italic' }}>Regenerative Treatments</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#A0A5B0', lineHeight: 1.65 }}>
            Activate your body’s inherent healing capacity. Replace invasive major surgeries 
            with targeted biological cellular therapies administered in our Manhattan clinic.
          </p>
        </div>

        {/* Treatment Interactive Selector Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Left Navigation Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {treatments.map((t) => {
              const isSelected = activeTreatment.id === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTreatment(t)}
                  style={{
                    background: isSelected ? '#1A1D22' : '#121418',
                    border: isSelected ? '1px solid var(--gold-primary)' : '1px solid rgba(197, 160, 89, 0.15)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px 24px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: isSelected ? '0 10px 25px rgba(197, 160, 89, 0.15)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div 
                      style={{
                        background: isSelected ? 'var(--gold-gradient)' : 'rgba(197, 160, 89, 0.1)',
                        padding: '10px',
                        borderRadius: '10px',
                        display: 'flex'
                      }}
                    >
                      {React.cloneElement(t.icon, { color: isSelected ? '#0E1012' : 'var(--gold-primary)' })}
                    </div>
                    <div>
                      <h4 className="font-serif" style={{ fontSize: '1.25rem', color: isSelected ? '#FAF8F5' : '#D0D4DD' }}>
                        {t.name}
                      </h4>
                    </div>
                  </div>
                  <ArrowRight size={18} color={isSelected ? 'var(--gold-primary)' : '#4A4E57'} />
                </button>
              );
            })}
          </div>

          {/* Right Selected Treatment Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTreatment.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                background: '#15181C',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-dark-gold)',
                padding: '36px',
                boxShadow: 'var(--shadow-card-dark)'
              }}
            >
              <span style={{ color: 'var(--gold-primary)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                BIOLOGICAL PROTOCOL
              </span>

              <h3 className="font-serif text-gold-gradient" style={{ fontSize: '2.1rem', marginTop: '6px', marginBottom: '8px' }}>
                {activeTreatment.name}
              </h3>
              <p style={{ color: '#A0A5B0', fontSize: '0.95rem', marginBottom: '24px', fontWeight: 500 }}>
                {activeTreatment.subtitle}
              </p>

              <p style={{ fontSize: '1.05rem', color: '#FAF8F5', lineHeight: 1.7, marginBottom: '28px' }}>
                {activeTreatment.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ background: '#1D2127', padding: '16px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 160, 89, 0.15)' }}>
                  <div style={{ color: 'var(--gold-primary)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    IDEAL CANDIDATES
                  </div>
                  <div style={{ color: '#D0D4DD', fontSize: '0.94rem', marginTop: '4px' }}>
                    {activeTreatment.candidates}
                  </div>
                </div>

                <div style={{ background: '#1D2127', padding: '16px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 160, 89, 0.15)' }}>
                  <div style={{ color: 'var(--gold-primary)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    EXPECTED RECOVERY
                  </div>
                  <div style={{ color: '#D0D4DD', fontSize: '0.94rem', marginTop: '4px' }}>
                    {activeTreatment.recovery}
                  </div>
                </div>
              </div>

              <button className="btn-gold" style={{ width: '100%' }} onClick={onOpenBooking}>
                Schedule {activeTreatment.name.split(' ')[0]} Consultation
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
