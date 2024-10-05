"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { allUpcomingSeasonAnime } from "@/service/api";

const TopAnimePage = () => (
  <ViewMoreList fetchFunction={allUpcomingSeasonAnime} title="Upcoming Season" />
);

export default TopAnimePage;