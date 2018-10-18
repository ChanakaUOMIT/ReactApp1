import React from 'react';
import PropTypes from 'prop-types';

const InLineError =({ text }) => <span style={{ color: "#9c4240"}} >{text}</span>

InLineError.PropTypes = {
    text:PropTypes.string.isRequired
};

export default InLineError;