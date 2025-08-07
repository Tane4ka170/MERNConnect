import "./App.css";
import Footer from "./components/Footer/footer";
import NavbarV1 from "./components/NavbarV1/navbarV1";
import LandingPage from "./pages/LandingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/signUp";
import Login from "./pages/Login/login";
import Navbar2 from "./components/Navbar2/navbar2";
import Feeds from "./pages/Feeds/feeds";
import MyNetwork from "./pages/MyNetwork/myNetwork";
import Resume from "./pages/Resume/resume";
import Messages from "./pages/Messages/messages";
import Profile from "./pages/Profile/profile";
import AllActivities from "./pages/AllActivities/allActivities";

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
          <Route path="/myNetwork" element={<MyNetwork />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/:id/activities" element={<AllActivities />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
