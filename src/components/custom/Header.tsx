"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isApps = pathname === "/apps";
  const iszzzTerms = pathname === "/apps/zzz/terms";
  const iszzzPrivacy = pathname === "/apps/zzz/privacy";
  const isHome = pathname === "/";

  return (
    <header className="flex flex-row gap-2 items-center justify-between w-full px-4 py-2">
      <div className="flex flex-row gap-4 items-center justify-center">
        <Link href="/">
          <button
            className={`text-md px-4 py-2 rounded-full transition-all duration-300 font-medium ${
              isHome
                ? "text-foreground"
                : "text-neutral-500 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-foreground"
            }`}
          >
            LAB 307
          </button>
        </Link>
      </div>
      <div className="flex flex-row md:gap-4 items-center justify-center">
        <Link href="/apps">
          <button
            className={`text-md px-4 py-2 rounded-full transition-all duration-300 font-medium ${
              isApps || iszzzTerms || iszzzPrivacy
                ? "text-foreground"
                : "text-neutral-500 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-foreground"
            }`}
          >
            Apps
          </button>
        </Link>
        <a href="mailto:support@lab307.studio">
          <button className="text-md px-4 py-2 rounded-full text-neutral-500 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-foreground transition-all duration-300 font-medium">
            Support
          </button>
        </a>
      </div>
    </header>
  );
}
