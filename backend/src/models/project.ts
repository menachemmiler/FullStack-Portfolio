import { Schema, Document, model } from "mongoose";




export interface IProject extends Document {
  projectName: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  link: string
  clientGit?: string;
  serverGit?: string;
  generalGit?: string;
}

const projectSchema = new Schema<IProject>({
  projectName: { type: String, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  clientGit: { type: String},
  serverGit: { type: String },
  generalGit: { type: String },
});

export default model<IProject>("Project", projectSchema);
