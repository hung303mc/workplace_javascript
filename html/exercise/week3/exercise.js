var totalEmotion = 3;

function start_game(){
  var topPos = 0, leftPos=0;
  var imageId = 0;
  var countEmotion = totalEmotion;
  var theBody = document.getElementById("theBody");
  while(countEmotion!=0){    
    /* Prepare some atribute */
    var topPos = Math.random()*400;
    topPos = Math.floor(topPos);
    var leftPos = Math.random()*400;
    leftPos = Math.floor(leftPos);

    countEmotion--;

    /* Generate left image */
    var leftImg = document.createElement("img");
    if(countEmotion == 0){
      leftImg.onclick = GamePass;
    }
    else{
      leftImg.onclick = GameOver;
    }
    leftImg.src = "smile.png";
    leftImg.id = "leftImg"+imageId;
    leftImg.style.top = topPos+"px";
    leftImg.style.left = leftPos+"px";
    theBody.appendChild(leftImg);    

    /* check whether is the last image */
    if(countEmotion == 0){break;}

    /* Generate right image */    
    var rightImg = document.createElement("img");    
    rightImg.src = "smile.png";
    rightImg.id = "rightImg"+imageId
    rightImg.style.top = topPos+"px";
    rightImg.style.left = (leftPos+600)+"px";    
    theBody.appendChild(rightImg);  

    imageId++;  
    }
  thisDiv = document.createElement("div");
  thisDiv.id = "verDiv";
  theBody.appendChild(thisDiv);
}

function GamePass(){
  GameRemove();
  totalEmotion += 2;
  start_game();
}

function GameRemove(){
  var imageId = 0;
  var countEmotion = totalEmotion;
  while(countEmotion!=0){
    var leftImg = document.getElementById("leftImg"+imageId);
    theBody.removeChild(leftImg);
    countEmotion--;
    if(countEmotion == 0){break;}
    var rightImg = document.getElementById("rightImg"+imageId);
    theBody.removeChild(rightImg);    
    imageId++;
  }
  var thisDiv = document.getElementById("verDiv");
  theBody.removeChild(thisDiv);
}

function GameOver(){
  GameRemove();
  alert("gameOver");
}