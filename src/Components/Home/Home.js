import React from "react";
import Banner from "../Banner/Banner";
import MeetDoctor from "../MeetDoctor/MeetDoctor";
import Services from "../Services/Services";
import './Home.css'
function Home() {
  return <div className="home">
     
      <Banner></Banner>
      <Services></Services>
      <MeetDoctor></MeetDoctor>
  </div>;
}

export default Home;
