import React from "react";
import { FormattedMessage } from 'react-intl';
//import composants timeline
import '../styles/screens/career.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, useTheme } from "@mui/material";

export default function Career() {
    const theme = useTheme()
    return(
        <div>
            <div className="timeline-container">
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                        },
                    }}
                    >
                    <Typography component="span" sx={{fontSize: 22, fontWeight: 600, marginBottom: '2%' }}>
                        <FormattedMessage id="career-academic-career"/>
                    </Typography>
                    <TimelineItem>
                        <TimelineSeparator>  
                            <TimelineConnector  sx={{backgroundColor: theme.palette.primary.main}}/>
                                <TimelineDot sx={
                                    {borderColor: theme.palette.primary.main, 
                                    backgroundColor: theme.palette.primary.contrastText}}/>
                            <TimelineConnector sx={{backgroundColor: theme.palette.primary.main}}/>
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography component="span" sx={{fontSize: 17, fontWeight: 600}}>
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
                        <Typography component="span" sx={{fontSize: 17, fontWeight: 600}}>
                            <FormattedMessage id="career-bac-diplome"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.contrastText, fontSize: 14}}>
                            2018-2021 | <FormattedMessage id="career-bac"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-bac-text"/>
                        </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    
                    <Typography component="span" sx={{fontSize: 22, fontWeight: 600, marginBottom: '2%', marginTop: '4%' }}>
                        <FormattedMessage id="career-professional-career"/>
                    </Typography>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector  sx={{backgroundColor: theme.palette.primary.main}}/>
                                <TimelineDot sx={
                                    {borderColor: theme.palette.primary.main, 
                                    backgroundColor: theme.palette.primary.contrastText}}/>
                            <TimelineConnector sx={{backgroundColor: theme.palette.primary.main}}/>
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography component="span" sx={{fontSize: 17, fontWeight: 600}}>
                            <FormattedMessage id="career-watsoft-exp"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.contrastText, fontSize: 14}}>
                            <FormattedMessage id="career-watsoft"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-watsoft-text1"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-watsoft-text2"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-watsoft-text3"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-watsoft-text4"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-watsoft-text5"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-watsoft-text6"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-watsoft-text7"/>
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
                        <Typography component="span" sx={{fontSize: 17, fontWeight: 600}}>
                            <FormattedMessage id="career-cgi-exp"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.contrastText, fontSize: 14}}>
                            <FormattedMessage id="career-cgi"/>
                        </Typography>
                        <Typography sx={{color: theme.palette.primary.dark, fontSize: 14}}>
                            <FormattedMessage id="career-cgi-text"/>
                        </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>   
        </div>
    );
}