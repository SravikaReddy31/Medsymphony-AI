import { useState } from "react";

export default function useVoice() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };

    recognition.onend = () => setListening(false);

    recognition.start();
  };

  return {
    text,
    listening,
    startListening,
    setText
  };
}
