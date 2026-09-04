import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  Clock,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import Dr2FeetLogo from "../assets/Dr2FeetLogo";

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const goToSection = (href, event) => {
    if (event) event.preventDefault();
    const id = href?.startsWith("#") ? href.slice(1) : "";
    closeMobileMenu();
    document.body.style.overflow = "";

    const scrollToTarget = () => {
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      const header = document.querySelector(".site-header");
      const offset = header ? header.getBoundingClientRect().height : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };

    window.requestAnimationFrame(() => {
      window.setTimeout(scrollToTarget, 280);
    });
  };

  return (
    <div
      className="site-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* --- TOP ANNOUNCEMENT / CONTACT BAR --- */}
      <div
        className="header-topbar"
        style={{
          background: "var(--bg-light-warm)",
          borderBottom: "1px solid var(--border-light-gold)",
          padding: "8px 0",
          fontSize: "0.82rem",
          color: "var(--text-dark-secondary)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            className="header-topbar-left"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              minWidth: 0,
            }}
          >
            <span
              className="header-badge"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--gold-primary)",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              <ShieldCheck size={15} /> Top Rated Manhattan Podiatry Clinic
            </span>
            <span
              className="header-hours"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                whiteSpace: "nowrap",
              }}
            >
              <Clock size={14} color="var(--gold-primary)" /> Mon - Fri: 8:00 AM
              - 6:30 PM
            </span>
          </div>

          <div
            className="header-phones"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexShrink: 0,
            }}
          >
            <a
              href="tel:2124042800"
              className="header-phone"
              style={{
                color: "var(--text-dark-primary)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              <Phone size={13} color="var(--gold-primary)" />
              <span className="header-phone-label">Downtown: </span>
              <span style={{ color: "var(--gold-primary)" }}>(212) 404-2800</span>
            </a>
            <span className="header-phone-divider" style={{ color: "rgba(197, 160, 89, 0.4)" }}>
              |
            </span>
            <a
              href="tel:2122032000"
              className="header-phone header-phone-midtown"
              style={{
                color: "var(--text-dark-primary)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              <Phone size={13} color="var(--gold-primary)" />
              <span className="header-phone-label">Midtown: </span>
              <span style={{ color: "var(--gold-primary)" }}>(212) 203-2000</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION BAR --- */}
      <header
        style={{
          transition: "padding 0.35s ease, box-shadow 0.35s ease",
          background: isScrolled
            ? "rgba(250, 248, 245, 0.98)"
            : "rgba(250, 248, 245, 0.96)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border-light-gold)",
          boxShadow: isScrolled ? "0 10px 30px rgba(15, 17, 21, 0.08)" : "none",
          padding: isScrolled ? "8px 0" : "12px 0",
        }}
      >
        <div
          className="container header-nav-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <a
            href="#"
            className="header-logo-link"
            style={{
              textDecoration: "none",
              minWidth: 0,
              flex: "1 1 auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Dr2FeetLogo variant="dark" height={75} className="header-logo" />
          </a>

          <nav className="desktop-nav">
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
                    color: "var(--text-dark-primary)",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "8px 0",
                    transition: "color 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--gold-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-dark-primary)")
                  }
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={14} color="var(--gold-primary)" />
                  )}
                </a>

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
                      background: "var(--bg-light-card)",
                      border: "1px solid var(--border-light-gold)",
                      borderRadius: "12px",
                      padding: "12px 0",
                      boxShadow: "var(--shadow-card)",
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
                          color: "var(--text-dark-secondary)",
                          textDecoration: "none",
                          fontSize: "0.86rem",
                          fontWeight: 500,
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(197, 160, 89, 0.12)";
                          e.currentTarget.style.color = "var(--gold-primary)";
                          e.currentTarget.style.paddingLeft = "24px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color =
                            "var(--text-dark-secondary)";
                          e.currentTarget.style.paddingLeft = "20px";
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

          <div className="desktop-cta">
            <button className="btn-gold" onClick={onOpenBooking}>
              <Calendar size={16} /> Book Appointment
            </button>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* --- MOBILE DRAWER (attached to sticky header) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-drawer-inner">
              {navLinks.map((link, idx) => (
                <div key={idx}>
                  <a
                    href={link.href}
                    onClick={(event) => goToSection(link.href, event)}
                    className="mobile-drawer-link"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown size={16} color="var(--gold-primary)" />
                    )}
                  </a>
                  {link.dropdown && (
                    <div className="mobile-drawer-sub">
                      {link.dropdown.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          onClick={(event) => goToSection(sub.href, event)}
                          className="mobile-drawer-sublink"
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div style={{ paddingTop: "8px" }}>
                <button
                  className="btn-gold"
                  style={{ width: "100%" }}
                  onClick={() => {
                    closeMobileMenu();
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
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 28px;
        }
        .desktop-cta {
          display: none;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }
        .mobile-menu-btn {
          background: transparent;
          border: 1px solid rgba(197, 160, 89, 0.4);
          color: var(--gold-primary);
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .header-logo.dr2feet-logo-wrapper {
          height: 44px !important;
          max-width: 100%;
        }
        .header-logo.dr2feet-logo-wrapper img {
          max-width: 100%;
          height: 100%;
          width: auto;
          object-fit: contain;
          object-position: left center;
        }
        .header-hours,
        .header-phone-midtown,
        .header-phone-divider,
        .header-phone-label,
        .header-badge {
          display: none !important;
        }
        .mobile-drawer {
          background: var(--bg-light-ivory);
          border-bottom: 1px solid var(--border-light-gold);
          overflow: hidden;
          box-shadow: 0 16px 32px rgba(15, 17, 21, 0.1);
        }
        .mobile-drawer-inner {
          padding: 8px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-height: min(70vh, 560px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .mobile-drawer-link {
          color: var(--text-dark-primary);
          text-decoration: none;
          font-size: 1.02rem;
          font-weight: 600;
          padding: 12px 0;
          border-bottom: 1px solid rgba(197, 160, 89, 0.16);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mobile-drawer-sub {
          display: flex;
          flex-direction: column;
          padding: 4px 0 8px 12px;
        }
        .mobile-drawer-sublink {
          color: var(--text-dark-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 500;
          padding: 8px 0;
        }

        @media (max-width: 480px) {
          .header-topbar .container {
            justify-content: center;
          }
        }

        @media (min-width: 768px) {
          .header-phone-label,
          .header-phone-midtown,
          .header-phone-divider {
            display: inline-flex;
          }
          .header-phone-label {
            display: inline;
          }
        }

        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .header-hours,
          .header-badge { display: flex !important; }
          .header-logo.dr2feet-logo-wrapper {
            height: 75px !important;
          }
        }
      `}</style>
    </div>
  );
}
