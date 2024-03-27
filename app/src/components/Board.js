import './Board.css';
import Cell from "./Cell";
import calculateWinner from './utils.js';

function Board({move, cells, onPlay}) {
	function handleClick(i) {
		if (cells[i] != null || calculateWinner(cells) != null)
			return;
		
		const nextCells = cells.slice();
		nextCells[i] = move % 2;
		onPlay(nextCells);
	}

	return (
		<table>
			<tr>
				<td><Cell value={cells[0]} onClick={() => handleClick(0)} /></td>
				<td><Cell value={cells[1]} onClick={() => handleClick(1)} /></td>
				<td><Cell value={cells[2]} onClick={() => handleClick(2)} /></td>
			</tr>
			<tr>
				<td><Cell value={cells[3]} onClick={() => handleClick(3)} /></td>
				<td><Cell value={cells[4]} onClick={() => handleClick(4)} /></td>
				<td><Cell value={cells[5]} onClick={() => handleClick(5)} /></td>
			</tr>
			<tr>
				<td><Cell value={cells[6]} onClick={() => handleClick(6)} /></td>
				<td><Cell value={cells[7]} onClick={() => handleClick(7)} /></td>
				<td><Cell value={cells[8]} onClick={() => handleClick(8)} /></td>
			</tr>
		</table>
	);
}

export default Board;