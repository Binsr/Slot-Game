import SpinBtn from './SpinBtn.js';
import BetBtn from './BetBtn.js';
import CreditBar from './CreditBar.js';
import ReelDisplay from './ReelDisplay.js';
import Reel from './Reel.js';
import ReelPart from './ReelPart.js';
import Symbols from './Symbols.js';
import Margin from './Margin.js';
import LinesBtn from './LinesBtn.js';
import LinesCreator from './LinesCreator.js'; // PREBACI DRAW ZA SVAKU KLASU SKROZ DOLE DA BUDE NA ISTOJ POZICIJI
import Calculations from './Calculations.js';

const GAME_WIDTH= 800,GAME_HEIGHT= 600;
const REEL_WIDTH= 110,REEL_HEIGHT= 480;
const NUMBER_OF_REELS= 5, NUMBER_OF_REEL_PARTS= 4, SPACE_BETWEEN_REELS= 20;
const LEFT_EDGE= 80,RIGHT_EDGE= 5*REEL_WIDTH+LEFT_EDGE+SPACE_BETWEEN_REELS*(NUMBER_OF_REELS-1);
const LINES_RECT= 20;
const NUMBER_OF_LINES= 9;
const TOP_MARGIN_HEIGHT= 120;
const BOT_MARGIN_HEIGHT= 200;

let canvas= document.getElementById("gameScreen");
let context= canvas.getContext("2d");

let spinBtn= new SpinBtn(GAME_WIDTH,GAME_HEIGHT);
let betBtn= new BetBtn(GAME_WIDTH,GAME_HEIGHT);
let creditBar= new CreditBar(GAME_WIDTH,GAME_HEIGHT);
let reelDisplay= new ReelDisplay(GAME_WIDTH,GAME_HEIGHT);
let botMarg= new Margin(GAME_WIDTH,BOT_MARGIN_HEIGHT,0,REEL_HEIGHT);
let topMarg= new Margin(GAME_WIDTH,TOP_MARGIN_HEIGHT,0,0);

let reelParts= [[],[],[],[],[]];

for(let i= 0; i < NUMBER_OF_REELS; i++){
    for(let j= 0; j < NUMBER_OF_REEL_PARTS; j++){
        reelParts[i].push(new ReelPart(REEL_WIDTH,REEL_HEIGHT,new Symbols(j+1,5)));
    }
}
let symbols= [];
symbols.push(new Symbols(1,5));
symbols.push(new Symbols(2,5));
symbols.push(new Symbols(3,5));
symbols.push(new Symbols(4,5));

let reels= [];
let reelPositionsX= LEFT_EDGE;

for(let i= 0; i < NUMBER_OF_REELS; i++){
    reels.push(new Reel(reelPositionsX, 0, REEL_WIDTH, REEL_HEIGHT, i, reelParts[i],symbols));
    reelPositionsX+= REEL_WIDTH+SPACE_BETWEEN_REELS;
}
let allLines= LinesCreator.createLines(REEL_WIDTH, REEL_HEIGHT, LEFT_EDGE, RIGHT_EDGE, LINES_RECT,SPACE_BETWEEN_REELS);
let linesBtn= new LinesBtn(GAME_WIDTH,GAME_HEIGHT,allLines,NUMBER_OF_LINES);
let graphicDisplayArray= [reelDisplay, botMarg, topMarg, spinBtn, betBtn, creditBar,linesBtn];

let oneRoundSimbolCombination= [];
let oneRoundWin= 0;

canvas.addEventListener('click', function(event) {
    if(spinBtn.clicked(event.clientX, event.clientY)){
        if(!spinBtn.isActive()){
            creditBar.updateCredit(betBtn.getBet());
            linesBtn.setCounter(0);
            spinBtn.switchActiveOn(true);
            for(let i= 0; i < 5; i++){
                oneRoundSimbolCombination.push(reels[i].shufle());
                reels[i].startSpining();
            }
            oneRoundWin= Calculations.calcWin(oneRoundSimbolCombination,betBtn.getBet(),allLines,NUMBER_OF_LINES);
        }
    }else if(betBtn.clicked(event.clientX, event.clientY)){

    }else if(!spinBtn.isActive()){
        if(linesBtn.clicked(event.clientX,event.clientY)){
            linesBtn.refreshCounter();
        }
    }
});

let numbOfOffReels= 0; //zbog slozenosti ove f-je promenjiva je globalna
function update(){
    if(spinBtn.isActive()){
        for(let i= 0; i < NUMBER_OF_REELS; i++){
            if(reels[i].isSpining()){
                reels[i].endingSpin();
                reels[i].updateSpinCountdown();
            }
        }
        for(let i= numbOfOffReels; i < NUMBER_OF_REELS; i++){
            if(!reels[i].isSpining())
                numbOfOffReels++;
        }
        if(numbOfOffReels == NUMBER_OF_REELS){   
            spinBtn.switchActiveOn(false);
            numbOfOffReels= 0;
            creditBar.increseCredit(oneRoundWin);
        }
    }
    linesBtn.updateCounter();
}

function drawLines(){
    for(let i= 0; i < allLines.length; i++)
        for(let j= 0; j < allLines[i].length; j++){
            if(linesBtn.getShowStatus()){
                allLines[i][j].draw(context);
            }else{
                allLines[i][j].drawLineSign(context);
            }
    }
}
function draw(){
    context.clearRect(0,0,400,400); // IZBACI OVE MAGICNE BROJEVE
    for(let i= 0; i < graphicDisplayArray.length; i++){
        graphicDisplayArray[i].draw(context);//
        if(i == 0){
            for(let j= 0; j < NUMBER_OF_REELS; j++){
                reels[j].draw(context);
            }
        }
    }
    drawLines();
}

let lastTime= 0;
function gameLoop(timeStamp){
    let deltaTime= timeStamp - lastTime;
    lastTime= timeStamp;
    update();
    draw();
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);