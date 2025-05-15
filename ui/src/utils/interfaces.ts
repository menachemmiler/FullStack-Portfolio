export interface IProject {
  _id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  backendLink?: string;
  githubClient?: string;
  githubServer?: string;
  githubAll?: string;
  liveLink: string;
}

export interface IProjectForm {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  liveLink: string;
  backendLink?: string;
  githubClient?: string;
  githubServer?: string;
  githubAll?: string;
}

export interface IUser {
  _id?: string;
  username: string;
  password: string;
}

export enum DataStatus {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  IDLE = "IDLE",
}

export interface userState {
  error: string | null;
  status: DataStatus;
  user: null | IUser;
  data?: any;
}

export interface projectState {
  error: string | null;
  status: DataStatus;
  projects: null | IProject[];
  // data?: any;
}
