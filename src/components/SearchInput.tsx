import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export function SearchInput() {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleEnter = (e: React.KeyboardEvent) => {
    const keyword = searchRef.current?.value;
    if (!keyword) return;
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(`/search?search_query=${keyword}`);
    }
  };

  return (
    <Input
      type="text"
      placeholder="Search..."
      ref={searchRef}
      onKeyDown={handleEnter}
    />
  );
}
