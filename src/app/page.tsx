"use client";

import AnimeList from "@/components/AnimeList";
import Hero from "@/components/Hero";
import {
  topAnime,
  thisSeasonAnime,
  upcomingSeasonAnime,
} from "@/service/anime";
import { Anime } from "@/types/animeType";
import { useEffect, useState } from "react";

export default function Home() {
  const [topAnimeData, setTopAnimeData] = useState<Anime[]>();
  const [seasonAnimeData, setSeasonAnimeData] = useState<Anime[]>();
  const [upcomingAnimeData, setUpcomingAnimeData] = useState<Anime[]>();

  const fetchTopAnime = async () => {
    const response = await topAnime();
    setTopAnimeData(response.data);
  };

  const fetchSeasonAnime = async () => {
    const response = await thisSeasonAnime();
    setSeasonAnimeData(response.data);
  };

  const fetchUpcomingAnime = async () => {
    const response = await upcomingSeasonAnime();
    setUpcomingAnimeData(response.data);
  };

  useEffect(() => {
    fetchTopAnime();
    fetchSeasonAnime();
    fetchUpcomingAnime();
  }, []);

  return (
    <div className="max-w-[1640px] px-28">
      <div className="-mx-28 mb-20">
        <Hero />
      </div>
      <AnimeList animeData={topAnimeData} title={"Top Anime"} />
      <AnimeList animeData={seasonAnimeData} title={"This Season"} />
      <AnimeList animeData={upcomingAnimeData} title={"Upcoming Season"} />
    </div>
  );
}
