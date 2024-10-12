"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { getTodayAired } from "@/service/api";

const TopAnimePage = () => (
  <ViewMoreList fetchFunction={(page) => getTodayAired(page)} title="Today Aired" />
);

export default TopAnimePage;