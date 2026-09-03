import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Stethoscope, Clock, CheckCircle2, User, Phone, Mail, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AppointmentModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: 'Downtown Manhattan (Wall St)',
    service: 'Minimally Invasive Bunion Surgery',
    date: '',
    time: '10:00 AM',
    patientName: '',
    phone: '',
    email: '',
    insurance: 'Commercial PPO',
    notes: ''
  });

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#E5C365', '#9E7B35', '#FAF8F5']
    });
  };

  const handleNextStep = () => {
    if (step === 4) {
      triggerConfetti();
      setStep(5);
    } else {
      setStep(step + 1);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        background: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={resetAndClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#15181C',
          border: '1px solid var(--border-dark-gold)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '680px',
          width: '100%',
          padding: '36px',
          position: 'relative',
          boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
          color: '#FAF8F5'
        }}
      >
        {/* Close button */}
        <button
          onClick={resetAndClose}
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

        {/* Step Progress Bar */}
        {step < 5 && (
          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold-primary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              <span>STEP {step} OF 4</span>
              <span>{step === 1 ? 'Location' : step === 2 ? 'Service' : step === 3 ? 'Date & Time' : 'Patient Info'}</span>
            </div>
            <div style={{ background: '#252930', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
              <div 
                style={{ 
                  width: `${(step / 4) * 100}%`, 
                  height: '100%', 
                  background: 'var(--gold-gradient)',
                  transition: 'width 0.3s ease'
                }} 
              />
            </div>
          </div>
        )}

        {/* --- STEP 1: CHOOSE LOCATION --- */}
        {step === 1 && (
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.9rem', marginBottom: '6px' }}>
              Select Manhattan Surgery Office
            </h3>
            <p style={{ color: '#A0A5B0', fontSize: '0.92rem', marginBottom: '24px' }}>
              Choose your preferred Dr. 2 Feet location for your consultation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {[
                { name: 'Downtown Manhattan (Wall St)', address: '111 Broadway, Suite 1302', phone: '(212) 404-2800' },
                { name: 'Midtown Manhattan (Fifth Ave)', address: '501 Fifth Avenue, Suite 1002', phone: '(212) 203-2000' }
              ].map((loc, lIdx) => (
                <button
                  key={lIdx}
                  onClick={() => setFormData({ ...formData, location: loc.name })}
                  style={{
                    background: formData.location === loc.name ? 'rgba(197, 160, 89, 0.15)' : '#1D2127',
                    border: formData.location === loc.name ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: '#FAF8F5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <MapPin size={22} color="var(--gold-primary)" />
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.05rem', color: formData.location === loc.name ? 'var(--gold-primary)' : '#FAF8F5' }}>
                        {loc.name}
                      </strong>
                      <span style={{ fontSize: '0.86rem', color: '#A0A5B0' }}>{loc.address}</span>
                    </div>
                  </div>
                  {formData.location === loc.name && <CheckCircle2 size={20} color="var(--gold-primary)" />}
                </button>
              ))}
            </div>

            <button className="btn-gold" style={{ width: '100%' }} onClick={handleNextStep}>
              Continue to Select Service <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* --- STEP 2: CHOOSE SERVICE --- */}
        {step === 2 && (
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.9rem', marginBottom: '6px' }}>
              Reason for Visit / Treatment
            </h3>
            <p style={{ color: '#A0A5B0', fontSize: '0.92rem', marginBottom: '24px' }}>
              Select the primary concern you would like our podiatrists to evaluate.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
              {[
                'Minimally Invasive Bunion Surgery',
                'PRP & Stem Cell Regenerative Therapy',
                'Cosmetic Foot Surgery & Toe Reshaping',
                'Onyfix® Nail Correction System',
                'Sports Medicine & Ankle Rehabilitation',
                'Surgical Second Opinion Consultation'
              ].map((serv, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setFormData({ ...formData, service: serv })}
                  style={{
                    background: formData.service === serv ? 'rgba(197, 160, 89, 0.15)' : '#1D2127',
                    border: formData.service === serv ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: formData.service === serv ? 'var(--gold-primary)' : '#D0D4DD',
                    fontSize: '0.88rem',
                    fontWeight: 600
                  }}
                >
                  {serv}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-dark" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
              <button className="btn-gold" style={{ flex: 2 }} onClick={handleNextStep}>Select Date & Time <ArrowRight size={16} /></button>
            </div>
          </div>
        )}

        {/* --- STEP 3: DATE & TIME --- */}
        {step === 3 && (
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.9rem', marginBottom: '6px' }}>
              Preferred Date & Time
            </h3>
            <p style={{ color: '#A0A5B0', fontSize: '0.92rem', marginBottom: '24px' }}>
              Pick your ideal appointment slot. Same-week openings available.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--gold-primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Appointment Date
                </label>
                <input
                  type="date"
                  value={formData.date || new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#1D2127',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px',
                    color: '#FAF8F5',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--gold-primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                  Available Time Slot
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                  {['8:30 AM', '10:00 AM', '11:30 AM', '1:30 PM', '3:00 PM', '4:30 PM', '5:30 PM'].map((tSlot) => (
                    <button
                      key={tSlot}
                      onClick={() => setFormData({ ...formData, time: tSlot })}
                      style={{
                        background: formData.time === tSlot ? 'var(--gold-gradient)' : '#1D2127',
                        color: formData.time === tSlot ? '#0E1012' : '#D0D4DD',
                        border: 'none',
                        padding: '12px',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        cursor: 'pointer'
                      }}
                    >
                      {tSlot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-dark" style={{ flex: 1 }} onClick={() => setStep(2)}>Back</button>
              <button className="btn-gold" style={{ flex: 2 }} onClick={handleNextStep}>Enter Patient Details <ArrowRight size={16} /></button>
            </div>
          </div>
        )}

        {/* --- STEP 4: PATIENT CONTACT INFO --- */}
        {step === 4 && (
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.9rem', marginBottom: '6px' }}>
              Patient Information
            </h3>
            <p style={{ color: '#A0A5B0', fontSize: '0.92rem', marginBottom: '24px' }}>
              We will contact you within 2 business hours to confirm your booking.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              <div>
                <input
                  type="text"
                  placeholder="Full Legal Name *"
                  required
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#1D2127',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    color: '#FAF8F5',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    background: '#1D2127',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    color: '#FAF8F5',
                    outline: 'none'
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    background: '#1D2127',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    color: '#FAF8F5',
                    outline: 'none'
                  }}
                />
              </div>

              <select
                value={formData.insurance}
                onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                style={{
                  background: '#1D2127',
                  border: '1px solid rgba(197, 160, 89, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 18px',
                  color: '#FAF8F5',
                  outline: 'none'
                }}
              >
                <option value="Commercial PPO">Commercial PPO Insurance (Aetna, Cigna, BCBS, UHC)</option>
                <option value="Self Pay / Out-of-Pocket">Self-Pay / Cash Concierge</option>
                <option value="Medicare">Medicare</option>
              </select>

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <button type="button" className="btn-dark" style={{ flex: 1 }} onClick={() => setStep(3)}>Back</button>
                <button type="submit" className="btn-gold" style={{ flex: 2 }}>Confirm & Book Appointment <Sparkles size={16} /></button>
              </div>
            </form>
          </div>
        )}

        {/* --- STEP 5: CONFETTI SUCCESS --- */}
        {step === 5 && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div 
              style={{
                width: '80px',
                height: '80px',
                background: 'var(--gold-gradient)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: 'var(--shadow-gold-glow)'
              }}
            >
              <CheckCircle2 size={44} color="#0E1012" />
            </div>

            <h3 className="font-serif text-gold-gradient" style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
              Appointment Requested!
            </h3>
            <p style={{ color: '#A0A5B0', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#FAF8F5' }}>{formData.patientName || 'Patient'}</strong>. Your request for <strong style={{ color: 'var(--gold-primary)' }}>{formData.service}</strong> at our <strong style={{ color: '#FAF8F5' }}>{formData.location}</strong> office has been logged.
            </p>

            <div style={{ background: '#1D2127', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(197, 160, 89, 0.2)', marginBottom: '32px', textAlign: 'left' }}>
              <div style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                APPOINTMENT SUMMARY
              </div>
              <div style={{ fontSize: '0.92rem', color: '#D0D4DD', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span>• <strong>Location:</strong> {formData.location}</span>
                <span>• <strong>Preferred Slot:</strong> {formData.time}</span>
                <span>• <strong>Confirmation Code:</strong> #DR2F-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>

            <button className="btn-gold" style={{ width: '100%' }} onClick={resetAndClose}>
              Return to Website
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
}
