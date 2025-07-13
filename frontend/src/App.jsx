import "./App.css";
import Footer from "./components/Footer/footer";
import NavbarV1 from "./components/NavbarV1/navbarV1";
import LandingPage from "./pages/LandingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/signUp";
import Login from "./pages/Login/login";

function App() {
  return (
    <>
      <div className="bg-gray-50 w-[100%] h-[100%] box-border">
        <NavbarV1 />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
