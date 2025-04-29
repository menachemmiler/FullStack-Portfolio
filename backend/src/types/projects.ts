import { Types } from "mongoose";

export interface ProjectData {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    liveLink?: string;
  }
  
  export interface IProject extends Document {
    _id: Types.ObjectId;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    githubClient?: string;
    githubServer?: string;
    githubAll?: string;
    liveLink?: string;
  }