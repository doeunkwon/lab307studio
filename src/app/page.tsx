export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <main className="flex flex-col gap-12 items-center justify-center h-full w-full max-w-md">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h1 className="text-2xl">Hey – here's a bit about us.</h1>
          <div className="flex flex-col gap-8 items-start justify-center text-lg">
            <div className="flex flex-row gap-4 items-start justify-center">
              <p className="text-2xl">🧑🏻‍💻</p>
              <p>
                Two former college roommates who bonded over a shared passion
                for building.
              </p>
            </div>
            <div className="flex flex-row gap-4 items-start justify-center">
              <p className="text-2xl">📱</p>
              <p>
                Focused on solving big yet niche problems through simple
                software.
              </p>
            </div>
            <div className="flex flex-row gap-4 items-start justify-center">
              <p className="text-2xl">🌍</p>
              <p>
                Passionate about exploring innovative ways to distribute digital
                products.
              </p>
            </div>
            <div className="flex flex-row gap-4 items-start justify-center">
              <p className="text-2xl">☕️</p>
              <p>
                Always open to new ideas and connections – feel free to reach
                out!
              </p>
            </div>
          </div>
        </div>
        <a href="mailto:hi@lab307.studio">
          <button className="bg-blue-600 rounded-full px-4 py-2 hover:bg-blue-700 hover:scale-95 transition-all duration-300">
            Introduce Yourself
          </button>
        </a>
      </main>
    </div>
  );
}
