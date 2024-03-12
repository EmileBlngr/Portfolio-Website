import React from "react";
//import "../styles/components/imageCarousel.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface ImageCarouselProps {
    images: string[];
  }
const ImageCarousel = ({images}: ImageCarouselProps) => {
    return(
        <Card sx={{ width: 320, alignSelf: 'center' }}>  
          <img
            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        <CardContent>
          <div>
            <Typography fontSize="lg" fontWeight="lg">
              $2,900
            </Typography>
          </div>
          <Button
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          >
            Explore
          </Button>
        </CardContent>
      </Card>
    );
}

export default ImageCarousel;