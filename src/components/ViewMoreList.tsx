"use client";

import { useEffect, useState } from "react";
import { Anime, Pagination } from "@/types/animeType";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import AnimeList from "@/components/AnimeList";

type ViewMoreListProps = {
  fetchFunction: (page: number) => Promise<{ data: Anime[]; pagination: Pagination }>;
  title: string;
};

const ViewMoreList = ({ fetchFunction, title }: ViewMoreListProps) => {
  const [animeData, setAnimeData] = useState<Anime[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [lastVisiblePage, setLastVisiblePage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = Number(searchParams.get("page") || 1);
    setCurrentPage(page);

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchFunction(page);
        setAnimeData(response.data);
        setLastVisiblePage(response.pagination.last_visible_page);
        setHasNextPage(response.pagination.has_next_page);
      } catch (err) {
        setError(
          `Failed to fetch ${title.toLowerCase()} data. Please try again later.`
        );
        console.error(`Error fetching ${title.toLowerCase()}:`, err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, title, searchParams]);

  const handlePageChange = (newPage: number) => {
    const searchQuery = searchParams.get("search_query");
    if (searchQuery) {
      router.push(`?search_query=${searchQuery}&page=${newPage}`);
    } else {
      router.push(`?page=${newPage}`);
    }
  };

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
      <section className="flex justify-center items-center mt-8 space-x-4">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
          className="disabled:bg-gray-500"
        >
          {"<"}
        </Button>
        <span>
          Page {currentPage} of {lastVisiblePage}
        </span>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!hasNextPage}
          variant="outline"
        >
          {">"}
        </Button>
      </section>
    </div>
  );
};

export default ViewMoreList;
