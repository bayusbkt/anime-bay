import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Anime } from "@/types/animeType";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AnimeListProps {
  animeData?: Anime[] | null;
  title: string;
  link?: string;
}

const AnimeList = ({ animeData, title, link }: AnimeListProps) => {
  return (
    <div className="flex flex-col -mx-14 mb-12">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold border-b-blue-500 border-b-2">
          {title}
        </h2>
        {link && (
          <Link
            href={link}
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            View More
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {animeData?.map((anime) => (
          <Card
            key={anime.mal_id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            <CardContent className="p-0 relative aspect-[3/4]">
              <Image
                src={anime.images.webp.large_image_url}
                width={500}
                height={500}
                alt={anime.title}
                className="w-full h-full object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {anime.title}
                </h3>
                {anime.score ? (
                  <div className="flex items-center text-yellow-400">
                    <Star size={16} className="mr-1" />
                    <span>{anime.score.toFixed(2)}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
