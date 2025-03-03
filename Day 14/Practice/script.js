// let user=[
//     {
//         "name":"ws",
//         "email": "nilu@gmail.com"
//     },
//     {
//         "name":"abc",
//         "email": "abcd@gmail.com"
//     }
// ]

// localStorage.setItem("name",JSON.stringify(user));


let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let Name = e.target.uname.value;
    let Email = e.target.email.value;
    let Phone = e.target.phone.value;

    let obj = [
        Name, Email, Phone
    ]

    var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];

    userData.push({
        "name": Name,
        "email": Email,
        "phone": Phone
    })
    localStorage.setItem("userDetails", JSON.stringify(userData));

})



let main = document.querySelector(".main");
let displayData = () => {
    var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    let finalData = " ";
    userData.forEach((elemnt, i) => {
        finalData += `
         <div class="items">
            <span>&times;</span>
            <h5>${element.name}</h5>
            <div>AbC</div>

            <h5>Email</h5>
            <div>${element.email}</div>

            <h5>Phone</h5>
            <div>${element.phone}</div>
        </div>
    </div>`
    })
}
displayData()