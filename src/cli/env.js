const parseEnv = () => {
  const envVariables = Object.entries(process.env);
  const rssEnvVariables = envVariables
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(rssEnvVariables);
};

parseEnv();
