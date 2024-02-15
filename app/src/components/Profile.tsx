import React from "react";
import { Avatar, Icon, useTheme } from "@mui/material";
import { photoEmile } from "../assets/_export.tsx";
import '../styles/components/profile.css';

export default function NavigationTabs() {
    const theme = useTheme()
    return(
        <div className="profile-content">
            <Avatar
                alt="photo Emile" 
                src={photoEmile}
                sx={{ width:176, height: 176, borderColor:theme.palette.primary.main, border:2}}/>
            <h2>Emile Boulanger</h2>
            <h4>Etudiant ingénieur en informatique</h4>
            <div>
                <Icon>add_circle</Icon>
            </div>
        </div>
    );
}