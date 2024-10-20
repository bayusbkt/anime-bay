"use client";

import { useSearchParams } from "next/navigation";
import { searchAnime } from "@/service/api";
import ViewMoreList from "@/components/ViewMoreList";
import { Suspense } from "react";

const SearchPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
};

const SearchContent = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("keyword") || "";

  const searchFetchFunction = (page: number) => {
    return searchAnime(searchQuery, page);
  };

  return (
    <ViewMoreList
      fetchFunction={searchFetchFunction}
      title={`Results for "${searchQuery}"`}
    />
  );
};

export default SearchPage;
