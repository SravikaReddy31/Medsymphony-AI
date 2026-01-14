import { useState } from "react";

export default function useLanguage() {
  const [language, setLanguage] = useState("en");

  return {
    language,
    setLanguage
  };
}
