import { Button, Grid } from "@material-ui/core";
import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import { carouselItems } from "../../database/books";

const HeroSection = () => {
  return (
    <Grid style={{ display: "grid", margin: "0 20px", paddingTop: 42 }}>
      <Carousel arrows draggable={false} infinite autoPlay={5000}>
        {carouselItems.map((item) => (
          <Grid container>
            <Grid item className="featuredImgDiv">
              <img src={item.image} alt="featured" />
            </Grid>
            <Grid item className="featured-details">
              <Grid className="featured-heading">{item.heading}</Grid>
              <Grid className="featured-subhead">{item.subHeading}</Grid>
              <Grid className="featured-desc">{item.desc}</Grid>
              <Grid className="featured-btn">
                <Button className="bookstoreBtn featureKnowMoreBtn">
                  KNOW MORE
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Grid>
  );
};

export default HeroSection;
