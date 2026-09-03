import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, MessageSquare, X, ChevronUp, MapPin } from 'lucide-react';

export default function QuickContactFAB({ onOpenBooking }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 1500 }}>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            style={{
              background: '#15181C',
              border: '1px solid var(--border-dark-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '16px',
              marginBottom: '14px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: '240px',
              color: '#FAF8F5'
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold-primary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
              DIRECT CONCIERGE LINES
            </div>

            <a
              href="tel:2124042800"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#1D2127',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                color: '#FAF8F5',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              <Phone size={14} color="var(--gold-primary)" /> Downtown: (212) 404-2800
            </a>

            <a
              href="tel:2122032000"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#1D2127',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                color: '#FAF8F5',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              <Phone size={14} color="var(--gold-primary)" /> Midtown: (212) 203-2000
            </a>

            <button
              onClick={() => {
                setExpanded(false);
                onOpenBooking();
              }}
              className="btn-gold"
              style={{ padding: '10px 14px', fontSize: '0.82rem', width: '100%', marginTop: '4px' }}
            >
              <Calendar size={14} /> Book Online Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: 'var(--gold-gradient)',
          border: 'none',
          color: '#0E1012',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(197, 160, 89, 0.5)',
          transition: 'transform 0.3s ease'
        }}
      >
        {expanded ? <X size={26} /> : <Calendar size={26} />}
      </button>
    </div>
  );
}
