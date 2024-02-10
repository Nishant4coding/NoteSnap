import React, { useState } from "react";
import Navbar from "../components/Navbar";
import upload from "../Assets/upload.svg";
import name from '../Assets/name.svg'

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [userName, setUserName] = useState('');
    const [topicName, setTopicName] = useState('');
    const [collegeName, setCollegeName] = useState('');
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };
  
    const handleUserNameChange = (e) => {
      setUserName(e.target.value);
    };
  
    const handleTopicNameChange = (e) => {
      setTopicName(e.target.value);
    };
  
    const handleCollegeNameChange = (e) => {
      setCollegeName(e.target.value);
    };
  
    const handleUpload = () => {
      if (selectedFile) {
        console.log("User Name:", userName);
        console.log("Topic Name:", topicName);
        console.log("College Name:", collegeName);
        console.log("Selected File:", selectedFile);


        setUserName('');
        setTopicName('');
        setCollegeName('');
        setSelectedFile(null);
    } else {
        console.error("No file selected.");
      }
    };

  return (
    // <div className="h-auto mt-20">
    //   <Navbar />
    //   <div className="w-[60%]  ml-auto mr-auto h-auto rounded-[20px]  shadow border-4 border-to-r from-indigo-700 via-purple-900 to-fuchsia-700 p-12 mt-10 items-center flex flex-col"  style={{
    //           borderImage: "linear-gradient(10deg, #4F46E5, #B43CF5) 1",
              
    //         }}>
    //     <div className="text-center text-white text-5xl font-bold font-Roboto">
    //       Upload Your Notes Here
    //     </div>
    //     <img src={upload} alt="" />

    //     <div className="w-[50%] flex flex-col gap-10 mt-10">
    //       <div className="flex flex-row">
    //         <div className="text-justify text-white text-2xl font-bold font-Roboto">
    //           Your Name
    //         </div>
    //         <div className="flex flex-col  ml-auto">
    //           <input
    //           onChange={handleUserNameChange}
    //             type="text"
    //             className="outline-none bg-transparent text-white"
    //             placeholder="Write Your Name Here"
    //           />
    //           <div className="w-auto border-2 border-white"></div>
    //         </div>
    //       </div>
    //       <div className="flex flex-row ">
    //         <div className="text-justify text-white text-2xl font-bold font-Roboto">
    //           Topic Name
    //         </div>
    //         <div className="flex flex-col ml-auto">
    //           <input
    //           onChange={handleTopicNameChange}
    //             type="text"
    //             className="outline-none bg-transparent text-white"
    //             placeholder="Write Your Topic Name"
    //           />
    //           <div className="w-auto border-2 border-white "></div>
    //         </div>
    //       </div>
    //       <div className="flex flex-row ">
    //         <div className="text-justify text-white text-2xl font-bold font-Roboto">
    //           College Name
    //         </div>
    //         <div className="flex flex-col  ml-auto">
    //           <input
    //           onChange={handleCollegeNameChange}
    //             type="text"
    //             className="outline-none bg-transparent text-white"
    //             placeholder="Write Your College Name"
    //           />
    //           <div className="w-auto border-2 border-white"></div>
    //         </div>
    //       </div>
    //     </div>

    
    //     <div className="flex flex-row gap-48 mt-10 ">
    //     <label className="w-auto h-16 p-5 bg-gradient-to-r from-indigo-700 via-purple-900 to-fuchsia-700 rounded-[20px] border border-black text-middle cursor-pointer  ">
    //       <div className=" text-justify text-white text-xl font-bold font-Roboto">
    //         Choose File
    //       </div>
    //       <input
    //         type="file"
    //         accept=".pdf"
    //         onChange={handleFileChange}
    //         className="hidden"
    //       />
    //     </label>
    //     {/* {selectedFile && (
    //       <p className="mt-2 text-gray-600">
    //         Selected File: {selectedFile.name}
    //       </p>
    //     )} */}
    //     <button
    //       className="w-auto h-16 p-5 bg-gradient-to-r from-indigo-700 via-purple-900 to-fuchsia-700 rounded-[20px] border border-black"
    //       onClick={handleUpload}
    //     >
    //       <div className=" text-center text-white text-xl font-bold font-Roboto">
    //         Upload File
    //       </div>
    //     </button>
    //     </div>
    //     {selectedFile && (
    //       <p className=" text-gray-600 text-xl ml-auto mr-auto mt-10">
    //         Selected File: {selectedFile.name}
    //       </p>
    //     )}
    //   </div>
      
    //   <div className="text-white text-center mt-20 text-xl font-Roboto">
    //     Design & Developed by{" "}
    //     <a href="https://www.linkedin.com/in/nishant-srivastava-/" target="_blank">
    //       <img src={name} alt="" className="inline w-40 mb-1  align-middle" />
    //     </a>{" "}
    //     <br />
    //     &copy; NoteSnap 2024
    //   </div>
    // </div>
<div className="h-auto  mt-20 text-center">
  <Navbar />
  
  <div className="text-white lg:text-5xl text-4xl font-bold font-Roboto justify-center">
    Upload Your <span className="text-purple-700 ">Notes</span> Here
    
  </div>
  

  <div className="mt-10 mx-auto" >

    <iframe className=" h-96  lg:w-[100%] w-auto"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfTYK28rRVE0kgj09gFeHrF216l4xpgZLgm8b8g4IjT_wu8uw/viewform?embedded=true"
      

      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  </div>

  <div className="text-white text-center mt-20 text-xl font-Roboto">
    Design & Developed by{" "}
    <a href="https://www.linkedin.com/in/nishant-srivastava-/" target="_blank">
      <img src={name} alt="" className="inline w-40 mb-1 align-middle" />
    </a>{" "}
    <br />
    &copy; NoteSnap 2024
  </div>
</div>

  );
};

export default Upload;
