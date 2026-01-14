import api from "./api";

export const classifyUrgency = async (symptom) => {
  const response = await api.post("/urgency/classify", {
    symptom: symptom
  });
  return response.data;
};
