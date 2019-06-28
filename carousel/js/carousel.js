window.onload=function(){
    let picture2 = document.getElementById("secondElement");
    let clickRight = document.getElementById("right");
    let clickLeft = document.getElementById("left");
    let container = document.getElementById("carousel");
    const frame = true;
    if (frame) {
        clickRight.addEventListener("click", function(event) {
            picture2.classList.add("newCss");
            frame= false;    
        })
    } else {
        picture2.classList.remove("newCss");
    }

}