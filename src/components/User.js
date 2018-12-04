import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
    return <div>{props.name}</div>;
}

User.propTypes = {
    name: PropTypes.string.isRequired
};

export default User;