import React from "react";
import share from "../Assets/Services/Share.svg";
import data from "../Assets/Services/data.svg";
import stydy from "../Assets/Services/study.svg";
import realtime from "../Assets/Services/realtime.svg";
import userF from "../Assets/Services/User-F.svg";
import search from "../Assets/Services/search-f.svg";

function Services() {
  return (
    <div className="lg:p-20 lg:pt-32" id="service">
      <div className="text-center text-white lg:text-5xl text-4xl font-bold font-Roboto mb-20 ">
        How we <span className='text-purple-700 lg:text-5xl text-4xl text-center font-bold font-Roboto '>Help</span> you!
      </div>
<div className="flex flex-col  lg:gap-20 gap-10">
      <div className="flex lg:flex-row flex-col justify-between lg:gap-20 gap-10">
        <div className="flex flex-col items-center">
          <img src={share} alt="" />
          <div className="text-white text-xl font-bold font-Roboto mt-2">
            Effortless Note Sharing
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={userF} alt="" />
          <div className="text-white text-xl font-bold font-Roboto mt-2">
            User-Friendly Interface
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={realtime} alt="" />
          <div className="text-white text-xl font-bold font-Roboto mt-2">
            Real-Time Collaboration
          </div>
        </div>
      </div>



      <div className="flex lg:flex-row flex-col justify-between lg:gap-20 gap-10">
        <div className="flex flex-col items-center">
          <img src={data} alt="" />
          <div className="text-white text-xl font-bold font-Roboto mt-2">
          Secure Note Storage
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={search} alt="" />
          <div className="text-white text-xl text-center font-bold font-Roboto mt-2">
          Comprehensive Search Functionality
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={stydy} alt="" />
          <div className="text-white text-xl font-bold font-Roboto mt-2">
          Study Efficiency Boost
          </div>
        </div>
        </div>
      </div>

      
      
    </div>
  );
}

export default Services;
