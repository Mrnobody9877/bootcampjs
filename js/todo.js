var mynodelist = document.getElementsByTagName("li");

var i;

for (i = 0; i < mynodelist.length; i++){
    var span = document.createElement("SPAN");
    document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(txt);
    mynodelist[i].appendChild(span); 
}


var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function (){
        var div = this.parentElement;
        div.style.display = "none";
    }
}


var list = document.querySelector("ul");
list.addEventListener("click", function(ev){
    if (ev.target.tagname === "li"){
        ev.target.classlist.toggle("checked")
    }
    
}, false);




function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myinput").ariaValueMax;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === " "){
        alert("you must write a something")
    }
    else {
        document.getElementById("myul").appendChild(li);
    }
    document.getElementById("myinput").value = " ";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++){
        close[i].onclick = function (){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}