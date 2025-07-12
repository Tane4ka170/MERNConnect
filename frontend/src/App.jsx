import "./App.css";
import Footer from "./components/Footer/footer";
import NavbarV1 from "./components/NavbarV1/navbarV1";
import LandingPage from "./pages/LandingPage/landingPage";

function App() {
  return (
    <>
      <div className="bg-gray-600 w-[100%] h-[100%] box-border">
        <NavbarV1 />
        <LandingPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
