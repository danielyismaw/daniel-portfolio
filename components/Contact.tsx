export default function Contact() {
  return (
    <section id="contact" className="px-8 py-24 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <div className="text-gray-400 space-y-4 text-lg">
        <p>
          Email:{" "}
          <a href="mailto:dyismaw4@gmail.com" className="text-cyan-400">
            dyismaw4@gmail.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a href="tel:+251912761763" className="text-cyan-400">
            +251 912 761 763
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/daniel-yismaw-56732b156/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400"
          >
            Open Profile
          </a>
        </p>
      </div>
    </section>
  );
}
