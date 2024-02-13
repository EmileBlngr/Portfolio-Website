import React, { useEffect, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from "react-router-dom";


export default function NavigationTabs() {
    const [tab, setTab] = useState<Number>(0)
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newTab: number) => 
    {
      setTab(newTab);
    };
    useEffect(() => {
      let route: string = "/"
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
      }
      console.log(route)
      navigate(route);  
    }, [tab])
    
    return(
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="A propos" id="about"/>
          <Tab label="Parcours" id="career"/>
          <Tab label="Projets" id="projects"/>
          <Tab label="Compétences" id="skills"/>
          <Tab label="Mon CV" id="resume"/>
        </Tabs>
    );
}