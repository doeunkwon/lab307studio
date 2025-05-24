"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const iszzz = pathname === "/apps/zzz";
  const iszzzTerms = pathname === "/apps/zzz/terms";
  const iszzzPrivacy = pathname === "/apps/zzz/privacy";
  const isHome = pathname === "/";

  return (
    <header className="flex flex-row gap-2 items-center justify-between w-full p-4">
      <div className="flex flex-row gap-4 items-center justify-center">
        <Link href="/">
          <button
            className={`text-md px-4 py-2 rounded-full transition-all duration-300 ${
              isHome
                ? "text-foreground"
                : "text-gray-400 hover:bg-gray-300 hover:bg-opacity-10 hover:text-foreground"
            }`}
          >
            LAB 307
          </button>
        </Link>
      </div>
      <div className="flex flex-row md:gap-4 items-center justify-center">
        <Link href="/apps/zzz">
          <button
            className={`text-md px-4 py-2 rounded-full transition-all duration-300 ${
              iszzz || iszzzTerms || iszzzPrivacy
                ? "text-foreground"
                : "text-gray-400 hover:bg-gray-300 hover:bg-opacity-10 hover:text-foreground"
            }`}
          >
            Apps
          </button>
        </Link>
        <a href="mailto:support@lab307.studio">
          <button className="text-md px-4 py-2 rounded-full text-gray-400 hover:bg-gray-300 hover:bg-opacity-10 hover:text-foreground transition-all duration-300">
            Support
          </button>
        </a>
      </div>
    </header>
  );
}
