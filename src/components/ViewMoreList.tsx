"use client";

import { useEffect, useState } from "react";
import { Anime } from "@/types/animeType";
import AnimeList from "@/components/AnimeList";
import { Loader2 } from "lucide-react";

type ViewMoreListProps = {
  fetchFunction: () => Promise<{ data: Anime[] }>;
  title: string;
};

const ViewMoreList = ({ fetchFunction, title }: ViewMoreListProps) => {
  const [animeData, setAnimeData] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFunction();
        setAnimeData(response.data);
      } catch (err) {
        setError(`Failed to fetch ${title.toLowerCase()} data. Please try again later.`);
        console.error(`Error fetching ${title.toLowerCase()}:`, err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, title]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="max-w-[1640px] mx-auto px-28 py-8">
      <AnimeList animeData={animeData} title={title} />
    </div>
  );
};

export default ViewMoreList;