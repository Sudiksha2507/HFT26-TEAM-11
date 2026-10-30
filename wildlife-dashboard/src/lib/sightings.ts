export type Sighting = {
  id: number;
  species: string;
  location: string;
  time: string;
  confidence: number;
  status: string;
};

export const sightings: Sighting[] = [
  {
    id: 1,
    species: "Indian Leopard",
    location: "Zone A",
    time: "2026-10-30 08:30",
    confidence: 96,
    status: "Verified",
  },
  {
    id: 2,
    species: "Bengal Tiger",
    location: "Zone B",
    time: "2026-10-30 09:15",
    confidence: 92,
    status: "Verified",
  },
  {
    id: 3,
    species: "Asian Elephant",
    location: "Zone C",
    time: "2026-10-30 10:00",
    confidence: 98,
    status: "Verified",
  },
  {
    id: 4,
    species: "Sloth Bear",
    location: "Zone A",
    time: "2026-10-30 11:20",
    confidence: 89,
    status: "Pending",
  },
  {
    id: 5,
    species: "Spotted Deer",
    location: "Zone D",
    time: "2026-10-30 12:10",
    confidence: 94,
    status: "Verified",
  },
  {
    id: 6,
    species: "Indian Leopard",
    location: "Zone B",
    time: "2026-10-30 13:45",
    confidence: 91,
    status: "Pending",
  },
];