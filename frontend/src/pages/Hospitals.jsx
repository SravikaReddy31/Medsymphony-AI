import React, { useEffect, useState } from "react";
import { fetchHospitals } from "../services/hospitalService";
import Footer from "../components/footer";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHospitals()
      .then((data) => {
        setHospitals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching hospitals:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="hospitals-page">
      <div className="hospitals-card">
        <h1 className="page-title">🏥 Nearby Hospitals – Hanmakonda</h1>
        <p className="page-subtitle">
          Contact nearby hospitals for quick medical assistance
        </p>

        {/* Loading state */}
        {loading && (
          <p style={{ color: "#64748b", marginTop: "20px" }}>
            Loading hospitals...
          </p>
        )}

        {/* No data state */}
        {!loading && hospitals.length === 0 && (
          <p style={{ color: "#ef4444", marginTop: "20px" }}>
            No hospital data available.
          </p>
        )}

        {/* Hospital list */}
        {!loading &&
          hospitals.map((hospital, index) => (
            <div key={index} className="hospital-item">
              <h3>{hospital.name}</h3>

              <p>
                <b>Speciality:</b> {hospital.speciality}
              </p>
              <p>
                <b>Address:</b> {hospital.address}
              </p>
              <p>
                <b>Contact:</b> {hospital.contact}
              </p>

              <a
                href={`tel:${hospital.contact}`}
                className="hospital-call-btn"
              >
                📞 Call Now
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hospitals;
