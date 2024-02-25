import React, { useEffect, useState } from "react";
import { FormattedMessage } from 'react-intl';

//import '../styles/screens/career.css'
import Title from "../components/Title.tsx";

export default function Career() {

    return(
        <div className="container-global-accueil">
            <Title>{<FormattedMessage id="careerTab"/>}</Title>
        </div>
    );
}