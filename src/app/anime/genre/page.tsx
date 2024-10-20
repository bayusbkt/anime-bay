"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Genre } from "@/types/animeType";
import { getAnimeGenre } from "@/service/api";
import GenreCard from "@/components/GenreCard";

const GenrePage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getAnimeGenre();
        const sortedGenres = response.data.sort(
          (a: Genre, b: Genre) => a.mal_id - b.mal_id
        );
        setGenres(sortedGenres);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching genres:", error);
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    setGenres((prevGenres) => [...prevGenres].reverse());
  };

  return (
    <div className="container mx-auto px-14 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-bold mb-4 md:mb-0 border-b-2 border-blue-500">
          Explore Anime Genres
        </h1>
        <Button
          onClick={toggleSortOrder}
          variant="outline"
          className="flex items-center px-4 py-2"
        >
          Sort by Rank
          <ArrowUpDown className="ml-2 h-4 w-4 mr-1" />
          {sortOrder === "asc" ? " (Low to High)" : " (High to Low)"}
        </Button>
      </div>
      {loading ? (
        <div className="text-center mt-32">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Discovering genres...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {genres.map((genre) => (
            <GenreCard key={genre.mal_id} genre={genre} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GenrePage;
