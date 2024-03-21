import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Iconbox.scss";

const Iconbox = ({ data, apiRes }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (
      apiRes &&
      apiRes.user &&
      apiRes.user.services &&
      apiRes.user.services.length > 0
    ) {
      // Create a copy of the services array
      const updatedServices = [...apiRes.user.services];
      setServices(updatedServices);
    }
  }, [apiRes]);

  // console.log(services[0]);

  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Service"} />
      <div className="container">
        <div className="row">
          {services.length === 0 ? (
            <div className="col-lg-12 text-center">
              <p>No services available.</p>
            </div>
          ) : (
            services.map((element, index) => {
              if (element.enabled) {
                return (
                  <div
                    className="col-lg-4 col-md-6"
                    key={index}
                    data-aos={element.effect ? element.effect : "zoom-out-up"}
                    data-aos-duration={
                      element.duration ? element.duration : "800"
                    }
                    data-aos-delay={element.delay ? element.delay : "200"}
                  >
                    <div
                      className={`st-iconbox st-style1`}
                      style={{ height: "365px" }}
                    >
                      <div className="st-iconbox-icon">
                        {element.image.url && (
                          <img src={element.image.url} alt="Icon" />
                        )}
                      </div>
                      <h2 className="st-iconbox-title">{element.name}</h2>
                      <div className="st-iconbox-text">{element.desc}</div>
                      <div
                        className="st-iconbox-text"
                        style={{ marginTop: "1em" }}
                      >
                        {" "}
                        Charge : {element.charge}
                      </div>
                    </div>
                    <div className="st-height-b30 st-height-lg-b30"></div>
                  </div>
                );
              } else {
                return null; // If service is not enabled, don't render anything
              }
            })
          )}
        </div>
      </div>
      <div className="st-height-b70 st-height-lg-b50"></div>
    </section>
  );
};

Iconbox.propTypes = {
  data: PropTypes.object,
  apiRes: PropTypes.object,
};

export default Iconbox;
