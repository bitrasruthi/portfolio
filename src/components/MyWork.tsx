import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import React from "react";
import { MyWorkStyle } from "../styles/MyWorkStyles";

const imgList = [
  "/images/work/delta.jpg",
  "/images/work/togs.jpg",
  "/images/work/deltav2.png",
  "/images/work/togsv2.png",
  "/images/work/togslist.png",
];

export default function MyWork() {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const classes = MyWorkStyle();

  const handleClose = () => {
    setIsFullScreen(false);
  };

  return (
    <Box className={classes.root}>
      <Typography className="roboto-bold watermark">Work</Typography>
      <Box className="box-container">
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
              <img src={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Dialog */}
      {isFullScreen && (
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
