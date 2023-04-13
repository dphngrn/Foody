
window.onclick = function(event) {
    let img = document.createElement("img");
    img.src = "image/fourchette1.png";
    img.style.width = 50 + "px";
    img.style.height = 50 + "px";
    img.style.position = "absolute";
    img.style.top = event.clientY + "px";
    img.style.left = event.clientX + "px";
    img.style.transition = "top 1s ease-in-out";
    document.body.appendChild(img);
    setTimeout(function(){
        img.style.top = (event.clientY + 1000) + "px";
        setTimeout(function(){
            document.body.removeChild(img);
        }, 1000);
    }, 10);
}