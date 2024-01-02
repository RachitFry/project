
const body = document.body;
const imageURLs = [
  'https://th.bing.com/th/id/R.2436bfd57f8da9d3352be6d9c69f7d0d?rik=9ZCsDkOmNhWhyQ&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2fbest-scenery-wallpaper-scenery-images.jpg&ehk=QhEgBXlBIdu4NBBKeTvxOQncAMHrLokkC8ustgaeB9c%3d&risl=&pid=ImgRaw&r=0', 
  'https://th.bing.com/th/id/R.b905d3eecb205f9b1005637968a8fad4?rik=JjmNLCPC7xZTKw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f7%2f2%2f1297770-amazing-scenery-wallpaper-2560x1600-for-samsung.jpg&ehk=B9dmOQHhhcvUoxskmtGtMYUg4MhrFEGs5jSCznEHVfU%3d&risl=&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.oCHX_KilRtdojBKJPFXFCAHaEo?rs=1&pid=ImgDetMain'
];
let currentImageIndex = 0;

function changeBackgroundImage() {
  body.style.backgroundImage = `url('${imageURLs[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % imageURLs.length;
}


setInterval(changeBackgroundImage, 3000);