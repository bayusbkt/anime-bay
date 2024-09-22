import AnimeList from "@/components/AnimeList";

export default function Home() {
  return (
    <div className="max-w-[1640px] px-28">
      <div className="flex justify-center mb-4">
        <p className="text-2xl font-semibold">Top Anime</p>
      </div>
      <AnimeList />
    </div>
  );
}
