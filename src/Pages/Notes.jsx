import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import download from "../Assets/download.svg";
import view from "../Assets/view.svg";
import notes from "../Assets/notes-img.svg";
import "../App.css";
import ADSA from "../Assets/Files/ADSA PRACTICE QUESTIONS.pdf";
import ML from "../Assets/Files/practice problem ML.pdf";
import Testing from "../Assets/Files/Software  Testing Practice Set.pdf";
import TestingNotes from "../Assets/Files/STQ.pdf";
import unit2 from "../Assets/Files/practice problem ML.pdf";
import unit3 from "../Assets/Files/practice problem ML.pdf";
import unit4 from "../Assets/Files/practice problem ML.pdf";
import unit5 from "../Assets/Files/practice problem ML.pdf";
import set1 from "../Assets/Files/5sem_COA_ETE Practice Questions Set_2.pdf";
import set2 from "../Assets/Files/5sem_COA_ETE Practice Questions Set_1.pdf";

const notesData = [
  {
    title: "5sem_COA_ETE Practice Questions Set_1",
    author: "Nishant Srivastava",
    date: "3rd February 2024",
    university: "Galotias University",
    fileType: "pdf",
    filePath: set1,
  },
  {
    title: "5sem_COA_ETE Practice Questions Set_2",
    author: "Nishant Srivastava",
    date: "7th February 2024",
    university: "Galotias University",
    fileType: "pdf",
    filePath: set2,
  },
  {
    title: "Unit 4 Notes COA",
    author: "Nishant Srivastava",
    date: "6th February 2024",
    university: "Galotias University",
    fileType: "pdf",
    filePath: unit4,
  },
  {
    title: "Unit 5 Notes COA",
    author: "Nishant Srivastava",
    date: "5th February 2024",
    university: "Galotias University",
    fileType: "pdf",
    filePath: unit5,
  },
  {
    title: "Unit 3 Notes COA",
    author: "Nishant Srivastava",
    date: "10th February 2024",
    university: "Galotias University",
    fileType: "pdf",
    filePath: unit3,
  },
  {
    title: "Unit 2 Notes COA",
    author: "Nishant Srivastava",
    date: "9th February 2024",
    university: "Galotias University",
    fileType: "pdf",
    filePath: unit2,
  },
  {
    title: "ADSA PRACTICE QUESTIONS",
    author: "Nishant Srivastava",
    date: "20th December 2023",
    university: "Galotias University",
    fileType: "pdf",
    filePath: ADSA,
  },
  {
    title: "practice problem ML",
    author: "Nishant Srivastava",
    date: "11th February 2024",
    university: "Galotias University",
    fileType: "pdf",
    filePath: ML,
  },
  {
    title: "Software Testing Practice Set",
    author: "Nishant Srivastava",
    date: "3rd February 2024",
    university: "Galotias University",
    fileType: "pdf",
    filePath: Testing,
  },
  {
    title: "Software Testing Notes",
    author: "Nishant Srivastava",
    date: "2nd February 2024",
    university: "Galotias University",
    fileType: "pdf",
    filePath: TestingNotes,
  },
];

function Notes() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission if applicable
        document.activeElement.blur(); // Blur the currently focused element (i.e., close the keyboard)
      }
  };

  const filteredNotes = notesData.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

//   const handleViewFile = (fileType, filePath) => {
//     // Open the file viewer page passing fileType and filePath as props
//     // You can navigate to the View component using React Router or any other navigation method
//     return <View fileType={fileType} filePath={filePath} />;
//   };

  const handleDownloadFile = (title, fileType, filePath) => {
    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = filePath;
    anchor.download = `${title}.${fileType}`; // Set the filename for download as title.fileType
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor); // Remove the anchor after download
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
  };

  return (
    <div>
      <Navbar />
      <div className="lg:p-20 p-2">
        <div className="text-center justify-center text-white lg:text-5xl text-3xl mt-20 font-extrabold font-Roboto mb-20">
          Search Your <span className="text-purple-700 ">Notes</span> Here
          <br />
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Your Notes..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-tranparent text-xl text-black rounded-full p-2 w-full lg:w-1/6 mx-auto mb-10"
          />
          </form>
        </div>
        <div className="flex flex-col gap-10 justify-center text-center items-center">
          {filteredNotes.map((note, index) => (
            <div
              key={index}
              className="lg:w-[60%] w-[90%] bg-gradient-to-r from-purple-700 via-indigo-800 to-fuchsia-700 rounded-[30px] text-white p-5 my-auto"
            >
              <div className="flex flex-col md:flex-row md:items-center ">
                <div className="flex flex-col md:w-1/3 m-2 ">
                  <div className="lg:text-left text-white lg:text-2xl text-lg font-bold font-Roboto">
                    {note.title}
                  </div>
                  <div className="lg:text-left text-white lg:text-xl text-sm font-base font-Roboto mb-1">
                    Author: {note.author}
                  </div>
                  <div className=" lg:text-left text-white lg:text-sm text-xs font-normal font-Roboto">
                    Date: {note.date}
                  </div>
                </div>
                <div className=" lg:text-left lg:text-xl text-lg font-semibold font-Roboto mx-auto my-auto md:w-1/4">
                  {note.university}
                </div>
                <div className="flex flex-row ml-auto mr-auto ">
                  <img

                    src={download}
                    alt=""
                    onClick={() =>
                      handleDownloadFile(
                        note.title,
                        note.fileType,
                        note.filePath
                      )
                    }
                    style={{ cursor: 'pointer' }}
                  />
                  {/* Pass fileType and filePath as arguments to handleViewFile function */}
                  {/* <img src={view} alt="" onClick={() => handleViewFile(note.fileType, note.filePath)} /> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-10">
          <img src={notes} alt="" className="w-40 h-auto mb-2 hidden " />
          <span className="text-white">Start your learning with notesnap</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Notes;
