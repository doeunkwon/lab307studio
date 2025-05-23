import { privacyPolicy } from "@/constants/privacyPolicy";

export default function Privacy() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <main className="flex flex-col gap-8 items-center justify-center h-full w-full">
        <h1 className="text-2xl">Privacy Policy</h1>
        <div className="max-w-xl h-96 overflow-y-scroll bg-gray-600 bg-opacity-10 rounded-lg p-8">
          <p className="whitespace-pre-wrap">{privacyPolicy}</p>
        </div>
      </main>
    </div>
  );
}
