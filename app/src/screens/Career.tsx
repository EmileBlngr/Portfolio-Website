import React, { useEffect, useState } from "react";
import { FormattedMessage } from 'react-intl';
//import composants timeline

import '../styles/screens/career.css'
import Title from "../components/Title.tsx";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { cesiIcon } from "../assets/_export.tsx";
import { Typography, useTheme } from "@mui/material";

export default function Career() {
    const theme = useTheme()
    return(
        <div className="container-global-accueil">
            <Title>{<FormattedMessage id="careerTab"/>}</Title>
            <div className="timeline-container">
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                        },
                    }}
                    >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector  sx={{backgroundColor: theme.palette.primary.main}}/>
                                <TimelineDot sx={
                                    {borderColor: theme.palette.primary.main, 
                                    backgroundColor: theme.palette.primary.contrastText}}/>
                            <TimelineConnector sx={{backgroundColor: theme.palette.primary.main}}/>
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography component="span" sx={{fontSize: 17}}>
                            <FormattedMessage id="career-cesi-diplome"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.contrastText, fontSize: 14}}>
                            2021-2026 / <FormattedMessage id="career-cesi"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-cesi-text"/>
                        </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector  sx={{backgroundColor: theme.palette.primary.main}}/>
                                <TimelineDot sx={
                                    {borderColor: theme.palette.primary.main, 
                                    backgroundColor: theme.palette.primary.contrastText}}/>
                            <TimelineConnector sx={{backgroundColor: theme.palette.primary.main}}/>
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography component="span" sx={{fontSize: 17}}>
                            <FormattedMessage id="career-bac-diplome"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.contrastText, fontSize: 14}}>
                            2018-2021 / <FormattedMessage id="career-bac"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-bac-text"/>
                        </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>   
        </div>
    );
}