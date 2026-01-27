import axios from "axios";

const api = axios.create({
  // ✅ Works in both development AND production (GitHub Pages)
  baseURL:
    import.meta.env.VITE_API_BASE_URL ??
    "https://medsymphony-backend.onrender.com",

  headers: {
    "Content-Type": "application/json",
  },
});

// 🔍 Optional: keep this temporarily for debugging
console.log(
  "API BASE URL:",
  import.meta.env.VITE_API_BASE_URL ??
    "https://medsymphony-backend.onrender.com"
);

export default api;
