import React from "react";
import { Avatar, Icon, useTheme } from "@mui/material";
import { LinkedIn, GitHub } from '@mui/icons-material';
import { photoEmile } from "../assets/_export.tsx";
import '../styles/components/profile.css';
import { FormattedMessage } from "react-intl";

export default function NavigationTabs() {
    const theme = useTheme()
    const email = `emile.boulanger2@gmail.com`
    return(
        <div className="profile-content">
            <Avatar
            alt="photo Emile" 
            src={photoEmile}
            sx={{ width:176, height: 176, borderColor:theme.palette.primary.main, border:2}}/>
            <h2>Emile Boulanger</h2>
            <h4><FormattedMessage id="profileTitle"/></h4>
            <div className="row">
                <Icon className="flex-1">call</Icon>
                <span className="flex-6">+33.6.38.66.41.18</span>
            </div>
            <div className="row">
                <Icon className="flex-1">mail</Icon>
                <span className="flex-6">{email}</span>
            </div>
            <div className="row">
                <Icon className="flex-1">pin_drop</Icon>
                <span className="flex-6">Bruges, Gironde, France</span>
            </div>
            <div className="row">
                <LinkedIn className="flex-1"></LinkedIn>
                <a className="flex-6" href="https://www.linkedin.com/in/emileboulanger/">Linkedin/emileboulanger</a>
            </div>
            <div className="row">
                <GitHub className="flex-1"></GitHub>
                <a className="flex-6" href="https://github.com/EmileBlngr">Github/EmileBlngr</a>
            </div>
        </div>
    );
}