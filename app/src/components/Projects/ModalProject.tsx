import React, { Key, useEffect, useState } from "react";
import "../../styles/components/modalProject.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getDefaultProject, getProject } from "../../bouchons/projectsDetail.tsx";
import { FormattedMessage } from "react-intl";
import { Button, Icon, useTheme } from "@mui/material";
import ImageCarousel from "./ImageCarousel.tsx";
import { IProjectDetail } from "../../interface/IProjectDetail.tsx";
interface ModalProjectProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    idProject: Key;
  }

const ModalProject = ({open, setOpen, idProject}: ModalProjectProps) => {

    const theme = useTheme()
    const [detailProject, setDetailProject] = useState<IProjectDetail>(getDefaultProject())
    const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);

    const is600px = useMediaQuery('(max-width:600px)');
    const is1185px = useMediaQuery('(max-width:1185px)');

    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: is600px ? '75%' : is1185px ? '60%' :'40%',
        height: detailProject.contentHeight,
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
        display: 'flex', 
        flexDirection: 'column', 
      };

    const handleClose = () => {
        setOpen(false);
    };
    //#region useEffect
    useEffect(() => {
        if (open) {
            setDetailProject(getProject(idProject))
        }
    }, [open])
    //#endregion
    return(
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div className="modal-project-container">
               <Box sx={{ ...modalStyle }}>
                    <h2 className="modal-title">
                    <FormattedMessage id={detailProject.title} />
                    </h2>
                    {detailProject.detail.map(ligne => {
                        return <p key={ligne}><FormattedMessage id={ligne} /></p>
                    })}

                    <ImageCarousel 
                        images={detailProject.images} 
                        isImageExpanded={isImageExpanded}
                        setIsImageExpanded={setIsImageExpanded}/>
                    {!isImageExpanded ? (
                       <Button onClick={handleClose}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: "white",
                            width: '40%',
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',                 
                            '&:hover': {
                                backgroundColor: theme.palette.primary.contrastText,
                                color: "black",
                            }
                            }}
                        >             
                            <Icon sx={{paddingRight: 2}}>arrow_back</Icon>
                            <span className="project-button-label"><FormattedMessage id="close-button" /></span>
                        </Button> 
                    ) : null}
                    
                </Box> 
            </div>
            
        </Modal>
    );
}

export default ModalProject;