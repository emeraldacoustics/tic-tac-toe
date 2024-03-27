import './Cell.css';

function Cell({value, onClick}) {
	let txt = '';
	let style = {backgroundColor: "#3b3b3b"};
	if (value === 0)
		txt = '✔';
	else if (value === 1)
		txt = '✘';
	else
		style = {backgroundColor: "#323232"};

	return (
		<button className="cell" style={style} onClick={onClick}>{txt}</button>
	);
}

export default Cell;