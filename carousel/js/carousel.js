//utilitaires augmenté et réduire'
let maMarge = 0;

function reduire() {
    maMarge = maMarge -100;
}

function augmenter() {
    maMarge = maMarge +100;
}

function showRight() {
    arrowRight.style.pointerEvents = "auto";
    arrowRight.style.opacity = "1";
}
function hideRight() {
    arrowRight.style.pointerEvents = "none";
    arrowRight.style.opacity = "0";
}
function showLeft() {
    arrowLeft.style.pointerEvents = "auto";
    arrowLeft.style.opacity = "1";
}
function hideLeft() {
    arrowLeft.style.pointerEvents = "none";
    arrowLeft.style.opacity = "0";
}







//déclarer variables
//boutons
const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");
const restart = document.getElementById("return");
//frame1
const frameControl = document.getElementById("f1");

//déclarer évennement sur le bouton de droite
arrowRight.addEventListener('click', function() {
    reduire();
    showLeft();
    frameControl.style.marginLeft = maMarge + "%";
    if (maMarge === -300) {
        hideRight();
        
    }
    
})


// arrowRight.addEventListener('click', function () {
    //     maMarge = maMarge -100;
    //     arrowLeft.style.pointerEvents = "auto";
    //     arrowLeft.style.opacity = "1";
    //     if (maMarge === -300) {
    //         arrowRight.style.pointerEvents = "none";
    //         arrowRight.style.opacity = "0";
    //     }
    
    // })


//déclarer evennement sur le bouton de gauche
arrowLeft.addEventListener('click', function() {
    augmenter();
    showRight();
    frameControl.style.marginLeft = maMarge + "%";
    if (maMarge === 0) {
       hideLeft();
    }
    
})

//restart
let reset = 0;
restart.addEventListener('click', function() {
    maMarge = reset;
    frameControl.style.marginLeft = maMarge + "%";
    showRight();
    hideLeft();
})
