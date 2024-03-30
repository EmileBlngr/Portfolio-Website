import React from "react";
import Chip from "@mui/material/Chip";

interface SkillCardProps {
    masterLevel: Number;
    label: string
  }

const SkillCard = ({masterLevel, label}: SkillCardProps) => {
    const cardBgColor = (masterLevel) => {
        switch (masterLevel) {
            case 0:
                return "#1e3885"
            case 1:
                return "#035720"
            case 2:
                return "#008215"
            case 3:
                return "#00BB20"
        }
    }

    const cardTextColor = (masterLevel) => {
        switch (masterLevel) {
            case 0:
                return "#FFFFFF"
            case 1:
                return "#AAF6B8"
            case 2:
                return "#BEFFCA"
            case 3:
                return "#FEFEFE"
        }
    }

    const skillCardStyle = {
        bgcolor:cardBgColor(masterLevel), 
        color:cardTextColor(masterLevel), 
        fontWeight: 600,
        height: 38,
        padding: 1,
        marginRight: masterLevel ? 0.5 : 3
    }

    return(
        <div>
            <Chip sx={{ ...skillCardStyle }} label={label} />
        </div>
    );
}

export default SkillCard;