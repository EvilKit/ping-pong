var x=200;
var y=50;
document.getElementById("ball").style;
ball.style.left=x;
ball.style.top=y;
var step=1;
var z=1;
function f(){
    x=x+step;
    y=y+z;
    ball.style.left=x+"px";
    ball.style.top=y+"px";
    
    setTimeout(f,1);
    if(x>=950){
    step=-1;
        ball.style.left=x+"px";
    }
    
    if(x<=0){
    step=1;
  ball.style.left=x+"px";
    }
    if(y>550){
    z=-1;
          ball.style.top=y+"px";
    }
    if(y<=0){
    z=1;
          ball.style.top=y+"px";
    }
}
//----------------------------------------------------//
var sx=400;
document.getElementById("player").style;
function muve(e){
	player.style.left=sx;
	if(!e){e=event};
	p=e.keyCode;
	//console.log(p)
	if(p==37){sx=sx-10;}
	player.style.left=sx+"px";
	if(p==39){sx=sx+10;}
	player.style.left=sx+"px";
  if(sx>=790){
		sx=790;
	}
	if(sx<=10){
		sx=10;
	}
}
document.body.onkeydown=muve;

//----------------------------------------------------//
function udar(y1, x1,x2){
if(Math.abs(y1-560)<=30 && Math.abs(x1-x2)<=30){
    player.style.top=y+"px";
 }
}