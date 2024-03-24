import { Key } from "react";

export interface IProjectDetail {
    idProject: Key;
    images: string[];
    enableExtending: boolean;
    title: string;
    detail: string[];
    link: string;
    contentHeight: string;
    projectType: string;
}
