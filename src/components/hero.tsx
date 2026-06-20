export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold">
        Shakthi Vignesh
      </h1>

      <h2 className="mt-4 text-2xl md:text-3xl text-gray-600">
        AI & Machine Learning Student
      </h2>

      <p className="mt-6 max-w-2xl text-lg text-gray-500">
        Exploring intelligent systems, design, and the intersection of
        technology with real-world impact.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-black text-white">
          Explore My Work
        </button>

        <button className="px-6 py-3 rounded-lg border">
          Ask AI About Me
        </button>
      </div>
    </section>
  );
}