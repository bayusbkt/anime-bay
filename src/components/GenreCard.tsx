import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Tv,
  Film,
  Gauge,
  Zap,
  Heart,
  Skull,
  Music,
  Glasses,
} from "lucide-react";
import { Genre } from "@/types/animeType";

const getGenreIcon = (genreName: string) => {
  switch (genreName.toLowerCase()) {
    case "action":
      return <Zap className="w-8 h-8 text-yellow-500" />;
    case "adventure":
      return <BookOpen className="w-8 h-8 text-green-500" />;
    case "racing":
      return <Gauge className="w-8 h-8 text-red-500" />;
    case "comedy":
      return <Tv className="w-8 h-8 text-purple-500" />;
    case "romance":
      return <Heart className="w-8 h-8 text-pink-500" />;
    case "horror":
      return <Skull className="w-8 h-8 text-gray-800" />;
    case "music":
      return <Music className="w-8 h-8 text-indigo-500" />;
    case "sci-fi":
      return <Glasses className="w-8 h-8 text-blue-400" />;
    default:
      return <Film className="w-8 h-8 text-blue-500" />;
  }
};

interface GenreCardProps {
  genre: Genre;
}

const GenreCard: React.FC<GenreCardProps> = ({ genre }) => {
  return (
    <Card className="transition-all duration-300 transform hover:-translate-y-2 bg-white overflow-hidden group">
      <CardContent className="p-6 relative">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
            {getGenreIcon(genre.name)}
          </div>
          <h2 className="text-xl font-semibold ml-3 text-gray-800 group-hover:text-blue-600 transition-colors">
            {genre.name}
          </h2>
        </div>
        <p className="text-gray-600 mb-4 text-lg">
          {genre.count.toLocaleString()} anime
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Rank: {genre.mal_id}</span>
          <Button
            variant="ghost"
            className="text-blue-500 hover:text-blue-700 p-2"
          >
            Explore
          </Button>
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </CardContent>
    </Card>
  );
};

export default GenreCard;
