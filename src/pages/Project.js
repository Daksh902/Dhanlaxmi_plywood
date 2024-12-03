import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axiosInstance.get('/projects');
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-page">
      <h2>Our Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <img src={project.images[0]} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
