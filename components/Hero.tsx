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

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-2 bg-cyan-500 text-black rounded-full"
        >
          View Work
        </a>

        <a
          href="/cv/Daniel_Yismaw_CV.pdf"
          download
          className="px-6 py-2 border rounded-full"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
