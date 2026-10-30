
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const WildlifeMap = dynamic(() => import("./wildlife-map"), {
  ssr: false,
  loading: () => <p className="text-emerald-300 p-8">Loading wildlife map...</p>,
});

export default function MapPage() {
  return (
    <main className="min-h-screen bg-[#07130f] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <a href="/" className="text-emerald-400 text-sm">← Back to dashboard</a>

        <p className="text-emerald-400 text-sm tracking-widest mt-8">
          GEOSPATIAL INTELLIGENCE
        </p>
        <h1 className="text-4xl font-bold mt-2">Wildlife Monitoring Map</h1>
        <p className="text-gray-400 mt-3 mb-8">
          Explore camera-trap activity and wildlife sightings across forest zones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#11251c] border border-emerald-900 rounded-xl p-5">
            <p className="text-gray-400 text-sm">Monitoring zones</p>
            <p className="text-3xl font-bold mt-2">4</p>
          </div>
          <div className="bg-[#11251c] border border-emerald-900 rounded-xl p-5">
            <p className="text-gray-400 text-sm">Mapped sightings</p>
            <p className="text-3xl font-bold mt-2">6</p>
          </div>
          <div className="bg-[#11251c] border border-emerald-900 rounded-xl p-5">
            <p className="text-gray-400 text-sm">Species tracked</p>
            <p className="text-3xl font-bold mt-2">5</p>
          </div>
        </div>

        <WildlifeMap />

        <p className="text-gray-500 text-xs mt-4">
          Demonstration coordinates only. Actual GPS locations will be integrated from the detection pipeline.
        </p>
      </div>
    </main>
  );
}
