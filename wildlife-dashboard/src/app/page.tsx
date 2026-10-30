const stats = [
  { label: "Total Sightings", value: "1,284", change: "+12.8%", icon: "◉" },
  { label: "Species Detected", value: "36", change: "+4 new", icon: "🐾" },
  { label: "Active Cameras", value: "48", change: "42 online", icon: "📷" },
  { label: "Alerts Generated", value: "12", change: "3 critical", icon: "⚠" },
];

const sightings = [
  { species: "Bengal Tiger", location: "Zone A - Forest North", time: "10:42 AM", confidence: "98.6%", status: "Verified", emoji: "🐅" },
  { species: "Asian Elephant", location: "Zone B - River Side", time: "09:18 AM", confidence: "96.2%", status: "Verified", emoji: "🐘" },
  { species: "Indian Leopard", location: "Zone C - Hill Range", time: "08:56 AM", confidence: "92.4%", status: "Review", emoji: "🐆" },
  { species: "Spotted Deer", location: "Zone A - Forest North", time: "08:21 AM", confidence: "97.1%", status: "Verified", emoji: "🦌" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f6f2] text-gray-800 md:flex">

      <aside className="w-full bg-[#142c24] p-6 text-white md:min-h-screen md:w-64">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-wide">WildTrack<span className="text-[#a5c98b]">.</span></h1>
          <p className="mt-1 text-xs text-gray-400">INTELLIGENT WILDLIFE MONITORING</p>
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Workspace</p>

        <nav className="space-y-2">
          <div className="rounded-lg bg-[#345441] px-4 py-3 font-medium">▦ &nbsp; Dashboard</div>
          <div className="px-4 py-3 text-gray-300">◉ &nbsp; Wildlife Sightings</div>
          <div className="px-4 py-3 text-gray-300">⌖ &nbsp; Camera Locations</div>
          <div className="px-4 py-3 text-gray-300">♧ &nbsp; Species Database</div>
          <div className="px-4 py-3 text-gray-300">⚑ &nbsp; Alerts & Reports</div>
        </nav>

        <div className="mt-12 rounded-xl border border-[#456052] bg-[#203b30] p-4">
          <p className="text-sm font-semibold">Monitoring Status</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            <span className="text-sm text-gray-300">System Operational</span>
          </div>
          <p className="mt-2 text-xs text-gray-400">Last synced: Just now</p>
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-5 md:p-8">

        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Wildlife Intelligence / Overview</p>
            <h2 className="mt-1 text-3xl font-bold text-[#1b3529]">Dashboard</h2>
            <p className="mt-1 text-sm text-gray-500">Monitor wildlife activity and detection insights.</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm">
            <span className="text-gray-500">● </span>
            Live Monitoring
          </div>
        </header>

        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <span className="text-xl">{stat.icon}</span>
              </div>
              <h3 className="mt-4 text-3xl font-bold text-[#1b3529]">{stat.value}</h3>
              <p className="mt-2 text-xs font-medium text-green-700">{stat.change} <span className="font-normal text-gray-400">this month</span></p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm xl:col-span-2">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-[#1b3529]">Recent Wildlife Sightings</h3>
                <p className="mt-1 text-sm text-gray-500">Latest detections from camera traps</p>
              </div>
              <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50">
                View All →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-xs uppercase text-gray-400">
                    <th className="pb-4 font-medium">Species</th>
                    <th className="pb-4 font-medium">Location</th>
                    <th className="pb-4 font-medium">Time</th>
                    <th className="pb-4 font-medium">Confidence</th>
                    <th className="pb-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sightings.map((item) => (
                    <tr key={item.species} className="border-b border-gray-50">
                      <td className="py-5 font-semibold">
                        <span className="mr-2">{item.emoji}</span>{item.species}
                      </td>
                      <td className="py-5 text-gray-500">{item.location}</td>
                      <td className="py-5 text-gray-500">{item.time}</td>
                      <td className="py-5 font-medium">{item.confidence}</td>
                      <td className="py-5">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${item.status === "Verified" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#1b3529]">Detection Summary</h3>
            <p className="mt-1 text-sm text-gray-500">Species activity overview</p>

            <div className="mt-8 space-y-6">
              {[
                { name: "Bengal Tiger", count: 42, percent: "84%", color: "bg-emerald-700" },
                { name: "Asian Elephant", count: 35, percent: "70%", color: "bg-lime-600" },
                { name: "Indian Leopard", count: 28, percent: "56%", color: "bg-amber-500" },
                { name: "Spotted Deer", count: 19, percent: "38%", color: "bg-teal-600" },
              ].map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-500">{item.count}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: item.percent }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-lg bg-[#f1f5ee] p-4">
              <p className="text-sm font-semibold text-[#1b3529]">AI Detection Insights</p>
              <p className="mt-2 text-xs leading-5 text-gray-600">
                Wildlife activity is being monitored across multiple forest zones. Detection records are updated as new camera data is processed.
              </p>
            </div>
          </div>

        </section>

        <footer className="mt-8 border-t border-gray-200 py-5 text-center text-xs text-gray-400">
          WildTrack Intelligence Platform · Wildlife Conservation Monitoring
        </footer>

      </main>
    </div>
  );
}