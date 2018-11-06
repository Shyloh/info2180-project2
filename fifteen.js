"use strict";
//Animate
window.onload = function(){
var step = document.querySelectorAll("#puzzlearea div");
var x=0;
var y= 0;
var BTOP= "300px";
var BLEFT= "300px";
var BLOCKTOP, BLOCKLEFT;



    for(var i=0; i < step.length; i++){
        step[i].setAttribute("class", "puzzlepiece") ;
        step[i].style.left= x + 'px';
        step[i].style.top= y + 'px';
        step[i].style.backgroundPosition= "-" + x + "px " + "-" + y + "px";
        if (x < 300){
          x+=100;
        }
        else{
            x=0;
            y+=100;
        }
    }

    var shufflebutton= document.getElementById('shufflebutton');
    shufflebutton.addEventListener("click", shuffle);
     for(var i=0; i < step.length; i++){
          (function(index) {
            step[index].addEventListener("mouseover", function(){
            validMove(this);
            });
            step[index].addEventListener("click", function(){
            if (validMove(this)){
                     move(step[index]);
            }
            });
            step[index].addEventListener("mouseout", function(){
                       this.setAttribute("class", "puzzlepiece");
            });
          })(i);

     }

     function shuffle(){
         var piece;
         for (var i=0; i<100; i++){
                 piece=  Math.floor(Math.random() * 10);
                 move(step[piece]);
         }
     }


    function move(puzzlepiece){
            BLOCKTOP=puzzlepiece.offsetTop;
            BLOCKLEFT=puzzlepiece.offsetLeft;
            puzzlepiece.setAttribute("id", "selected");
            $('#selected').animate({
                backgroundImage: "url(background.jpg)",
                border: "2px solid yellow",
                height: "96px",
                lineHeight: "96px",
                position: "absolute",
                textAlign: "center",
                verticalAlign: "middle",
                width: "96px",
                fontfamily: "Sans, Arial",
                left: BLEFT,
                top: BTOP
                
             });
              puzzlepiece.style.top = BTOP;
              puzzlepiece.style.left = BLEFT;
              BTOP= BLOCKTOP + "px";
              BLEFT=BLOCKLEFT + "px";
              puzzlepiece.removeAttribute("id");
    }


    function validMove(puzzlepiece){
                BLOCKTOP=puzzlepiece.offsetTop;
                BLOCKLEFT= puzzlepiece.offsetLeft;
                var up= BLOCKTOP + "px";
                var left= BLOCKLEFT + "px";

                var testleft= Math.abs(parseInt(left) - parseInt(BLEFT));
                if (up == BTOP && testleft==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;

                       }

                var testright= Math.abs(parseInt(up) - parseInt(BTOP));
                if (left == BLEFT && testright==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;

                       }

    }
    
    
    
}



    