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
    arr.forEach(({snippet, id}) => {
        let box = document.createElement("div")
        box.className = "video";

        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;

        let title = document.createElement("p")
        title.innerText = snippet.title

        let channel_title = document.createElement("p")
        channel_title.innerText = snippet.channelTitle

        box.append(img,title,channel_title);

        video_grid.append(box)
    });
}





