import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import loading from '../../assets/loading.gif';
import PageTransition from '../../components/PageTransition/PageTransition';
import { RootState } from '../../redux/store';
import { DataStatus } from '../../utils/interfaces';
import ProjectCard from './ProjectCard';
import './projects.css';

const Projects = () => {
  const { error, projects, status } = useSelector((state: RootState) => state.projects);

  return (
    <PageTransition>
      <Helmet>
        <title>מנחם מילר - פרויקטים</title>
        <meta name="description" content="כאן תוכלו לראות את כל הפרויקטים שבניתי..." />
      </Helmet>
      <div className="page-projects">
        <section className="projects-section">
          {status === DataStatus.LOADING && <img src={loading} alt="Loading..." />}
          {status === DataStatus.FAILED && <p style={{ color: 'red' }}>{error}</p>}
          {status === DataStatus.SUCCESS && (
            <>
              <div className="projects-flex">
                <div className="projects-flex-top">
                  <h2>My Projects</h2>
                  <h4>
                    A collection of my recent work. Each project is built with attention to detail
                    and a commitment to quality.
                  </h4>
                </div>
                {projects &&
                  projects.map((project) => <ProjectCard key={project._id} project={project} />)}
              </div>
            </>
          )}
        </section>
      </div>
    </PageTransition>
  );
};

export default Projects;
