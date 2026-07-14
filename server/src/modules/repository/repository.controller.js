import { createRepository , chatRepository , getRepositories , getRepositoryById , deleteRepository } from "./repository.service.js";
import { parseGithubUrl } from "../../utils/github.js";
import { analyzeRepository } from "../../services/ai/ai.service.js";
import asyncHandler from "../../utils/asyncHandler.js";

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




export const getAll = asyncHandler(async (req, res) => {

    const repositories = await getRepositories(
        req.user.id
    );

    res.status(200).json({

        success: true,

        data: repositories,

    });

});


export const analyze = async (req, res) => {

    try {

        const repository =
            await getRepositoryById(
                req.params.id,
                req.user.id
            );

        const result =
            await analyzeRepository({

                repositoryId:
                    repository._id,

                repoUrl:
                    repository.repoUrl,

            });

        await Repository.findByIdAndUpdate(
            repository._id,
            {
                status: "completed",
                lastAnalyzedAt: new Date(),
            }
        );

        res.json({
            success: true,
            data: result,
        });

    } catch (error) {

        res.status(error.statusCode || 500)
            .json({

                success: false,

                message: error.message,

            });

    }

};


export const remove = asyncHandler(async (req, res) => {

  await deleteRepository(

      req.params.id,

      req.user.id,

  );

  res.status(200).json({

      success: true,

      message: "Repository deleted successfully",

  });

});


export const getOne = asyncHandler(async (req, res) => {

  const repository = await getRepositoryById(

      req.params.id,

      req.user.id,

  );

  res.status(200).json({

      success: true,

      data: repository,

  });

});