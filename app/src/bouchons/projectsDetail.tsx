import { Key } from "react";
import { adminsi, cesinova, conceptionbdd, cozyhomes1, cozyhomes2, github, dbmanager, easySave, funkytown, internship, portfolio, www, easysave2, easysave1 } from "../assets/_export.tsx";
import { IProjectDetail } from "../interface/IProjectDetail.tsx";


export const projectsDetail: IProjectDetail[] = [
    {
        idProject : 1,
        images : [{image: cozyhomes2, height: '80%'}, {image: cozyhomes1, height: '80%'}],
        title : "project-title-cozyhomes",
        detail : ["project-detail-cozyhomes1","project-detail-cozyhomes2"],
        projectType : "project-type-personnal",
        contentHeight: "90%"
    },
    {
        idProject : 2,
        images : [{image: easySave, height: '85%'}, {image: easysave1, height: '85%'}, {image: easysave2, height: '85%'}],
        title : "project-title-easysave",
        detail : ["project-description-easysave"],
        projectType : "project-type-academic",
        contentHeight: "80%"
    },
    {
        idProject : 3,
        images : [portfolio],
        title : "project-title-portfolio",
        detail : ["project-description-portfolio"],
        projectType : "project-type-personnal",
        contentHeight: "80%"
    },
    {
        idProject : 4,
        images : [dbmanager],
        title : "project-title-dbmanager",
        detail : ["project-description-dbmanager"],
        projectType : "project-type-academic",
        contentHeight: "80%"
    },
    {
        idProject : 5,
        images : [internship],
        title : "project-title-internship-website",
        detail : ["project-description-internship-website"],
        projectType : "project-type-academic",
        contentHeight: "80%"
    },
    {
        idProject : 6,
        images : [adminsi],
        title : "project-title-adminsi",
        detail : ["project-description-adminsi"],
        projectType : "project-type-academic",
        contentHeight: "80%"
    },
    {
        idProject : 7,
        images : [conceptionbdd],
        title : "project-title-conceptionbdd",
        detail : ["project-description-conceptionbdd"],
        projectType : "project-type-academic",
        contentHeight: "80%"
    },
    {
        idProject : 8,
        images : [cesinova],
        title : "project-title-cesinova",
        detail : ["project-description-cesinova"],
        projectType : "project-type-associative",
        contentHeight: "80%"
    },
    {
        idProject : 9,
        images : [funkytown],
        title : "project-title-funkytown",
        detail : ["project-description-funkytown"],
        projectType : "project-type-academic",
        contentHeight: "80%"
    },
    {
        idProject : 10,
        images : [www],
        title : "project-title-www",
        detail : ["project-description-www"],
        projectType : "project-type-academic",
        contentHeight: "80%"
    },
    {
        idProject : 11,
        images : [github],
        title : "project-title-github",
        detail : ["project-description-github"],
        projectType : "project-type-personnal",
        contentHeight: "80%"
    },
];

export const getProject = (idProject : Key) : IProjectDetail => {
    const project = projectsDetail.find(project => project.idProject === idProject);
    if (project) {
        return project;
    } else {
        return projectsDetail[0];
    }
}
export const getDefaultProject = () : IProjectDetail => {
        return projectsDetail[0];
}