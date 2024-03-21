import "./Review.scss";
import PropTypes from "prop-types";

const SingleReview = ({ element }) => {
  // console.log(element.enabled);
  if (!element.enabled) {
    return null; // Return null to render nothing if isEnabled is false
  }
  return (
    <div
      className={`st-testimonial st-style1 `}
      data--duration="0.8s"
      data--delay="0.2s"
    >
      <div className="st-testimonial-text" style={{ height: "300px" }}>
        <p>{element?.review}</p>
        <div className="st-quote">
          <img src="/images/icon/quote.png" alt="quote" />
        </div>
      </div>
      <div className="st-testimonial-info">
        <div className="st-testimonial-img">
          <img src={element?.image?.url} alt="client1" />
        </div>
        <div className="st-testimonial-meta">
          <h4 className="st-testimonial-name">{element?.name}</h4>
          <div className="st-testimonial-designation">{element?.position}</div>
        </div>
      </div>
    </div>
  );
};
SingleReview.propTypes = {
  element: PropTypes.object,
};

export default SingleReview;
