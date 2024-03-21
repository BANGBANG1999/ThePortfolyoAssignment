import PropTypes from "prop-types";
import "./Hero.scss";
import parser from "html-react-parser";
import SocialLinks from "../SocialLinks/SocialLinks";
import { Link as ScrollLink } from "react-scroll";
import { useEffect } from "react";
import WaterWave from "react-water-wave";

const Hero = ({ data, socialData, apiRes }) => {
  const { subTitle, bgImgLink } = data;
  const { name, title } = apiRes?.user?.about;

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector(".st-hero-wrap .st-hero-img");
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.1}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(apiRes.user);

  return (
    <section id="home" className="st-hero-wrap">
      <div
        className="st-hero st-bg st-style1"
        style={{ backgroundImage: `url(${bgImgLink})` }}
      >
        <div className="st-height-b80 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-hero-text">
            <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              {subTitle}
            </h3>
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              {parser(name)}
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              {title}
            </h2>
            <div
              className="st-hero-btn"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <ScrollLink className="st-btn st-style1 st-color1" to="contact">
                Hire Me
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      <div className="st-hero-img st-to-right">
        <img
          // src={`${imgLink}`}
          src={apiRes?.user?.about?.avatar?.url}
          alt="Hero"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1000"
        />
        <div
          className="st-social-group"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <SocialLinks apiRes={apiRes} data={socialData} />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
  apiRes: PropTypes.object,
};

export default Hero;
