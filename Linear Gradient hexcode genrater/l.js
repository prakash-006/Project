let btn1 = document.getElementById("mybutton");
let btn2 = document.getElementById("mybutton2");
let copydiv = document.querySelector(".copycode")

let rgb1 = "#004773";

let rgb2 = "#54d542"



const hexvalues = () => {
  let myhexavalues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myhexavalues[Math.floor(Math.random() * 16)];
  }
  return colors;
};





const handlebutton1 = () => {
  rgb1 = hexvalues();
  console.log(rgb1);
  btn1.innerText = rgb1
document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
 copydiv.innerHTML = 
    `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
};

const handlebutton2 = () => {
 rgb2 = hexvalues();
  console.log(rgb2);
  btn2.innerText = rgb2
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
 copydiv.innerHTML = 
    `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
};



btn1.addEventListener("click", handlebutton1);
btn2.addEventListener("click", handlebutton2);

copydiv.addEventListener("click", ()=>{
    navigator.clipboard.writeText(copydiv).innerText
})