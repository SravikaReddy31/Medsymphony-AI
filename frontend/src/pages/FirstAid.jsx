import React, { useState } from "react";
import VoiceInput from "../components/VoiceInput";
import { getFirstAidGuidance } from "../services/FirstAidService";

const FirstAid = () => {
  const [spokenText, setSpokenText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVoiceResult = async (text) => {
    setSpokenText(text);
    setLoading(true);
    setResult("");

    try {
      const response = await getFirstAidGuidance(text);

      // ✅ FIX: use response.result (NOT data)
      setResult(response.result);
    } catch (error) {
      console.error("First aid error:", error);
      setResult("Unable to get first aid guidance.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="symptom-container">
      <h1 className="page-title">🩹 Voice Based First Aid</h1>
      <p className="page-subtitle">
        Speak your emergency to get immediate first aid guidance
      </p>

      <VoiceInput onResult={handleVoiceResult} />

      {spokenText && (
        <div className="spoken-text-box">
          <b>You said:</b> {spokenText}
        </div>
      )}

      {loading && <p>Getting first aid guidance...</p>}

      {result && (
        <div className="result-card">
          <pre>{result}</pre>
        </div>
      )}

      <p className="disclaimer-text">
        ⚠ This guidance is for first aid only. Please consult a doctor.
      </p>
    </div>
  );
};

export default FirstAid;
