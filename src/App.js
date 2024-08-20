import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import "./Styles/app.scss";
import "./Styles/mediaQuery.scss";
import { useEffect, useState } from "react";

function App() {
  const [loading, setloader] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setloader(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
