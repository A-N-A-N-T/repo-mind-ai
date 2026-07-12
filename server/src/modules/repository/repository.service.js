import { Repository } from "./repository.model.js";
import { analyzeRepository , chatWithRepository } from "../../services/ai/ai.service.js";
import fastapi from "../../utils/fastapi.js";

export const createRepository = async ({
  userId,
  repoUrl,
  owner,
  repoName,
  branch,
}) => {

  const existingRepo = await Repository.findOne({
    user: userId,
    repoUrl,
  });

  if (existingRepo) {
    const error = new Error("Repository already exists");
    error.statusCode = 409;
    throw error;
  }

  const repository = await Repository.create({
    user: userId,
    repoUrl,
    owner,
    repoName,
    branch,
  });

  // Call FastAPI AI Service
  const analysis = await analyzeRepository(
    repository._id.toString(),
    repoUrl
  );

  repository.localPath = analysis.localPath;
  repository.status = "completed";
  repository.lastAnalyzedAt = new Date();

  await repository.save();

  return repository;
};



export const chatRepository = async ({
  repositoryId,
  question,
  userId,
}) => {
  const repository = await Repository.findOne({
    _id: repositoryId,
    user: userId,
  });

  if(!repository){
    const error = new Error("Repository not found");
    error.statusCode = 404;
    throw error;
  }

  if (repository.status !== "completed") {
    const error = new Error(
      "Repository analysis is not completed yet."
    );
    error.statusCode = 400;
    throw error;
  }

  const answer = await chatWithRepository({
    repositoryPath: repository.localPath,
    question,
  });

  return answer;

};