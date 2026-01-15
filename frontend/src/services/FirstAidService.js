import api from "./api";

export const getFirstAidGuidance = async (text) => {
  const response = await api.post("/api/first-aid", {
    text: text,
  });
  return response.data;
};
