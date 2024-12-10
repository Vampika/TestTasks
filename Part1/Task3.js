console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

function chunkArray(array, size) {
	const result = [];

	for (let i = 0; i < array.length; i += size) {
		const chunk = array.slice(i, i + size);
		result.push(chunk);
	}

	return result;
}