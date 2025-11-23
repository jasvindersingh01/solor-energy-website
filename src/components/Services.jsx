export default function Services() {
  const list = [
    "On-Grid Solar System",
    "Off-Grid Solar System",
    "Hybrid System",
    "Solar Water Heater",
    "Solar Submersible Pump",
    "Solar Street Light"
  ];

  return (
    <section id="services" className="px-8 py-16 scroll-mt-18">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {list.map((item, i) => (
          <div key={i} className="p-6 shadow-lg border rounded-lg bg-white">
            <h3 className="text-xl font-semibold">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
