let clicks = 1;
const TimeOut = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
const flex = document.querySelector('#flex');

		button.onclick = start;
		function start() {
			const startTime = Date.now();
			button.textContent = "ЖМИ!!!";
			display.textContent = formatTime(TimeOut);
			counter.textContent = clicks++
			flex.insertAdjacentHTML("afterbegin", `<div class="in-flex"></div>`);
			button.onclick = () => {
				counter.textContent = clicks++;
				flex.insertAdjacentHTML("afterbegin", `<div class="in-flex"></div>`);
			};

			const timeout = setTimeout(
				() => {
					button.onclick = null;
					display.textContent = "Время вышло("
					button.textContent = "Ещё раз";
					clearInterval(interval);
					clearInterval(twosec);
					clearTimeout(timeout);
				}, TimeOut
			);
			
			const twosec = setInterval(
				() => {
					button.textContent = "Быстрее!";
				}, 2000
			);

			const interval = setInterval(
				() => {
					const delta = Date.now() - startTime;
					display.textContent = formatTime(TimeOut - delta);
					if (clicks > 30) {
						display.textContent = ""
						button.onclick = null;
						button.textContent = "ПОБЕДА";
						clearInterval(interval);
						clearTimeout(timeout);
						clearInterval(twosec);
					};
				}, 100
			);

		};
		function formatTime(ms) {
			return Number.parseFloat(ms / 1000).toFixed(2);
		};
		





