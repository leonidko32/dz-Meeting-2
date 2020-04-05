function zadacha(speed, slowdown, mine){
    let m;
    speed = prompt("Скорость тараканов в метрах");
    slowdown = prompt("Дальность ската тараканов в метрах");
    mine = prompt("Высота до квартиры в метрах");
    m = (mine/(speed-slowdown));
    console.log('У вас'+' '+m+ ' '+'часов на установку ловушек');
}