// Problem 3: Find the First Number Divisible by 7

const start = 1; // Same as (let i = 1; i <= 100) but can easily change const for later if need be
const end = 100;

for (let i = start; i <= end; i++){
    if((i % 7) === 0){
        console.log('First number divisible by 7 is:', i);
        break;
    }
}