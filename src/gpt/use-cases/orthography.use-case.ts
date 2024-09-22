interface Options {
  prompt: string;
}

export const orthographyCheckCase = async (options: Options) => {
  const { prompt } = options;

  return {
    prompt: prompt,
  };
};
