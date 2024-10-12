import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Trailer } from '@/types/animeType';

interface TrailerCardProps {
  trailer: Trailer | null;
}

const TrailerCard = ({ trailer }: TrailerCardProps) => {
  if (!trailer || !trailer.embed_url) {
    return null;
  }

  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Play className="mr-2" size={20} />
          Trailer
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <iframe
            src={trailer.embed_url}
            title="Anime Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TrailerCard;