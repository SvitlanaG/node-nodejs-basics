const createCustomError = (message) => {
  return new Error(message);
};

export const throwError = () => {
  const errorMessage = "FS operation failed";
  throw createCustomError(errorMessage);
};
