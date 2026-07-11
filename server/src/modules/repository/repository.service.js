import { Repository } from "./repository.model.js";

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

  return repository;
};