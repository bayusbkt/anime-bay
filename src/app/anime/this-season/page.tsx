"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { allThisSeasonAnime } from "@/service/api";

const ThisSeasonAnimePage = () => (
  <ViewMoreList fetchFunction={(page) => allThisSeasonAnime(page)} title="This Season" />
);

export default ThisSeasonAnimePage;