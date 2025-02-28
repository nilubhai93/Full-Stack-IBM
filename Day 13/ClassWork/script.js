// //forEach
// let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12];
// // let ans = arr.forEach((index, el)=> {
// //    return el
// // })

// // console.log(ans)

// let ans = arr.filter((el) => {
//     return el % 5 == 0;
// }).map((el, index) => {
//     return el * 2;
// }).reduce((acc, el) => {
//     return acc + el;
// })
// console.log(ans);


// reduce

// let output = arr.reduce((acc, el)=>{
//     return acc+el;
// })
// console.log(output);




// let newArr= [4,5,7,9,7,2,7,54,100,45,12,41];
// let newAns =arr.sort((a,b)=>{
//     return a+b
// });
// console.log(newAns);





// let data = [
//     { name: "watch", price: 2000, desc: "good watch", rating: 4 },
//     { name: "shoe", price: 1200, desc: "good shoe", rating: 4 },
//     { name: "car", price: 100000, desc: "good watch", rating: 4 },
//     { name: "phone", price: 500000, desc: "good phone", rating: 4 },
//     { name: "laptop", price: 70000, desc: "good watch", rating: 4 },
//     { name: "laptop bag", price: 2000, desc: "good watch", rating: 4 }
// ]


//     return a.price-b.price;
// })


// data.sort((a, b) => {
//     let nameA = a.name;
//     let nameB = b.name;

//     if(nameA<nameB){
//         return -1;
//     }if(nameA>nameB){
//         return 1;
//     }
// })

// data.sort((a,b)=> a.name.localeCompare(b.name));

// console.log(data)




function array(arrayPass) {
    return arrayPass.sort((a, b) => a - b);


}
console.log(array([3, 6, 9, 2, 56, 34, 98, 56, 23, 12, 90]))