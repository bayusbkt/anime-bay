"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { allUpcomingSeasonAnime } from "@/service/api";
import { Suspense } from "react";

const TopAnimePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ViewMoreList
      fetchFunction={(page) => allUpcomingSeasonAnime(page)}
      title="Upcoming Season"
    />
  </Suspense>
);

export default TopAnimePage;
