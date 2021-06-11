// расчет високосного года 

let year = +prompt('Введите год');

console.log(year);

if((year % 4 == 0 && year % 100 !=0 )|| year % 400 ==0) {
    alert(`${year} год високосный`);
} else {
    alert(`${year} год НЕ високосный`);
}