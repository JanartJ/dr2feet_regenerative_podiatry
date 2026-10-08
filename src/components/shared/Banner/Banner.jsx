import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Award,
  Star,
  CheckCircle,
  Sparkles,
  Activity,
} from "lucide-react";

export default function Banner({ onOpenBooking,title, content, subtitle = "Manhattan's Top Podiatric Surgeons" }) {
  const procedureTicker = [
    "Minimally Invasive Bunion Surgery",
    "Stem Cell & Exosome Therapy",
    "Cosmetic Foot Surgery",
    "Platelet-Rich Plasma (PRP)",
    "Onyfix Nail Correction",
    "Laser Toenail Therapy",
    "Sports Ankle Rehabilitation",
    "Hammertoe Reconstruction",
    "Amniotic Tissue Matrix",
  ];

  const stats = [
    { label: "Procedures Performed", value: "15,000+" },
    { label: "Patient Satisfaction Rate", value: "99.4%" },
    { label: "Verified 5-Star Reviews", value: "1,250+" },
    { label: "Manhattan Surgery Suites", value: "2 Locations" },
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(180deg, #0D0F12 0%, #15181C 100%)",
        color: "#FAF8F5",
        overflow: "hidden",
        paddingTop: "60px",
      }}
    >
      {/* Background Graphic Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(197, 160, 89, 0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero Visual Image backdrop overlay */}
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.18, opacity: 0.38 }}
        transition={{ duration: 7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "contrast(120%) grayscale(40%)",
          pointerEvents: "none",
          transformOrigin: "center 30%",
          willChange: "transform, opacity",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          alignItems: "center",
          paddingBottom: "40px",
        }}
      >
        <div style={{ maxWidth: "850px", width: "100%" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-badge"
          >
            <Sparkles size={14} /> {subtitle}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)",
              fontWeight: 500,
              lineHeight: 1.06,
              letterSpacing: "-1px",
              marginBottom: "24px",
              textTransform: "uppercase",
            }}
          >
            {title}<br />
            {/* <span
              className="shimmer-text"
              style={{ fontStyle: "italic", fontWeight: 600 }}
            >
              Regenerative Podiatry
            </span>{" "}
            & Foot Surgery */}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
              color: "#A8ADB8",
              lineHeight: 1.65,
              maxWidth: "680px",
              marginBottom: "36px",
              fontWeight: 400,
            }}
          >
            {content}
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <button
              className="btn-gold"
              onClick={onOpenBooking}
              style={{ fontSize: "0.95rem", padding: "16px 36px" }}
            >
              <Calendar size={18} /> Schedule Consultation
            </button>
            {/* <a
              href="#minimally-invasive"
              className="btn-outline-gold"
              style={{ fontSize: "0.95rem", padding: "16px 32px" }}
            >
              Minimally Invasive Surgery <ArrowRight size={18} />
            </a> */}
          </motion.div>

          {/* Review trust badge row */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="var(--gold-primary)"
                  color="var(--gold-primary)"
                />
              ))}
            </div>
            <span
              style={{ fontSize: "0.88rem", color: "#D0D4DD", fontWeight: 500 }}
            >
              Rated <strong style={{ color: "#FAF8F5" }}>5.0/5.0</strong> on
              Google, Zocdoc & Castle Connolly
            </span>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
