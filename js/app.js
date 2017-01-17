document.addEventListener('DOMContentLoaded',function() {
	const el = document.querySelector('.random-colors-ui');

	function handleData(x) {
		x.map(y => {
			const backgroundColor = y.backgroundColor;
			const color = y.color;
			const span = document.createElement('span');
			span.className = 'color';
			span.innerHTML = `bgColor: <br />${backgroundColor}<br /> color: <br />${color}`;
			span.style.color = color;
			span.style.background = backgroundColor;
			el.appendChild(span);
		});
	}

	fetch(`https://raw.githubusercontent.com/deadcoder0904/random-colors-generator/master/json/colors.json`)
		.then(arr => arr.json())
		.then(res => {
			handleData(res)
		}
		)
		.catch(err =>
			console.log(err)
		)
});
