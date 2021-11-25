import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profil from "./Pages/Profil";
import Contact from "./Pages/Contact";
import UserForm from "./Pages/UserForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userForm" element={<UserForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
