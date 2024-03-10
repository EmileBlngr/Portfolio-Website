import React from "react";
import IProjectAbstract from "../interface/IProjectAbstract";
import ProjectCard from "./ProjectCard.tsx";
import "../styles/components/projectsList.css";

interface ProjectsListProps {
    projects: IProjectAbstract[];
  }
const ProjectsList = ({projects}: ProjectsListProps) => {
    return(
        <div className="projects-list-container">
            {projects.map(project => {
                return <ProjectCard key={project.idProject} project={project}/>
            })}
        </div>
    );
}

export default ProjectsList;