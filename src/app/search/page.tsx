"use client";

import AnimeList from "@/components/AnimeList";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchAnime } from "@/service/api";
import { Anime } from "@/types/animeType";
import { Loader2 } from "lucide-react";

const SearchPage = () => {
  const [searchedAnime, setSearchedAnime] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  const fetchSearch = async (query: string | null) => {
    if (query) {
      setIsLoading(true);
      try {
        const response = await searchAnime(query);
        setSearchedAnime(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchSearch(searchQuery);
  }, [searchQuery]);

  return (
    <div className="max-w-[1640px] px-28">
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Loader2 className="w-12 h-12 animate-spin" />
        </div>
      ) : searchedAnime.length > 0 ? (
        <AnimeList
          animeData={searchedAnime}
          title={`Results for "${searchQuery}"`}
        />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchPage;
