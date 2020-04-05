// 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
// 2. Вывести в консоль простые числа от 1 до n.
// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n.
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных.
// 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.

function punkt1(n) {
    let i=1;
    n = prompt('Введите значение n');
    while(i<=n){
        console.log(i);
        i++;
    }
}


function isSimple( n ) {
    for (let k = 2; k < n ; k++) {
        if (n % k === 0) {
            return false;
        }
    }

    return true;
}
function getSimple(n) {
    let m = 1;
    n = prompt('Введите значение n');
    do {
        if (isSimple(m)) {
            console.log(m);
        }

        m++;
    } while (m <= n);
}



function punkt3(n, k){
    let m = 1;
    n = prompt('Введите значение n');
    k = prompt('Введите значение k');
    while(m<=n){
        if(m%k===0){
        console.log(m);  
        }
        m++;
    }    
}
    
function povtor (message) {
    message='Хватит?';
    const response = confirm(message);
    if(response){
        console.log('Хватит!');
        }else{
        getSimple__povtor();  
        }
}

function getSimple__povtor(n) {
    let m = 1;
    n = prompt('Введите значение n');
    do {
        if (isSimple(m)) {
            console.log(m);
        }

        m++;
    } while (m <= n);
    povtor();
}


