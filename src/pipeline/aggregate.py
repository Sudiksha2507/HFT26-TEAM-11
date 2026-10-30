"""Build aggregates.json for the dashboard and the insight agent."""
from collections import Counter, defaultdict
from datetime import datetime


def build_aggregates(sightings, total_images, empty_images):
    species_counts = Counter(s["species"] for s in sightings)
    hourly = defaultdict(lambda: [0] * 24)
    for s in sightings:
        hourly[s["species"]][datetime.fromisoformat(s["start_time"]).hour] += 1
    n = len(sightings) or 1
    return {
        "species_counts": dict(species_counts),
        "hourly_counts": dict(hourly),
        "location_counts": dict(Counter(s["camera_id"] for s in sightings)),
        "pct_empty": round(100 * empty_images / max(total_images, 1), 1),
        "pct_unidentified": round(100 * species_counts.get("unidentified", 0) / n, 1),
        "mean_confidence": round(sum(s["confidence"] for s in sightings) / n, 3),
        "n_sightings": len(sightings),
    }
