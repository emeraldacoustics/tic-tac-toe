import './GameNavigator.css';
import calculateWinner from './utils.js';

function GameNavigator({move, historyLen, cells, navigateHandler}) {
	const prevButton = (
		<button class="navigator" onClick={() => navigateHandler(Math.max(0, move - 1))}>{"<"}</button>
	);
	const winner = calculateWinner(cells);
	const statusText = winner == null ? (move % 2 ? "✘" : "✔") : ("⚑" + (move % 2 ? "✔" : "✘") + "⚑");
	const statusCell = (
		<button class={"navigator " + (winner == null ? "on-progress" : "game-over")}>{statusText}</button>
	);
	const nextButton = (
		<button class={"navigator" + (move + 1 < historyLen ? "" : " disabled")} onClick={() => navigateHandler(Math.min(move + 1, historyLen - 1))}>{">"}</button>
	);
	return (
		<table>
			<tr>
				<td>{prevButton}</td>
				<td>{statusCell}</td>
				<td>{nextButton}</td>
			</tr>
		</table>
	);
}

export default GameNavigator;