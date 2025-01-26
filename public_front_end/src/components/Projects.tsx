import ProjectCard from "./ProjectCard";

export interface Project {
  id?: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  githubClient?: string;
  githubServer?: string;
  githubAll?: string;
  liveLink?: string;
}

// Example usage
const exampleProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    fullDescription:
      "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, and payment integration...",
    image:
      "data:image/jpeg;base64,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",
    githubClient: "https://github.com/username/ecommerce-client",
    githubServer: "https://github.com/username/ecommerce-server",
    liveLink: "https://myecommercesite.com",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    fullDescription:
      "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, and payment integration...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumO8zY93z1951gaNi0EuLRVfK9A1r3pBtOQ&s",
    githubClient: "https://github.com/username/ecommerce-client",
    liveLink: "https://myecommercesite.com",
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    fullDescription:
      "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, and payment integration...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumO8zY93z1951gaNi0EuLRVfK9A1r3pBtOQ&s",
    githubServer: "https://github.com/username/ecommerce-server",
    liveLink: "https://myecommercesite.com",
  },
  {
    id: "4",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    fullDescription:
      "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, and payment integration...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumO8zY93z1951gaNi0EuLRVfK9A1r3pBtOQ&s",
    githubAll: "https://github.com/username/ecommerce-server",
    liveLink: "https://myecommercesite.com",
  },
  {
    id: "5",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    fullDescription:
      "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, and payment integration...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumO8zY93z1951gaNi0EuLRVfK9A1r3pBtOQ&s",
    liveLink: "https://myecommercesite.com",
  },
];

const Projects = () => (
  <div className="page">
    <section className="projects-section">
      <h2>My projects</h2>
      <div className="projects-flex">
        {exampleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  </div>
);

export default Projects;
