"use client";

import Separator from "@/components/shared/separator";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// CUSTOM IMPORTS


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    width: '35vw',
    maxWidth: 'none',
    height: '75vh',
    maxHeight: 'none',
  },
}));

const AboutUsDetails = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    let x: number, y: number;

    const handleMouseMove = (event: MouseEvent) => {
      x = (event.clientX / window.innerWidth) * 10 - 5;
      y = (event.clientY / window.innerHeight) * 10 - 5;

      x = x - x * 2;
      y = y - y * 2;

      const parallaxItems = document.querySelectorAll<HTMLDivElement>(
        "[data-parallax-item]"
      );

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallaxSpeed);
        x = x * speed;
        y = y * speed;
        item.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="about-content mt-20">
          <h2 className="label" id="about-label">
            About Us
          </h2>
          <div
            style={{
              opacity: 0.5,
            }}
          >
            <Separator />
          </div>
          <h3 className="headline">
            शुद्धता का भरोसा, हर घर तक |
          </h3>
          <p className="description">
            Welcome to Wardan Spices Private Limited , a brand passionately committed to delivering the finest and purest spices to your kitchen. Established in 2024, our journey began with a simple yet profound mission: to ensure that every household has access to 100% pure, unadulterated spices that contribute to good health and unmatched flavor.
            <React.Fragment>
              <span style={{ marginLeft: '2rem', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleClickOpen}>... Read More</span>
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle sx={{ m: 0, px: 2, fontSize: '1.8rem', fontWeight: 600 }} id="customized-dialog-title">
                  About Us
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                  })}
                >
                  {/* <CloseIcon /> */}
                </IconButton>
                <DialogContent dividers>
                  <Typography sx={{ fontSize: '1.2rem', width: '75%', marginBottom: '1rem' }} gutterBottom>
                    Welcome to Wardan Spices Private Limited , a brand passionately committed to delivering the finest and purest spices to your kitchen. Established in 2024, our journey began with a simple yet profound mission: to ensure that every household has access to 100% pure, unadulterated spices that contribute to good health and unmatched flavor.
                  </Typography>
                  <Typography sx={{ fontSize: '1.2rem', width: '75%', marginBottom: '1rem' }} gutterBottom>
                    Headquartered at 15 PTR Siding Coal Depot, Howrah - 711102, Wardan Spices was founded with the belief that quality and purity should never be compromised. In a market where adulteration is rampant, we stand apart by pledging to provide only the best, free from any mixtures or impurities.
                  </Typography>
                  <Typography sx={{ fontSize: '1.2rem', width: '75%', marginBottom: '1rem' }} gutterBottom>
                    At Wardan Spices, we understand the pivotal role spices play in Indian households. They are not just ingredients but the essence of every meal. Our carefully sourced and meticulously processed spices are a testament to our unwavering commitment to excellence and authenticity.
                  </Typography>
                  <Typography sx={{ fontSize: '1.2rem', width: '75%', marginBottom: '1rem' }} gutterBottom>
                    Our mission extends beyond delivering premium spices; it is about building trust with millions of customers. With every pack of Wardan Spices, you’re not just buying a product—you’re embracing a promise of purity, health, and unmatched taste.
                  </Typography>
                  <Typography sx={{ fontSize: '1.2rem', width: '75%', marginBottom: '1rem', paddingBottom: '1rem' }} gutterBottom>
                    Join us in our journey to revolutionize the spice industry and bring the joy of genuine flavors to every home. Experience the purity, taste the difference—choose Wardan Spices.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button
                    autoFocus
                    variant="outlined"
                    onClick={handleClose}
                    sx={{
                      borderColor: '#B74652',
                      color: '#B74652',
                      '&:hover': {
                        borderColor: '#B74652',
                        color: '#B74652',
                      }
                    }}
                  >
                    Close
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            </React.Fragment>
          </p>
          <div className="mobile-text">Mail Us:</div>
          <a href="tel:+804001234567" className="mobile">
            wardanspices@gmail.com
          </a>
        </div>
        <figure className="about-banner">
          <Image
            src={"/images/about-banner.jpg"}
            width={570}
            height={570}
            loading="lazy"
            alt="about banner"

            data-parallax-item
            data-parallax-speed="1"
          // style={{ height: "auto", width: "auto" }}
          />
          <div
            className="abs-img-1"
            data-parallax-item
            data-parallax-speed="1.75"
          >
            <div className="content-wrapper">
              <video
                ref={videoRef}
                src={"/videos/about.mp4"}
                loop
                muted
                // className="object-cover object-center h-full cursor-pointer"
                onClick={togglePlay}
              ></video>
              <div
                className={`play-icon`}
                style={{ display: isPlaying ? "none" : "" }}
              >
                <FaRegPlayCircle
                  color="white"
                  onClick={togglePlay}
                  size={50}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="abs-img ">
            <Image
              src={"/images/badge-2.png"}
              width="133"
              height="134"
              loading="lazy"
              alt=""
            />
          </div>
        </figure>
      </div>
    </React.Fragment>
  );
};

export default AboutUsDetails;
