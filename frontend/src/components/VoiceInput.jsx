import React from "react";

const VoiceInput = ({ onResult }) => {
  const startListening = (lang) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = lang;        // "te-IN" or "en-US"
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.start();
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      onResult(text);
    };
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        className="voice-btn"
        onClick={() => startListening("te-IN")}
      >
        🎤 Telugu
      </button>
      <button
        className="voice-btn"
        style={{ marginLeft: "10px" }}
        onClick={() => startListening("en-US")}
      >
        🎤 English
      </button>
    </div>
  );
};
export default VoiceInput;
