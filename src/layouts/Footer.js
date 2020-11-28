import { Button, Grid, IconButton } from "@material-ui/core";
import React from "react";
import logo from "../assets/logo_Taxmann--Tax-&-CL-of-India-for-Web_Sept18 (1).svg";
import playStore from "../assets/google-play-badge (1).png";
import appStore from "../assets/app-store.png";
import fb from "../assets/Facebook.svg";
import linkedin from "../assets/Linkedin.svg";
import twitter from "../assets/Twitter.svg";
import youtube from "../assets/Combined Shape.svg";

const Footer = () => {
  return (
    <Grid container className="footer-div">
      <Grid item lg={3}>
        <Grid className="footer-leftsec">
          <Grid>
            <img src={logo} alt="brand_logo" />
          </Grid>
          <Grid className="footer-leftDesc">
            Everything you need on Income Tax, GST and Corporate Law. Authentic
            databases, books, journals, Practice and Exam platforms.
          </Grid>
          <Grid container justify="space-between">
            <Grid item>
              <a href="#!">
                <img src={playStore} alt="playstore icon" />
              </a>
            </Grid>
            <Grid item>
              <a href="#!">
                <img src={appStore} alt="appstore icon" />
              </a>
            </Grid>
          </Grid>
          <Grid container className="footer-icons">
            <a href="#!">
              <img src={fb} alt="facebook icon" />
            </a>
            <a href="#!">
              <img src={twitter} alt="twitter icon" />
            </a>
            <a href="#!">
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="#!">
              <img src={youtube} alt="youtube icon" />
            </a>
          </Grid>
          <Grid>&copy; 2019 Taxmann.com. All rights reserved.</Grid>
        </Grid>
      </Grid>
      <Grid item lg={8}>
        <Grid container className="footer-itemsDiv">
          <Grid>
            <ul>
              <li className="footer-item-header">Products</li>
              <li><a href='#!'>Research</a></li>
              <li><a href='#!'>Practice</a></li>
              <li><a href='#!'>Exam</a></li>
              <li><a href='#!'>Complaince</a></li>
              <li><a href='#!'>Taxmann Bookstore</a></li>
              <li><a href='#!'>Taxxman Blog</a></li>
            </ul>
            <ul>
              <li className="footer-item-header">About Company</li>
              <li><a href='#!'>History</a></li>
              <li><a href='#!'>Board Of Directors</a></li>
              <li><a href='#!'>Media Coverage</a></li>
              <li><a href='#!'>Taxmann Education</a></li>
              <li><a href='#!'>Careers</a></li>
            </ul>
          </Grid>
          <Grid>
            <ul>
              <li className="footer-item-header">Catalogue</li>
              <li><a href='#!'>Academic</a></li>
              <li><a href='#!'>Professional</a></li>
              <li><a href='#!'>Bare Acts</a></li>
              <li><a href='#!'>Banking & Finance</a></li>
              <li><a href='#!'>NISM Certification Courses</a></li>
              <li><a href='#!'>One Solution TDS & ITR</a></li>
              <li><a href='#!'>Goods & Services Tax (GST)</a></li>
              <li><a href='#!'>LLB Series</a></li>
              <li><a href='#!'>Insolvency & Bankruptcy</a></li>
            </ul>
          </Grid>
          <Grid>
            <ul>
              <li className="footer-item-header">Authors</li>
              <li><a href='#!'>Academic</a></li>
              <li><a href='#!'>Professional</a></li>
              <li><a href='#!'>A - Z</a></li>
            </ul>
            <ul>
              <li className="footer-item-header">Bookstore Support</li>
              <li><a href='#!'>Quick Delivery with Fedex</a></li>
              <li><a href='#!'>Secured Payment</a></li>
              <li><a href='#!'>Free shipping above Rs. 350</a></li>
              <li><a href='#!'>Missed call support @ 4556 2222</a></li>
            </ul>
          </Grid>
          <Grid>
            <ul>
              <li className="footer-item-header">Business Support</li>
              <li><a href='#!'>Sell with Taxmann</a></li>
              <li><a href='#!'>Locate Dealers</a></li>
              <li><a href='#!'>Locate Representatives</a></li>
              <li><a href='#!'>Contact Us</a></li>
            </ul>
            <ul>
              <li className="footer-item-header">Legal</li>
              <li><a href='#!'>Privacy Policy</a></li>
              <li><a href='#!'>Return Policy</a></li>
              <li><a href='#!'>Payment Terms</a></li>
              <li><a href='#!'>Disclaimer</a></li>
              <li><a href='#!'>EULA</a></li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
