import React from "react";
export default function HospitalCard({ name, visit_type }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "6px"
      }}
    >
      <h4>{name}</h4>
      <p>Visit Type: <strong>{visit_type}</strong></p>
    </div>
  );
}
