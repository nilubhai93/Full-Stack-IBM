async function fetchData(){
    let data =await fetch("https://fakestoreapi.com/products");
    
    let ans = await data.json();
    console.log(ans);
}
fetchData()