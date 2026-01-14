import api from "./api";

export const processVoice = async () => {
  const response = await api.post("/voice/process");
  return response.data;
};
