document.addEventListener('DOMContentLoaded', () => {
	const taskInput = document.getElementById('taskInput');
	const addTaskButton = document.getElementById('addTaskButton');
	const taskList = document.getElementById('taskList');
	const showAllButton = document.getElementById('showAll');
	const showCompletedButton = document.getElementById('showCompleted');
	const showPendingButton = document.getElementById('showPending');

	addTaskButton.addEventListener('click', addTask);

	function addTask() {
		const taskText = taskInput.value.trim();
		if (taskText === '') return;

		const li = document.createElement('li');

		const completeButton = document.createElement('button');
		completeButton.classList.add("complete-button");
		//completeButton.textContent = '✔️';
		completeButton.addEventListener('click', () => {
			li.classList.toggle('completed');
		});

		const text = document.createElement("p");
		text.textContent = taskText;

		//li.textContent = taskText;



		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Удалить';
		deleteButton.addEventListener('click', () => {
			taskList.removeChild(li);
		});

		li.appendChild(completeButton);
		li.appendChild(text);
		li.appendChild(deleteButton);
		taskList.appendChild(li);

		taskInput.value = '';
	}

	showAllButton.addEventListener('click', () => {
		const items = taskList.getElementsByTagName('li');
		for (let item of items) {
			item.style.display = 'flex';
		}
	});

	showCompletedButton.addEventListener('click', () => {
		const items = taskList.getElementsByTagName('li');
		for (let item of items) {
			if (item.classList.contains('completed')) {
				item.style.display = 'flex';
			} else {
				item.style.display = 'none';
			}
		}
	});

	showPendingButton.addEventListener('click', () => {
		const items = taskList.getElementsByTagName('li');
		for (let item of items) {
			if (!item.classList.contains('completed')) {
				item.style.display = 'flex';
			} else {
				item.style.display = 'none';
			}
		}
	});
});