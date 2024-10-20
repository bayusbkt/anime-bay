"use client";

import ViewMoreList from "@/components/ViewMoreList";
import { getSchedules } from "@/service/api";
import { Suspense } from "react";

const DayPage = ({ params }: { params: { day: string } }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <ViewMoreList
      fetchFunction={(page) => getSchedules(page, params.day)}
      title={params.day[0].toUpperCase() + params.day.slice(1)}
    />
  </Suspense>
);

export default DayPage;
