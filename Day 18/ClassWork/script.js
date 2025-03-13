let API_KEY="AIzaSyDcr8QPJo6l7Au6jUlC8VH0vshwfQ2udbE";

let video_grid=document.getElementsByClassName("video-grid");

let search_term=document.getElementById("search").value || "India Gate";




async function getData(){
   try{
    let data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)

    let res = await data.json();
    console.log(res.items);
    showData(res.items)
   }catch(error){
    console.log(error)
   }
}

getData();


async function showData(arr){
    document.getElementById("loading").style
    arr.forEach(({snippet}) => {
        let box = document.createElement("a");
        box.className="video-card";

        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;
        img.className = "thumbnail";

        let title = document.createElement("h2");
        title.innerText = snippet.title;
        title.className = "title";

        let channel_title = document.createElement("p");
        channel_title.innerText = snippet.channelTitle;
        channel_title.className = "channel-name";

        box.append(img , title, channel_title);

        box.onclick=()=> {
            let obj = {
                snippet, id
            }

            localStorage.setItem("videoData",JSON.stringify(obj));

            window.location.href = "video.html"; 
        }
    });
}





// let API_KEY="AIzaSyDcr8QPJo6l7Au6jUlC8VH0vshwfQ2udbE";

// let lower_body = document.getElementById("lower-body")

// let search_term = document.getElementById("query").value || "India Gate";

// async function getData(){
// try{
//     let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)        
// }
// catch(error){
//     console.log(error)
// }
// let res = await data.json();
// console.log(data)
// showData(res.items)
// }
// getData();

// async function showData(){
//     arr.forEach(({Snippet}) => {
//         let box = document.createElement("div")
//         box.className = "video";
//         let img = document.createElement("img");
//         img.src = Snippet.thumbnails.medium.url;

//         let title = document.createElement("p")
//         title.innerText = snippet.title

//         let channel_title = document.createElement("p")
//         title.innerText = snippet.channel_title

//         box.append
//     })
// }

