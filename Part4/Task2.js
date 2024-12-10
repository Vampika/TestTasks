class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.status = 'available'; // По умолчанию книга доступна (available)
	}
}

class Library {
	constructor() {
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	borrowBook(isbn) {
		const book = this.books.find(b => b.isbn === isbn);
		if (book) {
			if (book.status === 'available') {
				book.status = 'borrowed'; // Меняем статус на взята (borrowed)
				console.log(`Книга "${book.title}" взята.`);
			} else {
				console.log(`Книга "${book.title}" уже взята.`);
			}
		} else {
			console.log('Книга не найдена.');
		}
	}

	returnBook(isbn) {
		const book = this.books.find(b => b.isbn === isbn);
		if (book) {
			if (book.status === 'borrowed') {
				book.status = 'available';
				console.log(`Книга "${book.title}" возвращена.`);
			} else {
				console.log(`Книга "${book.title}" уже была возвращена.`);
			}
		} else {
			console.log('Книга не найдена.');
		}
	}

	getAvailableBooks() {
		const availableBooks = this.books.filter(b => b.status === 'available');
		if (availableBooks.length === 0) {
			console.log('Нет доступных книг.');
		} else {
			console.log('Доступные книги:');
			availableBooks.forEach(b => console.log(`- ${b.title} (Автор: ${b.author}, ISBN: ${b.isbn})`));
		}
	}
}

// Пример использования:
const library = new Library();

const book1 = new Book('Алиса в стране чудес', 'Льюис Кэрролл', '154586515');
const book2 = new Book('Мертвые души', 'Николай Гоголь', '2155588');
const book3 = new Book('Маяк', 'Дороти Джеймс', '7895454545');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.getAvailableBooks(); // Показывает все доступные книги

library.borrowBook('154586515'); // Берем книгу по ISBN
library.borrowBook('154586515'); // Пытаемся взять ту же книгу еще раз
library.returnBook('154586515'); // Возвращаем книгу
library.returnBook('154586515'); // Пытаемся вернуть книгу снова
library.getAvailableBooks(); // Снова показываем доступные книги