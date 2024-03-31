import React from "react";
import IProjectAbstract from "../interface/IProjectAbstract.tsx";

import projectsAbstract from "../bouchons/projectsAbstract.tsx";
import ProjectsList from "../components/Projects/ProjectsList.tsx";

export default function Projects() {

    const projectsList :IProjectAbstract[] = projectsAbstract;

    return(
        <div className="container-global-projects">
            <ProjectsList projects={projectsList} />
        </div>
    );
}