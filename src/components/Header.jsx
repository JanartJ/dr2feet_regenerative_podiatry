import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Dr2FeetLogo from "../assets/Dr2FeetLogo";

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Doctors", href: "#doctors" },
    {
      name: "Specialties",
      href: "#minimally-invasive",
      dropdown: [
        {
          title: "Minimally Invasive Bunion Surgery",
          href: "#minimally-invasive",
        },
        {
          title: "Regenerative Therapy (PRP & Stem Cell)",
          href: "#regenerative",
        },
        { title: "Cosmetic Foot Surgery", href: "#cosmetic" },
        { title: "Sports Medicine & Ankle Care", href: "#specialized" },
      ],
    },
    { name: "Why Us", href: "#tagline" },
    { name: "Locations", href: "#locations" },
    { name: "Reviews", href: "#reviews" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* --- TOP ANNOUNCEMENT / CONTACT BAR --- */}
      <div
        style={{
          background: "#090B0E",
          borderBottom: "1px solid rgba(197, 160, 89, 0.2)",
          padding: "8px 0",
          fontSize: "0.82rem",
          color: "#A0A5B0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--gold-primary)",
                fontWeight: 600,
              }}
            >
              <ShieldCheck size={15} /> Top Rated Manhattan Podiatry Clinic
            </span>
            <span
              style={{
                display: "none",
                md: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Clock size={14} color="var(--gold-primary)" /> Mon - Fri: 8:00 AM
              - 6:30 PM
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a
                href="tel:2124042800"
                style={{
                  color: "#FAF8F5",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: 600,
                }}
              >
                <Phone size={13} color="var(--gold-primary)" /> Downtown:{" "}
                <span style={{ color: "var(--gold-primary)" }}>
                  (212) 404-2800
                </span>
              </a>
              <span style={{ color: "rgba(197, 160, 89, 0.4)" }}>|</span>
              <a
                href="tel:2122032000"
                style={{
                  color: "#FAF8F5",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: 600,
                }}
              >
                <Phone size={13} color="var(--gold-primary)" /> Midtown:{" "}
                <span style={{ color: "var(--gold-primary)" }}>
                  (212) 203-2000
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION BAR --- */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          transition: "all 0.35s ease",
          background: isScrolled
            ? "rgba(13, 15, 18, 0.94)"
            : "rgba(13, 15, 18, 0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: isScrolled
            ? "1px solid rgba(197, 160, 89, 0.3)"
            : "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none",
          padding: isScrolled ? "12px 0" : "18px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <Dr2FeetLogo variant="light" height={75} />
          </a>

          {/* Desktop Nav Items */}
          <nav
            style={{
              display: "none",
              lg: "flex",
              alignItems: "center",
              gap: "28px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                style={{ position: "relative" }}
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  style={{
                    color: "#FAF8F5",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "8px 0",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--gold-primary)")
                  }
                  onMouseLeave={(e) => (e.target.style.color = "#FAF8F5")}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={14} color="var(--gold-primary)" />
                  )}
                </a>

                {/* Submenu Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      width: "270px",
                      background: "#15181C",
                      border: "1px solid rgba(197, 160, 89, 0.3)",
                      borderRadius: "12px",
                      padding: "12px 0",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                      zIndex: 1010,
                    }}
                  >
                    {link.dropdown.map((sub, sIdx) => (
                      <a
                        key={sIdx}
                        href={sub.href}
                        style={{
                          display: "block",
                          padding: "10px 20px",
                          color: "#E0E3EA",
                          textDecoration: "none",
                          fontSize: "0.86rem",
                          fontWeight: 500,
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background =
                            "rgba(197, 160, 89, 0.12)";
                          e.target.style.color = "var(--gold-primary)";
                          e.target.style.paddingLeft = "24px";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "transparent";
                          e.target.style.color = "#E0E3EA";
                          e.target.style.paddingLeft = "20px";
                        }}
                      >
                        {sub.title}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div
            style={{
              display: "none",
              md: "flex",
              alignItems: "center",
              gap: "16px",
            }}
            className="desktop-cta"
          >
            <button className="btn-gold" onClick={onOpenBooking}>
              <Calendar size={16} /> Book Appointment
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "transparent",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              color: "var(--gold-primary)",
              padding: "8px",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* --- MOBILE DRAWER NAV --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "#0D0F12",
              borderBottom: "1px solid rgba(197, 160, 89, 0.3)",
              position: "fixed",
              top: "75px",
              left: 0,
              width: "100%",
              zIndex: 999,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
            }}
          >
            <div
              style={{
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: "#FAF8F5",
                    textDecoration: "none",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    justify: "space-between",
                    alignItems: "center",
                  }}
                >
                  {link.name}
                  <ChevronDown size={16} color="var(--gold-primary)" />
                </a>
              ))}
              <div style={{ paddingTop: "12px" }}>
                <button
                  className="btn-gold"
                  style={{ width: "100%" }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                >
                  <Calendar size={18} /> Schedule Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
