import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <main className="flex flex-col gap-8 items-center justify-center h-full w-full max-w-lg ">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/zzz.svg"
            alt="zzz"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-2xl text-center">zzz</h1>
          <h2 className="text-lg text-center">
            An iOS app to optimize your wind down routine.
          </h2>
        </div>
        <div className="flex flex-col gap-2 bg-gray-500 bg-opacity-10 p-8 rounded-lg w-full text-md">
          <h2 className="text-gray-400">Project Specs</h2>
          <ul className="list-disc marker:text-gray-400 space-y-2 pl-4">
            <li>Platform: iOS</li>
            <li>Release Date: June 2025</li>
            <li>Build Time: 4 months</li>
            <li>
              Tech Stack: React Native, Expo, TypeScript, Supabase, Superwall
            </li>
            <li>
              <Link href="/apps/zzz/privacy" className="underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
