import React from "react";
import line from "../Assets/testimonial-line.svg";

function Testimonials() {
  return (
    <div className="lg:p-20 lg:mt-20 mt-48 mb-20 lg:mb-0 lg:pb-48">
      <div className="text-white lg:text-5xl text-4xl text-center font-bold font-Roboto ">
        Hear What <span className='text-purple-700 lg:text-5xl text-4xl text-center font-bold font-Roboto '>Students</span> Have to Say?
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-32 gap-20 lg:mt-20 mt-10  mx-auto">
        <div className="text-center text-white lg:text-lg font-normal font-Roboto ">
          NoteSnap has been a game-changer for me! The ease of sharing notes and
          collaborating with classmates has significantly improved my study
          sessions. It's like having a virtual study group at my fingertips.
          Thank you, NoteSnap, for making my college life so much more
          manageable!
          <img src={line} alt="" className="mt-5 mx-auto" />
          <div className="flex flex-row justify-center mt-3 gap-10">
            <div className="w-16 h-16 bg-zinc-300 rounded-full" />
            <div className="flex flex-col items-center justify-center">
              <div className="text-center text-white text-lg font-semibold font-Roboto">
                Rahul
              </div>
              <div className="text-center text-white text-sm font-normal font-Roboto">
                Student
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white lg:text-lg font-normal font-Roboto">
          I can't imagine navigating through my courses without NoteSnap. The
          platform's intuitive design and seamless note-sharing capabilities
          have transformed the way I approach my studies. It's not just an app;
          it's a learning companion that keeps me organized and connected with
          peers
          <img src={line} alt="" className="mt-5 mx-auto" />
          <div className="flex flex-row justify-center mt-3 gap-10">
            <div className="w-16 h-16 bg-zinc-300 rounded-full" />
            <div className="flex flex-col  items-center justify-center">
              <div className="text-center text-white text-lg font-semibold font-Roboto">
                Ayush Gupta
              </div>
              <div className="text-center text-white text-sm font-normal font-Roboto">
                Student
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white lg:text-lg font-normal font-Roboto">
          As a busy student juggling multiple responsibilities, NoteSnap has
          been a lifesaver. The ability to access and download shared notes
          instantly has saved me countless hours. The community aspect is
          fantastic—I've met incredible study partners and learned from their
          insights. NoteSnap is the ultimate study buddy!
          <img src={line} alt="" className="mt-5 mx-auto w-auto" />
          <div className="flex flex-row justify-center mt-3 gap-10">
            <div className="w-16 h-16 bg-zinc-300 rounded-full " />
            <div className="flex flex-col items-center justify-center">
              <div className="text-center text-white text-lg font-semibold font-Roboto">
                Rahul
              </div>
              <div className="text-center text-white text-sm font-normal font-Roboto">
                Student
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
