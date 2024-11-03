"use client";

import SeasonListPage from '@/components/SeasonListCard';
import { getSeasonList } from '@/service/api';
import { Loader2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const AnimePage = () => {
  const [seasonData, setSeasonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getSeasonList();
        setSeasonData(response.data);
      } catch (error) {
        console.error('Error fetching season data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-16 h-16 animate-spin gradient-text" />
      </div>
    );
  }

  return <SeasonListPage data={seasonData} />;
};

export default AnimePage;