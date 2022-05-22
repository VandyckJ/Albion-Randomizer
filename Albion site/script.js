const head = document.getElementById('img1');
const mainhand = document.getElementById('img2');
const chest = document.getElementById('img3');
const offhand = document.getElementById('img4');
const boots = document.getElementById('img5');
const button = document.getElementById('randomize');



button.addEventListener('click',function (e){
    let rhead = Math.round(Math.random()*(24-1)+1)
    let rdual = Math.round(Math.random()*(82-1)+1)
    let rchest= Math.round(Math.random()*(24-1)+1)
    let rmainhand = Math.round(Math.random()*(30-1)+1)
    let roffhand = Math.round(Math.random()*(15-1)+1)
    let rboots = Math.round(Math.random()*(24-1)+1)

    //one-handed or dual handed
    let weapon = Math.round(Math.random()*(112-1)+1)
    if(weapon < 82){
        mainhand.src='Img/dual' + rdual + '.png'
        offhand.src='Img/dual' + rdual + '.png'
    }
    else{
        mainhand.src='Img/Mhand' + rmainhand + '.png'
        offhand.src='Img/Offhand' + roffhand + '.png'
    }
    head.src='Img/head' + rhead + '.png'
    chest.src='Img/Chest' + rchest + '.png'
    boots.src ='Img/boots' + rboots + '.png'

});