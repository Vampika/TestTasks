function debounce(callback, timeoutMs) {
	let lastCall = 0; // Сохраняем время последнего вызова
	let lastCallTimer = null; // Таймер для отслеживания отложенного вызова

	return function (...args) {
		const now = Date.now();

		// Если последний вызов был слишком недавно, сбрасываем таймер
		if (now - lastCall <= timeoutMs) {
			clearTimeout(lastCallTimer);
		}

		lastCall = now;

		// Устанавливаем таймер для вызова функции через заданное время
		lastCallTimer = setTimeout(() => callback(...args), timeoutMs);
	};
}

const debouncedFunction = debounce(() => {
	console.log('Вызвана функция с задержкой');
}, 2000);
debouncedFunction();
debouncedFunction(); // Этот вызов должен сбросить таймер и предотвратить мгновенный вызов функции.
debouncedFunction();
setTimeout(debouncedFunction, 4000);