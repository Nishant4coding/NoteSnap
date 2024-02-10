import React from "react";
import Notesnap from "../Assets/NoteSnap-text.svg";
import Books from "../Assets/HeroImg.svg";
import { Link } from "react-router-dom";

import explore from '../Assets/explore.svg'
import upload from '../Assets/upload-b.svg'

function Hero() {
  return (
    <div className="lg:p-20 flex lg:flex-row flex-col items-center justify-between mt-16 mb-20 lg:mb-0 relative">
      <div className="text-white lg:text-7xl text-4xl font-bold font-Roboto lg:text-left text-center">
        Empower Your <br />
        Education Journey 
        with {" "}
        <img
          className="lg:inline mx-auto lg:w-72 w-48 mb-4 lg:mb-0 mt-1"
          src={Notesnap}
          alt=""
          
        />
        <div className="text-center lg:w-[50%] w-full text-white lg:text-3xl text-xl lg:text-left lg:text-left font-normal font-Roboto mt-4 lg:mt-10 mb-10">
          Seamless Notes Sharing and Collaborative Learning Platform for
          Success!
        </div>
        <div className="flex flex-row lg:gap-10 gap-2">
          <Link to="/notes">
          <button
           
          >
            <img src={explore} alt="" className="lg:w-60 w-80" />
            
          </button>
          </Link>
            <Link to="/upload">
          <button
            
          >
            <img src={upload} alt="" className="lg:w-60 w-80" />
           
          </button>
          </Link>
        </div>
      </div>
      <div className="items-center justify-center ">
      <img
        src={Books}
        alt=""
        className="lg:ml-4 ml-8 mix-blend-hard-light shadow-inner sm:inline "
      />
      </div>
    </div>
  );
}

export default Hero;
