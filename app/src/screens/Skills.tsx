import React from "react";
import { FormattedMessage } from 'react-intl';

import '../styles/screens/skills.css'
import Title from "../components/Title.tsx";
import SkillCard from "../components/Projects/SkillCard.tsx";

export default function Skills() {

    return(
        <div className="container-global-skills">
            
            <Title>Soft Skills</Title>
            <div className="container-skills">          
            <SkillCard masterLevel={1} label="Aisance relationnelle"></SkillCard>
            <SkillCard masterLevel={1} label="Positivité"></SkillCard>
            <SkillCard masterLevel={1} label="Travail d'équipe"></SkillCard>
            <SkillCard masterLevel={2} label="Flexibilité"></SkillCard>
            <SkillCard masterLevel={2} label="Pédagogie"></SkillCard>
            </div>
            
            <Title>Hard Skills</Title>
            <div className="container-skills">  
                <SkillCard masterLevel={0} label="Frontend"></SkillCard>        
                <SkillCard masterLevel={1} label="C#"></SkillCard>        
                <SkillCard masterLevel={1} label="C#"></SkillCard>
                <SkillCard masterLevel={2} label="C++"></SkillCard>
                <SkillCard masterLevel={3} label="Python"></SkillCard>
            </div>
            <div className="container-skills">  
                <SkillCard masterLevel={0} label="Backend"></SkillCard>        
                <SkillCard masterLevel={1} label="C#"></SkillCard>        
                <SkillCard masterLevel={1} label="C#"></SkillCard>
                <SkillCard masterLevel={2} label="C++"></SkillCard>
                <SkillCard masterLevel={3} label="Python"></SkillCard>
            </div>
            <Title><FormattedMessage id="languagesTitle" /></Title>
        </div>
    );
}