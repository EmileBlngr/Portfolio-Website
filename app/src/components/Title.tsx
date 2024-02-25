import React, { ReactNode } from "react";
import '../styles/components/title.css'

interface TitleProps {
    children: ReactNode;
  }
const Title = ({children}: TitleProps) => {

    return(
        <div className="title-container">
            <h1 className="title">{children}</h1>
            <div className="divider"></div>
        </div>
    );
}

export default Title;