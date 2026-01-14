import React from "react";
export default function LanguageSelector({ language, setLanguage }) {
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      style={{ marginLeft: "10px" }}
    >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="te">Telugu</option>
      <option value="ta">Tamil</option>
    </select>
  );
}
