import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: req.body.prompt },
      ],
      temperature: req.body.temperature ?? 0.7,
      max_tokens: 100,
    });

    res.status(200).json({ result: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate completion" });
  }
}
