"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { allTopAnime } from "@/service/api";

const TopAnimePage = () => (
  <ViewMoreList fetchFunction={allTopAnime} title="Top Anime" />
);

export default TopAnimePage;