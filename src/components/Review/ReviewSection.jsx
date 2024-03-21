import PropTypes from "prop-types";
import "./Review.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Slider/Carousel";

const Review = ({ data, apiRes }) => {
  const { testimonials } = apiRes?.user;
  // console.log(testimonials);
  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Review" />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <Carousel data={data} testimonials={testimonials} />
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

Review.propTypes = {
  data: PropTypes.object,
  apiRes: PropTypes.object,
};

export default Review;
