"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { allThisSeasonAnime } from "@/service/api";
import { Suspense } from "react";

const ThisSeasonAnimePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ViewMoreList fetchFunction={(page) => allThisSeasonAnime(page)} title="This Season" />
  </Suspense>
);

export default ThisSeasonAnimePage;
