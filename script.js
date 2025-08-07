const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreDisplay = document.getElementById('score');
const gameOver = document.getElementById('game-over');
const jumpBtn = document.getElementById('jump-btn');
const duckBtn = document.getElementById('duck-btn');

let score = 0;
let isGameOver = false;

// Функция для прыжка
const jump = () => {
    if (isGameOver) return;
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');
        setTimeout(() => {
            dino.classList.remove('jump');
        }, 500); // Длительность прыжка
    }
};

// Функция для пригибания
const duck = () => {
    if (isGameOver) return;
    if (!dino.classList.contains('duck')) {
        dino.classList.add('duck');
        setTimeout(() => {
            dino.classList.remove('duck');
        }, 500); // Длительность пригибания
    }
};

// Обработчики событий для кнопок
jumpBtn.addEventListener('click', jump);
duckBtn.addEventListener('mousedown', duck); // mousedown для пригибания, чтобы можно было удерживать
duckBtn.addEventListener('mouseup', () => dino.classList.remove('duck'));

// Проверка столкновений
setInterval(() => {
    if (isGameOver) return;

    // Обновление счёта
    score++;
    scoreDisplay.textContent = score;

    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    const cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));

    // Если динозаврик столкнулся с кактусом
    if (cactusRight > 540 && cactusRight < 600 && dinoTop < 50) {
        gameOver.style.display = 'block';
        isGameOver = true;
    }
}, 10);
