import { IProject } from "../../utils/interfaces";

interface Props {
  project: IProject;
}

const EditProjectCard = ({ project }: Props) => {
  return (
    <div key={`${project}`} className="edit-project-card">
      <div className="edit-project-image">
        <img src={`${project.image}`} alt={`${project.title} img`} />
      </div>
      <div className="edit-project-content">
        <div className="edit-project-text">
          <h3>{`${project.title}`}</h3>
          <p>{`${project.description}`}</p>
        </div>
        <div className="edit-project-buttons">
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
          </div>
      </div>
    </div>
  );
};

export default EditProjectCard;
