import React, { useEffect, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { englishIcon, franceIcon } from "../assets/_export.tsx";
import { AppBar, IconButton, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material";
//Icons
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InfoIcon from '@mui/icons-material/Info';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MenuIcon from '@mui/icons-material/Menu';


type LanguageChangeHandler = (selectedLocale: string) => void;

interface NavigationTabsProps {
  onLanguageChange: LanguageChangeHandler;
}

const NavigationTabs = ({onLanguageChange}: NavigationTabsProps) => {
    const intl = useIntl();
    const navigate = useNavigate();
    const [tab, setTab] = useState<Number>(0)
    const [tabName, setTabName] = useState<string>("aboutTab");
    const [language, setLanguage] = useState<String>(intl.defaultLocale)
    const [isMobile, setIsMobile] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleChange = (event: React.SyntheticEvent, newTab: number) => 
    {
      setTab(newTab);
    };
    //#region useEffects
    useEffect(() => {
      let route: string = "/";

      if (tab === undefined) setTab(0)
      switch (tab) {
        case 0:
          route = "/about"
          setTabName("aboutTab")
          break;
        case 1:
          route = "/career"
          setTabName("careerTab")
          break;
        case 2:
          route = "/projects"
          setTabName("projectsTab")
          break;
        case 3:
          route = "/skills"
          setTabName("skillsTab")
          break;
        case 4:
          openResume()
          break;
        default:
          route = "/"
          break;
      }
      navigate(route);  
    }, [tab])
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 700);
      };
      handleResize(); // Appel initial pour définir le bon état au chargement
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    //#endregion
    const handleLanguageChoose = (locale: string) => {
      setLanguage(locale)
      onLanguageChange(locale);
    };

    const handleToggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };

    const handleDrawerItemClick = (route: string, message: string) => {
      setDrawerOpen(false);
      navigate(route);
      setTabName(message)
    };
    
    const openResume = () => {
      window.open("./CV Emile Boulanger.pdf", "_blank");
      setTabName("resumeTab");
    }

    return(
      <div className="flex-row">
         {isMobile ? (
          <AppBar 
            position="static" 
            sx={{bgcolor:'white'}}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start" 
                aria-label="menu"
                sx={{ mr: 2, color:'#1e3885'}}
                onClick={handleToggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#1e3885' }}>
                <FormattedMessage id={tabName}/>
              </Typography>
            </Toolbar>
          </AppBar>
        ) : (
          <>
          <Tabs value={tab} onChange={handleChange} className="flex-1">
            <Tab label={<FormattedMessage id="aboutTab"/>} id="about" sx={{ fontWeight: tab === 0 ? 'bold' : 'normal' }}/>
            <Tab label={<FormattedMessage id="careerTab"/>} id="career" sx={{ fontWeight: tab === 1 ? 'bold' : 'normal' }}/>
            <Tab label={<FormattedMessage id="projectsTab"/>} id="projects" sx={{ fontWeight: tab === 2 ? 'bold' : 'normal' }}/>
            <Tab label={<FormattedMessage id="skillsTab"/>} id="skills" sx={{ fontWeight: tab === 3 ? 'bold' : 'normal' }}/>
            <Tab label={<FormattedMessage id="resumeTab"/>} id="resume" sx={{ fontWeight: tab === 4 ? 'bold' : 'normal' }}/> 
          </Tabs> 
          <ButtonGroup disableElevation size="small">
          <Button 
            onClick={() => handleLanguageChoose("fr")} 
            variant={language === 'fr' ? "contained" : "text"}
          >
            <img src={franceIcon} width={30} alt="French"/>
          </Button>
          <Button 
            onClick={() => handleLanguageChoose("en")} 
            variant={language === 'en' ? "contained" : "text"}
          >
            <img src={englishIcon}  width={30} alt="English"/>
          </Button>
        </ButtonGroup>
          </>
          
        )}
         <Drawer anchor="top" open={isMobile && drawerOpen} onClose={handleToggleDrawer}>
          <List>
            <ListItemButton onClick={() => handleDrawerItemClick("/about", "aboutTab")}>
            <ListItemIcon><InfoIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="aboutTab"/>}/>
            </ListItemButton>
            <ListItemButton onClick={() => handleDrawerItemClick("/career", "careerTab")}>
              <ListItemIcon><RocketLaunchIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="careerTab"/>} />
            </ListItemButton>
            <ListItemButton onClick={() => handleDrawerItemClick("/projects", "projectsTab")}>
              <ListItemIcon><DeveloperBoardIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="projectsTab"/>} />
            </ListItemButton>
            <ListItemButton onClick={() => handleDrawerItemClick("/skills", "skillsTab")}>
              <ListItemIcon><EmojiObjectsIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="skillsTab"/>} />
            </ListItemButton>
            <ListItemButton onClick={() => openResume()}>
              <ListItemIcon><PictureAsPdfIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="resumeTab"/>} />
            </ListItemButton>
          </List>
          <ButtonGroup disableElevation size="small">
            <Button 
              onClick={() => handleLanguageChoose("fr")} 
              variant={language === 'fr' ? "contained" : "text"}
            >
              <img src={franceIcon} width={30} alt="French"/>
            </Button>
            <Button 
              onClick={() => handleLanguageChoose("en")} 
              variant={language === 'en' ? "contained" : "text"}
            >
              <img src={englishIcon}  width={30} alt="English"/>
            </Button>
          </ButtonGroup>
        </Drawer>
      </div>
        
        
    );
}
export default NavigationTabs;

