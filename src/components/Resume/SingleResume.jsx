import PropTypes from "prop-types";

const SingleResume = ({ element }) => {
  const {
    company_name,
    summary,
    bulletPoints,
    startDate,
    endDate,
    jobLocation,
  } = element;

  const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  const formattedEndDate = new Date(endDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{company_name}</h3>
      <div className="st-resume-timeline-duration">
        {formattedStartDate} - {formattedEndDate}
      </div>
      <div className="st-resume-timeline-duration">
        Location - {jobLocation}
      </div>
      <h4 className="st-resume-timeline-subtitle">{summary}</h4>
      <div className="st-resume-timeline-text">
        <p>{bulletPoints}</p>
      </div>
    </div>
  );
};

SingleResume.propTypes = {
  element: PropTypes.object,
};

export default SingleResume;
