import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="/profile.jpg"
        alt="profile"
        width={160}
        height={160}
        className="rounded-full border-4 border-cyan-400"
      />

      <h1 className="text-6xl font-bold mt-6">Daniel Yismaw</h1>

      <p className="text-cyan-400 mt-3 text-xl">
        Telecom Engineer • Full Stack Developer • AI Researcher
      </p>

      <p className="text-gray-400 max-w-2xl mt-6">
        Building intelligent wireless networks, scalable web apps, and AI
        systems for next-generation telecom infrastructure.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="px-6 py-2 bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition"
        >
          View Work
        </a>

        <a
          href="/Daniel_Yismaw_CV.pdf"
          download
          className="px-6 py-2 border rounded-full hover:bg-cyan-500 hover:text-black transition"
        >
          Download CV
        </a>

        <a
          href="tel:+251912761763"
          className="px-6 py-2 bg-green-500 text-black rounded-full hover:bg-green-400 transition"
        >
          Call Me
        </a>

        <a
          href="https://wa.me/251912761763"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-500 transition"
        >
          WhatsApp
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-yismaw-56732b156/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border rounded-full hover:bg-cyan-500 hover:text-black transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
