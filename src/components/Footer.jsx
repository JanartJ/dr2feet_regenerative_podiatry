import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Calendar,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Dr2FeetLogo from "../assets/Dr2FeetLogo";
import { useNavigate } from "react-router-dom";

export default function Footer({ onOpenBooking }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer
      style={{
        background: "var(--bg-light-ivory)",
        color: "var(--text-dark-primary)",
        borderTop: "1px solid var(--border-light-gold)",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        {/* Practice Wall Logo Showcase Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #F4F0E8 100%)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-light-gold)",
            padding: "36px",
            marginBottom: "70px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                color: "var(--gold-primary)",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              OUR MANHATTAN HEADQUARTERS
            </span>
            <h3
              className="font-serif text-gold-gradient"
              style={{
                fontSize: "2rem",
                marginTop: "6px",
                marginBottom: "12px",
              }}
            >
              Experience Dr. 2 Feet Regenerative Podiatry
            </h3>
            <p
              style={{
                color: "var(--text-dark-secondary)",
                fontSize: "0.98rem",
                lineHeight: 1.6,
                marginBottom: "24px",
              }}
            >
              Visit our pristine Wall Street and Fifth Avenue clinics. Designed
              from the ground up for medical precision and total patient
              relaxation.
            </p>
            <button className="btn-gold" onClick={onOpenBooking}>
              <Calendar size={16} /> Schedule Your Visit
            </button>
          </div>

          <div
            style={{
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              border: "1px solid var(--border-dark-gold)",
              boxShadow: "var(--shadow-card-dark)",
            }}
          >
            <img
              src="/assets/dr2feet_logo.png"
              alt="Dr. 2 Feet Wall Logo Practice"
              style={{
                width: "100%",
                // height: "220px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* 4 Column Main Footer Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "60px",
          }}
        >
          {/* Col 1: Brand & Logo */}
          <div>
            <div onClick={()=>navigate("/#top")}>
              <Dr2FeetLogo variant="dark" height={75} className="mb-4"  />
            </div>
            <p
              style={{
                color: "var(--text-dark-secondary)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                marginTop: "16px",
                marginBottom: "20px",
              }}
            >
              Manhattan's flagship practice for minimally invasive foot surgery,
              aesthetic toe correction, and cellular stem cell regeneration.
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                color: "var(--gold-primary)",
              }}
            >
              <ShieldCheck size={20} />
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-dark-primary)",
                  fontWeight: 600,
                }}
              >
                Board Certified Foot & Ankle Surgeons
              </span>
            </div>
          </div>

          {/* Col 2: Downtown Office */}
          <div>
            <h4
              className="font-serif text-gold"
              style={{
                fontSize: "1.2rem",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Downtown Office
            </h4>
            <div
              style={{
                color: "var(--text-dark-secondary)",
                fontSize: "0.9rem",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "flex-start",
                }}
              >
                <MapPin
                  size={16}
                  color="var(--gold-primary)"
                  style={{ flexShrink: 0, marginTop: "3px" }}
                />
                111 Broadway, Suite 1302
                <br />
                New York, NY 10006
              </p>
              <p style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <Phone size={16} color="var(--gold-primary)" />
                <a
                  href="tel:2124042800"
                  style={{
                    color: "var(--text-dark-primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  (212) 404-2800
                </a>
              </p>
            </div>
          </div>

          {/* Col 3: Midtown Office */}
          <div>
            <h4
              className="font-serif text-gold"
              style={{
                fontSize: "1.2rem",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Midtown Office
            </h4>
            <div
              style={{
                color: "var(--text-dark-secondary)",
                fontSize: "0.9rem",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "flex-start",
                }}
              >
                <MapPin
                  size={16}
                  color="var(--gold-primary)"
                  style={{ flexShrink: 0, marginTop: "3px" }}
                />
                501 Fifth Avenue, Suite 1002
                <br />
                New York, NY 10017
              </p>
              <p style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <Phone size={16} color="var(--gold-primary)" />
                <a
                  href="tel:2122032000"
                  style={{
                    color: "var(--text-dark-primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  (212) 203-2000
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4
              className="font-serif text-gold"
              style={{
                fontSize: "1.2rem",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Podiatry Journal
            </h4>
            <p
              style={{
                color: "var(--text-dark-secondary)",
                fontSize: "0.88rem",
                marginBottom: "16px",
              }}
            >
              Subscribe for surgical insights, high heel comfort guides, and
              wellness tips.
            </p>

            {subscribed ? (
              <div
                style={{
                  background: "rgba(197, 160, 89, 0.15)",
                  border: "1px solid var(--gold-primary)",
                  color: "var(--gold-primary)",
                  padding: "12px 16px",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.86rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <CheckCircle2 size={16} /> Subscribed to Journal!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    background: "var(--bg-light-card)",
                    border: "1px solid var(--border-light-gold)",
                    borderRadius: "var(--radius-full)",
                    padding: "12px 20px",
                    color: "var(--text-dark-primary)",
                    fontSize: "0.88rem",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="btn-gold"
                  style={{ padding: "12px 20px", fontSize: "0.82rem" }}
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(197, 160, 89, 0.2)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.82rem",
            color: "var(--text-dark-secondary)",
          }}
        >
          <div>
            © {new Date().getFullYear()} Dr. 2 Feet Regenerative Podiatry. All
            Rights Reserved.
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="#"
              style={{
                color: "var(--text-dark-secondary)",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: "var(--text-dark-secondary)",
                textDecoration: "none",
              }}
            >
              Terms of Service
            </a>
            <a
              href="#"
              style={{
                color: "var(--text-dark-secondary)",
                textDecoration: "none",
              }}
            >
              HIPAA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
