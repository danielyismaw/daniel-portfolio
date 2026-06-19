"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="glass mx-6 mt-4 px-8 py-4 flex justify-between items-center">
        <h1 className="text-cyan-400 font-bold">Daniel Yismaw</h1>

        <nav className="space-x-6 text-sm text-gray-300">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#ai">AI</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
