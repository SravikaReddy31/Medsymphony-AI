import React, { useState } from "react";
import "../styles/symptoms.css";

export default function Symptoms() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startVoiceInput = (lang) => {
    if (!window.webkitSpeechRecognition) {
      alert("Use Chrome or Edge for voice input");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = lang;
    recognition.start();

    recognition.onresult = (e) => {
      setSymptoms(e.results[0][0].transcript);
    };
  };

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) {
      setError("Please enter symptoms");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: symptoms }),
      });

      const data = await res.json();
      setResult(data);
    } catch {
      setError("Unable to analyze symptoms");
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

        {/* VOICE BUTTONS */}
        <div className="voice-row">
          <button className="voice-btn" onClick={() => startVoiceInput("te-IN")}>
            🎤 Telugu
          </button>
          <button className="voice-btn" onClick={() => startVoiceInput("en-US")}>
            🎤 English
          </button>
        </div>

        <p className="or-text">OR</p>

        {/* TEXTAREA */}
        <textarea
          className="symptom-input"
          placeholder="e.g. headache, fever, knee pain..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />

        {/* ANALYZE BUTTON */}
        <button
          className="analyze-btn"
          onClick={analyzeSymptoms}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Symptoms"}
        </button>

        {error && <p className="error-text">{error}</p>}

        {/* RESULT */}
        {result && (
          <div className="result-card">
            <h3>Possible Condition</h3>
            <p>{result.possible_condition}</p>

            <h4>Food Advice</h4>
            <ul>
              {result.food_advice.map((i, k) => (
                <li key={k}>{i}</li>
              ))}
            </ul>

            <h4>Exercise Advice</h4>
            <ul>
              {result.exercise_advice.map((i, k) => (
                <li key={k}>{i}</li>
              ))}
            </ul>

            <h4>Pain Relief</h4>
            <ul>
              {result.pain_relief.map((i, k) => (
                <li key={k}>{i}</li>
              ))}
            </ul>

            <p className="disclaimer">{result.disclaimer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
