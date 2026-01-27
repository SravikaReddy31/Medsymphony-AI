import api from "./api";

export const getFirstAidGuidance = async (text) => {
  const response = await api.post("/api/first-aid", {
    problem: text,
  });
  return response.data;
};
