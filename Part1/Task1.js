console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("Привет")); // false
console.log(isPalindrome("СОС")); //true
console.log(isPalindrome("Муха! О, муха! Велика аки лев! Ах, ум! О ах, ум!")); //true

function isPalindrome(str) {
	const regex = /[^а-яА-Я0-9]/g;
	return str.replaceAll(regex, "").toLowerCase().split('').reverse().join('') === str.replaceAll(regex, "").toLowerCase();
}