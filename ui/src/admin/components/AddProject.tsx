import { Button, TextField } from "@mui/material";
import { IProjectForm } from "../../utils/interfaces";
import { SendIcon } from "lucide-react";

interface AddProjectProps {
  project: IProjectForm;
  setProject: React.Dispatch<React.SetStateAction<IProjectForm>>;
  handleSubmit: (e: React.FormEvent) => void;
  imageError?: boolean;
}

const AddProject = ({
  project,
  setProject,
  handleSubmit,
  imageError,
}: AddProjectProps) => {
  return (
    <div className="add-project">
      <div className="header">
        <h2>Add New Project</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="title"
          label="Project Title"
          value={project.title}
          variant="filled"
          onChange={(e) => setProject({ ...project, title: e.target.value })}
          required
          size="small"
        />
        <TextField
          id="description"
          label="Project Description"
          value={project.description}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
          variant="filled"
          required
          size="small"
        />
        <TextField
          label="Project Live Link"
          id="liveLink"
          value={project.liveLink}
          onChange={(e) => setProject({ ...project, liveLink: e.target.value })}
          required
          variant="filled"
          size="small"
        />
        <TextField
          id="backendLink"
          label="Backend Server Link"
          value={project.backendLink}
          variant="filled"
          onChange={(e) =>
            setProject({ ...project, backendLink: e.target.value })
          }
          size="small"
        />
        <TextField
          id="fullDescription"
          value={project.fullDescription}
          label="Full Description"
          multiline
          rows={3}
          variant="filled"
          onChange={(e) =>
            setProject({ ...project, fullDescription: e.target.value })
          }
          required
          size="small"
        />
        <TextField
          id="githubClient"
          label="Github Client Link"
          value={project.githubClient}
          variant="filled"
          onChange={(e) =>
            setProject({ ...project, githubClient: e.target.value })
          }
          size="small"
        />
        <TextField
          id="githubServer"
          label="Github Server Link"
          value={project.githubServer}
          variant="filled"
          onChange={(e) =>
            setProject({ ...project, githubServer: e.target.value })
          }
          size="small"
        />
        <TextField
          id="githubAll"
          label="Github All Link"
          value={project.githubAll}
          variant="filled"
          onChange={(e) =>
            setProject({ ...project, githubAll: e.target.value })
          }
          size="small"
        />
        <div className="image">
          <p
            className={
              project.image.size
                ? ""
                : imageError
                ? "no-file-chosen error-blinking"
                : "no-file-chosen"
            }
          >
            {project.image.name}
          </p>
          <Button component="label" role={undefined} variant="outlined">
            Project Image +
            <input
              hidden
              type="file"
              multiple
              onChange={(e) =>
                setProject({
                  ...project,
                  image: e.target.files ? e.target.files[0] : new File([], ""),
                })
              }
            />
          </Button>
        </div>
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Save Project
        </Button>
      </form>
    </div>
  );
};

export default AddProject;
