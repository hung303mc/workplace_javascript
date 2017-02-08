function show_patern(){
  var colors = new Array("red","green","blue","orange","yellow",
                         "brown","violet","gray","black","white",
                         "purple","pink","golden","silver","cyan");
  var top_pos = 25, left_pos = 25;
  var width = 500, height = 500;
  var the_body = document.getElementById("theBody");

  while(width>50){
    var this_div = document.createElement("div");

    /* Adding color for div*/
    var random_number = Math.random()*15;
    random_number = Math.floor(random_number);
    this_div.style.background = colors[random_number];


    /* Adding position for div*/
    this_div.style.top = top_pos + "px";
    this_div.style.left = left_pos + "px";
    this_div.style.width = width + "px";
    this_div.style.height = height + "px";

    theBody.appendChild(this_div);

    /* Prepare size for new square */
    top_pos +=10;left_pos +=10;
    width -=20; height -=20;
  }
}

// function show_patern(){
//   var the_body = document.getElementById("theBody");
//   var result1 = document.createElement("div");
//   result1.style.background = "red";
//   result1.style.width = "500px";
//   result1.style.height = "500px";
//   theBody.appendChild(result1);
// }