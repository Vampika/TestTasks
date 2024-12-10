let wrapper = document.querySelector("#users-list");
const originUrl = "https://randomuser.me/api/?results=10";

fetchData();

async function fetchData() {
	let loader = document.createElement("div");
	loader.textContent = "Загрузка...";
	wrapper.appendChild(loader);
	try {
		const data = await fetch(originUrl).then((res) => res.json());
		appendUsers(data);
	} catch (error) {
		wrapper.textContent = "Не удалось загрузить пользователей";
	} finally {
		wrapper.removeChild(loader);
	}
}

function appendUsers(data) {

	data.results.forEach(user => {
		let userDiv = document.createElement('div');
		userDiv.classList.add("card");
		userDiv.innerHTML = `<div class="picture">
			<img src="${user.picture.large}"/>
		</div>
		<div class="info">
			<div class="name">${user.name.first} ${user.name.last}</div>
			<div class="email">${user.email}</div>
		</div>`;
		wrapper.appendChild(userDiv);
	})
}