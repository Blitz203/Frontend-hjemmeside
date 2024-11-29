import React from "react";
import NavBar from "./components/navBar";

function Page() {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content with Background Image */}
      <div
        className="bg-cover bg-center w-[100vw] h-[100vh] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <h1 className="text-white text-xl mb-6 font-semibold">Alle er velkommen!</h1>

        <div className="flex flex-row space-x-4 ">
          <a
            href="AllMenuItems"
            className="text-white text-xl underline hover:text-blue-400 cursor-pointer"
          >
            Menu kort
          </a>
          <a
            href="reservation"
            className="text-white text-xl underline hover:text-blue-400 cursor-pointer"
          >
            book et bord
          </a>
          <a
            href="/"
            className="text-white text-xl underline hover:text-blue-400 cursor-pointer"
          >
            Kontakt os
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Page;
