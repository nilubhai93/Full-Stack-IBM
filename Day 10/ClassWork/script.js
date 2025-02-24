let str ="sv university";
console.log(str.length);
console.log(str.length-1);


console.log(str[2]);
console.log(str[str.length-1]);




let arr = [1,2,3,"nilu", 1.22,null, undefined," "];
console.log(arr[arr.length-2])

arr.push("niladri")
console.log(arr)

arr.pop();
console.log(arr)


let obj = {
    nilu: {className:"B Tech", rn:123, subject:["NM","dsa","DAA", "RM"]} ,
    astik: {className:"B Tech", rn:124, subject:["NM","dsa","DAA", "RM"]} ,
    1:undefined
}
console.log(obj.nilu);



let name ="nilu maji";
let Class = "b tech";
let  hobbies= ["games", "singing"]

let newObj = {
    name,Class, hobbies
}
console.log(newObj)

let ans= [1,2,3,[4,8,9,[6,3,7]]];
console.log(ans[3][3][0])









let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}

console.log(superHeroes[1].villains[0].health);
let a = delete superHeroes[1].villains[0].health;
console.log(a)