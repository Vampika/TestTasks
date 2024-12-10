document.addEventListener('DOMContentLoaded', () => {
	const images = [
		'img1.jpg',
		'img2.jpg',
		'img3.jpg',
	];

	let currentIndex = 0;
	const carouselImage = document.querySelector('#carouselImage');

	function updateImage() {
		carouselImage.src = images[currentIndex];
	}

	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
		updateImage();
	}

	function prevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		updateImage();
	}

	document.querySelector('#nextButton').addEventListener('click', nextImage);
	document.querySelector('#prevButton').addEventListener('click', prevImage);

	setInterval(nextImage, 3000);
});