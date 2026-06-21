export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-[#111111]/90 backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div>
          <h1 className="font-[family-name:var(--font-playfair)] text-2xl">
            SV
          </h1>
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-[0.15em] text-zinc-400">

          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-white transition-colors"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="hover:text-white transition-colors"
          >
            Experience
          </a>

          <a
            href="#timeline"
            className="hover:text-white transition-colors"
          >
            Journey
          </a>

          <a
            href="#skills"
            className="hover:text-white transition-colors"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}