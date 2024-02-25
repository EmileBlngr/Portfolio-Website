import React, { useEffect, useState } from "react";
import { FormattedMessage } from 'react-intl';

//import '../styles/screens/projects.css'
import Title from "../components/Title.tsx";

export default function Projects() {

    return(
        <div className="container-global-accueil">
            <Title>{<FormattedMessage id="projectsTab"/>}</Title>
        </div>
    );
}