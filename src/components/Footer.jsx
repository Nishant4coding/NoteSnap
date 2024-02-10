import React from "react";
import Logo from "../Assets/NoteSnapLogo.svg";
import FooterImg from "../Assets/footerImg.svg";
import send from "../Assets/send.svg";
import X from "../Assets/Social/x.svg";
import Insta from "../Assets/Social/Instagram.svg";
import Linkedin from "../Assets/Social/linkedin.svg";
import Mail from "../Assets/Social/mail.svg";
import name from "../Assets/name.svg";

function Footer() {
  return (
    <div id="contact">
      <div className="flex lg:flex-row flex-col lg:pl-20 lg:pr-20 p-6 lg:gap-0 gap-16 justify-between">
        <div className="flex flex-col items-center ">
          <img src={FooterImg} alt="" className="w-40" />
          <img src={Logo} alt="" />
          <div className=" lg:text-left text-white lg:text-2xl text-xl font-semibold font-Inter mt-2">
            Connect | Share | Learn{" "}
          </div>
        </div>
        <div className="flex flex-col mt-auto gap-2">
          <div className="  text-center text-white lg:text-2xl font-semibold font-Roboto">
            About
          </div>
          <div className="  text-center text-white lg:text-2xl font-semibold font-Roboto">
            Terms of Use
          </div>
          <div className="  text-center text-white lg:text-2xl font-semibold font-Roboto">
            Services
          </div>
          <div className="  text-center text-white lg:text-2xl font-semibold font-Roboto">
            Career
          </div>
          <div className="  text-center text-white lg:text-2xl font-semibold font-Roboto">
            Contact
          </div>
        </div>

        <div className="mt-auto items-center lg:text-lg text-xs">
          <input
            type="email"
            className="outline-none bg-transparent text-white"
            placeholder="Your Email"
            
          />
          <img src={send} alt="" className="ml-auto inline cursor-pointer" />

          <div className="w-auto border border-white"></div>

          <div className="lg:mt-20 mt-10 mb-5 text-center text-white text-2xl font-semibold font-Roboto">
            Lets Connect!
          </div>
          <div className="flex flex-row justify-between pl-5 pr-5">
            <img src={X} alt="" />
            <img src={Insta} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Mail} alt="" />
          </div>
        </div>
      </div>
      <div className="text-white text-center lg:mt-20 mt-10 lg:text-xl text-lg font-Roboto">
        Design & Developed by{" "}
        <a href="https://www.linkedin.com/in/nishant-srivastava-/" target="_blank">
          <img src={name} alt="" className="inline w-40 mb-1  align-middle" />
        </a>{" "}
        <br />
        &copy; NoteSnap 2024
      </div>
    </div>
  );
}

export default Footer;
