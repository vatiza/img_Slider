const imges = [
    'img/pic (1).jpg',
    'img/pic (2).jpg',
    'img/pic (3).jpg',
    'img/pic (4).jpg',
    'img/pic (5).jpg'
]

let imgIndex = 0;
const imgEl = document.getElementById('img-slider');
setInterval(() => {
    if (imgIndex === imges.length) {
        imgIndex = 0;
    }
    const imgurl = imges[imgIndex]
    console.log(imgIndex, imgurl);
    imgEl.setAttribute('src', imgurl);
    imgIndex++;
}, 1000);