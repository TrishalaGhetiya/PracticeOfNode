const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

console.log(fruits);
console.log(fruits.map(fruit => {
    if(fruit === ' ')
        fruit = 'empty string';

    return fruit;
}));