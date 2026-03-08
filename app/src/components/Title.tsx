import React, { ReactNode } from "react";
import { Box, styled, Theme, Typography } from "@mui/material";

const TitleBox = styled(Box)(({ theme }: { theme: Theme }) => ({
    width: '40%',
    [theme.breakpoints.down('md')]: {
      width: '60%',
    },
}));

const Divider = styled(Box)(({ theme }: { theme: Theme }) => ({
    width: '50%',
    border: '2px solid rgb(30, 56, 133)'
}));

const TitleText = styled(Typography)(({ theme }: { theme: Theme }) => ({
    marginBottom: '5%',
    flexWrap: 'nowrap',
}));

interface TitleProps {
    children: ReactNode;
}

const Title = ({children}: TitleProps) => {
    return(
        <TitleBox>
            <TitleText variant="h1">{children}</TitleText>
            <Divider/>
        </TitleBox>
    );
}

export default Title;