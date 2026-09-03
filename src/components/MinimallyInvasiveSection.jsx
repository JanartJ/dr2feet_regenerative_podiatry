import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, XCircle, ArrowRight, Zap, Sparkles, Clock } from 'lucide-react';

export default function MinimallyInvasiveSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('minimally');

  const comparisonData = {
    minimally: {
      title: 'Minimally Invasive Micro-Incision Surgery',
      subtitle: 'Advanced fluoroscopic micro-pin technology pioneered at Dr. 2 Feet.',
      features: [
        { title: 'Incision Size', detail: 'Micro-incisions under 3mm (virtually invisible)' },
        { title: 'Anesthesia', detail: 'Local twilight sedation — no general anesthesia risks' },
        { title: 'Post-Op Mobility', detail: 'Immediate weight-bearing (walk out of the office)' },
        { title: 'Pain & Swelling', detail: 'Minimal tissue trauma resulting in 80% less swelling' },
        { title: 'Scarring', detail: 'Virtually scarless aesthetic result' },
        { title: 'Recovery Time', detail: 'Walk normally in 2 weeks vs 8-12 weeks' }
      ]
    },
    traditional: {
      title: 'Traditional Open Foot Surgery',
      subtitle: 'Standard legacy surgical approaches used by general hospitals.',
      features: [
        { title: 'Incision Size', detail: 'Large 5cm to 10cm open incisions' },
        { title: 'Anesthesia', detail: 'Full general anesthesia required' },
        { title: 'Post-Op Mobility', detail: 'Strict non-weight-bearing in cast/boot for 6+ weeks' },
        { title: 'Pain & Swelling', detail: 'Significant post-op pain requiring heavy narcotics' },
        { title: 'Scarring', detail: 'Prominent long surgical scars on top of foot' },
        { title: 'Recovery Time', detail: '8 to 12 weeks of restricted activity' }
      ]
    }
  };

  const recoveryTimeline = [
    { day: 'DAY 1', title: 'Walk Out On Your Own', desc: 'Walk out of our Manhattan surgical suite wearing a sleek post-op shoe.' },
    { day: 'WEEK 2', title: 'Return To Office & Work', desc: 'Transition back to regular footwear and return to office routine.' },
    { day: 'WEEK 4-6', title: 'Full Athletic & Shoe Freedom', desc: 'Resume running, workout classes, high heels, and sports activity.' }
  ];

  return (
    <section id="minimally-invasive" className="section-padding" style={{ background: '#0D0F12', color: '#FAF8F5', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <span className="section-badge">
            <Zap size={14} /> Surgical Innovation
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
            Why We Choose <br />
            <span className="shimmer-text" style={{ fontStyle: 'italic' }}>Minimally Invasive Surgery</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#A0A5B0', lineHeight: 1.65 }}>
            Say goodbye to painful legacy foot operations. Our micro-incision techniques fix bunions, 
            hammertoes, and bone spurs through tiny pinholes under live fluoroscopic guidance.
          </p>
        </div>

        {/* Tab Switch Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div 
            style={{
              background: '#15181C',
              padding: '6px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-dark-gold)',
              display: 'inline-flex',
              gap: '8px'
            }}
          >
            <button
              onClick={() => setActiveTab('minimally')}
              style={{
                background: activeTab === 'minimally' ? 'var(--gold-gradient)' : 'transparent',
                color: activeTab === 'minimally' ? '#0E1012' : '#FAF8F5',
                border: 'none',
                padding: '12px 28px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Sparkles size={16} /> Minimally Invasive Care
            </button>
            <button
              onClick={() => setActiveTab('traditional')}
              style={{
                background: activeTab === 'traditional' ? 'rgba(255,255,255,0.15)' : 'transparent',
                color: activeTab === 'traditional' ? '#FAF8F5' : '#8A8F9B',
                border: 'none',
                padding: '12px 28px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Traditional Open Surgery
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            style={{
              background: '#15181C',
              borderRadius: 'var(--radius-lg)',
              border: activeTab === 'minimally' ? '1px solid var(--border-dark-gold)' : '1px solid rgba(255,255,255,0.1)',
              padding: '40px',
              boxShadow: 'var(--shadow-card-dark)',
              marginBottom: '60px'
            }}
          >
            <div style={{ marginBottom: '32px', borderBottom: '1px solid rgba(197, 160, 89, 0.2)', paddingBottom: '20px' }}>
              <h3 className="font-serif text-gold-gradient" style={{ fontSize: '2rem', marginBottom: '6px' }}>
                {comparisonData[activeTab].title}
              </h3>
              <p style={{ color: '#A0A5B0', fontSize: '1rem' }}>
                {comparisonData[activeTab].subtitle}
              </p>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px'
              }}
            >
              {comparisonData[activeTab].features.map((feat, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: '#1D2127',
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(197, 160, 89, 0.15)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px'
                  }}
                >
                  {activeTab === 'minimally' ? (
                    <CheckCircle2 size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  ) : (
                    <XCircle size={22} color="#E55353" style={{ flexShrink: 0, marginTop: '2px' }} />
                  )}
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {feat.title}
                    </span>
                    <p style={{ fontSize: '0.96rem', color: '#FAF8F5', marginTop: '4px', fontWeight: 500 }}>
                      {feat.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- RECOVERY TIMELINE INFOGRAPHIC --- */}
        <div style={{ marginTop: '40px' }}>
          <h3 className="font-serif" style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '32px' }}>
            Accelerated 3-Step Recovery Journey
          </h3>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {recoveryTimeline.map((step, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'linear-gradient(135deg, #181B20 0%, #111317 100%)',
                  padding: '28px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(197, 160, 89, 0.2)',
                  position: 'relative'
                }}
              >
                <div style={{ color: 'var(--gold-primary)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '8px' }}>
                  {step.day}
                </div>
                <h4 className="font-serif" style={{ fontSize: '1.4rem', color: '#FAF8F5', marginBottom: '10px' }}>
                  {step.title}
                </h4>
                <p style={{ color: '#9DA2AF', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button className="btn-gold" onClick={onOpenBooking} style={{ padding: '16px 36px', fontSize: '0.95rem' }}>
            Book Minimally Invasive Consultation <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
