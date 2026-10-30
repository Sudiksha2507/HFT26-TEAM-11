import json
from collections import Counter, defaultdict

# Load sightings
with open("data/sightings.json", "r") as f:
    sightings = json.load(f)

species_counts = Counter()
camera_counts = Counter()
hourly_counts = Counter()
daily_counts = Counter()

for s in sightings:
    species_counts[s["species"]] += 1
    camera_counts[s["camera_id"]] += 1
    hourly_counts[s["hour"]] += 1
    daily_counts[s["date"]] += 1

aggregates = {
    "total_sightings": len(sightings),
    "unique_cameras": len(camera_counts),
    "species_counts": dict(species_counts.most_common()),
    "camera_counts": dict(camera_counts.most_common()),
    "hourly_activity": dict(sorted(hourly_counts.items())),
    "daily_sightings": dict(sorted(daily_counts.items())),
    "unknown_percentage": round(
        species_counts["unknown"] / len(sightings) * 100, 2
    )
}

with open("data/aggregates.json", "w") as f:
    json.dump(aggregates, f, indent=2)

print("Analytics generated successfully!")
print("Total sightings:", aggregates["total_sightings"])
print("Unique cameras:", aggregates["unique_cameras"])
print("Unknown predictions:", aggregates["unknown_percentage"], "%")
print("Saved to data/aggregates.json")