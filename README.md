# Helix: AI-Powered Wildlife Monitoring & Camera-Trap Analytics

**CBIT Hacktoberfest '26** | Team Helix (HFT26-TEAM-11) | Reg. ID HFEST26-4MPSGQSM

| Name | Role |
|---|---|
| Sudiksha Gopisetty (Lead) | Integration, deployment, README, demo |
| Sahasra Bandari | Data pipeline |
| Dwayitha Reddy | Species classifier |
| Ria Reddy | Dashboard |

## 1. Problem statement
Researchers manually review thousands of camera-trap images, many empty or repeated.
We automate detection, species identification, and activity analysis, and report
results with explicit uncertainty. Dataset: [Caltech Camera Traps (LILA)](https://lila.science/datasets/caltech-camera-traps).

## 2. Solution overview
1. MegaDetector filters empty images.
2. A fine-tuned classifier identifies species on animal crops; low confidence becomes "Unidentified animal".
3. Frames are merged into sightings (sequence id, else timestamp proximity).
4. Results are stored as structured data and shown on a dashboard.
5. An LLM (Featherless) summarises aggregated counts only, with a "what we cannot conclude" section and a template fallback.

## 3. Architecture
See [docs/architecture.md](docs/architecture.md) and [docs/data_contract.md](docs/data_contract.md).

## 4. Results
_Fill from real runs (held-out cameras only):_
- Detector empty-vs-animal precision/recall: TBD
- Classifier accuracy (held-out cameras) / per-class metrics / confusion matrix: TBD
- Fine-tuned vs zero-shot BioCLIP: TBD

## 5. Uncertainty and limitations
Unidentified share, class imbalance, rare species, night/infrared images, camera clock quality,
and a subset of cameras only. Results are not population estimates.

## 6. Setup
```bash
git clone https://github.com/<your-username>/HFT26-TEAM-11.git && cd HFT26-TEAM-11
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env          # add Featherless key
pytest                        # run tests
python -m src.pipeline.detect <image_dir>
cd src/dashboard && npm install && npm run dev
```
Data and model weights are not committed; download the subset from LILA yourself.

## 7. Demo
Live URL / video (under 3 min): _add link_

## 8. Credits and licenses
MegaDetector / PyTorch-Wildlife, timm, BioCLIP, OpenCV, Next.js, shadcn/ui, Leaflet, Featherless.
Dataset: Caltech Camera Traps via LILA BC (check dataset license and cite). Code: MIT.
All project code was written during the hackathon.
