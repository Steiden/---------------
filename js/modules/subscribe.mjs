const form = document.getElementById('subscribe-form');

function regSubscription(e) {
	e.preventDefault();
	// Запись данных
	const name = document.getElementById('Name').value;
	const email = document.getElementById('Email').value;

	// Модальное окно
	const modalMessage = document.getElementById('modal-message');

	// Контент модального окна
	const modalMessageContent = document.getElementById('modal-message-content');
	modalMessageContent.innerHTML = "";

	// Формирование содержимого модального окна
	let modalMessageContentText = /*html*/
	`
		<p class="modal-message__text">${name}, спасибо, что подписались на нашу рассылку!</p>
		<p class="modal-message__text">Ваша почта: ${email}</p>
	`;

	// Добавление содержимого в модальное окно
	modalMessageContent.insertAdjacentHTML('beforeend', modalMessageContentText);
	modalMessage.classList.add('show');
}

export {form, regSubscription};