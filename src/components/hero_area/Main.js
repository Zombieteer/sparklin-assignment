import { Button, Divider, Grid, IconButton, Paper } from "@material-ui/core";
import React from "react";
import "./hero.scss";
import star from "../../assets/Star-not-marked.svg";
import markedStar from "../../assets/Star.svg";
import angleDown from "../../assets/angle-down.svg";
import limited from "../../assets/limited-edition.png";
import bestSeller from "../../assets/best-seller.png";
import { tags, booksListing } from "../../database/books";
import HeroSection from "./HeroSection";

const renderRating = (rating) => {
  return [...Array(5).keys()].map((num) => (
    <img src={num < rating ? markedStar : star} alt={`${rating} rating`} />
  ));
};

const Main = () => {
  return (
    <Grid item style={{ flex: 1 }}>
      <Paper elevation={0} style={{ borderRight: "1px solid #E3EAF2" }}>
        <HeroSection />
        <Grid container>
          {tags.map((tag) => (
            <>
              <Grid container className="tagCatHead">
                <Grid item>
                  {tag.name}{" "}
                  <IconButton>
                    <img src={angleDown} alt="moreBtn" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <a href="#!" className="knowMoreOffer">
                    View all
                  </a>
                </Grid>
              </Grid>

              {booksListing.map((book) =>
                book.tags.includes(tag.id) ? (
                  <Grid item lg={4} key={book.id}>
                    <Grid className="book-card">
                      <Grid className="book-img-div">
                        {book.special ? (
                          <img
                            src={
                              book.special === "Best Seller"
                                ? bestSeller
                                : limited
                            }
                            alt={book.special}
                            className="special-tag"
                          />
                        ) : (
                          <></>
                        )}
                        <img
                          className="book-avatar"
                          src={book.image}
                          alt={book.title}
                        />
                      </Grid>
                      <Grid className="book-title">{book.title}</Grid>
                      <Grid className="book-authors" container>
                        {book.authors.map((author, id) => (
                          <Grid item key={author}>
                            {author}
                            {book.authors.length - 1 !== id && `,`}&nbsp;
                          </Grid>
                        ))}
                      </Grid>
                      <Grid container className="book-details">
                        <Grid item>Rs. {book.price}</Grid>
                        <Grid item>{renderRating(book.rating)}</Grid>
                      </Grid>
                      <Grid container className="book-action-btn">
                        <Button disableElevation className="addToCartBtn">
                          Add To Cart
                        </Button>
                        <Button
                          disableElevation
                          className="bookstoreBtn buynowBtn"
                        >
                          Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : (
                  <></>
                )
              )}
              <Divider className="homeSections-divider" />
            </>
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Main;
