import React from "react";
import { FormattedMessage } from 'react-intl';
import IProjectAbstract from "../interface/IProjectAbstract.tsx";

//import '../styles/screens/projects.css'
import Title from "../components/Title.tsx";
import projectsAbstract from "../bouchons/projectsAbstract.tsx";
import ProjectsList from "../components/ProjectsList.tsx";

export default function Projects() {

    const projectsList :IProjectAbstract[] = projectsAbstract;

    return(
        <div className="container-global-projects">
            <ProjectsList projects={projectsList} />
        </div>
    );
}