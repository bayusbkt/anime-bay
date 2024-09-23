import AnimeList from "@/components/AnimeList";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="max-w-[1640px] px-28">
      <div className="-mx-28 mb-20">
        <Hero />
      </div>
      <div className="flex justify-center mb-4">
        <p className="text-2xl font-semibold">Top Anime</p>
      </div>
      <AnimeList />
    </div>
  );
}
