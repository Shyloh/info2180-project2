window.onload = function(){
    var step= document.querySelectorAll("#puzzlearea div");
    var piece= document.querySelectorAll(".puzzlepiece");
    var x =0;
    var y =0;
    var TOP = "300px";
    var LEFT = "300px";
    var bTop, bleft;
    var count = 0;

    // position of tile
    for (let index =0; index< step.length; index ++){
        step[index].setAttribute("class", "puzzlepiece");
        step[index].style.left = x + "px";
        step[index].style.top = y + "px";
        step[index].style.backgroundPosition = "-" + x + "px"+ "-"+ y + "px";
        if (x<300){
            x+=100;
        }else{
            x=0;
            y+=100;
        }
    }
    let dive = pArea.getElementsByTagName("div");
    for (let index =0; index < dive.length; index ++ ){
        dive[index].style.backgroundImage ="url(background.jpg)";

    }
   

  
}