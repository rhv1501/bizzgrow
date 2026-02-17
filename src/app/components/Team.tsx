const Team = () => {
  const people = [
    { name: "Aisha Khan", role: "Founder & CEO" },
    { name: "Ravi Patel", role: "Head of Design" },
    { name: "Nina Gomez", role: "Growth Lead" },
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
          <h2 className="text-3xl font-bold">Meet the team</h2>
          <p className="muted mt-2">
            Small team, big impact — experts across design, engineering and
            marketing.
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
