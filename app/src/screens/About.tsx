import React from "react";
import { FormattedMessage } from 'react-intl';
import '../styles/screens/about.css'
import Alert from '@mui/material/Alert';

export default function About() {
    return(
        <div className="container-global-about">
            <p className="citation">
                <FormattedMessage id="about-citation"/>
            </p>
            <Alert 
            sx={{marginInline:'10%', marginBottom: '2%'}}
            variant="filled" 
            severity="info">
                Je suis à la recherche d'un stage de développeur fullsatck de septembre 2024 à janvier 2025.
            </Alert>
            <div className="presentation-sentence">
                <FormattedMessage id="about-presentation-1"/>
            </div>

            <div className="presentation-sentence">
                <FormattedMessage id="about-presentation-2"/>
            </div>

            <div className="presentation-sentence">
                <FormattedMessage id="about-presentation-3"/>
            </div>
            <div className="presentation-sentence">
                <FormattedMessage id="about-presentation-4"/>
            </div>
            <div className="presentation-sentence">
                <FormattedMessage id="about-presentation-5"/>
            </div>
        </div>
    );
}