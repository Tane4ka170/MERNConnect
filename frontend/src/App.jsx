import "./App.css";
import Footer from "./components/Footer/footer";
import NavbarV1 from "./components/NavbarV1/navbarV1";
import LandingPage from "./pages/LandingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/signUp";
import Login from "./pages/Login/login";
import Navbar2 from "./components/Navbar2/navbar2";
import Feeds from "./pages/Feeds/feeds";

function App() {
  const isLogin = true;
  return (
    <>
      <div className="bg-gray-50 w-[100%] h-[100%] box-border">
        {isLogin ? <Navbar2 /> : <NavbarV1 />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feeds" element={<Feeds />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
