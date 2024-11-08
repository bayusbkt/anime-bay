"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { allTopAnime } from "@/service/api";
import { Suspense } from "react";

const TopAnimePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ViewMoreList
      fetchFunction={(page) => allTopAnime(page)}
      title="Top Anime"
    />
  </Suspense>
);

export default TopAnimePage;
