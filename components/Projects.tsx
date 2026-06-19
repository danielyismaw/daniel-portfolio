const projects = [
  {
    title: "Telecom Monitoring Dashboard",
    tech: "Next.js + Node.js",
  },
  {
    title: "PRB Prediction AI Model",
    tech: "Python + LSTM + CNN",
  },
  {
    title: "VSAT Network System",
    tech: "IoT + APIs",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="glass p-6 hover:scale-105 transition">
            <h3 className="text-cyan-400 text-lg font-semibold">{p.title}</h3>

            <p className="text-gray-400 mt-2">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
