import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[20rem] sm:h-[25rem] md:h-[30rem] mb-4 sm:mb-6 md:mb-8">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/5 to-transparent z-10">
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-4 sm:left-8 md:left-16 text-white">
            <p className="text-xs sm:text-sm mb-1 sm:mb-2">#1 Featured Anime</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">Anime Spotlight</h1>
            <div className="flex flex-wrap gap-2 mb-2 sm:mb-3 md:mb-4 items-center">
              {['New', 'HD', 'DUB', 'SUB', 'TV'].map((tag) => (
                <span key={tag} className="bg-gray-600 text-white px-2 py-1 text-[10px] sm:text-xs rounded">
                  {tag}
                </span>
              ))}
              <span className="text-white text-[10px] sm:text-xs">Latest Ep: 1072</span>
              <span className="text-white text-[10px] sm:text-xs">24m</span>
            </div>
            <p className="text-xs sm:text-sm max-w-[90%] sm:max-w-[80%] md:max-w-[600px] mb-2 sm:mb-3 md:mb-4 line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
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
            <div className="flex gap-4 space-y-2 sm:space-y-0 sm:space-x-4 items-start sm:items-center">
              <button className="relative px-4 sm:px-6 py-2 rounded-full group hover:scale-[102%] duration-300 text-sm sm:text-base">
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 rounded-full -z-10"></span>
                <span className="absolute inset-[2px] bg-black rounded-full -z-5"></span>
                <span className="relative z-0 flex items-center text-white">
                  <span className="mr-2 text-lg sm:text-xl bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                    ▶
                  </span>{" "}
                  Watch Now
                </span>
              </button>
              <button className="text-white flex items-center hover:opacity-80 hover:scale-[102%] transition duration-300 text-sm sm:text-base">
                <span className="mr-2 text-xl sm:text-2xl bg-gradient-to-b from-red-600 to-blue-600 bg-clip-text text-transparent">
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
        fill
        alt="One Piece Banner"
        className="object-center z-0"
        priority={true}
      />
    </div>
  );
};

export default Hero;