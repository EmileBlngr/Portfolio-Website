import { adminsi, conceptionbdd, cozyHomes, dbmanager, easySave, funkytown, geogames, github, internship, portfolio, www } from "../assets/_export.tsx";
import IProjectAbstract from "../interface/IProjectAbstract";

const projectsAbstract: IProjectAbstract[] = [
    {
        idProject : 0,
        image : geogames,
        title : "project-title-geogames",
        description : "project-description-geogames",
        projectType : "project-type-personnal",
    },
    {
        idProject : 1,
        image : cozyHomes,
        title : "project-title-cozyhomes",
        description : "project-description-cozyhomes",
        projectType : "project-type-personnal",
    },
    {
        idProject : 2,
        image : easySave,
        title : "project-title-easysave",
        description : "project-description-easysave",
        projectType : "project-type-academic",
    },
    {
        idProject : 3,
        image : portfolio,
        title : "project-title-portfolio",
        description : "project-description-portfolio",
        projectType : "project-type-personnal",
    },
    {
        idProject : 4,
        image : dbmanager,
        title : "project-title-dbmanager",
        description : "project-description-dbmanager",
        projectType : "project-type-academic",
    },
    {
        idProject : 5,
        image : internship,
        title : "project-title-internship-website",
        description : "project-description-internship-website",
        projectType : "project-type-academic",
    },
    {
        idProject : 6,
        image : adminsi,
        title : "project-title-adminsi",
        description : "project-description-adminsi",
        projectType : "project-type-academic",
    },
    {
        idProject : 7,
        image : conceptionbdd,
        title : "project-title-conceptionbdd",
        description : "project-description-conceptionbdd",
        projectType : "project-type-academic",
    },
    {
        idProject : 8,
        image : funkytown,
        title : "project-title-funkytown",
        description : "project-description-funkytown",
        projectType : "project-type-academic",
    },
    {
        idProject : 9,
        image : www,
        title : "project-title-www",
        description : "project-description-www",
        projectType : "project-type-academic",
    },
    {
        idProject : 10,
        image : github,
        title : "project-title-github",
        description : "project-description-github",
        projectType : "project-type-personnal",
    },
];

export default projectsAbstract;