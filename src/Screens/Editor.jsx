import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import videos from "../VideoList";
import india_flag from "../images/india_flag.png";
import karan from "../images/Karan.jpg";
import { AiFillMail, AiOutlineMail } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import editors from "../Editors";

const Editor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  const ContactAndLinkSecion = () => {
    return (
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>

        <div className="flex justify-center space-x-8">
          <a
            href="mailto:karankava0675@gmail.com"
            className="flex items-center text-white text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:text-blue-500 hover:bg-white p-2 rounded-lg"
          >
            <AiFillMail className="mr-3 text-3xl" />
            Email
          </a>

          <a
            href="https://discord.com/users/1143760682165211236"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:text-blue-500 hover:bg-white p-2 rounded-lg"
          >
            <FaDiscord className="mr-3 text-3xl" />
            Discord
          </a>
        </div>
      </div>
    );
  };
  return (
    <div className="font-sans bg-gray-100 text-gray-800 min-h-screen p-6">
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-8 rounded-2xl mb-8">
        <header className="text-center mb-2">
          <img
            src={karan}
            alt="Your Name"
            className="w-32 h-32 rounded-full mx-auto shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-4 font-poppins text-white">
            Karan Kava{" "}
            <img
              src={india_flag}
              alt="India Flag"
              className="inline-block w-8 h-8 ml-2"
            />
          </h1>
          <p className="text-lg text-gray-200 mt-2">
            Short Video Editor | Reels & TikTok Specialist
          </p>
        </header>

        <ContactAndLinkSecion />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          🎬 Videos Made With
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {editors.map(
            ({ editorName, status, fromColor, toColor, shadowColor }) => (
              <span
                key={editorName}
                className={`bg-gradient-to-r ${fromColor} ${toColor} text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all transform cursor-pointer shadow-lg ${shadowColor}`}
              >
                {editorName} {status === "Learning" ? `(${status})` : ""}
              </span>
            )
          )}
        </div>
      </section>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-card cursor-pointer"
              onClick={() => openModal(video)}
            >
              <div className="relative">
                <img
                  src={video.cover}
                  alt={`Cover of ${video.title}`}
                  className="video-cover w-full h-full object-cover rounded-lg border-2 border-black"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                  <FaPlay className="text-white text-4xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && currentVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="w-[90vw] max-w-[360px] aspect-[9/16] bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video className="w-full h-full object-contain" controls autoPlay>
                <source src={currentVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;
