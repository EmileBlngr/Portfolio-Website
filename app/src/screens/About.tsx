import React from "react";
import { FormattedMessage } from 'react-intl';
import { styled, Theme, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
// Use Alert if we want to display an import message

const Citation = styled(Typography)(({ theme }: { theme: Theme }) => ({
    textAlign: 'center',
    paddingBottom: '3%',
    paddingInline: '20%',
    paddingTop: '3%',
    [theme.breakpoints.down('md')]: {
        paddingInline: '5%',
        fontSize: '1.1em',
    },
    [theme.breakpoints.down('sm')]: {
        paddingInline: '5%',
        paddingBottom: '2%',
        fontSize: '1.3em',
    },
}));

const PresentationSentence = styled(Typography)(({ theme }: { theme: Theme }) => ({
    paddingBottom: '3%',
    paddingInline: '5%',
    textIndent: '2%',
    letterSpacing: '0.8px',
    color: 'black',
    textAlign: 'justify',
    [theme.breakpoints.down('md')]: {
        paddingBottom: '1%',
        fontSize: '0.9em',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.1em',
        paddingBottom: '3%',
        textIndent: '5%',
        textAlign: 'justify'
    },
}));

const BoxGlobalAbout = styled(Typography)(({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.down('sm')]: {
        paddingBottom: '15%',
        paddingInline: '2%',
    },
}));

export default function About() {
    return(
        <BoxGlobalAbout>
            <Alert 
            sx={{marginInline:'5%', marginTop: '2%'}}
            variant="filled" 
            severity="info">
                <FormattedMessage id="about-internship-search"/>
            </Alert>
            <Citation variant="h2">
                <FormattedMessage id="about-citation"/>
            </Citation>
            
            <PresentationSentence>
                <FormattedMessage id="about-presentation-1"/>
            </PresentationSentence>

            <PresentationSentence>
                <FormattedMessage id="about-presentation-2"/>
            </PresentationSentence>

            <PresentationSentence>
                <FormattedMessage id="about-presentation-3"/>
            </PresentationSentence>
            <PresentationSentence>
                <FormattedMessage id="about-presentation-4"/>
            </PresentationSentence>
            <PresentationSentence>
                <FormattedMessage id="about-presentation-5"/>
            </PresentationSentence>
        </BoxGlobalAbout>
    );
}