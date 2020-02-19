import SpinBtn from './SpinBtn.js';
import BetBtn from './BetBtn.js';
import CreditBar from './CreditBar.js';
import ReelDisplay from './ReelDisplay.js';
import Reel from './Reel.js';
import ReelPart from './ReelPart.js';
import Margin from './Margin.js';

let canvas= document.getElementById("gameScreen");
let context= canvas.getContext("2d");

const GAME_WIDTH= 800,GAME_HEIGHT= 600;

let spinBtn= new SpinBtn(GAME_WIDTH,GAME_HEIGHT);
let betBtn= new BetBtn(GAME_WIDTH,GAME_HEIGHT);
let creditBar= new CreditBar(GAME_WIDTH,GAME_HEIGHT);
let reelDisplay= new ReelDisplay(GAME_WIDTH,GAME_HEIGHT);

let reelWidth= 100;
let reelHeight= 400;
let reelParts= [[],[],[],[],[]];

for(let i= 0; i < 5; i++){
    for(let j= 0; j < 10; j++){
        reelParts[i].push(new ReelPart(reelWidth,reelHeight));
    }
}

let reels= [];

let rpx= 80;

for(let i= 0; i < 5; i++){
    reels.push(new Reel(rpx, 60, reelWidth, reelHeight, reelParts[i],i*3, context));
    rpx+= reelWidth+30;
}
console.log(reels);

let botMarg= new Margin(GAME_WIDTH,100,0,500);
let topMarg= new Margin(GAME_WIDTH,100,0,0);

let graphicDisplayArray= [reelDisplay, botMarg, topMarg, spinBtn, betBtn, creditBar];

canvas.addEventListener('click', function(event) {
    if(spinBtn.clicked(event.clientX, event.clientY)){
        if(!spinBtn.isSpinning())
            creditBar.updateCredit(betBtn.getBet());
        spinBtn.setSpinning(true);
    }else if(betBtn.clicked(event.clientX, event.clientY)){}
});

let lastTime= 0;

function gameLoop(timeStamp){
    let deltaTime= timeStamp - lastTime;
    lastTime= timeStamp;
    context.clearRect(0,0,400,400);

    if(spinBtn.isSpinning()){
        for(let i= 0; i < 5; i++){
            reels[i].spin();
        }
    }

    for(let i= 0; i < graphicDisplayArray.length; i++){
        graphicDisplayArray[i].draw(context);
        if(i == 0){
            for(let j= 0; j < 5; j++){
                reels[j].draw(context);
            }
        }
    }

    requestAnimationFrame(gameLoop);
}
gameLoop();