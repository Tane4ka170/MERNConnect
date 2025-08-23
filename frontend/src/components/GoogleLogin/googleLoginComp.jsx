import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GoogleLoginComp = (props) => {
  const navigate = useNavigate();

  const handleOnSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    const res = await axios.post(
      "http://localhost:1478/auth/google",
      { token },
      { withCredentials: true }
    );
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("userInfo", JSON.stringify(res.data.user));
    props.changeLoginValue(true);
    navigate("/feeds");
  };
  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={(credentialResponse) => handleOnSuccess(credentialResponse)}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginComp;
