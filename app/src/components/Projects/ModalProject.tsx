import React, { Key, useEffect, useState } from "react";
import "../../styles/components/modalProject.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getDefaultProject, getProject } from "../../bouchons/projectsDetail.tsx";
import { FormattedMessage } from "react-intl";
import { Typography, useTheme } from "@mui/material";
import ImageCarousel from "./ImageCarousel.tsx";
import { IProjectDetail } from "../../interface/IProjectDetail.tsx";
import CloseButton from "../Button/CloseButton.tsx";
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
    
    //Empêche la sortie de la modal en cas de clic hors du cadre
    const handleCloseModal = (event, reason) => {
        if (reason !== 'backdropClick') {
          setOpen(false)
        }
      }
    const handleCloseModalByButton = () => {
        setOpen(false)
    }
    //#region useEffect
    useEffect(() => {
        if (open) {
            setDetailProject(getProject(idProject))
        }
        else {
            setIsImageExpanded(false)
        }
    }, [open])
    //#endregion
    return(
        <Modal
            open={open}
            onClose={handleCloseModal}
        >
            <div className="modal-project-container">
               <Box sx={{ ...modalStyle }}>
                    <CloseButton onClick={handleCloseModalByButton}/>
                    <Typography variant="h1" sx={{color:theme.palette.primary.dark, pt: 3}}  className="modal-title">
                    <FormattedMessage id={detailProject.title} />
                    </Typography>
                    {detailProject.detail.map(ligne => {
                        return <p style={{textAlign: "justify"}} key={ligne}><FormattedMessage id={ligne} /></p>
                    })}
                    
                    {detailProject.link && <div>Github : <a href={detailProject.link}>{detailProject.link}</a></div>}

                    <ImageCarousel 
                        images={detailProject.images}
                        enableExtending={detailProject.enableExtending}
                        isImageExpanded={isImageExpanded}
                        setIsImageExpanded={setIsImageExpanded}/>         
                </Box> 
            </div>
            
        </Modal>
    );
}

export default ModalProject;