let num = 266219;
num = String(num);
num = num.split('');

let sum = 1;

for (let i=0; i<num.length; i++) {
    sum *= num[i]; 
}
console.log(sum);
sum = sum ** 3; 
console.log(sum);
sum = String(sum);
console.log(sum.substr(0,2));

// Ради интереса вывела на экран (на страницу сайта) :)
let Body = document.querySelector('body');
let heading = document.createElement('h1');
heading.textContent = sum.substr(0,2);
Body.appendChild(heading);
