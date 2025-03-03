let form= document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let Name= e.target.uname.value;
    let Email=e.target.email.value;
    let Phone=e.target.phone.value;
    
    let obj=[
        Name,Email,Phone
    ]
    

    
})