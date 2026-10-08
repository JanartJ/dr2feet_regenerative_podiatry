import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  X,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./TileGrid.css";


/* =========================================================
   MAIN SERVICES
========================================================= */

const services = [
  {
    title: "Surgical",
    description:
      "Advanced surgical solutions for a wide range of foot and ankle conditions.",
  },

  {
    title: "Heel Treatments",
    description:
      "Comprehensive treatments for heel pain and related conditions.",
  },

  {
    title: "Nail & Fungal Treatments",
    description:
      "Professional care for nail and fungal conditions.",
  },

  {
    title: "Pediatric Foot Care",
    description:
      "Specialized foot and ankle care for children.",
  },

  {
    title: "Non-Surgical",
    description:
      "Conservative treatment options designed to restore mobility and comfort.",
  },

  {
    title: "Imaging Services",
    description:
      "Advanced diagnostic imaging for accurate evaluation and treatment planning.",
  },
];


/* =========================================================
   SERVICE SUB MENUS
========================================================= */

const serviceDetails = {

  /* =======================================================
     SURGICAL
  ======================================================= */

  "Surgical": {
    eyebrow: "SURGICAL SERVICES",

    title: "Surgical Treatments",

    description:
      "Explore our surgical treatment options for foot and ankle care.",

    items: [
      {
        title: "Bunion Surgery",
        path: "/services/surgical/bunion-surgery",
      },

      {
        title: "Corn Removal Surgery",
        path: "/services/surgical/corn-removal-surgery",
      },

      {
        title: "Cosmetic Treatments",
        path: "/services/surgical/cosmetic-treatments",
      },

      {
        title: "Cryosurgery",
        path: "/services/surgical/cryosurgery",
      },

      {
        title: "Flat Foot Surgery",
        path: "/services/surgical/flat-foot-surgery",
      },

      {
        title: "Hammer Toe Surgery",
        path: "/services/surgical/hammer-toe-surgery",
      },

      {
        title: "Lapiplasty",
        path: "/services/surgical/lapiplasty",
      },

      {
        title: "Minimally Invasive Bunion Surgery",
        path: "/services/surgical/minimally-invasive-bunion-surgery",
      },

      {
        title: "Minimally Invasive Foot Surgery",
        path: "/services/surgical/minimally-invasive-foot-surgery",
      },

      {
        title: "Morton's Neuroma",
        path: "/services/surgical/mortons-neuroma",
      },

      {
        title: "Reconstructive Surgery",
        path: "/services/surgical/reconstructive-surgery",
      },

      {
        title: "Tailor's Bunion Surgery",
        path: "/services/surgical/tailors-bunion-surgery",
      },

      {
        title: "Toe Shortening Surgery",
        path: "/services/surgical/toe-shortening-surgery",
      },

      {
        title: "Webbed Toe Surgery",
        path: "/services/surgical/webbed-toe-surgery",
      },
    ],
  },


  /* =======================================================
     HEEL TREATMENTS
  ======================================================= */

  "Heel Treatments": {
    eyebrow: "HEEL TREATMENTS",

    title: "Heel Treatments",

    description:
      "Comprehensive treatments designed to relieve heel pain and restore comfortable movement.",

    items: [
      {
        title: "Achilles Tendonitis",
        path: "/services/heel-treatments/achilles-tendonitis",
      },

      {
        title: "Heel Spur",
        path: "/services/heel-treatments/heel-spur",
      },

      {
        title: "Minimally Invasive Tendon Repair",
        path: "/services/heel-treatments/minimally-invasive-tendon-repair",
      },

      {
        title: "Physical Therapy",
        path: "/services/heel-treatments/physical-therapy",
      },

      {
        title: "Plantar Fasciitis",
        path: "/services/heel-treatments/plantar-fasciitis",
      },

      {
        title: "Shockwave Therapy",
        path: "/services/heel-treatments/shockwave-therapy",
      },
    ],
  },


  /* =======================================================
     NAIL & FUNGAL
  ======================================================= */

  "Nail & Fungal Treatments": {
    eyebrow: "NAIL & FUNGAL TREATMENTS",

    title: "Nail & Fungal Treatments",

    description:
      "Professional treatment options for common nail, fungal and skin-related foot conditions.",

    items: [
      {
        title: "Athletes Foot",
        path: "/services/nail-fungal-treatments/athletes-foot",
      },

      {
        title: "Ingrown Toenails",
        path: "/services/nail-fungal-treatments/ingrown-toenails",
      },

      {
        title: "Medical Grade Pedicure",
        path: "/services/nail-fungal-treatments/medical-grade-pedicure",
      },

      {
        title: "Nail Fungus",
        path: "/services/nail-fungal-treatments/nail-fungus",
      },

      {
        title: "Nail Restoration",
        path: "/services/nail-fungal-treatments/nail-restoration",
      },
    ],
  },


  /* =======================================================
     PEDIATRIC FOOT CARE
  ======================================================= */

  "Pediatric Foot Care": {
    eyebrow: "PEDIATRIC FOOT CARE",

    title: "Pediatric Foot Care",

    description:
      "Specialized foot and ankle care focused on the unique needs of children.",

    items: [
      {
        title: "Flat Feet",
        path: "/services/pediatric-foot-care/flat-feet",
      },

      {
        title: "In Toeing Out Toeing",
        path: "/services/pediatric-foot-care/in-toeing-out-toeing",
      },
    ],
  },


  /* =======================================================
     NON-SURGICAL
  ======================================================= */

  "Non-Surgical": {
    eyebrow: "NON-SURGICAL SERVICES",

    title: "Non-Surgical Treatments",

    description:
      "Conservative treatment options designed to improve mobility, reduce discomfort and support recovery.",

    items: [
      {
        title: "Ankle Sprain",
        path: "/services/non-surgical/ankle-sprain",
      },

      {
        title: "Cortisone Steroid Injections",
        path: "/services/non-surgical/cortisone-steroid-injections",
      },

      {
        title: "Custom Orthotics",
        path: "/services/non-surgical/custom-orthotics",
      },

      {
        title: "Diabetic Foot Care",
        path: "/services/non-surgical/diabetic-foot-care",
      },

      {
        title: "Graston Technique",
        path: "/services/non-surgical/graston-technique",
      },

      {
        title: "Kinesiology Taping",
        path: "/services/non-surgical/kinesiology-taping",
      },

      {
        title: "Liposana Fat Pad Injections",
        path: "/services/non-surgical/liposana-fat-pad-injections",
      },

      {
        title: "Regenerative Medicine",
        path: "/services/non-surgical/regenerative-medicine",
      },

      {
        title: "Second Opinion",
        path: "/services/non-surgical/second-opinion",
      },

      {
        title: "Sports Podiatry",
        path: "/services/non-surgical/sports-podiatry",
      },

      {
        title: "Stress Fractures",
        path: "/services/non-surgical/stress-fractures",
      },

      {
        title: "Swift Wart Therapy",
        path: "/services/non-surgical/swift-wart-therapy",
      },

      {
        title: "Turf Toe",
        path: "/services/non-surgical/turf-toe",
      },

      {
        title: "Ultrasound",
        path: "/services/non-surgical/ultrasound",
      },
    ],
  },


  /* =======================================================
     IMAGING SERVICES
  ======================================================= */

  "Imaging Services": {
    eyebrow: "IMAGING SERVICES",

    title: "Imaging Services",

    description:
      "Advanced diagnostic imaging to support accurate evaluation and treatment planning.",

    items: [
      {
        title: "O-Scan MRI",
        path: "/services/imaging/o-scan-mri",
      },

      {
        title: "X-Ray",
        path: "/services/imaging/x-ray",
      },
    ],
  },
};


/* =========================================================
   COMPONENT
========================================================= */

export default function TileGrid() {

  const [activeService, setActiveService] =
    useState(null);


  /* =========================================================
     PREVENT BODY SCROLL WHEN MODAL IS OPEN
  ========================================================= */

  useEffect(() => {

    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [activeService]);


  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {

    const handleEscape = (event) => {

      if (
        event.key === "Escape" &&
        activeService
      ) {
        setActiveService(null);
      }

    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };

  }, [activeService]);


  /* =========================================================
     ACTIVE MODAL DATA
  ========================================================= */

  const activeServiceData =
    activeService
      ? serviceDetails[activeService]
      : null;


  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>

      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <section
        className="services-section"
        id="services"
      >

        <div className="services-container">


          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <div className="services-heading">

            <span className="services-eyebrow">
              OUR SERVICES
            </span>

            <h2>
              Comprehensive Foot &amp; Ankle Care
            </h2>

            <p>
              Personalized treatment options designed
              around your needs, comfort and recovery.
            </p>

          </div>


          {/* =================================================
              SERVICES GRID
          ================================================= */}

          <div className="services-grid">

            {services.map(
              (service, index) => (

                <motion.article
                  key={service.title}
                  className="service-card"

                  initial={{
                    opacity: 0,
                    y: 25,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}

                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}

                  whileHover={{
                    y: -8,
                  }}
                  onClick={() =>
                    setActiveService(
                      service.title
                    )
                  }
                >


                  {/* =========================================
                      NUMBER
                  ========================================= */}

                  <span className="service-number">

                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}

                  </span>


                  {/* =========================================
                      CARD CONTENT
                  ========================================= */}

                  <div className="service-card-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>


                  {/* =========================================
                      ACTION
                  ========================================= */}

                  <div className="service-card-action">

                    <button
                      type="button"
                      className="service-learn-more"

                      onClick={() =>
                        setActiveService(
                          service.title
                        )
                      }
                    >

                      <span>
                        Explore Services
                      </span>

                      <ArrowRight
                        size={18}
                      />

                    </button>

                  </div>


                  {/* =========================================
                      HOVER LINE
                  ========================================= */}

                  <span className="service-card-line" />

                </motion.article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          DYNAMIC SERVICE MODAL
      ===================================================== */}

      <AnimatePresence>

        {activeService &&
          activeServiceData && (

          <motion.div
            className="service-modal-overlay"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.28,
              ease: "easeOut",
            }}

            onMouseDown={(event) => {

              if (
                event.target ===
                event.currentTarget
              ) {
                setActiveService(null);
              }

            }}
          >


            {/* =================================================
                MODAL
            ================================================= */}

            <motion.div
              className="service-modal"

              initial={{
                opacity: 0,
                scale: 0.94,
                y: 35,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.94,
                y: 25,
              }}

              transition={{
                duration: 0.38,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}

              onMouseDown={(event) =>
                event.stopPropagation()
              }
            >


              {/* =============================================
                  MODAL HEADER
              ============================================= */}

              <div className="service-modal-header">

                <div>

                  <span className="modal-eyebrow">
                    {activeServiceData.eyebrow}
                  </span>

                  <h2>
                    {activeServiceData.title}
                  </h2>

                  <p>
                    {activeServiceData.description}
                  </p>

                </div>


                {/* CLOSE */}

                <button
                  type="button"
                  className="service-modal-close"
                  aria-label="Close services"

                  onClick={() =>
                    setActiveService(null)
                  }
                >

                  <X size={21} />

                </button>

              </div>


              {/* =============================================
                  SERVICE ITEMS
              ============================================= */}

              <div className="surgical-services-grid">

                {activeServiceData.items.map(
                  (item, index) => (

                    <motion.div
                      key={item.path}

                      initial={{
                        opacity: 0,
                        y: 10,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        duration: 0.25,
                        delay:
                          0.04 * index,
                      }}
                    >

                      <Link
                        to={item.path}
                        className="surgical-service-item"

                        onClick={() =>
                          setActiveService(null)
                        }
                      >

                        <span>
                          {item.title}
                        </span>

                        <ChevronRight
                          size={16}
                        />

                      </Link>

                    </motion.div>

                  )
                )}

              </div>


              {/* =============================================
                  MODAL FOOTER
              ============================================= */}

              <div className="service-modal-footer">

                <span>
                  Select a treatment to learn more
                </span>

                <button
                  type="button"

                  onClick={() =>
                    setActiveService(null)
                  }
                >
                  Close
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}