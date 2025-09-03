import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Drawer, Icon, styled, Theme, Typography, useTheme } from "@mui/material";
import { LinkedIn, GitHub } from '@mui/icons-material';
import { photoEmile } from "../assets/_export.tsx";
import '../styles/components/profile.css';
import { FormattedMessage } from "react-intl";

const ProfileBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  height: '100%',
  paddingTop: '3%',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  margin: 'auto',
  [theme.breakpoints.down('lg')]: {
      paddingTop: '0%'
  },
}));

const NameText = styled(Typography)(() => ({
  marginBottom: 0,
  marginTop: 15,
  color: 'black'
}));

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
        <ProfileBox>
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
            <Typography variant="h1" sx={{pt: 3}}>
                Emile BOULANGER
            </Typography>
            <Typography sx={{pt: 3, pb: 2,fontWeight: 'bold'}}>
                <FormattedMessage id="profileTitle"/>
            </Typography>
            <div className="row">
                <Icon className="flex-1">call</Icon>
                <Typography className="flex-6">+33.6.38.66.41.18</Typography>
            </div>
            <div className="row">
                <Icon className="flex-1">mail</Icon>
                <Typography className="flex-6">{email}</Typography>
            </div>
            <div className="row">
                <Icon className="flex-1">pin_drop</Icon>
                <Typography className="flex-6">Bruges, Gironde, France</Typography>
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
                <NameText variant="h1">Emile BOULANGER</NameText>
                <h4><FormattedMessage id="profileTitle"/></h4>
                <div className="profile-lines">
                    <div className="row">
                        <Icon className="flex-1">call</Icon>
                        <Typography className="flex-6">+33.6.38.66.41.18</Typography>
                    </div>
                    <div className="row">
                        <Icon className="flex-1">mail</Icon>
                        <Typography className="flex-6">{email}</Typography>
                    </div>
                    <div className="row">
                        <Icon className="flex-1">pin_drop</Icon>
                        <Typography className="flex-6">Bruges, Gironde, France</Typography>
                    </div>
                    <div className="row">
                        <LinkedIn className="flex-1" />
                        <Typography
                            className="flex-6"
                            component="a"
                            href="https://www.linkedin.com/in/emileboulanger/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin/emileboulanger
                        </Typography>
                    </div>
                    <div className="row">
                        <GitHub className="flex-1" />
                        <Typography
                            className="flex-6"
                            component="a"
                            href="https://github.com/EmileBlngr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github/EmileBlngr
                        </Typography>
                    </div>
                </div>         
            </Drawer>   
        </ProfileBox>
    );
}