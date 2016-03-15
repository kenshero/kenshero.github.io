var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var FrontTechnologyimg  = [];
var BackTechnologyimg   = [];
var ServerTechnologyimg = [];

DeclareFrontTech();
DeclareBackTech();
DeclareServerTech();
var background1 = new Image();
background1.src = './images/playground.jpg';

var poring = new Image();
var poringPosX =  350;
var poringPosY =  550;
var interval ;
poring.src = './images/poring.jpg';

var character1 = new Image();
character1.src = './images/character1.png';

var fighter = [];

var character2 = new Image();
character2.src = './images/character2.png';
var character21 = new Image();
character21.src = './images/character2-1.png';
fighter.push(character2);
fighter.push(character21);
var animateFighter = 0;

var blackhole = new Image();
blackhole.src = './images/blackhole.jpg';

var stair = new Image();
stair.src = './images/stair.png';

var level = 1;
  window.onload = function(){
    ctx.drawImage(background1, 0, 0);
    ctx.drawImage(poring, poringPosX, poringPosY);
    ctx.drawImage(blackhole, 200, 0);
  }

document.onkeydown = function(e) {
  if (level == 1){
    if (e.keyCode == '37') {
      //left
      ctx.clearRect(0,0,canvas.width,canvas.height);
      poringPosX -= 3;
      ctx.drawImage(background1, 0, 0);
      ctx.drawImage(poring, poringPosX, poringPosY);
      ctx.drawImage(blackhole, 200, 0);
    } else if(e.keyCode == '38') {
      //up
      ctx.clearRect(0,0,canvas.width,canvas.height);
      poringPosY -= 3;
      ctx.drawImage(background1, 0, 0);
      ctx.drawImage(poring, poringPosX, poringPosY);
      ctx.drawImage(blackhole, 200, 0);

    } else if(e.keyCode == '39') {
      //right
      ctx.clearRect(0,0,canvas.width,canvas.height);
      poringPosX += 3;
      ctx.drawImage(background1, 0, 0);
      ctx.drawImage(poring, poringPosX, poringPosY);
      ctx.drawImage(blackhole, 200, 0);

    } else if(e.keyCode == '40') {
      //down
      ctx.clearRect(0,0,canvas.width,canvas.height);
      poringPosY += 3;
      ctx.drawImage(background1, 0, 0);
      ctx.drawImage(poring, poringPosX, poringPosY);
      ctx.drawImage(blackhole, 200, 0);
    } else if(e.keyCode == '32'){
      //space
      ctx.clearRect(0,0,canvas.width,canvas.height);
      // poringPosY -= 3;
      ctx.drawImage(background1, 0, 0);
      ctx.drawImage(blackhole, 200, 0);
    }

    if ((poringPosX > 150 && poringPosX < 250) && (poringPosY > 0 && poringPosY < 50)) {
      level++ ;
      console.log("level2")
      console.log(level);
      poringPosX =  350;
      poringPosY =  550;
    }
  } else if ( level == 2){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    background1.src = './images/shelf.png';
    ctx.drawImage(background1,0,0);
    ctx.drawImage(stair,690,450);
    ctx.drawImage(stair,150,300);
    ctx.drawImage(stair,630,140);
    ctx.drawImage(poring, poringPosX, poringPosY);
    ctx.drawImage(blackhole, 0, 50);
    console.log(poringPosX);
    console.log(poringPosY);
    ////////   draw string /////////
      drawStringStackOne();
      drawStringStackTwo();
      drawStringStackThree();
      drawStringStackFour();
      getServerSkills();
      getBackSkills();
      getFrontSkills();
    if (e.keyCode == '37') {
      //left
      if ((poringPosX > 680 && poringPosX < 710 && poringPosY < 540 && poringPosY > 430) || (poringPosX > 138 && poringPosX < 160 && poringPosY < 422 && poringPosY > 253) || (poringPosX > 620 && poringPosX < 640 && poringPosY < 257 && poringPosY > 88)) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        // poringPosX -= 3;
        ctx.drawImage(background1,0,0);
        ctx.drawImage(stair,690,450);
        ctx.drawImage(stair,150,300);
        ctx.drawImage(stair,630,140);
        ctx.drawImage(character1, poringPosX, poringPosY);
        ctx.drawImage(blackhole, 0, 50);

        ////////   draw string /////////
        drawStringStackOne();
        drawStringStackTwo();
        drawStringStackThree();
        drawStringStackFour();
        getServerSkills();
        getBackSkills();
        getFrontSkills();
      }else{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        poringPosX -= 3;
        ctx.drawImage(background1,0,0);
        ctx.drawImage(stair,690,450);
        ctx.drawImage(stair,150,300);
        ctx.drawImage(stair,630,140);
        ctx.drawImage(character1, poringPosX, poringPosY);
        ctx.drawImage(blackhole, 0, 50);

        ////////   draw string /////////
        drawStringStackOne();
        drawStringStackTwo();
        drawStringStackThree();
        drawStringStackFour();
        getServerSkills();
        getBackSkills();
        getFrontSkills();
      }
    } else if(e.keyCode == '39') {
      //right
      if ( (poringPosX > 680 && poringPosX < 710 && poringPosY < 540 && poringPosY > 430) || (poringPosX > 138 && poringPosX < 160 && poringPosY < 422 && poringPosY > 253) || (poringPosX > 620 && poringPosX < 640 && poringPosY < 257 && poringPosY > 88)) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        // poringPosX += 3;
        ctx.drawImage(background1,0,0);
        ctx.drawImage(stair,690,450);
        ctx.drawImage(stair,150,300);
        ctx.drawImage(stair,630,140);
        ctx.drawImage(character1, poringPosX, poringPosY);
        ctx.drawImage(blackhole, 0, 50);

        //// draw string //////
        drawStringStackOne();
        drawStringStackTwo();
        drawStringStackThree();
        drawStringStackFour();
        getServerSkills();
        getBackSkills();
        getFrontSkills();
      } else{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        poringPosX += 3;
        ctx.drawImage(background1,0,0);
        ctx.drawImage(stair,690,450);
        ctx.drawImage(stair,150,300);
        ctx.drawImage(stair,630,140);
        ctx.drawImage(character1, poringPosX, poringPosY);
        ctx.drawImage(blackhole, 0, 50);

        /////// draw string /////////
        drawStringStackOne();
        drawStringStackTwo();
        drawStringStackThree();
        drawStringStackFour();
        getServerSkills();
        getBackSkills();
        getFrontSkills();
      }

    } else if(e.keyCode == '38') {
      //up
      animateFighter++;
      if (animateFighter > 1 ) {
        animateFighter = 0 ;
      }
      // console.log(animateFighter);
        if (poringPosX > 680 && poringPosX < 710 && poringPosY < 560 && poringPosY > 421) {
          ctx.clearRect(0,0,canvas.width,canvas.height);
          poringPosY -= 3;
          ctx.drawImage(background1,0,0);
          ctx.drawImage(stair,690,450);
          ctx.drawImage(stair,150,300);
          ctx.drawImage(stair,630,140);
          ctx.drawImage(fighter[animateFighter], poringPosX, poringPosY);
          ctx.drawImage(blackhole, 0, 50);

            //////// draw string //////////
          drawStringStackOne();
          drawStringStackTwo();
          drawStringStackThree();
          drawStringStackFour();
          getServerSkills();
          getBackSkills();
          getFrontSkills();
        } else if (poringPosX > 138 && poringPosX < 160 && poringPosY < 425 && poringPosY > 249) {
          ctx.clearRect(0,0,canvas.width,canvas.height);
          poringPosY -= 3;
          ctx.drawImage(background1,0,0);
          ctx.drawImage(stair,690,450);
          ctx.drawImage(stair,150,300);
          ctx.drawImage(stair,630,140);
          ctx.drawImage(fighter[animateFighter], poringPosX, poringPosY);
          ctx.drawImage(blackhole, 0, 50);

          //////////////// draw string //////////
          drawStringStackOne();
          drawStringStackTwo();
          drawStringStackThree();
          drawStringStackFour();
          getServerSkills();
          getBackSkills();
          getFrontSkills();
        } else if (poringPosX > 620 && poringPosX < 640 && poringPosY < 261 && poringPosY > 88) {
          ctx.clearRect(0,0,canvas.width,canvas.height);
          poringPosY -= 3;
          ctx.drawImage(background1,0,0);
          ctx.drawImage(stair,690,450);
          ctx.drawImage(stair,150,300);
          ctx.drawImage(stair,630,140);
          ctx.drawImage(fighter[animateFighter], poringPosX, poringPosY);
          ctx.drawImage(blackhole, 0, 50);

          //////////////// draw string //////////
          drawStringStackOne();
          drawStringStackTwo();
          drawStringStackThree();
          drawStringStackFour();
          getServerSkills();
          getBackSkills();
          getFrontSkills();
        }

    } else if(e.keyCode == '40') {
      //down
      animateFighter++;
      if (animateFighter > 1 ) {
        animateFighter = 0 ;
      }
        if (poringPosX > 680 && poringPosX < 730 && poringPosY < 551) {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            poringPosY += 3;
            ctx.drawImage(background1,0,0);
            ctx.drawImage(stair,690,450);
            ctx.drawImage(stair,150,300);
            ctx.drawImage(stair,630,140);
            ctx.drawImage(fighter[animateFighter], poringPosX, poringPosY);
            ctx.drawImage(blackhole, 0, 50);
        
            ////////// draw string //////////
            drawStringStackOne();
            drawStringStackTwo();
            drawStringStackThree();
            drawStringStackFour();
            getServerSkills();
            getBackSkills();
            getFrontSkills();
        }else if (poringPosX > 138 && poringPosX < 160 && poringPosY < 422 && poringPosY > 243) {
          ctx.clearRect(0,0,canvas.width,canvas.height);
          poringPosY += 3;
          ctx.drawImage(background1,0,0);
          ctx.drawImage(stair,690,450);
          ctx.drawImage(stair,150,300);
          ctx.drawImage(stair,630,140);
          ctx.drawImage(fighter[animateFighter], poringPosX, poringPosY);
          ctx.drawImage(blackhole, 0, 50);

          //////////////// draw string //////////
          drawStringStackOne();
          drawStringStackTwo();
          drawStringStackThree();
          drawStringStackFour();
          getServerSkills();
          getBackSkills();
          getFrontSkills();
        } else if (poringPosX > 620 && poringPosX < 640 && poringPosY < 257 && poringPosY > 85) {
          ctx.clearRect(0,0,canvas.width,canvas.height);
          poringPosY += 3;
          ctx.drawImage(background1,0,0);
          ctx.drawImage(stair,690,450);
          ctx.drawImage(stair,150,300);
          ctx.drawImage(stair,630,140);
          ctx.drawImage(fighter[animateFighter], poringPosX, poringPosY);
          ctx.drawImage(blackhole, 0, 50);

          //////////////// draw string //////////
          drawStringStackOne();
          drawStringStackTwo();
          drawStringStackThree();
          drawStringStackFour();
          getServerSkills();
          getBackSkills();
          getFrontSkills();
        }
    } 

    if ((poringPosX > 0 && poringPosX < 60) && (poringPosY > 85 )) {
      level++ ;
      console.log("level3")
      console.log(level);

    }
  } else if ( level == 3){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "Black";
    ctx.font="50px Georgia";
    ctx.fillText("So What ?",350,195);
  }
    e.preventDefault(); // prevent the default action (scroll / move caret)
}

function DeclareFrontTech(){
  FrontTechnologyimg[0] = new Image();
  FrontTechnologyimg[0].src = './images/html-logo.png';

  FrontTechnologyimg[1] = new Image();
  FrontTechnologyimg[1].src = './images/css-logo.png';

  FrontTechnologyimg[2] = new Image();
  FrontTechnologyimg[2].src = './images/boostrap-logo.png';

  FrontTechnologyimg[3] = new Image();
  FrontTechnologyimg[3].src = './images/javascripts-logo.jpg';

  FrontTechnologyimg[4] = new Image();
  FrontTechnologyimg[4].src = './images/jquery-logo.png';

  FrontTechnologyimg[5] = new Image();
  FrontTechnologyimg[5].src = './images/angularjs-logo.png';

  console.log(FrontTechnologyimg);
}

function DeclareBackTech(){
  BackTechnologyimg[0] = new Image();
  BackTechnologyimg[0].src = './images/ror-logo.jpg';

  BackTechnologyimg[1] = new Image();
  BackTechnologyimg[1].src = './images/php-logo.jpg';

  BackTechnologyimg[2] = new Image();
  BackTechnologyimg[2].src = './images/nodejs-logo.png';

  BackTechnologyimg[3] = new Image();
  BackTechnologyimg[3].src = './images/express-logo.png';

  console.log(BackTechnologyimg);
}

function DeclareServerTech(){
  ServerTechnologyimg[0] = new Image();
  ServerTechnologyimg[0].src = './images/ubuntu-logo.png';

  ServerTechnologyimg[1] = new Image();
  ServerTechnologyimg[1].src = './images/nginx-logo.png';

  ServerTechnologyimg[2] = new Image();
  ServerTechnologyimg[2].src = './images/git-logo.png';

  ServerTechnologyimg[3] = new Image();
  ServerTechnologyimg[3].src = './images/capristano-logo.png';

  console.log(ServerTechnologyimg);
}
function drawStringStackOne(){
  ctx.fillStyle = "Black";
  ctx.font="20px Georgia";
  ctx.fillText("Technology Used on Production",350,515);
}

function drawStringStackTwo(){
  ctx.fillStyle = "Black";
  ctx.font="20px Georgia";
  ctx.fillText("Technology Used on Production",350,345);
}

function drawStringStackThree(){
  ctx.fillStyle = "Black";
  ctx.font="20px Georgia";
  ctx.fillText("Technology Used on Production",350,195);
}

function drawStringStackFour(){
  ctx.fillStyle = "Black";
  ctx.font="20px Georgia";
  ctx.fillText("Technology Excercise",350,35);

  ctx.fillStyle = "Black";
  ctx.font="15px Georgia";
  ctx.fillText("[​Sass,ReactJs,ES6,Golang,Apache,DigitalOcean,EC2,S3,Heroku,Unit test,CI/CD,",120,70);
  ctx.fillText("SPA,Ionic,Arduino,load balance ]",120,90)
}

function getServerSkills(){
  var x = 250;
  var y = 235;
  ServerTechnologyimg.map(function(skill){
    x += 75;
    ctx.drawImage(skill, x, y ,50 , 50);
  });
}

function getBackSkills(){
  var x = 250;
  var y = 375;
  BackTechnologyimg.map(function(skill){
    x += 75;
    ctx.drawImage(skill, x, y ,50 , 50);
  });
}

function getFrontSkills(){
  var x = 150;
  var y = 540;
  FrontTechnologyimg.map(function(skill){
    x += 75
    ctx.drawImage(skill, x, y ,50 , 50);
  });
}
