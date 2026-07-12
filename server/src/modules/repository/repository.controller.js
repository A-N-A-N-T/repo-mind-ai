import { createRepository , chatRepository } from "./repository.service.js";
import { parseGithubUrl } from "../../utils/github.js";

export const create = async (req, res) => {
  try {

    const { repoUrl } = req.body;

    const { owner, repoName } = parseGithubUrl(repoUrl);

    const repository = await createRepository({
      userId: req.user.id,
      repoUrl,
      owner,
      repoName,
      branch: "main",
    });

    res.status(201).json({
      success: true,
      message: "Repository saved successfully",
      data: repository,
    });

  } catch (error) {

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });

  }
};



export const chat = async (req, res) => {

  try {

    const { repositoryId, question } = req.body;

    const response = await chatRepository({

      repositoryId,

      question,

      userId: req.user.id,

    });

    res.status(200).json({

      success: true,

      data: response,

    });

  } catch (error) {

    res.status(error.statusCode || 500).json({

      success: false,

      message: error.message,

    });

  }

};