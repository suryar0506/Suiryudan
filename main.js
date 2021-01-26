var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var background_image = "chariot_race.webp";
var chariot1_image = "Chariot1.png";
var chariot2_image = "Chariot 2.png";
var chariot_1_x = 10;
var chariot_1_y = 100;
var chariot_1_width = 100;
var chariot_1_height = 90;
var chariot_2_x = 10;
var chariot_2_y = 400;
var chariot_2_width = 100;
var chariot_2_height = 90;
console.log("X = ",+ chariot_1_x, ".Y = ",+ chariot_1_y, ".This is for Chariot 1.");
console.log("X = ",+ chariot_2_x, ".Y = ",+ chariot_2_y, ".This is for Chariot 2.");
function create(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    chariot1_imgTag = new Image();
    chariot1_imgTag.onload = uploadChariot1;
    chariot1_imgTag.src = chariot1_image;

    chariot2_imgTag = new Image();
    chariot2_imgTag.onload = uploadChariot2;
    chariot2_imgTag.src = chariot2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);
}
function uploadChariot1(){
    ctx.drawImage(chariot1_imgTag ,chariot_1_x,chariot_1_y, chariot_1_width,chariot_1_height);
}
function uploadChariot2(){
    ctx.drawImage(chariot2_imgTag ,chariot_2_x,chariot_2_y, chariot_2_width,chariot_2_height);
}

window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if (keyPressed == '38'){
          up();
          console.log("up");
        }
        if (keyPressed == '39'){
          right();
          console.log("right");
        }
        if (keyPressed == '37'){
          left();
          console.log("left");
        }
        if (keyPressed == '40'){
          down();
          console.log("down");
        }
        if (keyPressed == '65'){
            west();
          console.log("a(left)");
          }
        if (keyPressed == '87'){
            ascend();
          console.log("w(up)");
          }
        if (keyPressed == '68'){
            east();
          console.log("d(right)");
          }
        if (keyPressed == '83'){
            descend();
          console.log("s(down)");
          }
    }
    function up(){
      if (chariot_1_y > 0){
        chariot_1_y = chariot_1_y - 10;
        console.log("Up is clicked. X = ", + chariot_1_x, ".y = ", + chariot_1_y);
        uploadBackground();
        uploadChariot1();
        uploadChariot2();
          }
    }
    function ascend(){
      if (chariot_2_y > 0){
        chariot_2_y = chariot_2_y - 10;
        console.log("Ascend is clicked. X = ", + chariot_2_x, ".y = ", + chariot_2_y);
        uploadBackground();
        uploadChariot1();
        uploadChariot2();
            }
    }
    function down(){
      if (chariot_1_y <= 500){
        chariot_1_y = chariot_1_y + 10;
        console.log("Down is clicked. X = ", + chariot_1_x, ".y = ", + chariot_1_y);
        uploadBackground();
        uploadChariot1();
        uploadChariot2();
      }
    }
    function descend(){
      if (chariot_2_y <= 500){
        chariot_2_y = chariot_2_y + 10;
        console.log("Descend is clicked. X = ", + chariot_2_x, ".y = ", + chariot_2_y);
        uploadBackground();
        uploadChariot1();
        uploadChariot2();
      }
    }
    function left(){
      if (chariot_1_x >= 0){
        chariot_1_x = chariot_1_x - 10;
        console.log("Left is clicked. X = ", + chariot_1_x, ".y = ", + chariot_1_y);
        uploadBackground();
        uploadChariot1();
        uploadChariot2();
      }
    }
    function west(){
      if (chariot_2_x >= 0){
        chariot_2_x = chariot_2_x - 10;
        console.log("West is clicked. X = ", + chariot_2_x, ".y = ", + chariot_2_y);
        uploadBackground();
        uploadChariot1();
        uploadChariot2();
      }
    }
    function right(){
      if (chariot_1_x <= 700){
        chariot_1_x = chariot_1_x + 10;
        console.log("Right is clicked. X = ", + chariot_1_x, ".y = ", + chariot_1_y);
        uploadBackground();
        uploadChariot1();
        uploadChariot2();
      }
    }
    function east(){
      if (chariot_2_x <= 700){
        chariot_2_x = chariot_2_x + 10;
        console.log("East is clicked. X = ", + chariot_2_x, ".y = ", + chariot_2_y);
        uploadBackground();
        uploadChariot1();
        uploadChariot2();
      }
    }