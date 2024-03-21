import PropTypes from "prop-types";
import "./Portfolio.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import SinglePortfolio from "./SinglePortfolio";
import Modal from "../Modal/Modal";

const PortfolioSection = ({ apiRes, data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (image, title, techStack) => {
    let tempData = [image, title, techStack];
    setTempData((item) => [1, ...tempData]);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  // Load Items

  const sortedProjects = apiRes?.user?.projects
    ?.filter((item) => item.enabled === true)
    .sort((a, b) => a.sequence - b.sequence);
  // console.log(projects);

  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(
    sortedProjects?.slice(0, itemsPerPage)
  );

  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = sortedProjects?.slice(
      currentLength,
      currentLength + itemsPerPage
    );
    setVisibleItems((prevItems) => [...prevItems, ...nextChunk]);

    if (currentLength + itemsPerPage >= sortedProjects.length) {
      setShowLoadMore(false);
    }
  };

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={"Portfolio"} />
        <div className="container">
          <div className="row">
            {visibleItems.map((project, index) => (
              <SinglePortfolio
                project={project}
                key={index}
                getData={getData}
                data={data}
              />
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    className="st-btn st-style1 st-color1"
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? (
        <Modal
          img={tempData[1]}
          title={tempData[2]}
          subTitle={tempData[3]}
          modalClose={modalClose}
        />
      ) : (
        ""
      )}
    </>
  );
};

PortfolioSection.propTypes = {
  apiRes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default PortfolioSection;
