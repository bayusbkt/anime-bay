import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative max-w-[1640px] w-full h-[30rem] mb-8">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5 to-transparent z-10">
          <div className="absolute bottom-12 left-16 text-white">
            <p className="text-sm mb-2">#1 Featured Anime</p>
            <h1 className="text-5xl font-bold mb-4">Anime Spotlight</h1>
            <div className="flex space-x-2 mb-4 items-center">
              <span className="bg-gray-600 text-white px-2 py-1 text-xs rounded">
                New
              </span>
              <span className="bg-gray-600 text-white px-2 py-1 text-xs rounded">
                HD
              </span>
              <span className="bg-gray-600 text-white px-2 py-1 text-xs rounded">
                DUB
              </span>
              <span className="bg-gray-600 text-white px-2 py-1 text-xs rounded">
                SUB
              </span>
              <span className="bg-gray-600 text-white px-2 py-1 text-xs rounded">
                TV
              </span>
              <span className="text-white text-xs">Latest Ep: 1072</span>
              <span className="text-white text-xs">24m</span>
            </div>
            <p className="text-sm max-w-[600px] mb-4">
              Dive into a world of adventure, mystery, and excitement with our
              featured anime series. Follow the journey of extraordinary
              characters as they face challenges, discover hidden powers, and
              forge unforgettable friendships. With stunning animation and
              gripping storylines, this series promises to keep you on the edge
              of your seat...{" "}
              <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-colors duration-300 cursor-pointer">
                More
              </span>
            </p>
            <div className="flex space-x-4 items-center">
              <button className="relative px-6 py-2 rounded-full group hover:scale-[102%] duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 rounded-full -z-10"></span>
                <span className="absolute inset-[2px] bg-black rounded-full -z-5"></span>
                <span className="relative z-0 flex items-center text-white">
                  <span className="mr-2 text-xl bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                    ▶
                  </span>{" "}
                  Watch Now
                </span>
              </button>
              <button className="text-white flex items-center hover:opacity-80 hover:scale-[102%] transition duration-300">
                <span className="mr-2 text-2xl bg-gradient-to-b from-red-600 to-blue-600 bg-clip-text text-transparent">
                  +
                </span>{" "}
                Add to List
              </button>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/hero.png"
        layout="fill"
        alt="One Piece Banner"
        className="z-0"
      />
    </div>
  );
};

export default Hero;
