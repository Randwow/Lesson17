var a, b;
var sum = a + b;;

a = +prompt('Введите пожалуйста первое число', '');
b = +prompt('Введите пожалуйста второе число', '');
if (isNaN(a) || isNaN(b)) {
    alert('Число первое  ' +  + 'или второе не являются числами');
}
else {
   sum = a + b; 
}

alert(sum.toFixed(2));

module.exports = {
    sum
};