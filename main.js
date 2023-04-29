TRUE_PASSWORD = "2305"
Q = 0

function inputSignal(input) {
	elem = document.getElementById("input-display")

	if (input == 'C') {
		elem.value = ""
		Q = 0
		return
	}

	if (Q >= 0 && Q <= 3)
		if (input == TRUE_PASSWORD[Q]) {
			elem.value += input
			Q += 1
		}
		else
			Q = 5

	if (Q == 4)
		elem.value = "Верный пароль" 

	if (Q == 5)
		elem.value = "Неправильный пароль"
}
