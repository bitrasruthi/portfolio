/// <reference path="../helpers/swiper.d.ts" />
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import React from "react";
import { MyWorkStyle } from "../styles/MyWorkStyles";
import delta from "../assets/images/work/delta.jpg";
import togs from "../assets/images/work/togs.jpg";
import deltav2 from "../assets/images/work/deltav2.png";
import togsv2 from "../assets/images/work/togsv2.png";
import togsList from "../assets/images/work/togslist.png";
import grooveBox from "../assets/images/work/grooveBox.png";
import zenith from "../assets/images/work/zenith.png";
import { Link } from "react-router-dom";

const imgList = [delta, togs, togsList, grooveBox, zenith];

export default function MyWork() {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const matches = useMediaQuery(
    (_theme: any) => _theme?.breakpoints?.down("lg") ?? "600"
  );
  const classes = MyWorkStyle();

  const handleClose = () => {
    setIsFullScreen(false);
  };

  return (
    <Box className={classes.root}>
      <Typography className="roboto-bold watermark">Work</Typography>
      <Box className="box-container">
        {!matches ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {imgList?.map((img: string, index: number) => (
              <SwiperSlide
                key={index}
                onClick={() => {
                  setIsFullScreen(!isFullScreen);
                  setSelectedImage(img);
                }}
              >
                <>
                  <img src={img} width={index === 3 ? "100%" : ""} />
                  <Typography fontSize={15} pt={1} pb={1}>
                    {index == 0 ? (
                      "Togs - E-Commerce"
                    ) : index == 1 ? (
                      "Delta Drive - Remodeling & Rental Branded Cars"
                    ) : index == 3 ? (
                      "Groove Box - Music Player"
                    ) : index == 4 ? (
                      <Tooltip title={"Go to Zenith"} placement="right" arrow>
                        <Link
                          to="https://bitrasruthi.github.io/Zenith/"
                          style={{ color: "white !important" }}
                        >
                          Zenith - Resort & Spa
                        </Link>
                      </Tooltip>
                    ) : (
                      ""
                    )}
                  </Typography>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Box sx={{ maxHeight: "70vh", overflowY: "scroll" }}>
            {imgList?.map((img: string, index: number) => (
              <>
                <Typography fontSize={15} pt={1} pb={1}>
                  {index == 0 ? (
                    "Togs - E-Commerce"
                  ) : index == 1 ? (
                    "Delta Drive - Remodeling & Rental Branded Cars"
                  ) : index == 3 ? (
                    "Groove Box - Music Player"
                  ) : index == 4 ? (
                    <Link
                      to="https://bitrasruthi.github.io/Zenith/"
                      style={{ color: "white !important" }}
                    >
                      Zenith - Resort & Spa
                    </Link>
                  ) : (
                    ""
                  )}
                </Typography>
                <img key={index} src={img} width={"100%"} height={"15%"} />
              </>
            ))}
          </Box>
        )}
      </Box>

      {/* Dialog */}
      {isFullScreen && !matches && (
        <Dialog
          className={classes.dialog}
          onClose={handleClose}
          open={isFullScreen}
          fullWidth
          maxWidth={"md"}
        >
          <DialogContent className="dialog-content">
            <img src={selectedImage} width={700} height={"100%"} />
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
}
