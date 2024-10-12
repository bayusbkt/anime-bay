"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { getTodayAired } from "@/service/api";
import { Suspense } from "react";

const TopAnimePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ViewMoreList
      fetchFunction={(page) => getTodayAired(page)}
      title="Today Aired"
    />
  </Suspense>
);

export default TopAnimePage;
