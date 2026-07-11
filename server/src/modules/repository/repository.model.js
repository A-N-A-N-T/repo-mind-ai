import mongoose from "mongoose";

const repositorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    repoUrl: {
      type: String,
      required: true,
      trim: true,
    },

    owner: {
      type: String,
      required: true,
      trim: true,
    },

    repoName: {
      type: String,
      required: true,
      trim: true,
    },

    branch: {
      type: String,
      default: "main",
    },

    status: {
      type: String,
      enum: ["processing", "completed", "failed"],
      default: "processing",
    },
    lastAnalyzedAt: {
        type: Date,
        default: null,
    }
  },
  {
    timestamps: true,
  }
);

export const Repository = mongoose.model(
  "Repository",
  repositorySchema
);