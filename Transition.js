function transitionDiv(){
    // get the two divs
    var div1 = document.getElementById("d1");
    var div2 = document.getElementById("d2");

    // hide div1 and show div2
    div1.style.display = "none";
    div2.style.display = "block";

    // add transition effect
    div2.style.transition = "all 2s ease-in-out";
}