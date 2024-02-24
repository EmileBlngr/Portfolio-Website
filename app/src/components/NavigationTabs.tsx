import React, { useEffect, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { englishIcon, franceIcon } from "../assets/_export.tsx";

type LanguageChangeHandler = (selectedLocale: string) => void;

interface NavigationTabsProps {
  onLanguageChange: LanguageChangeHandler;
}

const NavigationTabs = ({onLanguageChange}: NavigationTabsProps) => {
    const intl = useIntl();
    const navigate = useNavigate();
    const [tab, setTab] = useState<Number>(0)
    const [language, setLanguage] = useState<String>(intl.defaultLocale)

    const handleChange = (event: React.SyntheticEvent, newTab: number) => 
    {
      setTab(newTab);
    };
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
    
    const handleLanguageChoose = (locale: string) => {
      setLanguage(locale)
      onLanguageChange(locale);
    };
    
    
    return(
      <div className="flex-row">
        <Tabs value={tab} onChange={handleChange} className="flex-1">
          <Tab label={<FormattedMessage id="aboutTab"/>} id="about"/>
          <Tab label={<FormattedMessage id="careerTab"/>} id="career"/>
          <Tab label={<FormattedMessage id="projectsTab"/>} id="projects"/>
          <Tab label={<FormattedMessage id="skillsTab"/>} id="skills"/>
          <Tab label={<FormattedMessage id="resumeTab"/>} id="resume"/> 
        </Tabs> 
        <ButtonGroup
          disableElevation
          size="small"
          className="align-right"
        >
          <Button 
          onClick={() => handleLanguageChoose("fr")} 
          variant={language === 'fr' ? "contained" : "text"}>
            <img src={franceIcon} width={30}></img>
          </Button>
          <Button 
          onClick={() => handleLanguageChoose("en")} 
          variant={language === 'en' ? "contained" : "text"}>
            <img src={englishIcon}  width={30}></img>
          </Button>
        </ButtonGroup>
      </div>
        
        
    );
}
export default NavigationTabs;

