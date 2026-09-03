import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Who is the best podiatrist and foot surgeon in Manhattan?',
      a: 'Dr. Miguel Rivera and the surgical team at Dr. 2 Feet are consistently ranked among Manhattan’s top podiatrists by Castle Connolly, Vitals, and Healthgrades. They specialize in virtually scarless minimally invasive foot surgery and advanced stem cell treatments.'
    },
    {
      q: 'What makes Minimally Invasive Foot Surgery superior to traditional open surgery?',
      a: 'Minimally invasive foot surgery uses micro-incisions under 3mm and live fluoroscopy. Because muscle and soft tissue are preserved, patients experience 80% less swelling, immediate same-day walking capability, and virtually invisible scars.'
    },
    {
      q: 'Does Dr. 2 Feet accept commercial medical insurance?',
      a: 'Yes, we accept major commercial PPO medical insurance plans (Aetna, Cigna, Blue Cross Blue Shield, UnitedHealthcare, Medicare). Our billing department performs instant out-of-network benefit verification prior to your visit.'
    },
    {
      q: 'How quickly can I return to high heels or sports after bunion surgery?',
      a: 'With our proprietary Micro-Bunionectomy, most patients walk out of surgery immediately in a protective shoe, return to office work in 1 to 2 weeks, and transition back to athletic sneakers, running, and high heels within 4 to 6 weeks.'
    },
    {
      q: 'What should I bring to my initial consultation at Dr. 2 Feet?',
      a: 'Please bring a valid photo ID, your current insurance card, a list of current medications, and any prior X-rays or MRI reports of your feet or ankles if available. We also perform on-site digital X-rays.'
    },
    {
      q: 'Are stem cell and PRP therapies painful?',
      a: 'No. Regenerative PRP and stem cell injections are performed in our private biological treatment rooms using localized numbing spray and ultrasound guidance. The entire session takes under 30 minutes with zero post-treatment downtime.'
    }
  ];

  return (
    <section id="faq" className="section-padding" style={{ background: '#0D0F12', color: '#FAF8F5' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', margin: '0 auto 50px' }}>
          <span className="section-badge">
            <HelpCircle size={14} /> Frequently Asked Questions
          </span>

          <h2 
            className="font-serif" 
            style={{ 
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', 
              fontWeight: 500, 
              lineHeight: 1.1, 
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            Manhattan Podiatry <br />
            <span className="shimmer-text" style={{ fontStyle: 'italic' }}>Questions & Answers</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: '#15181C',
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1px solid var(--gold-primary)' : '1px solid rgba(197, 160, 89, 0.18)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    background: 'transparent',
                    border: 'none',
                    color: '#FAF8F5',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                  className="font-serif"
                >
                  <span>{faq.q}</span>
                  <div 
                    style={{
                      background: isOpen ? 'var(--gold-gradient)' : 'rgba(197, 160, 89, 0.1)',
                      padding: '8px',
                      borderRadius: '50%',
                      display: 'flex',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? <ChevronUp size={18} color="#0E1012" /> : <ChevronDown size={18} color="var(--gold-primary)" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        style={{
                          padding: '0 28px 24px',
                          color: '#A0A5B0',
                          fontSize: '0.98rem',
                          lineHeight: 1.65,
                          borderTop: '1px solid rgba(197, 160, 89, 0.15)',
                          paddingTop: '16px'
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
