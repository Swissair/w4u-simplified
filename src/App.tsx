import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/contact" Component={Contact} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
