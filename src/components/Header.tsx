import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { HeaderStyle } from "../styles/HeaderStyle";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import saucer from "../../public/images/saucer.png";

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
  const [colors, setColors] = React.useState([]);
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

  const handleTitleClick = (scroll: number) => {
    const path = `/#${titles[scroll - 1].name.toLowerCase()}`;
    console.log(path);

    history(path);
  };

  const generateRandomColors = () => {
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const color1 = getRandomColor();
    const color2 = getRandomColor();

    const gradientColors: any = [color1, color2];
    setColors(gradientColors);
  };

  const scroll = (to: number) => {
    console.log(parallaxRef.current);

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
                display: { xs: "flex", md: "none" },
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
                  display: { xs: "block", md: "none" },
                  background: "transparent",
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
                display: { xs: "none", md: "flex" },
              }}
            >
              {titles?.map(
                (page) =>
                  page?.name != "Home" && (
                    <Button
                      className="title-name"
                      key={page?.name}
                      onClick={() => {
                        handleTitleClick(page?.scroll);
                        scroll(page?.scroll);
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
