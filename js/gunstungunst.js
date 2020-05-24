// Code Snippet from https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var modal = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");

// Get the button that opens the modal
var btn = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}
btn4.onclick = function() {
    modal4.style.display = "block";
}
btn5.onclick = function() {
    modal5.style.display = "block";
}
btn6.onclick = function() {
    modal6.style.display = "block";
}
btn7.onclick = function() {
    modal7.style.display = "block";
}
btn8.onclick = function() {
    modal8.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
span4.onclick = function() {
    modal4.style.display = "none";
}
span5.onclick = function() {
    modal5.style.display = "none";
}
span6.onclick = function() {
    modal6.style.display = "none";
}
span7.onclick = function() {
    modal7.style.display = "none";
}
span8.onclick = function() {
    modal8.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
    {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        if (event.target === modal2) {
            modal2.style.display = "none";
        }
        if (event.target === modal3) {
            modal3.style.display = "none";
        }
        if (event.target === modal4) {
            modal4.style.display = "none";
        }
        if (event.target === modal5) {
            modal5.style.display = "none";
        }
        if (event.target === modal6) {
            modal6.style.display = "none";
        }
        if (event.target === modal7) {
            modal7.style.display = "none";
        }
        if (event.target === modal8) {
            modal8.style.display = "none";
        }
    }

