class Calculator {
	constructor() {
	}

	add(a, b) {
		return a + b;
	}

	subtract(a, b) {
		return a - b;
	}

	multiply(a, b) {
		return a * b;
	}

	divide(a, b) {
		if (b === 0) {
			return 'Ошибка: деление на ноль';
		}
		return a / b;
	}
}

const calculator = new Calculator();

console.log(calculator.add(5, 3));       // 8
console.log(calculator.subtract(5, 3));  // 2
console.log(calculator.multiply(5, 3));  // 15
console.log(calculator.divide(5, 0));    // 'Ошибка: деление на ноль'
console.log(calculator.divide(5, 2));    // 2.5