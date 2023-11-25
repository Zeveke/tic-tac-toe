import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

const Square = (props) => {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
};

Square.propTypes = {
	onClick: PropTypes.func,
	value: PropTypes.string,
};

export default Square;
