
let parent =document.getElementById("parent");


async function getData(){
    let data=await fetch(`http://localhost:3000/posts`);
    let res= await data.json();
    showData(res);
    console.log(res());
}

getData();
async function showData(arr){
    parent.innerHTML= null;
    arr.forEach((el,index)=>{
        let box=document.createElement("div")
        box.className="box"

        let id=document.createElement("p")
        id.innerText=el.id

        let title=document.createElement("p")
        title.innerText=el.title

        let views=document.createElement("p")
        views.innerText=el.views;

        box.append(id,title,views);

        parent.append(box)

    })
}



let button = document.getElementById("btn");

button.addEventListener("click", async()=>{
    let value=document.getElementById("input").value;

    let obj={
        title:value,
        views:Math.random(100,1000)
    }

    try {
        let res= await fetch(`http://localhost:3000/posts`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(obj)
        });

        let response = await res.json();
        if(response){
            getData();
            alert("Data saved successfully");
        }

    } catch (error) {
        console.log("error")
    }
})