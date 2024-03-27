import { useState } from 'react';
import Board from './Board';
import GameNavigator from './GameNavigator';

function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [move, setMove] = useState(0);
	const cells = history[move];
	const historyLen = history.length;

	function onPlay(nextCells) {
		let nextHistory = history.slice(0, move + 1);
		nextHistory = [...nextHistory, nextCells];
		setHistory(nextHistory);
		setMove(move + 1);
	}

	function navigateToMove(nextMove) {
		setMove(nextMove);
	}

	return (
		<>
			<Board move={move} cells={cells} onPlay={onPlay} />
			<GameNavigator move={move} historyLen={historyLen} cells={cells} navigateHandler={navigateToMove} />
		</>
	);
}

export default Game;