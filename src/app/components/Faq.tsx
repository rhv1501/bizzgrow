const Faq = () => {
  const items = [
    {
      q: "How long does a website project take?",
      a: "Typically 4–8 weeks depending on complexity.",
    },
    {
      q: "Do you provide ongoing marketing?",
      a: "Yes — we offer retainer and campaign-based marketing packages.",
    },
    {
      q: "Can you work with our existing stack?",
      a: "Absolutely — we integrate with popular CMS, ecommerce and analytics tools.",
    },
  ];

  return (
    <section className="py-20">
      <div className="site-container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="muted mt-2">
            Common questions we get from new clients.
          </p>
        </div>
        <div className="space-y-4">
          {items.map((it, i) => (
            <details key={i} className="card">
              <summary className="font-semibold">{it.q}</summary>
              <div className="mt-2 muted">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
