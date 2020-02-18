import SpinBtn from './SpinBtn.js';
import BetBtn from './BetBtn.js';
import CreditBar from './CreditBar.js';
import ReelDisplay from './ReelDisplay.js';

let canvas= document.getElementById("gameScreen");
let context= canvas.getContext("2d");

const GAME_WIDTH= 800,GAME_HEIGHT= 600;

let spinBtn= new SpinBtn(GAME_WIDTH,GAME_HEIGHT);
let betBtn= new BetBtn(GAME_WIDTH,GAME_HEIGHT);
let creditBar= new CreditBar(GAME_WIDTH,GAME_HEIGHT);
let reelDisplay= new ReelDisplay(GAME_WIDTH,GAME_HEIGHT);

let lastTime= 0;

canvas.addEventListener('click', function(event) {
    if(spinBtn.clicked(event.clientX, event.clientY)){
        creditBar.updateCredit(betBtn.getBet());
    }else if(betBtn.clicked(event.clientX,event.clientY)){}
  });
 
function gameLoop(timeStamp){
    let deltaTime= timeStamp - lastTime;
    lastTime= timeStamp;
    context.clearRect(0,0,400,400);
    spinBtn.draw(context);
    betBtn.draw(context);
    creditBar.draw(context);
    reelDisplay.draw(context);
    requestAnimationFrame(gameLoop);
}
gameLoop();