import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'AnimeBay - Season',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
