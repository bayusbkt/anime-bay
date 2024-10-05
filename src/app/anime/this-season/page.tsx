"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { allThisSeasonAnime } from "@/service/api";

const ThisSeasonAnimePage = () => (
  <ViewMoreList fetchFunction={allThisSeasonAnime} title="This Season" />
);

export default ThisSeasonAnimePage;