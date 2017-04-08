var guessTarget;
var finisihed;
var colors = new Array("red","green","blue","orange","yellow",
                       "brown","violet","gray","black","white",
                       "purple","pink","golden","silver","cyan");
var guessInputText;
var guessCount = 0;

function do_game() {
  var random_number = Math.random()*15;
  guessTarget = Math.floor(random_number);

  while(!finisihed)
  {
    guessInputText = prompt("I am thinking of a color in the range \n\n\
black, blue, brown, cyan, golden, gray, green, orange, pink, purple, \
red, silver, violet, white, yellow \n\n\
Enter your guess colors ^^: ");
    guessCount++;
    finisihed = check_guess(guessInputText, guessTarget); 
  }
}

function check_guess(InputText,Target){
  for (var i = colors.length - 1; i >= 0; i--) {
    if(colors[i] == InputText){
      if     (InputText == colors[Target]){
        myBody=document.getElementsByTagName("body")[0];
        myBody.style.background=colors[Target];
        setTimeout(function(){alert("Congratulation!, you are right! \n" + "You guess " + guessCount + " times \n" +
              "You coud see the color in backgroud");},200); 
        return true;
      }
      else if(InputText > colors[Target]){
        alert("Sorry, your guess is not correct!\n" + "Hint: Your color is alphabetically higher than mine");
        return false;
      }
      else if(InputText < colors[Target]){
        alert("Sorry, your guess is not correct!\n" + "Hint: Your color is alphabetically lower than mine");
        return false;
      }
    }
  }
  // doesn't match recognize
  alert("I can't recognize your color");
  return false;
}
