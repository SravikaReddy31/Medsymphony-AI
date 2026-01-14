import api from "./api";

export const checkSymptom = async (symptom) =>
  (await api.post("/symptoms/check", { symptom })).data;

export const classifyUrgency = async (symptom) =>
  (await api.post("/urgency/classify", { symptom })).data;
