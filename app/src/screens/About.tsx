import React, { useEffect, useState } from "react";
import { FormattedMessage } from 'react-intl';
import '../styles/screens/about.css'

import Title from "../components/Title.tsx";
import { useTheme } from "@mui/material";

export default function About() {
    return(
        <div className="container-global-content">
            <Title>{<FormattedMessage id="aboutTab"/>}</Title>
            <p className="citation">
                <FormattedMessage id="about-citation"/>
            </p>
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