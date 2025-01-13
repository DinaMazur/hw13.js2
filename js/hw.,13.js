// завдання 1

let user = {
    name: "Maria",
    age: 21,
    hobby: "singing",
    premium: true
}
    ;
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const { name, age, hobby, premium, mood } = user;
for (let key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}


// завдання 2
// function countProps(obj) {
//     return Object.keys(obj).length;
// }
// const userfirst = {
//     name: "Dina",
//     age: 20,
//     hobby: "swimming",
//     brother: "denis"
// };
// const {name, age, hobby, brother } = userfirst
// console.log(countProps(userfirst));



// завдання 3


function findBestEmployee(employees) {
let maxTasks = 0;
let bestEmployee = "";
for (const [name, tasks] of Object.entries(employees)) {
if (tasks > maxTasks) {
maxTasks = tasks;
bestEmployee = name;
}
}
return bestEmployee;
}


const employees = {
asty: prompt("Enter the number of tasks for asty"), 
deny: prompt("Enter the number of tasks for deni"), 
ilona: prompt("Enter the number of tasks for ilona"), 
weksst: prompt("Enter the number of tasks for weksst"), 
}

console.log(findBestEmployee(employees));


//  завдання 4

function countTotalSalary({ ...employees }) {
    let totalSalary = 0;
    for (let salary of Object.values(employees)) {
        totalSalary += salary;
    } return totalSalary;
}
const salaries = { Olena: 50000, Oleg: 20000, Vlad: 150000 };
console.log(countTotalSalary(salaries));

// завдання 6

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (let product of allProducts) {
        if (product.name === productName) {
            totalPrice += product.price * product.quantity;
        }
    } return totalPrice;
}
const products = [
    { name: "Apple", price: 15, quantity: 1000 },
    { name: "Lemon", price: 25, quantity: 500 },
    { name: "Tomato", price: 70, quantity: 20000 },
    { name: "Kiwi", price: 60, quantity: 300 }
];

console.log(calculateTotalPrice(products, 'Apple'));
console.log(calculateTotalPrice(products, 'Banana'));
console.log(calculateTotalPrice(products, 'Cherry'));
