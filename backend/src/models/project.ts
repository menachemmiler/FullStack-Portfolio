import { Schema, model } from "mongoose";
import { IProject } from "../types/projects";

const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  fullDescription: { type: String, required: true },
  image: { type: String, required: true },
  backendLink: { type: String, required: true },
  githubClient: { type: String },
  githubServer: { type: String },
  githubAll: { type: String },
  liveLink: { type: String },
});

export default model<IProject>("Project", projectSchema);
