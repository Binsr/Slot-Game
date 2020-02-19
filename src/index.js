import SpinBtn from './SpinBtn.js';
import BetBtn from './BetBtn.js';
import CreditBar from './CreditBar.js';
import ReelDisplay from './ReelDisplay.js';
import Reel from './Reel.js';
import ReelPart from './ReelPart.js';
import Margin from './Margin.js';

let canvas= document.getElementById("gameScreen");
let context= canvas.getContext("2d");

// var circles= [];
// for(let i= 0; i < 100; i++){
//     circles.push(new Circle());
// }

const GAME_WIDTH= 800,GAME_HEIGHT= 600;

let spinBtn= new SpinBtn(GAME_WIDTH,GAME_HEIGHT);
let betBtn= new BetBtn(GAME_WIDTH,GAME_HEIGHT);
let creditBar= new CreditBar(GAME_WIDTH,GAME_HEIGHT);
let reelDisplay= new ReelDisplay(GAME_WIDTH,GAME_HEIGHT);

let reelWidth= 100;
let reelHeight= 400;
let reelParts= [];
for(let i= 0; i < 10; i++){
    reelParts.push(new ReelPart(reelWidth,reelHeight));
}
let reel= new Reel(330, 60, reelWidth, reelHeight, reelParts, context);
let botMarg= new Margin(GAME_WIDTH,100,0,500);
let topMarg= new Margin(GAME_WIDTH,70,0,0);

let graphicDisplayArray= [reelDisplay, reel, botMarg, topMarg, spinBtn, betBtn, creditBar];

canvas.addEventListener('click', function(event) {
    if(spinBtn.clicked(event.clientX, event.clientY)){
        creditBar.updateCredit(betBtn.getBet());
    }else if(betBtn.clicked(event.clientX, event.clientY)){}
});

let lastTime= 0;

function gameLoop(timeStamp){
    let deltaTime= timeStamp - lastTime;
    lastTime= timeStamp;
    context.clearRect(0,0,400,400);

    for(let i= 0; i < graphicDisplayArray.length; i++){
        graphicDisplayArray[i].draw(context);
    }

    requestAnimationFrame(gameLoop);
}
gameLoop();