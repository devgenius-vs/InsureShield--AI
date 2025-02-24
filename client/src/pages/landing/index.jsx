import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const services = [
  { title: "Pay Premium Online", icon: "💳", link: "/pay" },
  { title: "eKYC with Face Authentication", icon: "🏦", link: "/ekyc" },
  {
    title: "Death Certificate Verification",
    icon: "📜",
    link: "/death-verify",
  },
  {
    title: "Policy Documents Verification",
    icon: "📂",
    link: "/verify",
  },
  { title: "DigiLocker Integration", icon: "🔐", link: "/tools" },
  { title: "Robust Logging and Audit Trails", icon: "⚠️", link: "/logs" },
  { title: "Scalable Data Architecture", icon: "⛁", link: "/data" },
  { title: "Realtime Dashboard", icon: "📊", link: "/dashboard" },
  { title: "Track Proposal", icon: "📍", link: "/track" },
  { title: "Claim Tracker", icon: "📑", link: "/track" },
  { title: "Claim Intimation", icon: "🖊️", link: "/claim" },
  {
    title: "Unclaimed Amount Disclosure",
    icon: "🔍",
    link: "/unclaimed-amount",
  },
];

const images = [
  "https://smartcare.sbilife.co.in/SmartCare/assets/Images/banner/banner_3G/4.jpg",
  "https://smartcare.sbilife.co.in/SmartCare/assets/Images/banner/banner3/4.gif",
  "https://smartcare.sbilife.co.in/SmartCare/assets/Images/banner/banner2/4.jpg",
];

const LandingPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <div key={index}>
                <motion.img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          id="services"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 hover:cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <p className="text-center font-semibold text-gray-700">
                  {service.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
