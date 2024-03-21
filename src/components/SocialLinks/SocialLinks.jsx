import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SocialLinks = ({ apiRes }) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleIconHover = (index) => {
    setActiveLink(index);
  };

  const [socialHandles, setSocialHandles] = useState([]);

  useEffect(() => {
    if (apiRes && apiRes.user && apiRes.user.social_handles) {
      const updatedSocialHandles = [...apiRes.user.social_handles];
      setSocialHandles(updatedSocialHandles);
    }
  }, [apiRes]);

  return (
    <div className="st-social-link">
      {socialHandles.map((socialHandle, index) =>
        socialHandle.enabled ? (
          <Link
            to={socialHandle.url}
            className={
              index === activeLink ? "st-social-btn active" : "st-social-btn"
            }
            onMouseEnter={() => handleIconHover(index)}
            key={index}
          >
            <span className="st-social-icon">
              <Icon
                icon={`fa6-brands:${socialHandle.platform.toLowerCase()}`}
              />
            </span>
            <span className="st-icon-name">{socialHandle.platform}</span>
          </Link>
        ) : null
      )}
    </div>
  );
};

SocialLinks.propTypes = {
  data: PropTypes.array,
  apiRes: PropTypes.object,
};

export default SocialLinks;
