import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Sun } from "lucide-react";
import Link from "next/link";

const getDayIcon = (day: string) => {
  switch (day.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return <Calendar className="w-5 h-5 text-indigo-500" />;
    case "saturday":
    case "sunday":
      return <Sun className="w-5 h-5 text-yellow-500" />;
    default:
      return;
  }
};

const SchedulesPage = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  return (
    <div className="container mx-auto px-14 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 border-b-2 border-blue-500 inline-block">
        Weekly Schedules
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {days.map((day, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="border-b-2 py-4 px-6">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                {day}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <Link href={`schedules/${day.toLowerCase()}`}>
                <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-800 hover:font-semibold hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 rounded-md px-2 py-1">
                  {getDayIcon(day)}
                  <span>View Schedule</span>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SchedulesPage;