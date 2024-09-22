"use client";

import { topAnime } from "@/service/anime";
import { useEffect, useState } from "react";
import { Anime } from "@/types/animeType";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const AnimeList = () => {
  const [data, setData] = useState<Anime[]>();

  const fetchTopAnime = async () => {
    const response = await topAnime();
    setData(response.data);
  };

  useEffect(() => {
    fetchTopAnime();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data?.map((item: Anime, index: number) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="overflow-hidden">
              <CardContent className="p-0 aspect-[3/4] relative">
                <Image
                  src={item.images.webp.large_image_url}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                   className="bg-black"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-lg  truncate">{item.title}</h3>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default AnimeList;