var guessTarget;
var guessTargetText;
var finisihed;
var colors = new Array("red","green","blue","orange","yellow",
                       "brown","violet","gray","black","white",
                       "purple","pink","golden","silver","cyan");
var guessInputText;
var guessInput;

var guessCount = 0;

function do_game() {
  var random_number = Math.random()*15;
  guessTarget = Math.floor(random_number);

  while(!finisihed)
  {
    guessInputText = prompt("I am thinking of a color in the range \
red, green, blue, orange, yellow brown, violet, gray, black, \
white, purple, pink, golden, silver, cyan \n \
Enter your guess colors ^^: ");
    guessCount++;
    finisihed = check_guess(guessInputText, guessTarget); 
  }
  alert();
}

function check_guess(InputText,Target){
  for (var i = colors.length - 1; i >= 0; i--) {
    if(colors[i] == InputText){
      if(i == Target){
        alert("you are right! \n" + "You guess " + guessCount + " times");
        return true;
      }
      else if(i > Target){
        alert("Your color is higher target");
        return false;
      }
      else if(i < Target){
        alert("Your color is lower target");        
        return false;
      }
    }
  }
  // doesn't match recognize
  alert("I can't recognize your color");
  return false;
}