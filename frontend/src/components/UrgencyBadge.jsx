import React from "react";
export default function UrgencyBadge({ level }) {
  const colors = {
    RED: "red",
    YELLOW: "orange",
    GREEN: "green"
  };
  return (
    <h3 style={{ color: colors[level] }}>
      Urgency: {level}
    </h3>
  );
}
