export default function Hero() {
  return (
    <section className="min-h-[85vh] max-w-7xl mx-auto px-8 pt-28 flex items-center">

      <div className="grid md:grid-cols-2 gap-20 w-full">

        {/* LEFT SIDE */}

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
            Knowledge Archive
          </p>

          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl leading-none mb-6">
            Shakthi
            <br />
            Vignesh
          </h1>

          <h2 className="text-2xl text-zinc-300 mb-6">
            AI & Machine Learning Student
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            Exploring intelligence, software engineering, and
            human-centered technology through continuous learning,
            experimentation, and building.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-medium hover:opacity-90 transition">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 transition">
              Query the Archive
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center">

          <div className="relative w-full">

            {/* Layer behind */}

            <div className="absolute top-4 left-4 w-full h-full rounded-2xl border border-[var(--accent)] opacity-30" />

            {/* Main card */}

            <div className="relative border border-zinc-800 rounded-2xl p-8 bg-zinc-900">

              <p className="uppercase tracking-[0.2em] text-sm text-zinc-500 mb-8">
                Archive Entry
              </p>

              <div className="space-y-6">

                <div>
                  <p className="text-zinc-500 text-sm uppercase">
                    Name
                  </p>

                  <p className="mt-1 text-lg">
                    Shakthi Vignesh
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm uppercase">
                    Role
                  </p>

                  <p className="mt-1 text-lg">
                    AI & ML Student
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm uppercase">
                    Location
                  </p>

                  <p className="mt-1 text-lg">
                    Coimbatore, India
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm uppercase">
                    Status
                  </p>

                  <p className="mt-1 text-lg text-[var(--accent)]">
                    Actively Exploring
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}