export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="font-bold text-xl">
        SV
      </div>

      <div className="flex gap-6">
        <a href="#about">About</a>
        <a href="#">Projects</a>
        <a href="#">Experience</a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}