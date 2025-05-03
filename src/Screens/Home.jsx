import React from "react";

function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">Welcome to the Video Editor</h1>
      <p className="text-lg mt-4">Click below to go to the editor</p>
      <a href="/editor" className="text-blue-500 mt-2 inline-block">
        Go to Editor
      </a>
    </div>
  );
}

export default Home;
