import React from "react";
import { FormattedMessage } from 'react-intl';

import '../styles/screens/skills.css'
import Title from "../components/Title.tsx";
import SkillCard from "../components/Projects/SkillCard.tsx";
import Icon from "@mui/material/Icon";
import StorageIcon from '@mui/icons-material/Storage';

export default function Skills() {

    return(
        <div className="container-global-skills">
            
            <Title><FormattedMessage id="softSkillsTitle"/></Title>
            <div className="container-skills">          
                <SkillCard masterLevel={1} label={<FormattedMessage id="skill-interpersonal"/>}/>  
                <SkillCard masterLevel={1} label={<FormattedMessage id="skill-teamwork"/>}/>
                <SkillCard masterLevel={1} label={<FormattedMessage id="skill-flexibility"/>}/>
                <SkillCard masterLevel={2} label={<FormattedMessage id="skill-positivity"/>}/>
                <SkillCard masterLevel={2} label={<FormattedMessage id="skill-teaching"/>}/>
            </div>
            
            <Title><FormattedMessage id="hardSkillsTitle" /></Title>
            <div className="container-skills">  
                <SkillCard masterLevel={0} label="Frontend" icon={<Icon color="inherit">monitor</Icon>}/>        
                <SkillCard masterLevel={1} label="Vue.js"/>        
                <SkillCard masterLevel={1} label="React.js"/>
                <SkillCard masterLevel={1} label="Typescript"/>
                <SkillCard masterLevel={2} label="React Native"/>
                <SkillCard masterLevel={2} label="Javascript"/>
                <SkillCard masterLevel={2} label="HTML/CSS"/>
                <SkillCard masterLevel={3} label="WPF & WinForm"/>
            </div>
            <div className="container-skills">  
                <SkillCard masterLevel={0} label="Backend" icon={<Icon color="inherit">settings</Icon>}/>        
                <SkillCard masterLevel={1} label=".NET C#"/>        
                <SkillCard masterLevel={2} label="C++"/>
                <SkillCard masterLevel={2} label="Python"/>
                <SkillCard masterLevel={3} label="Java"/>
                <SkillCard masterLevel={3} label="C"/>

            </div>
            <div className="container-skills">  
                <SkillCard 
                masterLevel={0} 
                label={<FormattedMessage id="skill-db"/>} 
                icon={<StorageIcon  color="inherit"/>}
                />        
                <SkillCard masterLevel={1} label="SQL Server"/>        
                <SkillCard masterLevel={2} label="MySql"/>
                <SkillCard masterLevel={3} label="MongoDB"/>
            </div>
            <div className="container-skills">  
                <SkillCard masterLevel={0} label={<FormattedMessage id="skill-software-architecture"/>} icon={<Icon color="inherit">groups</Icon>}/>        
                <SkillCard masterLevel={1} label={<FormattedMessage id="skill-hexagonal-architecture"/>}/>        
                <SkillCard masterLevel={2} label="MVC"/>
                <SkillCard masterLevel={3} label="MVVM"/>
            </div>
            <div className="container-skills">  
                <SkillCard masterLevel={0} label="Collaboration" icon={<Icon color="inherit">groups</Icon>}/>   
                <SkillCard masterLevel={1} label="Azure Devops"/>     
                <SkillCard masterLevel={1} label="Github"/>        
                <SkillCard masterLevel={2} label="Gitlab"/>
                <SkillCard masterLevel={2} label="Jira"/>
                <SkillCard masterLevel={2} label="Trello"/>
            </div>

            <Title><FormattedMessage id="languagesTitle" /></Title>
            <div className="container-skills">  
                <SkillCard masterLevel={1} tooltip={<FormattedMessage id="skill-french-level"/>} label={<FormattedMessage id="skill-french"/>} icon={<Icon color="inherit">flag</Icon>}/>        
                <SkillCard masterLevel={1} tooltip={<FormattedMessage id="skill-english-level"/>} label={<FormattedMessage id="skill-english"/>} icon={<Icon color="inherit">flag</Icon>}/>
                <SkillCard masterLevel={3} tooltip={<FormattedMessage id="skill-deutsch-level"/>} label={<FormattedMessage id="skill-deutsch"/>} icon={<Icon color="inherit">flag</Icon>}/>
            </div>
        </div>
    );
}