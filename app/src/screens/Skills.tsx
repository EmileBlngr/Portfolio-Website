import React, { useEffect, useState } from "react";
import { FormattedMessage } from 'react-intl';

//import '../styles/screens/skills.css'
import Title from "../components/Title.tsx";

export default function Skills() {

    return(
        <div className="container-global-accueil">
            <Title>{<FormattedMessage id="skillsTab"/>}</Title>
        </div>
    );
}