import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Sun, Cloud, Snowflake, Leaf } from "lucide-react";
import Link from "next/link";

interface YearData {
  year: number;
  seasons: string[];
}

interface SeasonListProps {
  data: YearData[];
}

const getSeasonIcon = (season: string) => {
  switch (season.toLowerCase()) {
    case "spring":
      return <Leaf className="w-5 h-5 text-green-500" />;
    case "summer":
      return <Sun className="w-5 h-5 text-yellow-500" />;
    case "fall":
      return <Cloud className="w-5 h-5 text-orange-500" />;
    case "winter":
      return <Snowflake className="w-5 h-5 text-blue-500" />;
    default:
      return <Calendar className="w-5 h-5 text-gray-500" />;
  }
};

const SeasonListPage: React.FC<SeasonListProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-14 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 border-b-2 border-blue-500 inline-block">
        Anime Seasons
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((yearData, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="border-b-2 py-4 px-6">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                {yearData.year === 0 ? "Unknown Year" : yearData.year}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                {yearData.seasons.map((season, seasonIndex) => (
                  <Link
                    href={`/anime/season/${season}?year=${yearData.year}`}
                    key={seasonIndex}
                  >
                    <li className="flex items-center space-x-2 text-gray-700 hover:text-gray-800 hover:font-semibold hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 rounded-md px-2 py-1">
                      {getSeasonIcon(season)}
                      <span>
                        {season.charAt(0).toUpperCase() + season.slice(1)}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SeasonListPage;
