import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Translate from "./components/Translate"
import "./i18n"
import Images from "./components/Images";
import Amenities from "./components/Amenities";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-800 body-font">
      <Navbar />
      <Translate />
      <About />
      <Images />
      <Amenities />
      <Testimonials />
      <Contact />
    </main>
  );
}