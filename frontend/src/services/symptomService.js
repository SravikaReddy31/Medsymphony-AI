import api from "./api";

export const analyzeSymptoms = async (text) => {
  const response = await api.post(
    "/analyze",
    { text },
    { timeout: 45000 } // ⏳ 45 seconds
  );
  return response.data;
};
