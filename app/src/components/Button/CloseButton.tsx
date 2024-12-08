import React from 'react';
import { IconButton, IconButtonProps, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CloseButtonProps extends Omit<IconButtonProps, 'onClick'> {
  onClick: () => void;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    opacity: '0.7'
  }
}));

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, ...props }) => {
  return (
    <StyledIconButton
      aria-label="close"
      onClick={onClick}
      sx={{}}
      size="small"
      {...props}
    >
      <CloseIcon />
    </StyledIconButton>
  );
};

export default CloseButton;
