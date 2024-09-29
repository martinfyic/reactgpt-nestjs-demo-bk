import OpenAI from 'openai';

interface Options {
  prompt: string;
}

export const orthographyCheckCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt } = options;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini-2024-07-18',
    messages: [
      { role: 'system', content: 'Eres un asistente muy útil y capaz.' },
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  console.log(completion);
  return completion.choices[0];
};
