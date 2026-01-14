import api from "./api";

export const fetchHospitals = async () => {
  const response = await api.get("/api/hospitals");
  return response.data;
};
