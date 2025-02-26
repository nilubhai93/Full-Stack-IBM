// Problem 1: Create a Student Management System (Using Objects)

(function()
{const student = {
    name: "Aryan Kumar",
    rollNumber: 101,
    marks: {
        Math: 80,
        Science: 65,
        English: 50,
        History: 70
    },
    getAverageMarks: function () {
        let avg = (this.marks.Math +
            this.marks.Science +
            this.marks.English +
            this.marks.History) / 4;
        return avg;

    },
    checkPassOrFail: function () {
        let avg = this.getAverageMarks();
        if (avg > 40) {
            console.log("Passed");
        } else {
            console.log("Failed");
        }
    }
};
console.log(student.getAverageMarks());
student.checkPassOrFail();})()







// Problem 3: Generate Multiplication Table (For Loop) Task:
// Write a function generateTable(num, limit) that prints the multiplication table of a given num up to limit.

function generateTable(num, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num}*${i}=${num*i}`)
    }
}
generateTable(5,3);






// Problem 4: FizzBuzz (If-Else Conditions)

function fizzbuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else if (i % 5 == 0) {
            console.log("buzz")
        } else {
          console.log(i)
        }
    }
}
fizzbuzz(30)