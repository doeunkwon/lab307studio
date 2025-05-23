import { TERMS_OF_USE } from "@/constants/termsOfUse";

export default function Terms() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <main className="flex flex-col gap-8 items-center justify-center h-full w-full">
        <h1 className="text-2xl">Terms of Use</h1>
        <div className="max-w-xl h-96 overflow-y-scroll bg-gray-500 bg-opacity-10 rounded-lg p-8">
          <p className="whitespace-pre-wrap">{TERMS_OF_USE}</p>
        </div>
      </main>
    </div>
  );
}
