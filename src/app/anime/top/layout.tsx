
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'AnimeBay - Top Anime',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
