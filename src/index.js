import SpinBtn from './SpinBtn.js';
import BetBtn from './BetBtn.js';
import CreditBar from './CreditBar.js';
import ReelDisplay from './ReelDisplay.js';
import Reel from './Reel.js';
import ReelPart from './ReelPart.js';
import Margin from './Margin.js';
import Line from './Line.js';
import LinesBtn from './LinesBtn.js';

const GAME_WIDTH= 800,GAME_HEIGHT= 600;
const REEL_WIDTH= 110,REEL_HEIGHT= 480;
const LEFT_EDGE= 80,RIGHT_EDGE= 5*REEL_WIDTH+160;

let canvas= document.getElementById("gameScreen");
let context= canvas.getContext("2d");

let spinBtn= new SpinBtn(GAME_WIDTH,GAME_HEIGHT);
let betBtn= new BetBtn(GAME_WIDTH,GAME_HEIGHT);
let creditBar= new CreditBar(GAME_WIDTH,GAME_HEIGHT);
let reelDisplay= new ReelDisplay(GAME_WIDTH,GAME_HEIGHT);
let botMarg= new Margin(GAME_WIDTH,200,0,480);
let topMarg= new Margin(GAME_WIDTH,120,0,0);

let reelParts= [[],[],[],[],[]];

for(let i= 0; i < 5; i++){
    for(let j= 0; j < 4; j++){
        reelParts[i].push(new ReelPart(REEL_WIDTH,REEL_HEIGHT));
    }
}

let reels= [];
let reelPositionsX= LEFT_EDGE;

for(let i= 0; i < 5; i++){
    reels.push(new Reel(reelPositionsX, 0, REEL_WIDTH, REEL_HEIGHT, reelParts[i], 82+5*i*8, context));
    reelPositionsX+= REEL_WIDTH+20;
}

let straithLines=[];
let lineYStart= (REEL_HEIGHT/2)-(REEL_HEIGHT/8);
for(let i= 1; i < 4; i++){
    straithLines.push(new Line());
    straithLines[i-1].setPoints([[LEFT_EDGE,lineYStart],[RIGHT_EDGE,lineYStart]]);
    lineYStart+= ((REEL_HEIGHT)/4);
}
let tmp= straithLines[1];
straithLines[1] = straithLines[0];
straithLines[0] = tmp;
straithLines[0].setLineOn(true);

let allLines=[];
allLines.push(straithLines);
let linesBtn= new LinesBtn(GAME_WIDTH,GAME_HEIGHT,allLines);
let graphicDisplayArray= [reelDisplay, botMarg, topMarg, spinBtn, betBtn, creditBar,linesBtn];

canvas.addEventListener('click', function(event) {
    if(spinBtn.clicked(event.clientX, event.clientY)){
        if(!spinBtn.isActive()){
            creditBar.updateCredit(betBtn.getBet());
            linesBtn.setCounter(0);
            spinBtn.switchOn(true);
            for(let i= 0; i < 5; i++){
                reels[i].shufle();
                reels[i].setSpining();
            }
        }
    }else if(betBtn.clicked(event.clientX, event.clientY)){

    }else if(!spinBtn.isActive()){
        if(linesBtn.clicked(event.clientX,event.clientY)){
            linesBtn.refreshCounter();
        }
    }
});

let numbOfActiveReels= 0; //zbog slozenosti ove f-je je globalna
function update(){
    if(spinBtn.isActive()){
        for(let i= 0; i < 5; i++){
            if(reels[i].isSpining()){
                reels[i].endingSpin();
                reels[i].updateSpinCountdown();
            }
        }
    }
    for(let i= numbOfActiveReels; i < 5; i++){
        if(!reels[i].isSpining())
            numbOfActiveReels++;
    }
    if(numbOfActiveReels == 5){   
        spinBtn.switchOn(false);
        numbOfActiveReels= 0;
    }
    linesBtn.updateCounter();
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
        if(i == graphicDisplayArray.length-1){
            for(let j= 0; j < straithLines.length; j++){
                if(linesBtn.getShowStatus()){
                    straithLines[j].draw(context);
                }else{
                    straithLines[j].drawLineSign(context);
                }
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