import { useEffect } from "react";
import "./App.css";
import Footer from "./footer/Footer";
import { Sections } from "./sections/Sections";

function App() {
  useEffect(() => {
    console.log("salom");
  }, []);
  return (
    <>
      <h1>salom</h1>
      <Sections />
      <Footer />
    </>
  );
}

export default App;
