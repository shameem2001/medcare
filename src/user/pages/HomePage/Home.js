import React from "react";
import "./Home.scss";

// import About from '../../components/About'
import Banner from "../../components/HomePage/Banner";
import Contact from "../../components/HomePage/Contact";
import Service from "../../components/HomePage/Service";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Service />
      <Contact />
    </div>
  );
}
