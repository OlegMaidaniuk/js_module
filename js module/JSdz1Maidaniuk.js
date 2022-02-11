let time =+prompt("Котра хвилина на восьму?", 0 );
if (0 < time && time < 59 && 0 <= time && time <= 14) {
    document.write('<div>Вже початок восьмої, вмикай превью!</div>');
} else if (0 < time && time < 59 && 15 <= time && time <= 29) {
    document.write('<div>Вже більше чверті по сьомій, швидко втикай превьюху на швидкість 1,25</div>');
} else if (0 < time && time < 59 && 30 <= time && time <= 44) {
    document.write('<div>Оу, та то вже більш як пів на восьму, втикай превьюху на швидкість 1,75 чи 2</div>');
} else if (0 < time && time <= 59 && 45 <= time && time <= 59) {
    document.write('<div>все, менш як за чверть восьма, вже йде лекція по js, зранку превьюху треба було дивитись!!</div>');
} else if (time = !!false || 'string' || '' || null) {
    document.write('<div>Спробуйте ще раз. Ви типовий Афанасій</div>');
} else if (time <= 0 || time >= 60) {
    document.write('<div>вивчай цифри</div>');
}
