"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAnimeById } from "@/service/api";
import { Anime } from "@/types/animeType";
import {
  Star,
  Calendar,
  Clock,
  List,
  Heart,
  Play,
  Loader2,
  TrendingUp,
  Award,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import StatCard from "@/components/StatCard";
import InfoCard from "@/components/InfoCard";
import TrailerCard from "@/components/TrailerCard";

const AnimeIdPage = ({ params }: { params: { id: string } }) => {
  const [animeData, setAnimeData] = useState<Anime | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getAnimeById(params.id);
      setAnimeData(response.data);
    } catch (error) {
      console.error("Failed to fetch anime data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-16 h-16 animate-spin gradient-text" />
      </div>
    );
  }

  if (!animeData) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Anime not found</h2>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    );
  }

  console.log(animeData.aired)

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-[1640px] mx-auto px-6 sm:px-10 lg:px-14">
        <Card className="overflow-hidden shadow-xl">
          <CardContent className="p-0">
            <div className="relative h-20 sm:h-28 md:h-40 w-full">
              <Image
                src={animeData.images.webp.large_image_url}
                alt={animeData.title}
                layout="fill"
                objectFit="cover"
                priority={true}
                className="blur-sm"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center px-4">
                  {animeData.title}
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 sm:p-10">
              <div className="md:col-span-1">
                <Card className="overflow-hidden shadow-lg">
                  <CardContent className="p-0 relative aspect-[3/4]">
                    <Image
                      src={animeData.images.webp.large_image_url}
                      alt={animeData.title}
                      layout="fill"
                      objectFit="cover"
                      priority={true}
                    />
                  </CardContent>
                </Card>
                <div className="mt-4 space-y-2">
                  <Button className="w-full">Add to Watchlist</Button>
                  <Button variant="outline" className="w-full">
                    Write a Review
                  </Button>
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <h2 className="text-xl text-gray-600 mb-4">
                  {animeData.title}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <StatCard
                    icon={<Star className="text-yellow-400" />}
                    value={animeData.score?.toString() ?? "N/A"}
                    label="Score"
                  />
                  {animeData.rank && (
                    <StatCard
                      icon={<TrendingUp className="text-green-500" />}
                      value={`#${animeData.rank}`}
                      label="Rank"
                    />
                  )}
                  <StatCard
                    icon={<Award className="text-purple-500" />}
                    value={`#${animeData.popularity}`}
                    label="Popularity"
                  />
                  <StatCard
                    icon={<Heart className="text-red-500" />}
                    value={animeData.favorites?.toString() ?? "N/A"}
                    label="Favorites"
                  />
                </div>
                <p className="text-gray-700 mb-8 text-sm leading-relaxed">
                  {animeData.synopsis}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <InfoCard
                    icon={<Play size={20} />}
                    title="Type"
                    value={animeData.type}
                  />
                  <InfoCard
                    icon={<List size={20} />}
                    title="Episodes"
                    value={animeData.episodes?.toString() ?? "N/A"}
                  />
                  <InfoCard
                    icon={<Clock size={20} />}
                    title="Duration"
                    value={animeData.duration}
                  />
                  <InfoCard
                    icon={<Calendar size={20} />}
                    title="Aired"
                    value={animeData.aired.string}
                  />
                  <InfoCard
                    icon={<List size={20} />}
                    title="Status"
                    value={animeData.status}
                  />
                  <InfoCard
                    icon={<Heart size={20} />}
                    title="Rating"
                    value={animeData.rating}
                  />
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-10">
              <TrailerCard trailer={animeData.trailer} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnimeIdPage;