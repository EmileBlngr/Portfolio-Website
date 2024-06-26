import React, { useEffect, useState } from "react";
import { Avatar, Button, Drawer, Icon, useTheme } from "@mui/material";
import { LinkedIn, GitHub } from '@mui/icons-material';
import { photoEmile } from "../assets/_export.tsx";
import '../styles/components/profile.css';
import { FormattedMessage } from "react-intl";

export default function NavigationTabs() {
    const theme = useTheme()
    const [isMobile, setIsMobile] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const email = `emile.boulanger2@gmail.com`
    
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1185);
        };
        handleResize(); // Appel initial pour définir le bon état au chargement
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      
    const handleToggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    return(
        <div className="profile-container">
            {isMobile ? (
                <Button onClick={handleToggleDrawer}>
                    <Avatar
                        alt="photo Emile" 
                        src={photoEmile}
                        sx={{ width:40, height: 40, borderColor:theme.palette.primary.main, border:2}}/>
                    {drawerOpen ? (
                        <Icon>expand_less</Icon>
                    ) : (
                        <Icon>expand_more</Icon>
                    )
                }
                    
                </Button>
            ) : (
            <>
            <Avatar
            alt="photo Emile" 
            src={photoEmile}
            sx={{ width:176, height: 176, borderColor:theme.palette.primary.main, border:2}}/>
            <h2>Emile BOULANGER</h2>
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
            </>           
            )}
            
            <Drawer 
            anchor="bottom" 
            open={isMobile && drawerOpen} 
            onClose={handleToggleDrawer}
            className="profile-content"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Avatar
                alt="photo Emile" 
                src={photoEmile}
                sx={{ width:150, height: 150, border:2, borderColor:theme.palette.primary.main, alignSelf: 'center'}}/>
                <h2>Emile BOULANGER</h2>
                <h4><FormattedMessage id="profileTitle"/></h4>
                <div className="profile-lines">
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
                
            </Drawer>   
        </div>
    );
}