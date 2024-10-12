"use client";

import { useSearchParams } from "next/navigation";
import { searchAnime } from "@/service/api";
import ViewMoreList from "@/components/ViewMoreList";
import { Suspense } from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search_query") || "";

  const searchFetchFunction = (page: number) => {
    return searchAnime(searchQuery, page);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewMoreList
        fetchFunction={searchFetchFunction}
        title={`Results for "${searchQuery}"`}
      />
    </Suspense>
  );
};

export default SearchPage;
