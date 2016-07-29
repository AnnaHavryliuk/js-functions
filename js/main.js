onload = function() {
	var startButton = document.getElementById('start-button');
	startButton.addEventListener('click', function(event) {
		var choice;
		choice = confirm('Чи бажаєте почати гру?');
		if (!choice) {
			console.log('Сьогодні ви не виграли мільйон, а могли б.');
		} else {
			guessNumberGame();
		}
	});
}
function guessNumberGame(score=0, lastNumber=6, step=0) {
	var number = parseInt(Math.random() * lastNumber);
	var guess = prompt('Відгадайте число від 0 до ' + (lastNumber-1));
	if (guess === null) {
		console.log('Шкода, що Ви здалися. Ваш виграш становить ' + score + '$');
		return;
	}
	guess = parseInt(guess);
	var prize = 10 * Math.pow(3, step);
	for (var attempt = 1; guess != number && attempt < 3; ++attempt) {
		console.log('Ви не відгадали. Спробуйте ще раз.');
		prize = parseInt(prize / 2);
		guess = prompt('Відгадайте число від 0 до ' + (lastNumber-1));
		if (guess === null) {
			console.log('Шкода, що Ви здалися. Ваш виграш становить ' + score + '$');
			return;
		}
		guess = parseInt(guess);
	}
	var choice;
	if (guess === number) {
		score += prize;
		choice = confirm('Вітаємо, Ви відгадали! Хочете продовжити гру?');
	} else {
		console.log('На жаль, Ви не відгадали.');
		choice = confirm('Хочете зіграти ще раз?');
	}
	if (choice && guess === number) {
		++step;
		lastNumber = lastNumber * 2 - 1;
		guessNumberGame(score, lastNumber, step);
	} else if (choice && guess != number) {
		guessNumberGame();
	} else {
		console.log('Дякуємо за гру, Ваш виграш становить ' + score + '$');
	}
}