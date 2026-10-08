import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  Calendar,
  Clock,
  Menu as MenuIcon,
  X,
  ChevronDown,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";

import Dr2FeetLogo from "../assets/Dr2FeetLogo";

export default function Header({ onOpenBooking }) {
  /* =========================================================
     STATE
  ========================================================= */

  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeMenuGroup, setActiveMenuGroup] = useState(null);

  const [mobileMenuOpenGroup, setMobileMenuOpenGroup] = useState(null);

  const [mobileActiveGroup, setMobileActiveGroup] = useState(null);

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     RESPONSIVE RESET
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMobileMenuOpen(false);
        setMobileMenuOpenGroup(null);
      }

      if (window.innerWidth < 992) {
        setMenuOpen(false);
        setActiveMenuGroup(null);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* =========================================================
     EXISTING NAV LINKS
  ========================================================= */

  const navLinks = [
    {
      name: "Doctors",
      href: "#doctors"
    },

    {
      name: "Specialties",
      href: "#minimally-invasive",

      dropdown: [
        {
          title: "Minimally Invasive Bunion Surgery",
          href: "#minimally-invasive"
        },
        {
          title: "Regenerative Therapy (PRP & Stem Cell)",
          href: "#regenerative"
        },
        {
          title: "Cosmetic Foot Surgery",
          href: "#cosmetic"
        },
        {
          title: "Sports Medicine & Ankle Care",
          href: "#specialized"
        }
      ]
    },

    {
      name: "Why Us",
      href: "#tagline"
    },

    {
      name: "Locations",
      href: "#locations"
    },

    {
      name: "Reviews",
      href: "#reviews"
    },

    {
      name: "Blog",
      href: "#blog"
    },

    {
      name: "FAQ",
      href: "#faq"
    }
  ];

  /* =========================================================
     NEW MENU DATA
  ========================================================= */

  const menuGroups = [
    {
      title: "All Services",
      path: "/services",

      items: [
        {
          title: "Surgical",
          path: "/services/surgical"
        },
        {
          title: "Heel Treatments",
          path: "/services/heel-treatments"
        },
        {
          title: "Nail & Fungal Treatments",
          path: "/services/nail-fungal-treatments"
        },
        {
          title: "Pediatric Foot Care",
          path: "/services/pediatric-foot-care"
        },
        {
          title: "Non-Surgical",
          path: "/services/non-surgical"
        },
        {
          title: "Imaging Services",
          path: "/services/imaging"
        }
      ]
    },

    {
      title: "Conditions",
      path: "/conditions",

      items: [
        {
          title: "Bunions",
          path: "/conditions/bunions"
        },
        {
          title: "Heel Pain",
          path: "/conditions/heel-pain"
        },
        {
          title: "Plantar Fasciitis",
          path: "/conditions/plantar-fasciitis"
        },
        {
          title: "Ingrown Toenails",
          path: "/conditions/ingrown-toenails"
        },
        {
          title: "Ankle Sprain",
          path: "/conditions/ankle-sprain"
        }
      ]
    },

    {
      title: "Our Practice",
      path: "/our-practice",

      items: [
        {
          title: "About Us",
          path: "/our-practice/about"
        },
        {
          title: "Our Doctors",
          path: "/our-practice/doctors"
        },
        {
          title: "Our Locations",
          path: "/our-practice/locations"
        },
        {
          title: "Patient Reviews",
          path: "/our-practice/reviews"
        },
        {
          title: "Patient Information",
          path: "/our-practice/patient-information"
        }
      ]
    },

    {
      title: "Resources",
      path: "/resources",

      items: [
        {
          title: "Blog",
          path: "/resources/blog"
        },
        {
          title: "FAQs",
          path: "/resources/faqs"
        },
        {
          title: "Patient Guide",
          path: "/resources/patient-guide"
        },
        {
          title: "Insurance & Billing",
          path: "/resources/insurance-billing"
        },
        {
          title: "Contact Us",
          path: "/resources/contact"
        }
      ]
    }
  ];

  /* =========================================================
     SECTION SCROLL
  ========================================================= */

  const goToSection = (href, event) => {
    if (event) {
      event.preventDefault();
    }

    const id = href?.startsWith("#") ? href.substring(1) : "";

    closeMobileMenu();

    if (!id) return;

    const scrollToTarget = () => {
      const target = document.getElementById(id);

      if (!target) return;

      const header = document.querySelector(".site-header");

      const headerHeight = header ? header.getBoundingClientRect().height : 0;

      const top =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth"
      });
    };

    window.requestAnimationFrame(() => {
      window.setTimeout(scrollToTarget, 100);
    });
  };

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileMenuOpenGroup(null);
    setMobileActiveGroup(null);
  };

  /* =========================================================
     MENU HANDLERS
  ========================================================= */

  const handleMenuMouseEnter = () => {
    setMenuOpen(true);
    setActiveMenuGroup(null);
    setActiveDropdown(null);
  };

  const handleMenuMouseLeave = () => {
    setMenuOpen(false);
    setActiveMenuGroup(null);
  };

  const handleMenuClick = () => {
    setMenuOpen((previous) => !previous);
    setActiveMenuGroup(null);
    setActiveDropdown(null);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="site-header">
      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="header-topbar">
        <div className="container header-topbar-container">
          <div className="header-topbar-left">
            <span className="header-badge">
              <ShieldCheck size={15} />

              <span>Top Rated Manhattan Podiatry Clinic</span>
            </span>

            <span className="header-hours">
              <Clock size={14} color="var(--gold-primary)" />

              <span>Mon - Fri: 8:00 AM - 6:30 PM</span>
            </span>
          </div>

          <div className="header-phones">
            <a href="tel:2124042800" className="header-phone">
              <Phone size={13} color="var(--gold-primary)" />

              <span className="header-phone-label">Downtown:</span>

              <span className="header-phone-number">(212) 404-2800</span>
            </a>

            <span className="header-phone-divider">|</span>

            <a
              href="tel:2122032000"
              className="header-phone header-phone-midtown"
            >
              <Phone size={13} color="var(--gold-primary)" />

              <span className="header-phone-label">Midtown:</span>

              <span className="header-phone-number">(212) 203-2000</span>
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <header className={`main-header ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="container header-nav-row">
          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#"
            className="header-logo-link"
            onClick={(event) => goToSection("#top", event)}
          >
            <Dr2FeetLogo variant="dark" height={75} className="header-logo" />
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="desktop-nav">
            {/* EXISTING NAV LINKS */}

            {navLinks.map((link, index) => (
              <div
                key={index}
                className="desktop-nav-item"
                onMouseEnter={() => {
                  if (link.dropdown) {
                    setActiveDropdown(link.name);
                    setMenuOpen(false);
                  }
                }}
                onMouseLeave={() => {
                  if (link.dropdown) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <a
                  href={link.href}
                  className="desktop-nav-link"
                  onClick={(event) => {
                    if (link.href?.startsWith("#")) {
                      goToSection(link.href, event);
                    }
                  }}
                >
                  <span>{link.name}</span>

                  {link.dropdown && (
                    <ChevronDown size={14} color="var(--gold-primary)" />
                  )}
                </a>

                {/* SPECIALTIES DROPDOWN */}

                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    className="specialties-dropdown"
                    initial={{
                      opacity: 0,
                      y: 8
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.18
                    }}
                  >
                    {link.dropdown.map((sub, subIndex) => (
                      <a
                        key={subIndex}
                        href={sub.href}
                        className="specialties-dropdown-item"
                        onClick={(event) => goToSection(sub.href, event)}
                      >
                        {sub.title}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* =================================================
                MENU
            ================================================= */}

            <div
              className="menu-wrapper"
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
            >
              <button
                type="button"
                className={`desktop-nav-link menu-button ${
                  menuOpen ? "menu-button-active" : ""
                }`}
                onClick={handleMenuClick}
              >
                <span>Our Services</span>

                <ChevronDown
                  size={14}
                  className={menuOpen ? "rotate-chevron" : ""}
                />
              </button>

              {/* =================================================
                  MENU FIRST LEVEL
              ================================================= */}

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    className="menu-dropdown"
                    initial={{
                      opacity: 0,
                      y: 8
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      y: 8
                    }}
                    transition={{
                      duration: 0.18
                    }}
                  >
                    {menuGroups.map((group) => (
                      <div
                        key={group.title}
                        className="menu-dropdown-item-wrapper"
                        onMouseEnter={() => setActiveMenuGroup(group.title)}
                      >
                        <Link
                          to={group.path}
                          className={`menu-dropdown-item ${
                            activeMenuGroup === group.title
                              ? "menu-dropdown-item-active"
                              : ""
                          }`}
                          onClick={() => {
                            setMenuOpen(false);
                            setActiveMenuGroup(null);
                          }}
                        >
                          <span>{group.title}</span>

                          <ChevronRight size={16} />
                        </Link>

                        {/* =================================================
                              SECOND LEVEL
                          ================================================= */}

                        {activeMenuGroup === group.title && (
                          <motion.div
                            className="submenu-dropdown"
                            initial={{
                              opacity: 0,
                              x: -6
                            }}
                            animate={{
                              opacity: 1,
                              x: 0
                            }}
                            transition={{
                              duration: 0.15
                            }}
                            onMouseEnter={() => setActiveMenuGroup(group.title)}
                          >
                            <Link
                              to={group.path}
                              className="submenu-heading"
                              onClick={() => {
                                setMenuOpen(false);
                                setActiveMenuGroup(null);
                              }}
                            >
                              View All
                            </Link>

                            <div className="submenu-divider" />

                            {group.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="submenu-item"
                                onClick={() => {
                                  setMenuOpen(false);
                                  setActiveMenuGroup(null);
                                }}
                              >
                                {item.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* =================================================
              BOOK APPOINTMENT
          ================================================= */}

          <div className="desktop-cta">
            <button
              className="btn-gold header-booking-btn"
              onClick={onOpenBooking}
            >
              <Calendar size={16} />

              <span>Book Appointment</span>
            </button>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((previous) => !previous)}
          >
            {mobileMenuOpen ? <X size={23} /> : <MenuIcon size={23} />}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: "auto"
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            transition={{
              duration: 0.22
            }}
          >
            <div className="mobile-drawer-inner">
              {/* =============================================
                  EXISTING LINKS
              ============================================= */}

              {navLinks.map((link, index) => (
                <div key={index} className="mobile-nav-block">
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={(event) => goToSection(link.href, event)}
                  >
                    <span>{link.name}</span>

                    {link.dropdown && (
                      <ChevronDown size={16} color="var(--gold-primary)" />
                    )}
                  </a>

                  {/* SPECIALTIES */}

                  {link.dropdown && (
                    <div className="mobile-specialties">
                      {link.dropdown.map((sub, subIndex) => (
                        <a
                          key={subIndex}
                          href={sub.href}
                          className="mobile-specialty-link"
                          onClick={(event) => goToSection(sub.href, event)}
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* =============================================
                  MENU
              ============================================= */}

              <div className="mobile-menu-section">
                <button
                  type="button"
                  className="mobile-nav-link mobile-menu-toggle"
                  onClick={() =>
                    setMobileMenuOpenGroup(
                      mobileMenuOpenGroup === "menu" ? null : "menu"
                    )
                  }
                >
                  <span>Our Services</span>

                  <ChevronDown
                    size={17}
                    className={
                      mobileMenuOpenGroup === "menu" ? "rotate-chevron" : ""
                    }
                  />
                </button>

                <AnimatePresence>
                  {mobileMenuOpenGroup === "menu" && (
                    <motion.div
                      className="mobile-menu-groups"
                      initial={{
                        height: 0,
                        opacity: 0
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1
                      }}
                      exit={{
                        height: 0,
                        opacity: 0
                      }}
                    >
                      {menuGroups.map((group) => (
                        <div key={group.title} className="mobile-menu-group">
                          {/* CATEGORY */}

                          <button
                            type="button"
                            className="mobile-group-button"
                            onClick={() =>
                              setMobileActiveGroup(
                                mobileActiveGroup === group.title
                                  ? null
                                  : group.title
                              )
                            }
                          >
                            <span>{group.title}</span>

                            <ChevronRight
                              size={16}
                              className={
                                mobileActiveGroup === group.title
                                  ? "mobile-arrow-open"
                                  : ""
                              }
                            />
                          </button>

                          {/* SUBMENU */}

                          <AnimatePresence>
                            {mobileActiveGroup === group.title && (
                              <motion.div
                                className="mobile-submenu"
                                initial={{
                                  height: 0,
                                  opacity: 0
                                }}
                                animate={{
                                  height: "auto",
                                  opacity: 1
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0
                                }}
                              >
                                <Link
                                  to={group.path}
                                  className="mobile-submenu-link mobile-view-all"
                                  onClick={closeMobileMenu}
                                >
                                  View All
                                </Link>

                                {group.items.map((item) => (
                                  <Link
                                    key={item.path}
                                    to={item.path}
                                    className="mobile-submenu-link"
                                    onClick={closeMobileMenu}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* =============================================
                  MOBILE APPOINTMENT
              ============================================= */}

              <div className="mobile-booking-wrapper">
                <button
                  className="btn-gold mobile-booking-btn"
                  onClick={() => {
                    closeMobileMenu();

                    if (onOpenBooking) {
                      onOpenBooking();
                    }
                  }}
                >
                  <Calendar size={18} />

                  <span>Schedule Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           HEADER
        ===================================================== */

        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }


        /* =====================================================
           TOP BAR
        ===================================================== */

        .header-topbar {
          background:
            var(--bg-light-warm);

          border-bottom:
            1px solid
            var(--border-light-gold);

          padding: 8px 0;

          font-size: 0.82rem;

          color:
            var(--text-dark-secondary);
        }


        .header-topbar-container {
          display: flex;

          justify-content:
            space-between;

          align-items: center;

          gap: 20px;
        }


        .header-topbar-left {
          display: flex;

          align-items: center;

          gap: 20px;

          min-width: 0;
        }


        .header-badge {
          display: flex;

          align-items: center;

          gap: 6px;

          color:
            var(--gold-primary);

          font-weight: 600;

          white-space: nowrap;
        }


        .header-hours {
          display: flex;

          align-items: center;

          gap: 6px;

          white-space: nowrap;
        }


        .header-phones {
          display: flex;

          align-items: center;

          gap: 14px;

          flex-shrink: 0;
        }


        .header-phone {
          display: flex;

          align-items: center;

          gap: 6px;

          color:
            var(--text-dark-primary);

          text-decoration: none;

          font-weight: 600;

          white-space: nowrap;
        }


        .header-phone:hover {
          color:
            var(--gold-primary);
        }


        .header-phone-number {
          color:
            var(--gold-primary);
        }


        .header-phone-divider {
          color:
            rgba(197, 160, 89, 0.4);
        }


        /* =====================================================
           MAIN HEADER
        ===================================================== */

        .main-header {
          background:
            rgba(250, 248, 245, 0.97);

          backdrop-filter:
            blur(16px);

          border-bottom:
            1px solid
            var(--border-light-gold);

          padding: 11px 0;

          transition:
            padding 0.3s ease,
            box-shadow 0.3s ease;
        }


        .main-header.header-scrolled {
          padding: 7px 0;

          box-shadow:
            0 10px 30px
            rgba(15, 17, 21, 0.08);
        }


        .header-nav-row {
          display: flex;

          align-items: center;

          gap: 20px;

          min-height: 64px;
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .header-logo-link {
          flex-shrink: 0;

          display: flex;

          align-items: center;

          text-decoration: none;
        }


        .header-logo.dr2feet-logo-wrapper {
          height: 60px !important;

          width: auto;

          max-width: 150px;
        }


        .header-logo.dr2feet-logo-wrapper img {
          height: 100%;

          width: auto;

          max-width: 100%;

          object-fit: contain;
        }


        /* =====================================================
           DESKTOP NAV
        ===================================================== */

        .desktop-nav {
          display: none;

          align-items: center;

          justify-content: center;

          gap: 24px;

          flex: 1;
        }


        .desktop-nav-item {
          position: relative;

          flex-shrink: 0;
        }


        .desktop-nav-link {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 5px;

          padding: 8px 0;

          border: none;

          background: transparent;

          color:
            var(--text-dark-primary);

          text-decoration: none;

          font-family: inherit;

          font-size: 0.92rem;

          font-weight: 600;

          letter-spacing: 0.3px;

          white-space: nowrap;

          cursor: pointer;

          transition:
            color 0.2s ease;
        }


        .desktop-nav-link:hover,
        .menu-button-active {
          color:
            var(--gold-primary);
        }


        /* =====================================================
           SPECIALTIES DROPDOWN
        ===================================================== */

        .specialties-dropdown {
          position: absolute;

          top: calc(100% + 8px);

          left: -20px;

          width: 290px;

          background:
            var(--bg-light-card);

          border:
            1px solid
            var(--border-light-gold);

          border-radius: 10px;

          padding: 8px 0;

          box-shadow:
            0 15px 35px
            rgba(15, 17, 21, 0.12);

          z-index: 1100;
        }


        .specialties-dropdown-item {
          display: block;

          padding: 10px 18px;

          color:
            var(--text-dark-secondary);

          text-decoration: none;

          font-size: 0.85rem;

          line-height: 1.4;

          transition:
            color 0.2s ease,
            background 0.2s ease,
            padding-left 0.2s ease;
        }


        .specialties-dropdown-item:hover {
          color:
            var(--gold-primary);

          background:
            rgba(197, 160, 89, 0.08);

          padding-left: 22px;
        }


        /* =====================================================
           MENU WRAPPER
        ===================================================== */

        .menu-wrapper {
          position: relative;

          flex-shrink: 0;
        }


        .menu-button {
          min-width: 54px;
        }


        .menu-button svg {
          transition:
            transform 0.2s ease;
        }


        .rotate-chevron {
          transform: rotate(180deg);
        }


        /* =====================================================
           FIRST LEVEL MENU
        ===================================================== */

        .menu-dropdown {
          position: absolute;

          top: calc(100% + 10px);

          right: -15px;

          width: 235px;

          padding: 8px;

          background:
            #ffffff;

          border:
            1px solid
            var(--border-light-gold);

          border-radius: 10px;

          box-shadow:
            0 18px 40px
            rgba(15, 17, 21, 0.14);

          z-index: 1200;
        }


        .menu-dropdown-item-wrapper {
          position: relative;
        }


        .menu-dropdown-item {
          width: 100%;

          min-height: 44px;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 12px;

          padding: 10px 12px;

          border-radius: 7px;

          color:
            var(--text-dark-primary);

          background: transparent;

          text-decoration: none;

          font-size: 0.9rem;

          font-weight: 500;

          transition:
            background 0.2s ease,
            color 0.2s ease;
        }


        .menu-dropdown-item:hover,
        .menu-dropdown-item-active {
          background:
            rgba(197, 160, 89, 0.10);

          color:
            var(--gold-primary);
        }


        /* =====================================================
           SECOND LEVEL MENU
        ===================================================== */

        .submenu-dropdown {
          position: absolute;

          top: -8px;

          left: calc(100% + 8px);

          width: 275px;

          padding: 10px 0;

          background:
            #ffffff;

          border:
            1px solid
            var(--border-light-gold);

          border-radius: 10px;

          box-shadow:
            0 18px 40px
            rgba(15, 17, 21, 0.14);

          z-index: 1300;
        }


        .submenu-heading {
          display: block;

          padding: 8px 18px;

          color:
            var(--gold-primary);

          text-decoration: none;

          font-size: 0.84rem;

          font-weight: 600;
        }


        .submenu-divider {
          height: 1px;

          margin: 4px 0 6px;

          background:
            rgba(197, 160, 89, 0.16);
        }


        .submenu-item {
          display: block;

          padding: 9px 18px;

          color:
            var(--text-dark-secondary);

          text-decoration: none;

          font-size: 0.84rem;

          line-height: 1.35;

          transition:
            color 0.2s ease,
            background 0.2s ease,
            padding-left 0.2s ease;
        }


        .submenu-item:hover {
          color:
            var(--gold-primary);

          background:
            rgba(197, 160, 89, 0.08);

          padding-left: 22px;
        }


        /* =====================================================
           DESKTOP CTA
        ===================================================== */

        .desktop-cta {
          display: none;

          flex-shrink: 0;
        }


        .header-booking-btn {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          min-width: 205px;

          white-space: nowrap;
        }


        /* =====================================================
           MOBILE BUTTON
        ===================================================== */

        .mobile-menu-btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          width: 42px;

          height: 42px;

          padding: 0;

          background: transparent;

          border:
            1px solid
            rgba(197, 160, 89, 0.45);

          border-radius: 8px;

          color:
            var(--gold-primary);

          cursor: pointer;
        }


        .mobile-menu-btn:hover {
          background:
            rgba(197, 160, 89, 0.08);
        }


        /* =====================================================
           MOBILE DRAWER
        ===================================================== */

        .mobile-drawer {
          position: relative;

          z-index: 999;

          background:
            var(--bg-light-ivory);

          border-bottom:
            1px solid
            var(--border-light-gold);

          box-shadow:
            0 15px 35px
            rgba(15, 17, 21, 0.10);

          overflow: hidden;
        }


        .mobile-drawer-inner {
          max-height:
            calc(100vh - 90px);

          overflow-y: auto;

          padding:
            6px 20px 22px;

          -webkit-overflow-scrolling:
            touch;
        }


        /* =====================================================
           MOBILE EXISTING LINKS
        ===================================================== */

        .mobile-nav-block {
          border-bottom:
            1px solid
            rgba(197, 160, 89, 0.14);
        }


        .mobile-nav-link {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          padding: 13px 0;

          border: none;

          background: transparent;

          color:
            var(--text-dark-primary);

          text-decoration: none;

          font-family: inherit;

          font-size: 1rem;

          font-weight: 600;

          text-align: left;

          cursor: pointer;
        }


        .mobile-nav-link:hover {
          color:
            var(--gold-primary);
        }


        .mobile-specialties {
          padding:
            2px 0 10px 15px;
        }


        .mobile-specialty-link {
          display: block;

          padding: 8px 0;

          color:
            var(--text-dark-secondary);

          text-decoration: none;

          font-size: 0.86rem;

          line-height: 1.4;
        }


        .mobile-specialty-link:hover {
          color:
            var(--gold-primary);
        }


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        .mobile-menu-section {
          border-bottom:
            1px solid
            rgba(197, 160, 89, 0.14);
        }


        .mobile-menu-toggle {
          padding:
            14px 0;
        }


        .mobile-menu-groups {
          overflow: hidden;

          padding:
            0 0 8px 12px;
        }


        .mobile-menu-group {
          border-top:
            1px solid
            rgba(197, 160, 89, 0.09);
        }


        .mobile-group-button {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          padding: 12px 4px;

          border: none;

          background: transparent;

          color:
            var(--text-dark-primary);

          font-family: inherit;

          font-size: 0.92rem;

          font-weight: 600;

          text-align: left;

          cursor: pointer;
        }


        .mobile-group-button:hover {
          color:
            var(--gold-primary);
        }


        .mobile-group-button svg {
          transition:
            transform 0.2s ease;
        }


        .mobile-arrow-open {
          transform: rotate(90deg);
        }


        .mobile-submenu {
          overflow: hidden;

          display: flex;

          flex-direction: column;

          padding:
            0 0 9px 15px;
        }


        .mobile-submenu-link {
          display: block;

          padding: 8px 0;

          color:
            var(--text-dark-secondary);

          text-decoration: none;

          font-size: 0.85rem;

          line-height: 1.4;
        }


        .mobile-submenu-link:hover {
          color:
            var(--gold-primary);
        }


        .mobile-view-all {
          color:
            var(--gold-primary);

          font-weight: 600;

          border-bottom:
            1px solid
            rgba(197, 160, 89, 0.12);

          margin-bottom: 3px;
        }


        /* =====================================================
           MOBILE BOOKING
        ===================================================== */

        .mobile-booking-wrapper {
          padding-top: 16px;
        }


        .mobile-booking-btn {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 8px;
        }


        /* =====================================================
           TOP BAR MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .header-topbar {
            padding: 7px 0;
          }


          .header-topbar-container {
            justify-content: center;
          }


          .header-topbar-left {
            justify-content: center;
          }


          .header-hours,
          .header-badge {
            display: none !important;
          }


          .header-phones {
            width: 100%;

            justify-content: center;
          }


          .header-phone-label,
          .header-phone-midtown,
          .header-phone-divider {
            display: none !important;
          }


          .header-phone-number {
            font-size: 0.82rem;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 768px) {

          .header-phone-label {
            display: inline;
          }

        }


        /* =====================================================
           DESKTOP
        ===================================================== */

        @media (min-width: 992px) {

          .desktop-nav {
            display: flex;
          }


          .desktop-cta {
            display: flex;
          }


          .mobile-menu-btn {
            display: none;
          }


          .header-badge,
          .header-hours {
            display: flex;
          }


          .header-phone-midtown,
          .header-phone-divider {
            display: flex;
          }


          .header-logo.dr2feet-logo-wrapper {
            height: 68px !important;
          }

        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1200px) {

          .desktop-nav {
            gap: 26px;
          }


          .header-logo.dr2feet-logo-wrapper {
            height: 72px !important;
          }

        }


        /* =====================================================
           SMALL DESKTOP
        ===================================================== */

        @media (min-width: 992px) and (max-width: 1199px) {

          .desktop-nav {
            gap: 15px;
          }


          .desktop-nav-link {
            font-size: 0.86rem;
          }


          .header-booking-btn {
            min-width: 175px;

            font-size: 0.82rem;
          }


          .header-logo.dr2feet-logo-wrapper {
            max-width: 125px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 991px) {

          .desktop-nav,
          .desktop-cta {
            display: none;
          }


          .mobile-menu-btn {
            display: inline-flex;
          }


          .header-nav-row {
            justify-content:
              space-between;
          }


          .header-logo-link {
            flex: 1;
          }

        }

      `}</style>
    </div>
  );
}
