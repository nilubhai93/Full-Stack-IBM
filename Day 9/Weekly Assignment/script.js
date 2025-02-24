
const images = [
    {
        src: "https://assetscdn1.paytm.com/images/catalog/view_item/2991331/5377423490379205.jpg",
        link: "https://assetscdn1.paytm.com/images/catalog/view_item/2991331/5377423490379205.jpg"
    },
    {
        src: "https://assetscdn1.paytm.com/images/catalog/view_item/3005425/6583444987912393.png",
        link: "https://assetscdn1.paytm.com/images/catalog/view_item/3005425/6583444987912393.png"
    }
];

let currentIndex = 0;
const heroImage = document.getElementById("heroImage");
const heroLink = document.getElementById("heroLink");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
    heroImage.src = images[currentIndex].src;
    heroLink.href = images[currentIndex].link;
}

setInterval(changeImage, 3000); // Change image every 3 seconds
