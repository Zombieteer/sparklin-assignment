import { Button, Divider, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { navLinks, navQuickLinks } from "../database/sidebarItems";
import arrow from "../assets/angle-down.svg";

const SideNavbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [openLinks, setOpenLinks] = useState([]);
  const [activeLink, setActiveLink] = useState("bookstore_home");

  const manipulateOpenLinks = (e, item) => {
    let tempOpenLinks = openLinks;
    tempOpenLinks.includes(item.id) && item.children !== undefined
      ? (tempOpenLinks = openLinks.filter((l) => l !== item.id))
      : (tempOpenLinks = [...openLinks, item.id]);
    setOpenLinks(tempOpenLinks);

    if (item.children) {
      item.children.length === 0 && setActiveLink(item.id);
    } else {
      setActiveLink(item.id);
    }
  };

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Grid
      item
      className={`sideBar ${!isHidden ? "show-sidebar" : "hide-sidebar"}`}
    >
      <Grid className="hidetab hide" onClick={toggleHidden}>
        {isHidden ? (
          <>
            <span className={`hidetab-arrow face-right`}>
              <img src={arrow} alt="show" />
            </span>
            <span className="hidetab-text shift-padding">
              {isHidden ? "Show" : "Hide"}
            </span>
          </>
        ) : (
          <>
            <span className="hidetab-text">{isHidden ? "Show" : "Hide"}</span>
            <span className={`hidetab-arrow`}>
              <img src={arrow} alt="show" />
            </span>
          </>
        )}
      </Grid>
      <Grid
        className={`${
          !isHidden ? "show-sidebar-content" : "hide-sidebar-content"
        }`}
      >
        {navLinks.map((items) => (
          <Grid key={items.id}>
            <Button
              className={`sidebarItem ${
                activeLink === items.id ? `activeLink` : ""
              }`}
              onClick={(e) => manipulateOpenLinks(e, items)}
            >
              {items.children.length > 0 ? (
                openLinks.includes(items.id) ? (
                  "-"
                ) : (
                  "+"
                )
              ) : (
                <span className="moreIcon">&nbsp;</span>
              )}
              <span>{items.title}</span>
            </Button>
            <Divider className="sidebarDividers" />
            {openLinks.includes(items.id) && items.children.length > 0 ? (
              items.children.map((childItem) => (
                <Grid key={childItem.id} style={{ marginBottom: "-14px" }}>
                  <Button
                    className={`sidebarItem subSidebarItem ${
                      activeLink === childItem.id ? `activeLink` : ""
                    }`}
                    onClick={(e) => manipulateOpenLinks(e, childItem)}
                  >
                    <span>{childItem.title}</span>
                  </Button>
                </Grid>
              ))
            ) : (
              <></>
            )}
          </Grid>
        ))}

        <Grid className="sidebarItem quicklinksTitle">&nbsp;Quick Links</Grid>
        {navQuickLinks.map((items) => (
          <Grid key={items.id}>
            <Button
              className={`sidebarItem ${
                activeLink === items.id ? `activeLink` : ""
              }`}
              onClick={(e) => manipulateOpenLinks(e, items)}
            >
              {items.children.length > 0 ? (
                openLinks.includes(items.id) ? (
                  "-"
                ) : (
                  "+"
                )
              ) : (
                <span className="moreIcon">&nbsp;</span>
              )}
              <span className="quicklinksItems">{items.title}</span>
            </Button>
            {openLinks.includes(items.id) && items.children.length > 0 ? (
              items.children.map((childItem) => (
                <Grid
                  key={childItem.id}
                  style={{ marginBottom: "-14px", marginTop: "-14px" }}
                >
                  <Button
                    className={`sidebarItem subSidebarItem quicklinksItems ${
                      activeLink === childItem.id ? `activeLink` : ""
                    }`}
                    onClick={(e) => manipulateOpenLinks(e, childItem)}
                  >
                    <span className="quicklinksItems">{childItem.title}</span>
                  </Button>
                </Grid>
              ))
            ) : (
              <></>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default SideNavbar;
