import React, { useEffect, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { englishIcon, franceIcon } from "../assets/_export.tsx";
import { Icon, ListItemButton, ListItemIcon } from "@mui/material";
//Icons
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InfoIcon from '@mui/icons-material/Info';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

type LanguageChangeHandler = (selectedLocale: string) => void;

interface NavigationTabsProps {
  onLanguageChange: LanguageChangeHandler;
}

const NavigationTabs = ({onLanguageChange}: NavigationTabsProps) => {
    const intl = useIntl();
    const navigate = useNavigate();
    const [tab, setTab] = useState<Number>(0)
    const [language, setLanguage] = useState<String>(intl.defaultLocale)
    const [isMobile, setIsMobile] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleChange = (event: React.SyntheticEvent, newTab: number) => 
    {
      setTab(newTab);
    };
    //#region useEffects
    useEffect(() => {
      let route: string;
      if (tab === undefined) setTab(0)
      switch (tab) {
        case 0:
          route = "/about"
          break;
        case 1:
          route = "/career"
          break;
        case 2:
          route = "/projects"
          break;
        case 3:
          route = "/skills"
          break;
        case 4:
          route = "/resume"
          break;
        default:
          route = "/"
      }
      navigate(route);  
    }, [tab])
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1185);
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

    const handleDrawerItemClick = (route: string) => {
      setDrawerOpen(false);
      navigate(route);
    };
    
    return(
      <div className="flex-row">
         {isMobile ? (
          <Button onClick={handleToggleDrawer}>
            <Icon>menu</Icon>
          </Button>
        ) : (
          <>
          <Tabs value={tab} onChange={handleChange} className="flex-1">
            <Tab label={<FormattedMessage id="aboutTab"/>} id="about"/>
            <Tab label={<FormattedMessage id="careerTab"/>} id="career"/>
            <Tab label={<FormattedMessage id="projectsTab"/>} id="projects"/>
            <Tab label={<FormattedMessage id="skillsTab"/>} id="skills"/>
            <Tab label={<FormattedMessage id="resumeTab"/>} id="resume"/> 
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
            <ListItemButton onClick={() => handleDrawerItemClick("/about")}>
            <ListItemIcon><InfoIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="aboutTab"/>} />
            </ListItemButton>
            <ListItemButton onClick={() => handleDrawerItemClick("/career")}>
              <ListItemIcon><RocketLaunchIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="careerTab"/>} />
            </ListItemButton>
            <ListItemButton onClick={() => handleDrawerItemClick("/projects")}>
              <ListItemIcon><DeveloperBoardIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="projectsTab"/>} />
            </ListItemButton>
            <ListItemButton onClick={() => handleDrawerItemClick("/skills")}>
              <ListItemIcon><EmojiObjectsIcon/></ListItemIcon>
              <ListItemText primary={<FormattedMessage id="skillsTab"/>} />
            </ListItemButton>
            <ListItemButton onClick={() => handleDrawerItemClick("/resume")}>
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

