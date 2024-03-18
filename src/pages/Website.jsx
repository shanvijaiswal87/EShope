import React from "react";

import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Contacts from "../components/Contacts/Contacts";
import GetStarted from "../components/GetStarted/GetStarted"


const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
       
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contacts />
      <GetStarted />
      
    </div>
  );
};

export default Website;
