window.onload = function(){
    var pos1 = 0;
    var pos2 = 0;
    var box = document.getElementById("box");
    var cir = document.getElementById("cir");
    var a = setInterval(move1, 10);
    var b = setInterval(move2, 10);

    function move1(){
        if (pos1 >= 150){
            clearInterval(a);
        }
        else {
            pos1 += 1;
            box.style.top = pos1 + "px";
        }
    }

    // function move2(){
    //     if (pos2 >= 190){
    //         clearInterval(b);
    //     }
    //     else {
    //     pos2 += 1;
    //     cir.style.right = pos2 + "px";
    //     }
    //  }
}
