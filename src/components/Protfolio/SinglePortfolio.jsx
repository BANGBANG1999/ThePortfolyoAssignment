import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SinglePortfolio = ({ project, getData, data }) => {
  const { effect, duration, delay } = data;

  // console.log(project.title, project.techStack, project.image.url);

  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      <div
        className="st-portfolio-single st-style1"
        onClick={() =>
          getData(project?.image?.url, project?.title, project?.techStack)
        }
      >
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={project?.image?.url} alt="portfolio" />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{project?.title}</h5>
              <p>{project?.techStack}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePortfolio.propTypes = {
  data: PropTypes.object,
  apiRes: PropTypes.object,
};

export default SinglePortfolio;
