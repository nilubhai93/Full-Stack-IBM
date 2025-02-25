// let obj={
//     name:"Nilu Maji"
// }



// num = 30;
// if (num%3==0 && num%5==0){
//     console.log("Fizz Buzz")
// }
// else if (num%3==0){
//     console.log("fizz")
// }
// else if (num%5==0){
//     console.log("fizz")
// }






let fruits = ['mango', 'banana', 'guava'];
console.log('Fruits:', fruits);

console.log('First Fruit:', fruits[0]);
console.log('Second Fruit:', fruits[1]);

fruits.push('papaya');
console.log('After Adding Papaya:', fruits);

fruits.pop();
console.log('After Removing Last Fruit:', fruits);

fruits.forEach(function(fruit) {
    console.log(fruit);
});

let person = {
    name: 'Rajesh',
    age: 28,
    city: 'Delhi'
};
console.log('Person:', person);

console.log('Name:', person.name);
console.log('Age:', person['age']);

person.job = 'Teacher';
console.log('After Adding Job:', person);

delete person.city;
console.log('After Removing City:', person);

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

let people = [
    { name: 'Rajesh', age: 28 },
    { name: 'Sita', age: 25 },
    { name: 'Amit', age: 35 }
];
console.log('People:', people);

console.log('First Person Name:', people[0].name);

people.forEach(function(person) {
    console.log(person.name + ' is ' + person.age + ' years old.');
});















arr=[1,2,3,4,5,6,7,8,9,10];
// for loop(even/odd)
for(let num =0; num<arr.length; num++){
    if (arr[num]%2==0){
        console.log(`number is even ${num}`)
    }else{
        console.log(`number is odd ${num}`)
    }
}