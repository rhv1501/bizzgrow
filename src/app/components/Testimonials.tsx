import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            We are trusted by businesses worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card card-hover">
            <div className="flex items-center mb-4">
              <Image
                src="/user1.png"
                alt="User 1"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <h4
                  className="text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  John Doe
                </h4>
                <p style={{ color: "var(--text-secondary)" }}>CEO, Company</p>
              </div>
            </div>
            <p style={{ color: "var(--text-secondary)" }}>
              &ldquo;BizzGrow helped us transform our business and achieve our
              goals. We are very happy with the results.&rdquo;
            </p>
          </div>
          <div className="card card-hover">
            <div className="flex items-center mb-4">
              <Image
                src="/user2.png"
                alt="User 2"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <h4
                  className="text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Jane Smith
                </h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Founder, Startup
                </p>
              </div>
            </div>
            <p style={{ color: "var(--text-secondary)" }}>
              &ldquo;The team at BizzGrow is amazing. They are very professional
              and easy to work with. Highly recommended!&rdquo;
            </p>
          </div>
          <div className="card card-hover">
            <div className="flex items-center mb-4">
              <Image
                src="/user3.png"
                alt="User 3"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <h4
                  className="text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Sam Wilson
                </h4>
                <p style={{ color: "var(--text-secondary)" }}>
                  Marketing Manager, Inc
                </p>
              </div>
            </div>
            <p style={{ color: "var(--text-secondary)" }}>
              &ldquo;We have been working with BizzGrow for a while now and they
              have never disappointed us. They are the best!&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
