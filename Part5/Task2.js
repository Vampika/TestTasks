const original = {
	name: 'John',
	age: 31,
	address: {
		city: 'New York',
		country: 'USA'
	}
}

function objectClone(original) {
	let clone = {}
	for (key in original) {
		if (typeof original[key] === "object")
			clone[key] = objectClone(original[key])
		else
			clone[key] = original[key];
	}
	return clone
}

const copy = objectClone(original);
copy.address.city = 'Los Angeles';
console.log("original: ", original.address.city); // New York (оригинальный объект не должен измениться)
console.log("copy: ", copy.address.city); // Los Angeles