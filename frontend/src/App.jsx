import { useEffect, useState } from "react";

import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/login";
import Feeds from "./pages/Feeds/feeds";
import SignUp from "./pages/SignUp/signUp";
import Resume from "./pages/Resume/resume";
import Profile from "./pages/Profile/profile";
import Footer from "./components/Footer/footer";
import Messages from "./pages/Messages/messages";
import Navbar2 from "./components/Navbar2/navbar2";
import MyNetwork from "./pages/MyNetwork/myNetwork";
import NavbarV1 from "./components/NavbarV1/navbarV1";
import LandingPage from "./pages/LandingPage/landingPage";
import Notification from "./pages/Notification/notification";
import AllActivities from "./pages/AllActivities/allActivities";
import SingleActivity from "./pages/SingleActivity/singleActivity";

import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin"));

  const changeLoginValue = (val) => {
    setIsLogin(val);
  };

  // const fetchData = async () => {
  //   await axios
  //     .post("http://localhost:1478/api/auth/login", {
  //       email: "",
  //       password: "",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="bg-gray-50 w-[100%] h-[100%] box-border">
        {isLogin ? <Navbar2 /> : <NavbarV1 />}
        <Routes>
          <Route
            path="/"
            element={
              isLogin ? (
                <Navigate to={"/feeds"} />
              ) : (
                <LandingPage changeLoginValue={changeLoginValue} />
              )
            }
          />
          <Route
            path="/signUp"
            element={
              isLogin ? (
                <Navigate to={"/feeds"} />
              ) : (
                <SignUp changeLoginValue={changeLoginValue} />
              )
            }
          />
          <Route
            path="/login"
            element={
              isLogin ? (
                <Navigate to={"/feeds"} />
              ) : (
                <Login changeLoginValue={changeLoginValue} />
              )
            }
          />
          <Route
            path="/feeds"
            element={isLogin ? <Feeds /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/myNetwork"
            element={isLogin ? <MyNetwork /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/resume"
            element={isLogin ? <Resume /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/messages"
            element={isLogin ? <Messages /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/notifications"
            element={isLogin ? <Notification /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/profile/:id"
            element={isLogin ? <Profile /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/profile/:id/activities"
            element={isLogin ? <AllActivities /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/profile/:id/activities/:postId"
            element={isLogin ? <SingleActivity /> : <Navigate to={"/login"} />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
