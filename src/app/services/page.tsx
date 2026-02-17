import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="muted">
            Comprehensive services designed to grow your online presence.
          </p>
        </div>
        <Services />
      </div>
    </main>
  );
}
