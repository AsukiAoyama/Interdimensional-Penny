/*Copyright © AsukiAoyama 2023*/
/*****************************************Variables*****************************************/
const audio = new Audio("Sound/Coin.mp3");
let Penny = document.querySelector("img");
let Answer = document.querySelector("h2");
let PopUp = document.querySelector(".popup");
let HTUPopUp = document.querySelector(".HTUpopup");
let More = document.querySelector("hm").addEventListener("click", OpenHTUPopUp);
let Questionmark = document.querySelector("hq").addEventListener("click", OpenPopUp);
let Clicks = 0;

/*****************************************Detect-Penny-Click*****************************************/
Penny.addEventListener("click", GenerateOutput);

/*****************************************Generate-Output-Function*****************************************/
function GenerateOutput(){

    Clicks++;

    var x = Math.floor((Math.random() * 6) + 1);

    Penny.removeEventListener("click", GenerateOutput);

    Answer.classList.add("AnswerFadeClass");
    Penny.classList.add("PennyFadeClass");

    audio.play();
    
    setTimeout(UpdatePenny, 2500);
    setTimeout(Reset, 5000);

    function UpdatePenny(){

   switch(x){
           case 1:
           Penny.src="Images/Kopf.png";
           Penny.style.width= 300 + "px";
           Penny.style.height= 300 + "px";
           Answer.innerHTML = "Heads";
           break;
   
           case 2:
           Penny.src="Images/KopfN.png";
           Penny.style.width= 300 + "px";
           Penny.style.height= 300 + "px";
           Answer.innerHTML = "Heads-Negative";
           break;
   
           case 3:
           Penny.src="Images/Rand.png";
           Penny.style.width= 20 + "px";
           Penny.style.height= 300 + "px";
           Answer.innerHTML = "Edge";
          
           break;
   
           case 4:
           Penny.src="Images/RandN.png";
           Penny.style.width= 20 + "px";
           Penny.style.height= 300 + "px";
           Answer.innerHTML = "Edge-Negative";
          
           break;
   
           case 5:
           Penny.src="Images/ZahlN.png";
           Penny.style.width= 300 + "px";
           Penny.style.height= 300 + "px";
           Answer.innerHTML = "Tails-Negative";
          
           break;
   
           case 6:
           Penny.src="Images/Zahl.png";
           Penny.style.width= 300 + "px";
           Penny.style.height= 300 + "px";
           Answer.innerHTML = "Tails";
           
           break;
           
       } 
   }

   if(Clicks === 5){
    alert("Hello there!\nThank you for using my website!\n-Asuki");
   }
}

/*****************************************Reset-Function*****************************************/
function Reset(){
    Penny.addEventListener("click", GenerateOutput);

    Answer.classList.remove("AnswerFadeClass");
    Penny.classList.remove("PennyFadeClass");
   }

/*****************************************PopUp-Functions*****************************************/
function OpenPopUp(){
    PopUp.style.display = "block";
}

function OpenHTUPopUp(){
    HTUPopUp.style.display = "block";
}

function ClosePopUp(){
    PopUp.style.display = "none";
    HTUPopUp.style.display = "none";
}

/*****************************************Key-Events + Dankeschön*****************************************/
window.onkeyup = function(event) {
  if (event.keyCode === 81) {
    OpenPopUp();
  }

  if (event.keyCode === 72) {
    OpenHTUPopUp();
  }

  if (event.keyCode === 67) {
    ClosePopUp();
  }

  if (event.keyCode === 68) {
    alert("Thank you for using my website!\n -Asuki");
   }

   if (event.keyCode === 84) {
    alert("Thank you for using my website!\n -Asuki");
   }

   if (event.keyCode === 75) {
    alert("Keycodes:\nK = Keycode-List\nQ = Open PopUP1\nH = Open PopUP2\nC = Close PopUps");
  }
};
