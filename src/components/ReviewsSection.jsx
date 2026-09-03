import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';

export default function ReviewsSection() {
  const [filter, setFilter] = useState('ALL');
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Victoria S., Upper East Side',
      procedure: 'Minimally Invasive Bunion Surgery',
      category: 'BUNION',
      rating: 5,
      date: 'August 2026',
      review: 'Dr. Rivera and his team at Dr. 2 Feet are absolute miracle workers. I had been terrified of bunion surgery for years after hearing nightmare stories. With Dr. Rivera, I walked out of the surgical suite 30 minutes later! Micro-incision healed so perfectly you literally cannot see a scar. I am back in heels with zero pain.',
      verified: 'Verified Zocdoc Patient'
    },
    {
      id: 2,
      name: 'Marcus K., Tribeca',
      procedure: 'Platelet-Rich Plasma (PRP) Therapy',
      category: 'REGENERATIVE',
      rating: 5,
      date: 'July 2026',
      review: 'As a marathon runner, chronic Achilles tendonitis threatened to end my training. Dr. Sarah Lin recommended high-concentration PRP injections. After 3 weeks, the inflammation was completely gone. Completed the NYC Marathon pain-free thanks to Dr. 2 Feet!',
      verified: 'Verified Google Reviewer'
    },
    {
      id: 3,
      name: 'Elena R., Soho',
      procedure: 'Onyfix Nail Correction & Cosmetic Toe Reshaping',
      category: 'COSMETIC',
      rating: 5,
      date: 'June 2026',
      review: 'The office feels like a 5-star luxury spa on Park Avenue. The Onyfix nail treatment was 100% painless and fixed my ingrown nail without surgery. Staff is incredibly attentive and professional.',
      verified: 'Verified Healthgrades Patient'
    },
    {
      id: 4,
      name: 'Jonathan B., Financial District',
      procedure: 'Arthroscopic Ankle Surgery',
      category: 'SPORTS',
      rating: 5,
      date: 'August 2026',
      review: 'Dr. Vance fixed a severe ankle ligament tear that 2 other doctors wanted to do open surgery on. His arthroscopic technique was flawless. Back on the basketball court in 4 weeks. Best podiatrist in Manhattan.',
      verified: 'Verified Castle Connolly Review'
    }
  ];

  const filteredReviews = filter === 'ALL' ? reviews : reviews.filter(r => r.category === filter);

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const platforms = [
    { name: 'Google Reviews', rating: '5.0 ★★★★★', count: '650+ Reviews' },
    { name: 'Zocdoc', rating: '4.9 ★★★★★', count: '480+ Reviews' },
    { name: 'Healthgrades', rating: '5.0 ★★★★★', count: '320+ Reviews' },
    { name: 'Castle Connolly', rating: 'Top Doctor 2026', count: 'Certified' },
    { name: 'Vitals', rating: '5.0 ★★★★★', count: 'Compassionate Doctor' }
  ];

  return (
    <section id="reviews" className="section-padding" style={{ background: '#FAF8F5', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <span className="section-badge">
            <Star size={14} /> Dr. 2 Feet Reviews
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
            Real Results From <br />
            <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>Real New Yorkers</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-dark-secondary)' }}>
            Over 1,200 verified 5-star ratings across Manhattan's leading healthcare platforms.
          </p>
        </div>

        {/* Platform Badges Banner */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '50px'
          }}
        >
          {platforms.map((plat, pIdx) => (
            <div 
              key={pIdx}
              style={{
                background: '#FFFFFF',
                padding: '20px 16px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--border-light-gold)'
              }}
            >
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-dark-primary)' }}>
                {plat.name}
              </div>
              <div style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.9rem', margin: '4px 0' }}>
                {plat.rating}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dark-secondary)', fontWeight: 600 }}>
                {plat.count}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {['ALL', 'BUNION', 'REGENERATIVE', 'COSMETIC', 'SPORTS'].map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setActiveReviewIdx(0); }}
              style={{
                background: filter === cat ? 'var(--gold-gradient)' : '#FFFFFF',
                color: filter === cat ? '#0E1012' : 'var(--text-dark-primary)',
                border: filter === cat ? 'none' : '1px solid var(--border-light-gold)',
                padding: '10px 22px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                letterSpacing: '1px',
                transition: 'all 0.3s ease'
              }}
            >
              {cat === 'ALL' ? 'ALL REVIEWS' : cat}
            </button>
          ))}
        </div>

        {/* Review Spotlight Slider Card */}
        {filteredReviews.length > 0 && (
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={filteredReviews[activeReviewIdx].id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '48px',
                  boxShadow: 'var(--shadow-card)',
                  border: '1px solid var(--border-light-gold)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(filteredReviews[activeReviewIdx].rating)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--gold-primary)" color="var(--gold-primary)" />
                    ))}
                  </div>

                  <span style={{ background: 'var(--bg-light-warm)', color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.78rem', padding: '6px 14px', borderRadius: 'var(--radius-full)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {filteredReviews[activeReviewIdx].procedure}
                  </span>
                </div>

                <p className="font-serif" style={{ fontSize: '1.45rem', lineHeight: 1.6, color: 'var(--text-dark-primary)', fontStyle: 'italic', marginBottom: '32px' }}>
                  "{filteredReviews[activeReviewIdx].review}"
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-light-gold)', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-dark-primary)' }}>
                      {filteredReviews[activeReviewIdx].name}
                    </h4>
                    <span style={{ color: 'var(--gold-dark)', fontSize: '0.84rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <CheckCircle2 size={14} /> {filteredReviews[activeReviewIdx].verified}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      onClick={prevReview}
                      style={{
                        background: 'var(--bg-light-warm)',
                        border: '1px solid var(--border-light-gold)',
                        color: 'var(--gold-dark)',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextReview}
                      style={{
                        background: 'var(--bg-light-warm)',
                        border: '1px solid var(--border-light-gold)',
                        color: 'var(--gold-dark)',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
