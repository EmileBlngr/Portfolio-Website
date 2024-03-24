import React, { useState } from "react";
import "../../styles/components/imageCarousel.css";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ImageCarouselProps {
    images: string[];
    enableExtending: boolean;
    isImageExpanded: boolean;
    setIsImageExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  }
const ImageCarousel = ({images, enableExtending, isImageExpanded, setIsImageExpanded}: ImageCarouselProps) => {
    const [indexImage, setIndexImage] = useState<number>(0)

    const nextImage = () => {
      setIndexImage(indexImage + 1);
    }

    const previousImage = () => {
      setIndexImage(indexImage - 1);
    }

    const handleImageClick = () => {
      if (enableExtending) 
        setIsImageExpanded(!isImageExpanded);
    }

    const carouselStyle = {
      alignSelf: 'center', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      position: isImageExpanded ? 'absolute' : 'normal',
      width: isImageExpanded ? '80vw' : '100%',
      height: isImageExpanded ? '90vh' : '50%',
      marginTop: '2%'
    }
    const boxImageStyle = {
      width: isImageExpanded ? '70vw' : '80%',
      height: isImageExpanded ? '90vh' : '100%',
      display: 'flex',
      alignItems: isImageExpanded ? 'center' : 'stretch',
      justifyContent: 'center',
    }

    return(
      <Card sx={{...carouselStyle}}>  
        <Box sx={{height: 1, width: 1, display: 'flex', flexDirection: 'row'}}>
          <IconButton
            aria-label="previous"
            onClick={previousImage}
            disabled={indexImage === 0}
            sx={{width:1/10, borderRadius: 0, position: 'relative', top: '50%', left: 0, transform: 'translateY(-50%)' }}
          >
            <Icon>arrow_back_ios</Icon>
          </IconButton>

          <Box onClick={handleImageClick} sx={{...boxImageStyle}}>
            <img
              className="carousel-current-img"
              src={images[indexImage]}
              loading="lazy"
              alt="current-project"
            />
          </Box>
          <IconButton
            aria-label="next"
            onClick={nextImage}
            disabled={indexImage === images.length - 1}
            sx={{width:1/10, borderRadius: 0, position: 'relative', top: '50%', right: 0, transform: 'translateY(-50%)' }}
          >
            <Icon>arrow_forward_ios</Icon>
          </IconButton>
        </Box>
      </Card>
    );
}

export default ImageCarousel;