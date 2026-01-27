import React, { useState } from "react";
import api from "../services/api";
import "../styles/symptoms.css";

export default function Symptoms() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🎤 Voice Input
  const startVoiceInput = (lang) => {
    if (!window.webkitSpeechRecognition) {
      alert("Voice input works only in Chrome / Edge");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = lang;
    recognition.start();

    recognition.onresult = (e) => {
      setSymptoms(e.results[0][0].transcript);
    };
  };

  // 🧠 Analyze Symptoms (REAL AI)
  const analyzeSymptoms = async () => {
  console.log("Analyze button clicked");

  if (!symptoms.trim()) {
    setError("Please enter symptoms");
    return;
  }

  setLoading(true);
  setError("");
  setResult(null);

  try {
    // 🔵 FIRST TRY
    const res = await api.post("/api/analyze", {
      text: symptoms,
    });
    setResult(res.data);
  } catch (err) {
    try {
      // 🟡 WAIT 3 SECONDS + RETRY ONCE
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const retryRes = await api.post("/api/analyze", {
        text: symptoms,
      });
      setResult(retryRes.data);
    } catch (finalErr) {
      // 🔴 ONLY IF BOTH FAIL
      setError(
        finalErr.response?.data?.detail ||
          "AI is starting. Please try again in a few seconds."
      );
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="symptom-page">
      <div className="symptom-card">
        <h1 className="page-title">Describe Your Symptoms</h1>
        <p className="page-subtitle">
          Speak or type your symptoms in your own language
        </p>

        {/* 🎤 Voice Buttons */}
        <div className="voice-row">
          <button
            className="voice-btn"
            onClick={() => startVoiceInput("te-IN")}
          >
            🎤 Telugu
          </button>
          <button
            className="voice-btn"
            onClick={() => startVoiceInput("en-US")}
          >
            🎤 English
          </button>
        </div>

        <p className="or-text">OR</p>

        {/* ✍️ Text Input */}
        <textarea
          className="symptom-input"
          placeholder="e.g. headache, fever, knee pain..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />

        {/* 🔍 Analyze Button */}
        <button
          className="analyze-btn"
          onClick={analyzeSymptoms}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Symptoms"}
        </button>

        {error && <p className="error-text">{error}</p>}

        {/* 📊 Result */}
        {result && (
          <div className="result-card">
            <h3>Possible Condition</h3>
            <p>{result.possible_condition}</p>

            <h4>Food Advice</h4>
            <ul>
              {result.food_advice.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4>Exercise Advice</h4>
            <ul>
              {result.exercise_advice.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4>Pain Relief</h4>
            <ul>
              {result.pain_relief.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <p className="disclaimer">{result.disclaimer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
