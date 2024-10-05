"use client";

import { useEffect, useState, useMemo } from "react";
import AnimeList from "@/components/AnimeList";
import Hero from "@/components/Hero";
import { topAnime, thisSeasonAnime, upcomingSeasonAnime } from "@/service/api";
import { Anime } from "@/types/animeType";
import { Loader2 } from "lucide-react";

type AnimeData = {
  topAnime: Anime[];
  seasonAnime: Anime[];
  upcomingAnime: Anime[];
};

export default function Home() {
  const [animeData, setAnimeData] = useState<AnimeData | null>(null);

  const fetchAnimeData = useMemo(
    () => async () => {
      try {
        const [topResponse, seasonResponse, upcomingResponse] =
          await Promise.all([
            topAnime(),
            thisSeasonAnime(),
            upcomingSeasonAnime(),
          ]);

        setAnimeData({
          topAnime: topResponse.data,
          seasonAnime: seasonResponse.data,
          upcomingAnime: upcomingResponse.data,
        });
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    },
    []
  );

  useEffect(() => {
    fetchAnimeData();
  }, [fetchAnimeData]);

  return (
    <div className="max-w-[1640px] px-28">
      <div className="-mx-28 mb-20">
        <Hero />
      </div>
      {animeData ? (
        <>
          <AnimeList
            animeData={animeData.topAnime}
            title="Top Anime"
            link="anime/top"
          />
          <AnimeList
            animeData={animeData.seasonAnime}
            title="This Season"
            link="anime/this-season"
          />
          <AnimeList
            animeData={animeData.upcomingAnime}
            title="Upcoming Season"
            link="anime/upcoming-season"
          />
        </>
      ) : (
        <div className="flex justify-center items-center h-[100vh]">
          <Loader2 className="w-12 h-12 animate-spin" />
        </div>
      )}
    </div>
  );
}
