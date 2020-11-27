import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
} from "@material-ui/core";
import React from "react";
import "./services.scss";
import { offersListing, services } from "../database/offers";

const Services = () => {
  return (
    <Grid item className="side-services">
      <Paper elevation={0}>
        {services.map((service, id) => (
          <Grid container key={id} className="services">
            <Grid item>
              <img src={service.icon} alt={service.title} />
            </Grid>
            <Grid item className="service-content">
              <Grid className="service-title">{service.title}</Grid>
              <Grid className="service-desc">{service.desc}</Grid>
            </Grid>
          </Grid>
        ))}
      </Paper>

      <Grid className='offerHeader'>Offers</Grid>

      {offersListing.map((offer, id) => (
        <Card elevation={0} key={id} className="offerCard">
          <CardMedia
            style={{ height: 168 }}
            image={`${offer.image}`}
            title={offer.image}
          />
          <CardContent>
            <Grid className="offerTitle">{offer.title}</Grid>
            <Grid className="offerDesc">{offer.description}</Grid>
            <Grid style={{paddingTop: 9}}>
              <a href="#!" className="knowMoreOffer">
                Know More
              </a>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default Services;
