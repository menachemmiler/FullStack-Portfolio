export interface IProject {
  _id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  githubClient?: string;
  githubServer?: string;
  githubAll?: string;
  liveLink?: string;
}
