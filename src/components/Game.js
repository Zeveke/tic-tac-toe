import React, { useState } from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import './Game.css';
import { calculateWinner } from '../helper';

const Game = () => {
	const [boardContainers, setBoardContainers] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const winner = calculateWinner(boardContainers);

	const handleClick = (index) => {
		const bordContainersCopy = [...boardContainers];

		if (winner || bordContainersCopy[index]) return;
		bordContainersCopy[index] = xIsNext ? 'X' : '0';
		setBoardContainers(bordContainersCopy);
		setXIsNext(!xIsNext);
	};

	const startNewGameLayout = () => {
		return (
			<button
				className="start_btn"
				onClick={() => setBoardContainers(Array(9).fill(null))}
			>
				Начать заново{' '}
			</button>
		);
	};
	return (
		<>
			<div className="wrapper">
				<div className="game_info">
					{winner
						? ' Победитель : ' + winner
						: ' Текущий ход : ' + (xIsNext ? ' X ' : ' 0 ')}
				</div>
				{startNewGameLayout()}
				<Board squares={boardContainers} click={handleClick} />
				<div className="game_info_draw">
					{!winner ? 'Пока ничья!' : 'Есть победитель!'}
				</div>
			</div>
		</>
	);
};

Board.propTypes = {
	props: PropTypes.number,
};

export default Game;
