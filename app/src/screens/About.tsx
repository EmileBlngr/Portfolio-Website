import React from "react";
import { FormattedMessage } from 'react-intl';
import '../styles/screens/about.css'
import { Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
// Use Alert if we want to display an import message

export default function About() {
    return(
        <div className="container-global-about">
            <Alert 
            sx={{marginInline:'5%', marginTop: '2%'}}
            variant="filled" 
            severity="info">
                <FormattedMessage id="about-internship-search"/>
            </Alert>
            <Typography variant="h2" className="citation">
                <FormattedMessage id="about-citation"/>
            </Typography>
            
            <Typography className="presentation-sentence">
                <FormattedMessage id="about-presentation-1"/>
            </Typography>

            <Typography className="presentation-sentence">
                <FormattedMessage id="about-presentation-2"/>
            </Typography>

            <Typography className="presentation-sentence">
                <FormattedMessage id="about-presentation-3"/>
            </Typography>
            <Typography className="presentation-sentence">
                <FormattedMessage id="about-presentation-4"/>
            </Typography>
            <Typography className="presentation-sentence">
                <FormattedMessage id="about-presentation-5"/>
            </Typography>
        </div>
    );
}