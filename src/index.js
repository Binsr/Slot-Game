import SpinBtn from './SpinBtn.js';
import BetBtn from './BetBtn.js';
import CreditBar from './CreditBar.js';
import ReelDisplay from './ReelDisplay.js';
import Reel from './Reel.js';
import ReelPart from './ReelPart.js';
import Margin from './Margin.js';

const GAME_WIDTH= 800,GAME_HEIGHT= 600;

let canvas= document.getElementById("gameScreen");
let context= canvas.getContext("2d");

let spinBtn= new SpinBtn(GAME_WIDTH,GAME_HEIGHT);
let betBtn= new BetBtn(GAME_WIDTH,GAME_HEIGHT);
let creditBar= new CreditBar(GAME_WIDTH,GAME_HEIGHT);
let reelDisplay= new ReelDisplay(GAME_WIDTH,GAME_HEIGHT);

let reelWidth= 110;
let reelHeight= 480;
let reelParts= [[],[],[],[],[]];
for(let i= 0; i < 5; i++){
    for(let j= 0; j < 4; j++){
        reelParts[i].push(new ReelPart(reelWidth,reelHeight));
    }
}

let reels= [];
let rpx= 80;
for(let i= 0; i < 5; i++){
    reels.push(new Reel(rpx, 0, reelWidth, reelHeight, reelParts[i], context));
    reels[i].shufle();
    rpx+= reelWidth+20;
    reels[i].setSpinCountdown(120);
}

let botMarg= new Margin(GAME_WIDTH,200,0,480);
let topMarg= new Margin(GAME_WIDTH,120,0,0);

let graphicDisplayArray= [reelDisplay, botMarg, topMarg, spinBtn, betBtn, creditBar];

canvas.addEventListener('click', function(event) {
    if(spinBtn.clicked(event.clientX, event.clientY)){
        if(!spinBtn.isSpinning())
            creditBar.updateCredit(betBtn.getBet());
        if(!spinBtn.isSpinning()){
            spinBtn.setSpinning(true);
            for(let i= 0; i < 5; i++){
                reels[i].shufle();
                reels[i].setSpining();
            }
        }
    }else if(betBtn.clicked(event.clientX, event.clientY)){}
});

function update(){
    if(spinBtn.isSpinning()){
        for(let i= 0; i < 5; i++){
            if(reels[i].isSpining()){
                reels[i].endingSpin();
                reels[i].updateSpinCountdown();
            }
        }
    }

    let allStoped= 0;
    for(let i= 0; i < 5; i++){
        if(!reels[i].isSpining())//Slozenost?
            allStoped++;
    }   
    spinBtn.setSpinning(allStoped != 5);
}

function draw(){
    context.clearRect(0,0,400,400);
    for(let i= 0; i < graphicDisplayArray.length; i++){
        graphicDisplayArray[i].draw(context);
        if(i == 0){
            for(let j= 0; j < 5; j++){
                reels[j].draw(context);
            }
        }
    }
}

let lastTime= 0;
function gameLoop(timeStamp){
    let deltaTime= timeStamp - lastTime;
    lastTime= timeStamp;
 
    draw();
    update();
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);