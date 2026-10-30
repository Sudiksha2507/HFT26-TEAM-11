
const detections = [
  {
    species: "Indian Leopard",
    zone: "Camera Trap 04 · Northern Range",
    time: "10:42 PM",
    confidence: "98.6%",
    image:
      "https://static.wixstatic.com/media/df65a0_f5026aec196a4309b86b0d3d4510aeb7~mv2.png/v1/fill/w_1000,h_667,al_c,q_90/df65a0_f5026aec196a4309b86b0d3d4510aeb7~mv2.png",
  },
  {
    species: "Wildlife activity",
    zone: "Camera Trap 08 · Forest Trail",
    time: "09:18 PM",
    confidence: "Detection pending",
    image:
      "https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/76768ce0-5a61-44a7-b193-e2aaa7b429ff/Other%20mammals%20detected%20and%20instantly%20transmitted%20by%20Trailguard%20AI%20include%20leopard%2C%20gaur%2C%20sloth%20bear%2C%20sambar%2C%20langur%2C%20and%20chital.%20Image%20credit%20NTCA%2C%20Madhya%20Pradesh%20forest%20department%2C%20Global%20Tiger%20Forum%2C%20and%20Resolve.jpeg",
  },
];

const stats = [
  { label: "Camera traps deployed", value: "48", note: "Sample system data" },
  { label: "Wildlife detections", value: "1,284", note: "Sample records" },
  { label: "Species identified", value: "36", note: "Sample records" },
  { label: "Pending reviews", value: "08", note: "Sample records" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101a16] text-[#edf2eb]">
      
<nav className="flex flex-wrap gap-3 mb-8">
  <a href="/" className="px-4 py-2 rounded-lg bg-emerald-800 text-white hover:bg-emerald-700">
    Dashboard
  </a>
  <a href="/sightings" className="px-4 py-2 rounded-lg bg-[#11251c] border border-emerald-900 text-white hover:bg-emerald-900">
    Wildlife Sightings
  </a>
  <a href="/map" className="px-4 py-2 rounded-lg bg-[#11251c] border border-emerald-900 text-white hover:bg-emerald-900">
    Monitoring Map
  </a>
    <a href="/insights" className="px-4 py-2 rounded-lg bg-[#11251c] border border-emerald-900 text-white hover:bg-emerald-900">
    Insight Agent
  </a>
</nav>

      <aside className="border-b border-white/10 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              WILD<span className="text-[#a6c88a]">SIGHT</span>
            </h1>
            <p className="mt-1 text-xs tracking-[0.2em] text-gray-400">
              AI-POWERED WILDLIFE INTELLIGENCE
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Monitoring workspace
          </div>
        </div>
      </aside>

      <div className="mx-auto max-w-7xl px-6 py-9 md:px-10">
        <section className="mb-8">
          <p className="text-sm text-[#a6c88a]">CONSERVATION INTELLIGENCE</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Wildlife Monitoring
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
            Observe wildlife activity, review camera-trap detections and
            explore AI-generated conservation insights.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-[#192720] p-5"
            >
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="mt-4 text-3xl font-bold">{stat.value}</p>
              <p className="mt-2 text-xs text-[#a6c88a]">{stat.note}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Camera-trap activity</h3>
            <p className="mt-1 text-sm text-gray-400">
              Visual examples of wildlife monitoring imagery
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {detections.map((item) => (
              <article
                key={item.species}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#192720]"
              >
                <div className="relative h-64 bg-[#25372d]">
                  <img
                    src={item.image}
                    alt={item.species}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-green-300">
                    CAMERA TRAP IMAGE
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold">
                        {item.species}
                      </h4>
                      <p className="mt-1 text-sm text-gray-400">
                        {item.zone}
                      </p>
                    </div>
                    <span className="rounded-lg bg-green-400/10 px-3 py-2 text-sm text-green-300">
                      {item.confidence}
                    </span>
                  </div>
                  <p className="mt-4 text-xs text-gray-500">
                    Capture time: {item.time}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#718d65]/30 bg-[#1b2d23] p-6">
          <p className="text-sm font-semibold text-[#b5d39d]">
            CONSERVATION INSIGHT
          </p>
          <h3 className="mt-3 text-xl font-semibold">
            From camera traps to actionable intelligence
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-300">
            The platform will process camera-trap images, identify wildlife
            species, analyse detection patterns and help conservation teams
            monitor activity across forest zones.
          </p>
          <p className="mt-4 text-xs text-gray-500">
            AI Insight Agent integration planned.
          </p>
        </section>

        <footer className="mt-12 border-t border-white/10 py-6 text-center text-xs text-gray-500">
          WILDSIGHT · Wildlife Conservation Intelligence Platform
        </footer>
      </div>
    </main>
  );
}
