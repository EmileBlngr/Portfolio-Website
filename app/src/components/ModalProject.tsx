import React, { Key, useEffect, useState } from "react";
import "../styles/components/modalProject.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getDefaultProject, getProject } from "../bouchons/projectsDetail.tsx";
import IProjectDetail from "../interface/IProjectDetail.tsx";
import { FormattedMessage } from "react-intl";
interface ModalProjectProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    idProject: Key;
  }

const ModalProject = ({open, setOpen, idProject}: ModalProjectProps) => {
    const [detailProject, setDetailProject] = useState<IProjectDetail>(getDefaultProject())
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isSmallScreen ? '70%' : '40%',
        height: '50%',
        bgcolor: 'background.paper',
        borderRadius: 5,
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
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
                    <h2 id="modal-title">
                    <FormattedMessage id={detailProject.title} />
                    </h2>
                    <p id="modal-description">
                    </p>
                </Box> 
            </div>
            
        </Modal>
    );
}

export default ModalProject;