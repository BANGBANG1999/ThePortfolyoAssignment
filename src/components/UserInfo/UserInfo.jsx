import React from "react";

const UserInfo = ({ userData }) => {
  const {
    email,

    about: { phoneNumber, address, exp_year, quote },
  } = userData;

  return (
    <ul className="st-text-block-details st-mp0">
      <li>
        <span>Email</span> : <span>{email}</span>
      </li>
      <li>
        <span>Phone</span> : <span>{phoneNumber}</span>
      </li>
      <li>
        <span>From</span> : <span>{address}</span>
      </li>
      <li>
        <span>Experience</span> : <span>{exp_year}</span>
      </li>
      <li>
        <span>Quote</span> : <span>{quote}</span>
      </li>
    </ul>
  );
};

export default UserInfo;
