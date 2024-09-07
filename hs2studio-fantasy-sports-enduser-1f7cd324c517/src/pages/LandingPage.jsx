import React, { useState, useEffect } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Carousel from "../components/Carousel";
import image1 from "../assets/LandingPage/1.png";
import image2 from "../assets/LandingPage/2.png";
import image3 from "../assets/LandingPage/3.png";
import image4 from "../assets/LandingPage/4.png";
import image5 from "../assets/LandingPage/5.png";
import Footer from "../components/Footer";
import SponsorInfo from "../components/UserInfoLanding";

const slides = [
  "https://4kwallpapers.com/images/wallpapers/ipl-2021-ipl-t20-indian-premier-league-cricket-ipl-2021-1920x1200-4994.png",
  "https://wallpapers.com/images/hd/4k-football-various-players-zijfinxpq7r441a3.jpg",
  "https://wallpapers.com/images/hd/4k-basketball-posterised-dunk-hp6393meoxfqeuiq.jpg",
  "https://wallpapers.com/images/hd/intense-game-volleyball-4k-0c5y2vg6bn9zsh17.jpg",
  "https://images.alphacoders.com/479/479478.jpg",
];

const slideDesc = [
  "Dhoni, Rayudu and Jaddu Sharing a Happy Moment",
  "Ee Saala Cup Namde, Thinks RCB",
  "CSK wins IPL 2023",
  "Dhoni receiving the trophy, says will play another season!",
  "Dhoni lifts Jaddu",
];

function LandingPage() {
  return (
    <div className="flex flex-col items-center mt-14">
      <div className="flex justify-center items-center w-full h-auto bg-gradient-to-b from-violet-300 to-violet-50">
        <div className="w-full bg-black rounded-b-lg">
          <Carousel autoSlide={true} slides={slides} slideDesc={slideDesc} />
        </div>
      </div>
      <div>
        <SponsorInfo />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
