import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, X, User } from 'lucide-react';

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'When You Cannot Wear Heels: High Heel Pain & Neuroma Solutions',
      category: 'COSMETIC PODIATRY',
      readTime: '4 min read',
      author: 'Dr. Sarah Lin, DPM',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
      excerpt: 'Stiletto compression can cause nerve thickening known as Morton’s Neuroma. Learn about non-surgical stem cell fat pads and micro-decompression.',
      content: `High heels force 90% of body weight onto the delicate metatarsal heads under the ball of your foot. Over time, constant micro-friction compresses digital nerves, resulting in sharp burning pain and numbness.
      
      At Dr. 2 Feet, we offer two revolutionary high heel relief procedures:
      1. High-Heel Cushion Fat Pad Restoration: Injectable biological matrix rebuilds natural cushioning beneath metatarsal heads.
      2. Micro-Incision Neuroma Release: A 2-minute outpatient procedure performed under local numbing that releases nerve tension without permanent numbness.`
    },
    {
      id: 2,
      title: 'Are You Born With Bunion Trait or Does Footwear Cause It?',
      category: 'SURGICAL INSIGHTS',
      readTime: '5 min read',
      author: 'Dr. Miguel Rivera, DPM',
      image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&q=80&w=800',
      excerpt: 'Uncovering the genetic bone structure myths vs shoes. Why traditional bunion surgery fails and how micro-pins deliver lifelong correction.',
      content: `Bunions (Hallux Valgus) are primarily inherited mechanical deformities of the first metatarsophalangeal joint. Narrow high heels exacerbate the angle, but faulty foot biomechanics are the true underlying cause.
      
      Traditional open bunion surgery cuts muscle tissue and screws metal plates into bone, causing stiff joints and long recovery. Our Minimally Invasive Micro-Bunionectomy realigns the joint through a 3mm opening under fluoroscopy, preserving full joint flexibility.`
    },
    {
      id: 3,
      title: 'Stem Cells vs Surgery: Non-Invasive Heel Spur & Plantar Fasciitis Relief',
      category: 'REGENERATIVE MEDICINE',
      readTime: '6 min read',
      author: 'Dr. James Vance, DPM',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      excerpt: 'How concentrated growth factors and amniotic membranes repair micro-tears in chronic heel pain without invasive tissue cutting.',
      content: `Plantar fasciitis affects over 2 million Americans annually. Chronic heel pain is not active inflammation—it is micro-degenerative tissue breakdown (fasciosis).
      
      Platelet-Rich Plasma (PRP) and Stem Cell Exosomes flood the damaged fascia with autologous growth factors, accelerating tendon matrix regeneration in 80% of patients within 3 weeks without surgical incisions.`
    }
  ];

  return (
    <section id="blog" className="section-padding" style={{ background: '#0D0F12', color: '#FAF8F5' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <span className="section-badge">
            <BookOpen size={14} /> Foot Care Insights
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
            Dr. 2 Feet <br />
            <span className="shimmer-text" style={{ fontStyle: 'italic' }}>Podiatry Blog & Journal</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#A0A5B0' }}>
            What’s up with your feet? Explore expert surgical articles and wellness advice from our Manhattan doctors.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}
        >
          {articles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="card-hover-gold"
              style={{
                background: '#15181C',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={art.image}
                  alt={art.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(13, 15, 18, 0.85)', backdropFilter: 'blur(8px)', border: '1px solid var(--border-dark-gold)', color: 'var(--gold-primary)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1px', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                  {art.category}
                </div>
              </div>

              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#9095A0', fontSize: '0.82rem', marginBottom: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} color="var(--gold-primary)" /> {art.readTime}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <User size={13} color="var(--gold-primary)" /> {art.author}
                    </span>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#FAF8F5', lineHeight: 1.35, marginBottom: '12px' }}>
                    {art.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#A0A5B0', lineHeight: 1.6, marginBottom: '20px' }}>
                    {art.excerpt}
                  </p>
                </div>

                <button 
                  onClick={() => setActiveArticle(art)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--gold-primary)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: 0
                  }}
                >
                  Read Full Article <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* --- ARTICLE READER MODAL --- */}
      <AnimatePresence>
        {activeArticle && (
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
            onClick={() => setActiveArticle(null)}
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
                maxWidth: '700px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '36px',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
              }}
            >
              <button
                onClick={() => setActiveArticle(null)}
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

              <span style={{ color: 'var(--gold-primary)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {activeArticle.category}
              </span>

              <h2 className="font-serif" style={{ fontSize: '2.1rem', color: '#FAF8F5', marginTop: '6px', marginBottom: '16px', lineHeight: 1.25 }}>
                {activeArticle.title}
              </h2>

              <div style={{ display: 'flex', gap: '16px', color: '#9095A0', fontSize: '0.85rem', marginBottom: '24px', borderBottom: '1px solid rgba(197, 160, 89, 0.2)', paddingBottom: '16px' }}>
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <div style={{ color: '#D0D4DD', fontSize: '1.02rem', lineHeight: 1.75, whitespace: 'pre-line' }}>
                {activeArticle.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
