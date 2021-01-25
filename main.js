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
          
          console.log("up");
        }
        if (keyPressed == '39'){
          
          console.log("right");
        }
        if (keyPressed == '37'){
          
          console.log("left");
        }
        if (keyPressed == '40'){
          
          console.log("down");
        }
        if (keyPressed == '65'){
            
          console.log("a(left)");
          }
        if (keyPressed == '87'){
            
          console.log("w(up)");
          }
        if (keyPressed == '70'){
            
          console.log("d(right)");
          }
        if (keyPressed == '83'){
            
          console.log("s(down)");
          }
    }