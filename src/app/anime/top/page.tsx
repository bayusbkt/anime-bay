"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { allTopAnime } from "@/service/api";

const TopAnimePage = () => (
  <ViewMoreList fetchFunction={(page) => allTopAnime(page)} title="Top Anime" />
);

export default TopAnimePage;