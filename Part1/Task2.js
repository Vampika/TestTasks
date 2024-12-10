let fizzBuzz = function (n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		if (i % 15 === 0) {
			arr.push("FizzBuzz");
			continue;
		}
		if (i % 3 === 0) {
			arr.push("Fizz");
			continue;
		}
		if (i % 5 === 0) {
			arr.push("Buzz");
			continue;
		}
		arr.push(i.toString());
	}
	return arr;

};

console.log(fizzBuzz(100));