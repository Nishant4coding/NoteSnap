import React from 'react'
import Nishant from '../Assets/Nishant.png'

function About() {
  return (
    <div className=' lg:p-32 lg:mb-0 mb-32' id='about'>
     
     
     <div className='flex lg:flex-row flex-col justify-between lg:gap-32 gap-10'>
        <div className='items-center mx-auto'>
      <img src={Nishant} alt="" className='lg:w-60 w-20 mx-auto'/>
      <div className='flex flex-col text-center mt-3'>
      <div className="text-white lg:text-3xl text-2xl font-bold font-Roboto">Nishant Srivastava</div>
      <div className="text-white text-lg font-normal font-Roboto">Developer</div>
      </div>
      </div>
      <div className="lg:w-[60%] text-white lg:text-5xl text-4xl text-center font-bold font-Roboto items-center mx-auto my-auto">Welcome to <span className='text-purple-700 lg:text-5xl text-4xl text-center font-bold font-Roboto '>NoteSnap</span> <br/>
      <div className=" text-center text-white lg:text-2xl text-lg font-normal font-Roboto mt-10 ">At NoteSnap, our mission is to revolutionize the way students collaborate, share, and excel in their academic journeys. We understand the challenges students face in today's fast-paced educational environment, and we are here to provide innovative solutions.</div>
      </div>
      </div>

      {/* <div className='flex flex-col mt-20'>
      <div className="text-white text-3xl text-center font-bold font-Roboto">Join the <span className='text-purple-700 text-3xl text-center font-bold font-Roboto '>NoteSnap</span> Community<br/></div>
      <div className=" text-center text-white text-xl font-normal font-Roboto"><br/>We invite you to join our growing community of students who are shaping the future of collaborative learning. Whether you're looking for study partners, shared resources, or a platform to streamline your studies, NoteSnap is here for you.<br/><br/>Ready to embark on a journey of academic excellence? Join NoteSnap today!</div>
    </div> */}
    </div>
  )
}

export default About
