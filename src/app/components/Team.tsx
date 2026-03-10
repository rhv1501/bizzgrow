const Team = () => {
  const people = [
    { name: "Rudresh H Vyas", role: "Founder & CEO" },
  ];

  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg, var(--brand-light), rgba(255,255,255,0))",
      }}
    >
      <div className="site-container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">The Mind Behind the Mission</h2>
          <p className="muted mt-2">
            Every great company begins with a bold vision. Our founder combines
            technical expertise, creative thinking, and strategic insight to
            build solutions that help businesses grow in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {people.map((p, i) => (
            <div
              key={i}
              className="card card-animate reveal"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className="w-20 h-20 rounded-full mb-4 flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: "var(--brand-secondary)" }}
              >
                {p.name.split(" ")[0][0]}
              </div>
              <h4 className="font-bold">{p.name}</h4>
              <p className="muted">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
