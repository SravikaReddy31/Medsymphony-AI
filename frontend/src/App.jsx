import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Symptoms from "./pages/SymptomChecker";
import FirstAid from "./pages/FirstAid";
import Hospitals from "./pages/Hospitals";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />   {/* THIS LINE IS CRITICAL */}
        <Route path="/home" element={<Home />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/first-aid" element={<FirstAid />} />
        <Route path="/hospitals" element={<Hospitals />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
