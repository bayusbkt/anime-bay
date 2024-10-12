"use client";

import { useSearchParams } from "next/navigation";
import { getDynamicSeasonAnime } from "@/service/api";
import ViewMoreList from "@/components/ViewMoreList";
import { Suspense } from "react";

const AnimeSeasonPage = ({
  params,
}: {
  params: {
    season: string;
  };
}) => {
  const searchParams = useSearchParams();
  const year = Number(searchParams.get("year"));

  const fetchSeasonAnime = async (page: number) => {
    try {
      const response = await getDynamicSeasonAnime(year, params.season, page);
      return response;
    } catch (error) {
      console.error("Error fetching animes:", error);
      throw error;
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewMoreList
        fetchFunction={fetchSeasonAnime}
        title={`Anime for ${params.season} ${year}`}
      />
    </Suspense>
  );
};

export default AnimeSeasonPage;
