var count = 0;

window.oncontextmenu = function () {
    document.getElementById('myAudio').play();
}

function jump(){
    var character = document.getElementById("character");
    if (character.classList.contains("animate")){return}
    character.classList.add("animate");

    setTimeout(() => {
        character.classList.remove("animate")
    }, 500);

    count+=10;
    document.getElementById("score").innerHTML = count;

}

var checkDead = setInterval(() => {
    var character = document.getElementById("character");
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var block = document.getElementById("block");
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<30 && blockLeft>0 && characterTop>=145){
        // var gameover = document.getElementById("gameover");
        //     gameover.classList.add("gameover-hide");
        if (confirm('G A M E  O V E R')) {
            // sleep(200);
            location.reload();
        } else {
            // location.reload();
            
        }
    }
    var rand = Math.floor(Math.random() * (1900 - 1200 + 1)) + 1000;
    var block = document.getElementById("block");
    block.style.animation = `block ${rand} linear infinite`;

}, 10);

function ready(){
    // var gameover = document.getElementById("gameover");
    // gameover.classList.add("gameover-hide");
    // if (confirm('R E A D Y ?')) {

    //   } else {
    //     // location.reload();
    //   }
}