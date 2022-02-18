/*
Background Image List 
other Link > https://source.unsplash.com/random
*/
const bgImages = [
  "bg_1.jpg",
  "bg_2.jpg",
  "bg_3.jpg",
  "bg_4.jpg",
  "bg_5.jpg",
  "bg_6.jpg",
  "bg_7.jpg",
  "bg_8.jpg",
];

(() => {
  //setting BackGround Image ( util.js >> createRandomIndex )
  const bg_Image = bgImages[createRandomIndex({ max: bgImages.length })];
  document.body.style.backgroundImage = `url('images/${bg_Image}')`;
})();
