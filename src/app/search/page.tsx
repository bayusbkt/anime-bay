"use client";

import AnimeList from "@/components/AnimeList";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchAnime } from "@/service/anime";
import { Anime } from "@/types/animeType";

const Page = () => {
  const [searchedAnime, setSearchedAnime] = useState<Anime[]>([]);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  const fetchSearch = async (query: string | null) => {
    if (query) {
      try {
        const response = await searchAnime(query);
        setSearchedAnime(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  useEffect(() => {
    fetchSearch(searchQuery);
  }, [searchQuery]);

  return (
    <div className="max-w-[1640px] px-28">
      {searchedAnime.length > 0 ? (
        <AnimeList animeData={searchedAnime} title={`Results for "${searchQuery}"`} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Page;
