import React, { useState } from "react";
import IProjectAbstract from "../../interface/IProjectAbstract.tsx";
import "../../styles/components/projectCard.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FormattedMessage } from "react-intl";
import Icon from "@mui/material/Icon";
import ModalProject from "./ModalProject.tsx";
import { styled } from "@mui/material";
interface ProjectCardProps {
    project: IProjectAbstract;
  }

const StyledButton = styled(Button)({
    backgroundColor: "rgba(30, 56, 133, 0.15)",
    "&:hover": {
        backgroundColor: "rgba(30, 56, 133, 0.1)",
    },
});

const ProjectCard = ({project}: ProjectCardProps) => {
    const [openModalProject, setOpenModalProject] = useState(false);
    const handleOpen = () => {
        setOpenModalProject(true);
    };

    return(
        <div className="project-card-container">
            <Card sx={{height: 1}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="130"
                    image={project.image}
                />
                <CardContent sx={{height: 3/8}}>
                    <Typography gutterBottom variant="h6" component="div" color="black">
                    <FormattedMessage id={project.title}/>
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="div" color="black" sx={{fontWeight: 600}}>
                    <FormattedMessage id={project.projectType}/>
                    </Typography>
                    <Typography variant="body2" color="black">
                    <FormattedMessage id={project.description}/>
                    </Typography>
                </CardContent>
                <CardActions sx={{height: 1/8, display: "flex", justifyContent:"right"}}>
                    <StyledButton onClick={handleOpen} size="medium">
                        <Icon>visibility</Icon>
                    </StyledButton>
                </CardActions>
            </Card>
            <ModalProject 
                open={openModalProject} 
                setOpen={setOpenModalProject}
                idProject={project.idProject}/>
        </div>
    );
}

export default ProjectCard;