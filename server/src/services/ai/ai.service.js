import fastapi from "../../utils/fastapi.js";

export const analyzeRepository = async (
  repositoryId,
  repoUrl
) => {

  const response = await fastapi.post(
    "/repository/analyze",
    {
      repositoryId,
      repoUrl,
    }
  );

  return response.data;
};

export const chatWithRepository = async ({
    repositoryPath,
    question,
  }) => {
  
    const response = await fastapi.post(
      "/repository/chat",
      {
        repository_path: repositoryPath,
        question,
      }
    );
  
    return response.data;
  };