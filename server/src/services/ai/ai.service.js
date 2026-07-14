import fastapi from "../../utils/fastapi.js";

export const analyzeRepository = async (
  repositoryId,
  repoUrl
) => {

  try {
    const response = await fastapi.post("/repository/analyze", {
        repositoryId,
        repoUrl,
    });

    console.log(response.data);

    return response.data;

  } catch (err) {

    console.log("FASTAPI ERROR");

    console.log(err.response?.status);

    console.log(err.response?.data);

    throw err;
  }
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