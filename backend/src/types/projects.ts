export interface ProjectData {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  liveLink?: string;
}

export interface IProject extends Document {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  githubClient?: string;
  githubServer?: string;
  githubAll?: string;
  liveLink?: string;
}

export interface IProjectDTO {
  title: string;
  description: string;
  fullDescription: string;
  image: Express.Multer.File;
  githubClient?: string;
  githubServer?: string;
  githubAll?: string;
  liveLink?: string;
}

export interface ProjectDocument extends IProject {
  _id: string;
}

export interface Image extends Document {
  url: string;
  message: string;
}

export interface ImageDocument extends Image {
  _id: string;
}

export interface ImageDTO {
  file: Express.Multer.File;
}
