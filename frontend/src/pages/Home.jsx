import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

// Images MUST be in frontend/public folder
const images = [
  "doctor1.png",
  "doctor2.png",
  "doctor3.png",
];

export default function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home-wrapper">
        {/* HERO SECTION */}
        <section className="hero-section">
          <img
            src={images[currentIndex]}
            alt="banner"
            className="hero-bg-image"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1 className="hero-title">MedSymphony</h1>
            <p className="hero-subtitle">
              AI-powered voice health assistant for everyone — even without reading or typing
            </p>

            <button
              className="hero-voice-btn"
              onClick={() => navigate("/symptoms")}
            >
              🎙️ Talk to Health Assistant
            </button>
          </div>
        </section>
        {/* ================= FEATURE SECTION ================= */}
        <section className="card-section">
          <h2 className="section-title">How MedSymphony Helps You</h2>
          <p className="section-subtitle">
            Simple, voice-based healthcare support designed for everyone
          </p>

          <div className="card-grid">
            <div
              className="feature-card"
              onClick={() => navigate("/symptoms")}
            >
              <h2>🩺 Symptoms</h2>
              <p>Check symptoms using voice or text</p>
            </div>

            <div
              className="feature-card"
              onClick={() => navigate("/first-aid")}
            >
              <h2>💊 First Aid</h2>
              <p>Speak your emergency. Get instant first aid guidance.</p>
            </div>

            <div
              className="feature-card"
              onClick={() => navigate("/hospitals")}
            >
              <h2>🏥 Hospitals</h2>
              <p>Find nearby hospitals instantly</p>
            </div>
          </div>
        </section>

        {/* ================= TRUST SECTION ================= */}
        <section className="trust-section">
          <div className="trust-item">🎙️ Voice Based</div>
          <div className="trust-item">🌐 Multilingual</div>
          <div className="trust-item">⚡ Fast & Simple</div>
          <div className="trust-item">🔒 No Login Needed</div>
        </section>
      </div>
    </>
  );
}
