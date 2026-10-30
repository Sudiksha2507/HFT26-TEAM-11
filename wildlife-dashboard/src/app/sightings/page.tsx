
"use client";

import { useState } from "react";
import { sightings } from "@/lib/sightings";

export default function SightingsPage() {
  const [search, setSearch] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("All");

  const speciesList = [
    "All",
    ...Array.from(new Set(sightings.map((s) => s.species))),
  ];

  const filteredSightings = sightings.filter((s) => {
    const matchesSearch =
      s.species.toLowerCase().includes(search.toLowerCase()) ||
      s.location.toLowerCase().includes(search.toLowerCase());

    const matchesSpecies =
      speciesFilter === "All" || s.species === speciesFilter;

    return matchesSearch && matchesSpecies;
  });

  const verifiedCount = sightings.filter(
    (s) => s.status === "Verified"
  ).length;

  const avgConfidence =
    sightings.reduce((sum, s) => sum + s.confidence, 0) /
    sightings.length;

  return (
    <main className="min-h-screen bg-[#071812] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-emerald-400">
          Wildlife Sightings
        </h1>
        <p className="text-gray-400 mt-2">
          Explore and filter recorded wildlife detections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
          <div className="bg-[#10291e] p-6 rounded-xl">
            <p className="text-gray-400">Total Sightings</p>
            <h2 className="text-3xl font-bold mt-2">{sightings.length}</h2>
          </div>

          <div className="bg-[#10291e] p-6 rounded-xl">
            <p className="text-gray-400">Verified Sightings</p>
            <h2 className="text-3xl font-bold mt-2">{verifiedCount}</h2>
          </div>

          <div className="bg-[#10291e] p-6 rounded-xl">
            <p className="text-gray-400">Average Confidence</p>
            <h2 className="text-3xl font-bold mt-2">
              {avgConfidence.toFixed(1)}%
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search species or location..."
            className="flex-1 bg-[#10291e] border border-gray-700 rounded-lg p-3 outline-none focus:border-emerald-500"
          />

          <select
            value={speciesFilter}
            onChange={(e) => setSpeciesFilter(e.target.value)}
            className="bg-[#10291e] border border-gray-700 rounded-lg p-3"
          >
            {speciesList.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-[#10291e] rounded-xl overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#183a2a] text-emerald-300">
              <tr>
                <th className="p-4">Species</th>
                <th className="p-4">Location</th>
                <th className="p-4">Detection Time</th>
                <th className="p-4">Confidence</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredSightings.map((s) => (
                <tr key={s.id} className="border-t border-gray-700">
                  <td className="p-4 font-medium">{s.species}</td>
                  <td className="p-4 text-gray-300">{s.location}</td>
                  <td className="p-4 text-gray-300">{s.time}</td>
                  <td className="p-4">{s.confidence}%</td>
                  <td className="p-4">
                    <span
                      className={
                        s.status === "Verified"
                          ? "text-emerald-400"
                          : "text-yellow-400"
                      }
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredSightings.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-400">
                    No sightings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Demonstration records only — not live wildlife detections.
        </p>
      </div>
    </main>
  );
}
