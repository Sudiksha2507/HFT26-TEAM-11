import json
import csv
from collections import Counter

# Load image metadata
with open("data/subset.csv", "r") as f:
    metadata = list(csv.DictReader(f))

metadata_map = {
    row["file_name"]: row
    for row in metadata
}

# Load species predictions
with open("data/predictions.json", "r") as f:
    predictions = json.load(f)

sightings = []

for prediction in predictions:

    filename = prediction["image"]
    row = metadata_map.get(filename)

    if row is None:
        continue

    sightings.append({
        "image": filename,
        "species": prediction["species"],
        "species_confidence": prediction["species_confidence"],
        "detector_confidence": prediction["detector_confidence"],
        "bbox": prediction["bbox"],
        "camera_id": row["location"],
        "timestamp": row["timestamp"],
        "date": row["timestamp"].split(" ")[0],
        "hour": int(row["timestamp"].split(" ")[1].split(":")[0])
    })

# Save sightings
with open("data/sightings.json", "w") as f:
    json.dump(sightings, f, indent=2)

print("Sightings generated successfully!")
print("Total sightings:", len(sightings))

print("\nSpecies distribution:")
counts = Counter(s["species"] for s in sightings)

for species, count in counts.most_common():
    print(f"{species}: {count}")

print("\nUnique camera locations:",
      len(set(s["camera_id"] for s in sightings)))

print("Saved to data/sightings.json")