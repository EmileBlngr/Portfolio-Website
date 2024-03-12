import { Key } from "react";

interface IProjectDetail {
    idProject: Key;
    images: string[];
    title: string;
    detail: string[];
    contentHeight: string;
    projectType: string;
}
export default IProjectDetail;