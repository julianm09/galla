export const generateText = async (prompt: string, temperature: number) => {
  console.log(prompt, temperature)
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      temperature,
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  if (!data) {
    return;
  }

  return data.result.choices[0].text.trim();
};
