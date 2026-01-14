import axios from "axios";

export const getFirstAidGuidance = (text) => {
  return axios.post("http://127.0.0.1:8000/api/first-aid", {
    problem: text,
  });
};
