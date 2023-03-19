const calculator = document.querySelector('.calculator');
const result = calculator.querySelector('.result input');
const buttons = calculator.querySelectorAll('.buttons button');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.innerText === 'C') {
			result.value = '';
		} else if (button.innerText === 'CE') {
			result.value = result.value.slice(0, -1);
		} else if (button.innerText === '=') {
			result.value = eval(result.value);
		} else {
			result.value += button.innerText;
		}
	});
});
