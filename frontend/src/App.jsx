import "./App.css";
import NavbarV1 from "./components/NavbarV1/navbarV1";
import LandingPage from "./pages/LandingPage/landingPage";

function App() {
  return (
    <>
      <div className="bg-gray-600 w-[100%] h-[100%] box-border">
        <NavbarV1 />
        <LandingPage />
      </div>
    </>
  );
}

export default App;
