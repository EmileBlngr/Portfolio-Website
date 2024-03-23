import { Key } from "react";

export interface IProjectDetail {
    idProject: Key;
    images: IImageDetail[];
    title: string;
    detail: string[];
    contentHeight: string;
    projectType: string;
}

export interface IImageDetail {
    image: string,
    height: string
}
