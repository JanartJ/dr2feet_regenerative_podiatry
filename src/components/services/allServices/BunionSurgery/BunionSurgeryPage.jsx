import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Plus,
  MapPin
} from "lucide-react";

import "./BunionSurgeryPage.css";

/*
|--------------------------------------------------------------------------
| IMAGE PLACEHOLDERS
|--------------------------------------------------------------------------
| Replace these with your actual image imports later.
*/

import heroImage from "../../../../assets/footcare1.jpg";
// import doctorImage from "../assets/doctor.jpg";

// const IMAGES = {
//   hero: heroImage,
//   doctor: doctorImage,
// };

const IMAGES = {
  // hero:   "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1800&q=85",
  hero: heroImage,
  doctor:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85",

  patient:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85",

  walking:
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=85",

  recovery:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85",

  consultation:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",

  procedure:
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85",

  facility:
    "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1000&q=85"
};

/*
|--------------------------------------------------------------------------
| ANIMATION
|--------------------------------------------------------------------------
*/

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45
  },

  visible: {
    opacity: 1,
    y: 0
  }
};

const fadeIn = {
  hidden: {
    opacity: 0
  },

  visible: {
    opacity: 1
  }
};

const viewport = {
  once: true,
  amount: 0.18
};

/*
|--------------------------------------------------------------------------
| FAQ DATA
|--------------------------------------------------------------------------
*/

const faqItems = [
  {
    question: "What is bunion surgery?",
    answer:
      "Bunion surgery is a procedure used to correct the structural changes associated with a bunion and improve alignment, comfort and function of the foot."
  },

  {
    question: "When should I consider bunion surgery?",
    answer:
      "Surgery may be considered when pain, deformity or difficulty with everyday activities continues despite appropriate non-surgical treatment."
  },

  {
    question: "How long does bunion surgery take?",
    answer:
      "The exact duration depends on the type of correction required and the individual patient's condition."
  },

  {
    question: "How long is the recovery?",
    answer:
      "Recovery varies depending on the procedure performed, the patient's health and the rehabilitation plan."
  },

  {
    question: "Will bunion surgery leave a scar?",
    answer:
      "Scarring depends on the surgical approach used. Your surgeon can explain the expected incision and healing process during your consultation."
  },

  {
    question: "Can bunions come back after surgery?",
    answer:
      "Recurrence can occur in some cases. Proper surgical planning, correction and following postoperative instructions can help support a successful outcome."
  }
];

/*
|--------------------------------------------------------------------------
| PROCEDURE OPTIONS
|--------------------------------------------------------------------------
*/

const procedureOptions = [
  {
    title: "Traditional Bunion Surgery",
    text: "Established surgical techniques designed to correct bunion deformity and improve foot alignment."
  },

  {
    title: "Minimally Invasive Bunion Surgery",
    text: "Small-incision approaches designed to address selected bunion deformities with minimal tissue disruption."
  },

  {
    title: "Lapiplasty",
    text: "A specialized approach that addresses the three-dimensional nature of certain bunion deformities."
  },

  {
    title: "Reconstructive Procedures",
    text: "Advanced procedures may be considered when additional structural correction is required."
  }
];

const sectionNavItems = [
  { id: "bunion-overview", label: "Overview" },
  { id: "bunion-intro", label: "Considering Surgery" },
  { id: "bunion-procedure-strip", label: "Procedure Gallery" },
  { id: "bunion-condition", label: "What Is a Bunion" },
  { id: "bunion-symptoms", label: "Symptoms" },
  { id: "bunion-treatment-timing", label: "When Is Surgery Needed" },
  { id: "bunion-planning", label: "Surgical Planning" },
  { id: "bunion-diagnosis", label: "Diagnosis" },
  { id: "bunion-benefits", label: "Benefits" },
  { id: "treatment", label: "Surgical Options" },
  { id: "bunion-cosmetic", label: "Cosmetic Care" },
  { id: "bunion-recovery", label: "Recovery" },
  { id: "consultation", label: "Consultation" },
  { id: "bunion-faq", label: "FAQs" },
  { id: "bunion-locations", label: "Locations" }
];

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function BunionSurgeryPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("bunion-overview");

  const sectionNavRef = useRef(null);

  useEffect(() => {
    const sections = sectionNavItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeLink = sectionNavRef.current?.querySelector(
      `[data-section-id="${activeSection}"]`
    );

    if (!activeLink) return;

    activeLink.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });
  }, [activeSection]);

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();

    const target = document.getElementById(sectionId);

    if (!target) return;

    setActiveSection(sectionId);

    const nav = document.querySelector(".bunion-section-nav");
    const siteHeader = document.querySelector(".site-header");

    const siteHeaderHeight = siteHeader?.getBoundingClientRect().height || 0;

    const navHeight = nav?.getBoundingClientRect().height || 0;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      siteHeaderHeight -
      navHeight -
      12;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth"
    });

    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <main className="bunion-page">
      {/* SECTION NAVIGATION */}
      <div className="bunion-section-nav">
        <nav
          className="bunion-section-nav-inner"
          aria-label="Bunion surgery page sections"
          ref={sectionNavRef}
        >
          {sectionNavItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-section-id={item.id}
              className={`bunion-section-nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={(event) => handleSectionClick(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bunion-hero" id="bunion-overview">
        <div
          className="bunion-hero-bg"
          style={{
            backgroundImage: `url(${IMAGES.hero})`
          }}
        />

        <div className="bunion-hero-overlay" />

        <div className="bunion-container">
          <motion.div
            className="bunion-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <span className="eyebrow eyebrow-light">FOOT & ANKLE SURGERY</span>

            <h1 className="capitalize-text">Bunion Surgery</h1>

            <p>
              Personalized surgical care designed to restore comfort, alignment
              and confidence in every step.
            </p>

            <a href="#consultation" className="gold-button">
              Schedule a Consultation
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="intro-section" id="bunion-intro">
        <div className="bunion-container">
          <motion.div
            className="intro-content"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            transition={{
              duration: 0.8
            }}
          >
            <span className="eyebrow">CONSIDERING BUNION SURGERY?</span>

            <h2 className="capitalize-text">
              A better approach to treating bunions.
            </h2>

            <p>
              Bunions can affect much more than the appearance of your foot.
              Pain, pressure, difficulty finding comfortable shoes and changes
              in the way you walk can gradually affect your everyday life.
            </p>

            <p>
              Our approach focuses on understanding the underlying structure of
              your foot and developing a treatment plan around your individual
              needs.
            </p>

            <a href="#treatment" className="text-link">
              Learn More
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROCEDURE STRIP
      ===================================================== */}

      <section className="procedure-strip" id="bunion-procedure-strip">
        <div className="bunion-container">
          <motion.div
            className="procedure-strip-inner"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeIn}
            transition={{
              duration: 0.7
            }}
          >
            <span className="strip-label">BUNION SURGERY OPTIONS</span>

            <div className="toe-images">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div className="toe-placeholder" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHAT IS A BUNION
      ===================================================== */}

      <section className="split-section" id="bunion-condition">
        <div className="split-image">
          <motion.img
            src={IMAGES.doctor}
            alt="Podiatry consultation"
            initial={{
              opacity: 0,
              scale: 1.06
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={viewport}
            transition={{
              duration: 0.9
            }}
          />
        </div>

        <motion.div
          className="split-content"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{
            duration: 0.8
          }}
        >
          <span className="eyebrow">WHAT IS A BUNION?</span>

          <h2 className="capitalize-text">Understanding the condition.</h2>

          <p>
            A bunion is a structural deformity that develops at the base of the
            big toe. Over time, the big toe may move toward the neighboring toes
            while the joint becomes more prominent.
          </p>

          <p>
            Symptoms can include pain, swelling, redness, stiffness and
            difficulty wearing certain shoes.
          </p>

          <ul className="check-list">
            <li>
              <span />
              Pain or tenderness
            </li>

            <li>
              <span />
              Visible bump near the big toe
            </li>

            <li>
              <span />
              Difficulty with footwear
            </li>

            <li>
              <span />
              Changes in walking mechanics
            </li>
          </ul>
        </motion.div>
      </section>

      {/* =====================================================
          COMMON SYMPTOMS
      ===================================================== */}

      <section className="center-section" id="bunion-symptoms">
        <motion.div
          className="center-content"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{
            duration: 0.8
          }}
        >
          <span className="eyebrow">BUNION SYMPTOMS</span>

          <h2 className="capitalize-text">
            Know what your feet are telling you.
          </h2>

          <p>
            Bunion symptoms can develop gradually. Recognizing changes early can
            help you understand when it may be time to seek professional
            evaluation.
          </p>
        </motion.div>

        <div className="symptom-grid">
          {[
            "Foot pain",
            "Swelling",
            "Redness",
            "Stiffness",
            "Difficulty wearing shoes",
            "Toe displacement"
          ].map((item, index) => (
            <motion.div
              key={item}
              className="symptom-card"
              initial={{
                opacity: 0,
                y: 25
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={viewport}
              transition={{
                duration: 0.5,
                delay: index * 0.06
              }}
            >
              <span className="symptom-number">0{index + 1}</span>

              <h3 className="capitalize-text">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          ALTERNATING CONTENT 1
      ===================================================== */}

      <section className="editorial-section" id="bunion-treatment-timing">
        <motion.div
          className="editorial-content"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{
            duration: 0.8
          }}
        >
          <span className="eyebrow">WHEN IS SURGERY NEEDED?</span>

          <h2 className="capitalize-text">
            Treatment should match your lifestyle.
          </h2>

          <p>
            Not every bunion requires surgery. Conservative treatment may help
            manage symptoms for many patients.
          </p>

          <p>
            When pain continues to interfere with everyday activities despite
            appropriate non-surgical treatment, surgery may become an option.
          </p>

          <a href="#treatment" className="text-link">
            Explore Treatment Options
            <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          className="editorial-image"
          initial={{
            opacity: 0,
            x: 50
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={viewport}
          transition={{
            duration: 0.8
          }}
        >
          <img src={IMAGES.walking} alt="Patient walking" />
        </motion.div>
      </section>

      {/* =====================================================
          ALTERNATING CONTENT 2
      ===================================================== */}

      <section
        className="editorial-section editorial-reverse"
        id="bunion-planning"
      >
        <motion.div
          className="editorial-content"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          transition={{
            duration: 0.8
          }}
        >
          <span className="eyebrow">YOUR FEET. YOUR PLAN.</span>

          <h2 className="capitalize-text">Personalized surgical planning.</h2>

          <p>
            Every foot is different. The type of procedure recommended depends
            on the severity of the deformity, your symptoms, activity level and
            your overall goals.
          </p>

          <p>
            During your consultation, your foot will be carefully evaluated and
            appropriate imaging may be used to develop your treatment plan.
          </p>
        </motion.div>

        <motion.div
          className="editorial-image"
          initial={{
            opacity: 0,
            x: -50
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={viewport}
          transition={{
            duration: 0.8
          }}
        >
          <img src={IMAGES.consultation} alt="Patient consultation" />
        </motion.div>
      </section>

      {/* =====================================================
          BUNION DIAGNOSIS
      ===================================================== */}

      <section className="diagnosis-section" id="bunion-diagnosis">
        <div className="bunion-container">
          <motion.div
            className="diagnosis-heading"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <span className="eyebrow">BUNION DIAGNOSIS</span>

            <h2 className="capitalize-text">
              Understanding your foot starts with accurate evaluation.
            </h2>
          </motion.div>

          <div className="diagnosis-grid">
            <div>
              <h3 className="capitalize-text">Clinical Evaluation</h3>

              <p>
                Your symptoms, medical history, footwear and walking mechanics
                may all be considered during evaluation.
              </p>
            </div>

            <div>
              <h3 className="capitalize-text">Imaging</h3>

              <p>
                Imaging may help your provider understand the alignment and
                structure of the bones and joints.
              </p>
            </div>

            <div>
              <h3 className="capitalize-text">Treatment Planning</h3>

              <p>
                Your evaluation helps determine which treatment options are most
                appropriate for your individual condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="benefits-section" id="bunion-benefits">
        <div className="bunion-container">
          <motion.div
            className="benefits-heading"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <span className="eyebrow">WHY CONSIDER TREATMENT?</span>

            <h2 className="capitalize-text">
              A treatment plan designed around your goals.
            </h2>
          </motion.div>

          <div className="benefits-grid">
            {[
              [
                "01",
                "Pain Relief",
                "Address persistent discomfort that affects everyday activities."
              ],

              [
                "02",
                "Improved Alignment",
                "Correct structural problems affecting the position of the foot."
              ],

              [
                "03",
                "Better Mobility",
                "Support a more comfortable and functional walking pattern."
              ],

              [
                "04",
                "Footwear Comfort",
                "Make it easier to find shoes that fit comfortably."
              ],

              [
                "05",
                "Long-Term Planning",
                "Build a treatment strategy based on your individual needs."
              ],

              [
                "06",
                "Personalized Care",
                "Receive a plan developed around your lifestyle and goals."
              ]
            ].map(([number, title, text], index) => (
              <motion.div
                className="benefit-card"
                key={title}
                initial={{
                  opacity: 0,
                  y: 25
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={viewport}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06
                }}
              >
                <span>{number}</span>

                <h3 className="capitalize-text">{title}</h3>

                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SURGICAL OPTIONS
      ===================================================== */}

      <section className="options-section" id="treatment">
        <div className="bunion-container">
          <motion.div
            className="options-heading"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <span className="eyebrow">SURGICAL TREATMENT OPTIONS</span>

            <h2 className="capitalize-text">
              The right procedure depends on your foot.
            </h2>

            <p>
              Different surgical approaches may be appropriate depending on the
              type and severity of the deformity.
            </p>
          </motion.div>

          <div className="options-grid">
            {procedureOptions.map((item, index) => (
              <motion.article
                className="option-card"
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={viewport}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08
                }}
              >
                <span>0{index + 1}</span>

                <h3 className="capitalize-text">{item.title}</h3>

                <p>{item.text}</p>

                <ArrowRight size={17} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COSMETIC SECTION
      ===================================================== */}

      <section className="cosmetic-section" id="bunion-cosmetic">
        <div
          className="cosmetic-bg"
          style={{
            backgroundImage: `url(${IMAGES.procedure})`
          }}
        />

        <div className="cosmetic-overlay" />

        <div className="bunion-container">
          <motion.div
            className="cosmetic-content"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <span className="eyebrow eyebrow-light">
              COSMETIC CONSIDERATIONS
            </span>

            <h2 className="capitalize-text">
              Restoring comfort and confidence.
            </h2>

            <p>
              Foot surgery is about more than appearance. Our goal is to address
              the underlying condition while helping you return to the
              activities that matter to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          RECOVERY
      ===================================================== */}

      <section className="recovery-section" id="bunion-recovery">
        <motion.div
          className="recovery-image"
          initial={{
            opacity: 0,
            x: -50
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={viewport}
          transition={{
            duration: 0.8
          }}
        >
          <img src={IMAGES.recovery} alt="Recovery and rehabilitation" />
        </motion.div>

        <motion.div
          className="recovery-content"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <span className="eyebrow">BUNION SURGERY RECOVERY</span>

          <h2 className="capitalize-text">
            Recovery is a process, not a race.
          </h2>

          <p>
            Your recovery timeline depends on the procedure performed and your
            individual healing process.
          </p>

          <div className="recovery-list">
            <div>
              <strong>01</strong>

              <span>Initial healing and protection</span>
            </div>

            <div>
              <strong>02</strong>

              <span>Gradual return to activity</span>
            </div>

            <div>
              <strong>03</strong>

              <span>Rehabilitation and strengthening</span>
            </div>

            <div>
              <strong>04</strong>

              <span>Return to normal activities</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="consultation-section" id="consultation">
        <div className="consultation-bg">
          <img src={IMAGES.facility} alt="" />
        </div>

        <div className="consultation-overlay" />

        <motion.div
          className="consultation-content"
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={viewport}
          transition={{
            duration: 0.8
          }}
        >
          <span className="eyebrow eyebrow-light">
            YOUR FIRST STEP TO GETTING BETTER
          </span>

          <h2 className="capitalize-text">
            Let's create a plan for your feet.
          </h2>

          <p>
            Schedule a consultation and discover which treatment options may be
            right for you.
          </p>

          <button className="gold-button">
            Book an Appointment
            <ArrowRight size={17} />
          </button>
        </motion.div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="faq-section" id="bunion-faq">
        <div className="bunion-container">
          <motion.div
            className="faq-heading"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <span className="eyebrow">BUNION SURGERY FAQ</span>

            <h2 className="capitalize-text">Frequently asked questions.</h2>
          </motion.div>

          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>

                    {isOpen ? <ChevronDown size={18} /> : <Plus size={18} />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer"
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
                        transition={{
                          duration: 0.3
                        }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ===================================================== */}

      <section className="locations-section" id="bunion-locations">
        <div className="bunion-container">
          <motion.div
            className="locations-heading"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <span className="eyebrow">LOCATIONS</span>

            <h2 className="capitalize-text">Visit us in Manhattan.</h2>
          </motion.div>

          <div className="locations-grid">
            <div className="location-card">
              <div className="map-placeholder">
                <MapPin size={28} />
              </div>

              <div className="location-content">
                <span>DOWNTOWN</span>

                <h3 className="capitalize-text">Manhattan Podiatry</h3>

                <p>New York, NY</p>

                <a href="#contact">
                  Get Directions
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div className="location-card">
              <div className="map-placeholder">
                <MapPin size={28} />
              </div>

              <div className="location-content">
                <span>MIDTOWN</span>

                <h3 className="capitalize-text">Manhattan Podiatry</h3>

                <p>New York, NY</p>

                <a href="#contact">
                  Get Directions
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
