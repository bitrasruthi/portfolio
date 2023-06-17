import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { HeaderStyle } from "../styles/HeaderStyle";
import { useNavigate } from "react-router-dom";
import saucer from "../assets/images/saucer.png";

const titles = [
  { name: "Home", scroll: 0 },
  { name: "Tools", scroll: 1 },
  { name: "Work", scroll: 2 },
  { name: "Contact", scroll: 3 },
];

interface Props {
  parallaxRef: any;
  page: number;
}
const Header: React.FC<Props> = ({ parallaxRef, page }) => {
  const matches = useMediaQuery(
    (_theme: any) => _theme?.breakpoints?.up("lg") ?? "1280"
  );

  const classes = HeaderStyle();
  const history = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleTitleClick = (name: string) => {
    const newPath = `portfolio/#${name.toLowerCase()}`;
    history(newPath);
  };

  const scroll = (to: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to);
    }
  };

  return (
    <Box className={classes.root}>
      {matches ? (
        page == 1 ? (
          ""
        ) : (
          <Box
            onClick={(e) => {
              scroll(0);
              e.stopPropagation();
              handleTitleClick("");
            }}
          >
            <Avatar className="saucer-img" src={saucer} />
          </Box>
        )
      ) : (
        ""
      )}
      <AppBar className="app-bar" elevation={0}>
        <Container maxWidth="sm">
          <Toolbar disableGutters>
            <Box
              className="tool-bar"
              sx={{
                display: { xs: "flex", lg: "none" },
              }}
            >
              <Avatar
                src={saucer}
                className="saucer-mobile-menu"
                onClick={handleOpenNavMenu}
              />
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", lg: "none" },
                  background: "transparent",
                }}
                PaperProps={{
                  style: {
                    width: 350,
                  },
                }}
              >
                {titles.map((page) => (
                  <MenuItem
                    className="menu-item"
                    key={page.name}
                    onClick={() => {
                      handleCloseNavMenu();
                      scroll(page.scroll);
                    }}
                  >
                    <Typography className="page-name">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              className="web-box"
              sx={{
                display: { xs: "none", lg: "flex" },
              }}
            >
              {titles?.map(
                (page) =>
                  page?.name != "Home" && (
                    <Button
                      className="title-name"
                      key={page?.name}
                      onClick={() => {
                        scroll(page?.scroll);
                        handleTitleClick(page?.name);
                      }}
                      sx={{
                        my: 2,
                      }}
                    >
                      {page?.name}
                    </Button>
                  )
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
