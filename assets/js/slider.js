const left_arrow = document.querySelector('.slider__button');
const right_arrow = document.querySelector('.slider__button__reverted');

let items = document.querySelectorAll('.pets__card');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

left_arrow.addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

right_arrow.addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});
