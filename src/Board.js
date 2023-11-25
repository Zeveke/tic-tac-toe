import React from 'react';
import PropTypes from 'prop-types';

import './Board.css';
import Square from './Square';

const Board = ({ squares, click }) => {
	return (
		<div className="board">
			{squares.map((square, i) => (
				<Square key={i} value={square} onClick={() => click(i)} />
			))}
		</div>
	);
};

Board.propTypes = {
	squares: PropTypes.array,
	click: PropTypes.func,
};

export default Board;
