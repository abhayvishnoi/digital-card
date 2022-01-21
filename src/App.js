import React from "react";
import Image from "./components/image";
import NavBar from "./components/navbar";
import About from "./components/about";
import Interests from "./components/interests";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="main">
      <Image />
      <NavBar />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
