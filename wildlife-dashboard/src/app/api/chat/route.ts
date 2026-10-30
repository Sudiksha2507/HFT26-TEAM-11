
import { sightings } from "@/lib/sightings";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== "string" || !question.trim()) {
      return Response.json(
        { error: "Please enter a question." },
        { status: 400 }
      );
    }

    const apiKey = process.env.FEATHERLESS_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Featherless API key is missing." },
        { status: 500 }
      );
    }

    const totalSightings = sightings.length;
    const speciesCounts = sightings.reduce(
      (counts, sighting) => {
        counts[sighting.species] = (counts[sighting.species] || 0) + 1;
        return counts;
      },
      {} as Record<string, number>
    );

    const verifiedCount = sightings.filter(
      (s) => s.status === "Verified"
    ).length;

    const wildlifeContext = {
      totalSightings,
      verifiedSightings: verifiedCount,
      pendingSightings: totalSightings - verifiedCount,
      speciesCounts,
      records: sightings,
      dataType: "Demonstration data only, not live detections."
    };

    const response = await fetch(
      "https://api.featherless.ai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "X-Title": "WildSight"
        },
        body: JSON.stringify({
          model: "Qwen/Qwen2.5-7B-Instruct",
          messages: [
            {
              role: "system",
              content: `You are WildSight, an AI wildlife conservation assistant.
Answer clearly using the wildlife monitoring data provided below.
Use the records and calculated statistics to answer questions about sightings, species, locations, confidence and verification status.
If the data does not contain the answer, say so. Never invent sightings or claim the data is live.

WILDLIFE MONITORING DATA:
${JSON.stringify(wildlifeContext, null, 2)}`
            },
            {
              role: "user",
              content: question
            }
          ],
          temperature: 0.5,
          max_tokens: 500
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: data.error?.message || "Featherless request failed." },
        { status: response.status }
      );
    }

    return Response.json({
      answer: data.choices?.[0]?.message?.content || "No response generated."
    });

  } catch {
    return Response.json(
      { error: "Unable to connect to the AI service." },
      { status: 500 }
    );
  }
}
