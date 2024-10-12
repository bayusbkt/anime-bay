"use client";

import SeasonListPage from '@/components/SeasonListCard';
import { getSeasonList } from '@/service/api';
import React, { useState, useEffect } from 'react';

const AnimePage = () => {
  const [seasonData, setSeasonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSeasonList();
        setSeasonData(response.data);
      } catch (error) {
        console.error('Error fetching season data:', error);
      }
    };

    fetchData();
  }, []);

  return <SeasonListPage data={seasonData} />;
};

export default AnimePage;