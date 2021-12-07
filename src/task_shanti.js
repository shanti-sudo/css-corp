import React from "react";
import PropTypes from 'prop-types';

const user = ({ firstname, lastname }) => (
  (<h1>"Fullname : `${firstname}` `${lastname}`"</h1>)
);

user.PropTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
};

export default ;

