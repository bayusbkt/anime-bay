import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'AnimeBay - Genre',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
