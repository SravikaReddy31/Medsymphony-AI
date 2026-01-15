import api from "./api";

export const checkSymptom = async (text) => {
  const response = await api.post("/api/analyze", {
    text: text,
  });
  return response.data;
};
