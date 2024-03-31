import { Key } from "react";
import { adminsi, cozyhomes1, cozyhomes2, github, dbmanager, easySave, internship, 
    portfolio, www, easysave2, easysave1, internship1, internship3, internship4, internship2, 
    adminsi1, conceptionbdd1, funkytown1, funkytown2, funkytown3, www2, www1 } from "../assets/_export.tsx";
import { IProjectDetail } from "../interface/IProjectDetail.tsx";


export const projectsDetail: IProjectDetail[] = [
    {
        idProject : 1,
        images : [cozyhomes2, cozyhomes1],
        enableExtending: true,
        title : "project-title-cozyhomes",
        detail : ["project-detail-cozyhomes1","project-detail-cozyhomes2"],
        link : "https://github.com/EmileBlngr/CozyHomes",
        projectType : "project-type-personnal",
        contentHeight: "90%"
    },
    {
        idProject : 2,
        images : [easySave, easysave1, easysave2],
        enableExtending: true,
        title : "project-title-easysave",
        detail : ["project-description-easysave1", "project-description-easysave2"],
        link : "https://github.com/EmileBlngr/EasySave",
        projectType : "project-type-academic",
        contentHeight: "90%"
    },
    {
        idProject : 3,
        images : [portfolio],
        enableExtending: false,
        title : "project-title-portfolio",
        detail : ["project-description-portfolio1", "project-description-portfolio2"],
        link : "https://github.com/EmileBlngr/Portfolio-Website",
        projectType : "project-type-personnal",
        contentHeight: "90%"
    },
    {
        idProject : 4,
        images : [dbmanager],
        enableExtending: false,
        title : "project-title-dbmanager",
        detail : ["project-description-dbmanager1", "project-description-dbmanager2"],
        link : "",
        projectType : "project-type-academic",
        contentHeight: "80%"
    },
    {
        idProject : 5,
        images : [internship, internship1, internship2, internship3, internship4],
        enableExtending: true,
        title : "project-title-internship-website",
        detail : ["project-description-internship-website1", "project-description-internship-website2"],
        link : "https://github.com/Adarito49/Projet-Site-WEB",
        projectType : "project-type-academic",
        contentHeight: "90%"
    },
    {
        idProject : 6,
        images : [adminsi, adminsi1],
        enableExtending: true,
        title : "project-title-adminsi",
        detail : ["project-description-adminsi1", "project-description-adminsi2"],
        link : "",
        projectType : "project-type-academic",
        contentHeight: "90%"
    },
    {
        idProject : 7,
        images : [conceptionbdd1],
        enableExtending: true,
        title : "project-title-conceptionbdd",
        detail : ["project-description-conceptionbdd1", "project-description-conceptionbdd2"],
        link : "",
        projectType : "project-type-academic",
        contentHeight: "90%"
    },
    {
        idProject : 8,
        images : [funkytown2, funkytown1, funkytown3],
        enableExtending: true,
        title : "project-title-funkytown",
        detail : ["project-description-funkytown1", "project-description-funkytown2"],
        link : "",
        projectType : "project-type-academic",
        contentHeight: "90%"
    },
    {
        idProject : 9,
        images : [www, www1, www2],
        enableExtending: true,
        title : "project-title-www",
        detail : ["project-description-www1"],
        link : "",
        projectType : "project-type-academic",
        contentHeight: "90%"
    },
    {
        idProject : 10,
        images : [github],
        enableExtending: false,
        title : "project-title-github",
        detail : ["project-description-github"],
        link : "https://github.com/EmileBlngr",
        projectType : "project-type-personnal",
        contentHeight: "80%"
    },
    // {
    //     idProject : 8,
    //     images : [cesinova],
    //     enableExtending: true,
    //     title : "project-title-cesinova",
    //     detail : ["project-description-cesinova"],
    //     link : "",
    //     projectType : "project-type-associative",
    //     contentHeight: "80%"
    // },
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