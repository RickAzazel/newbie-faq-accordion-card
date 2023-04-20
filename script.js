const faqText = document.querySelectorAll('.text__item');

faqText.forEach(textItem => {
	textItem.addEventListener('click', () => {
		textItem.classList.toggle('text__item--active');
	});
});

