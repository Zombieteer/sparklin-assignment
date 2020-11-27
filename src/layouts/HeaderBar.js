import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  IconButton,
} from "@material-ui/core";
import "./layouts.scss";
import React, { useState } from "react";
import logo_Taxmann from "../assets/logo_Taxmann--Tax-&-CL-of-India-for-Web_Sept18.svg";
import search_icon from "../assets/search-icon.svg";
import angle_down from "../assets/angle-down.svg";
import reserach from "../assets/Reserach.svg";
import notification from "../assets/Notification.svg";
import profile from "../assets/Profile.svg";
import cart from "../assets/Cart.svg";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const HeaderBar = () => {
  const [usersIn, setUsersIn] = useState(["R", "E", "C"]);

  return (
    <Grid container className="header">
      <Grid item lg={6}>
        <Grid container style={{ justifyContent: "space-evenly" }}>
          <Grid item style={{ placeSelf: "center" }}>
            <img
              src={logo_Taxmann}
              alt="taxmann logo"
              style={{ cursor: "pointer" }}
            />
          </Grid>

          <Grid item lg={8}>
            <FormControl fullWidth variant="outlined" className="searchBar">
              <OutlinedInput
                placeholder="Search anything on tax and corporate law in bookstore"
                startAdornment={
                  <InputAdornment position="start">
                    <img src={search_icon} alt="search_icon" />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={5}>
        <Grid
          container
          style={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <Grid item>
            <Grid container className="headerUsers">
              {usersIn.slice(0, 3).map((user, id) => (
                <Grid item key={id}>
                  <div className={`usersIn usersIn${id}`}>{user}</div>
                  <Divider orientation="vertical" />
                </Grid>
              ))}
              <Grid item>
                <IconButton>
                  <img src={angle_down} alt="more users" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Button
              className="bookstoreBtn"
              variant="contained"
              disableElevation
            >
              Bookstore
            </Button>
          </Grid>

          <Grid item>
            <IconButton>
              <img src={reserach} alt="research" />
            </IconButton>
            <IconButton>
              <img src={notification} alt="notification" />
            </IconButton>
            <IconButton>
              <img src={profile} alt="profile" />
            </IconButton>
            <IconButton>
              <img src={cart} alt="cart" />
            </IconButton>
            <IconButton className="hamburgerIconBtn" color="#f88822">
              <MenuRoundedIcon className="hamburgerIcon" color="#F88822" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderBar;
