import React from "react";
import IProjectAbstract from "../interface/IProjectAbstract";

interface ProjectCardProps {
    project: IProjectAbstract;
  }
const ProjectCard = ({project}: ProjectCardProps) => {
    const imagePath = `../assets/img/${project.image}`;
    console.log(imagePath)
    return(
        <div className="project-card-container">
            <img alt={project.title} src={imagePath}></img>
            <h1>{project.title}</h1>
            <span>{project.projectType}</span>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectCard;