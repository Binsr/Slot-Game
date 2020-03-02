import SpinBtn from './SpinBtn.js';
import BetBtn from './BetBtn.js';
import CreditBar from './CreditBar.js';
import ReelsBackground from './ReelsBackground.js';
import Reel from './Reel.js';
import ReelPart from './ReelPart.js';
import Reels from './Reels.js';
import Symbol from './Symbol.js';
import Margin from './Margin.js';
import LinesBtn from './LinesBtn.js';
import LinesCreator from './LinesCreator.js'; 
import Calculations from './Calculations.js'; 
import Display from './Display.js';
import Music from './Music.js';
import Lines from './Lines.js';

const GAME_WIDTH= 800,GAME_HEIGHT= 600;
const REEL_WIDTH= 110,REEL_HEIGHT= 480;
const NUMBER_OF_REELS= 5, NUMBER_OF_REEL_PARTS= 4, SPACE_BETWEEN_REELS= 20;
const LEFT_EDGE= 80,RIGHT_EDGE= 5*REEL_WIDTH+LEFT_EDGE+SPACE_BETWEEN_REELS*(NUMBER_OF_REELS-1);
const LINES_RECT= 20;
const NUMBER_OF_LINES= 9;
const TOP_MARGIN_HEIGHT= 120;
const BOT_MARGIN_HEIGHT= 200;
const DISPLAY_WIDTH= 700,DISPLAY_HEIGHT= 40;
const COIN_SYMBOL_VALUE= 10;
const BUNNY_SYMBOL_VALUE= 5;
const START_CREDIT= 450;

let canvas= document.getElementById("gameScreen");
let context= canvas.getContext("2d");

let spinBtn= new SpinBtn(GAME_WIDTH, GAME_HEIGHT);
let betBtn= new BetBtn(GAME_WIDTH, GAME_HEIGHT);
let creditBar= new CreditBar(GAME_WIDTH, GAME_HEIGHT, START_CREDIT);
let reelsBackground= new ReelsBackground(GAME_WIDTH, GAME_HEIGHT);
let botMarg= new Margin(0, REEL_HEIGHT, GAME_WIDTH, BOT_MARGIN_HEIGHT);
let topMarg= new Margin(0, 0, GAME_WIDTH, TOP_MARGIN_HEIGHT);
let display= new Display(GAME_WIDTH/2, REEL_HEIGHT + DISPLAY_HEIGHT/2+10, DISPLAY_WIDTH, DISPLAY_HEIGHT);

let reelParts= [[],[],[],[],[]];
let symbols= [];
symbols.push(new Symbol("redBunny", BUNNY_SYMBOL_VALUE));
symbols.push(new Symbol("blueBunny", BUNNY_SYMBOL_VALUE));
let coinSimb= new Symbol("coin", COIN_SYMBOL_VALUE);
symbols.push(coinSimb);
symbols.push(new Symbol("greenBunny", BUNNY_SYMBOL_VALUE));

for(let i= 0; i < NUMBER_OF_REELS; i++){
    for(let j= 0; j < NUMBER_OF_REEL_PARTS; j++){
        reelParts[i].push(new ReelPart(REEL_WIDTH, REEL_HEIGHT, symbols[j]));
    }
}

let reels= [];
let reelPositionsX= LEFT_EDGE;

for(let i= 0; i < NUMBER_OF_REELS; i++){
    reels.push(new Reel(reelPositionsX, 0, REEL_WIDTH, REEL_HEIGHT, i, reelParts[i],symbols));
    reelPositionsX+= REEL_WIDTH+SPACE_BETWEEN_REELS;
}
let reelS = new Reels(reels);

let allLines= LinesCreator.createLines(REEL_WIDTH, REEL_HEIGHT, LEFT_EDGE, RIGHT_EDGE, LINES_RECT,SPACE_BETWEEN_REELS);
let linesBtn= new LinesBtn(GAME_WIDTH,GAME_HEIGHT,allLines,NUMBER_OF_LINES);
let lines= new Lines(allLines);

let graphicDisplayArray= [reelsBackground, reelS, botMarg, topMarg, spinBtn, betBtn, creditBar, linesBtn, display, lines];

let oneRoundSimbolCombination= [];
let oneRoundWin= 0;

canvas.addEventListener('click', function(event) {
    if(spinBtn.clicked(event.clientX, event.clientY)){
        if(!spinBtn.isActive()){
            for(let i= 0; i < symbols.length; i++){
                if(symbols[i].isBunny()){
                    symbols[i].stopBunnyAnimation();
                }
            } 
            lines.setSpinActive(true);
            Music.backgroundMusic();

            let wholeBet= betBtn.getBet() * linesBtn.getNumbOfActiveLines();
            if(creditBar.getCredit() > wholeBet)
                Music.spin();

            if(creditBar.getCredit() < betBtn.getBet()*linesBtn.getNumbOfActiveLines()){
                display.setColorOfMessage("red");
                display.setMessage("No credit");
                display.setMessageTime(100);
                Music.noCredit();
            }else{
                lines.turnOfWinLinesShow();
                display.setColorOfMessage("green");
                display.setMessage("Spinning!");
                display.setMessageTime(200);
                
                creditBar.updateCredit(betBtn.getBet()*linesBtn.getNumbOfActiveLines());
                lines.setCounter(0);
                spinBtn.switchActiveOn(true);

                oneRoundSimbolCombination= reelS.oneRoundSymbolComb();
                oneRoundWin= Calculations.calcWin(oneRoundSimbolCombination,betBtn.getBet(), allLines, NUMBER_OF_LINES, lines);
                oneRoundSimbolCombination= [];
            }
        }
    }else if(!spinBtn.isActive())
       if(betBtn.clicked(event.clientX, event.clientY)){
    }else if(!spinBtn.isActive()){
        if(linesBtn.clicked(event.clientX,event.clientY)){
            lines.refreshCounter();
            Music.lines();
            Music.backgroundMusic();
        }
    }
});

let numbOfOffReels= 0; //zbog slozenosti ove f-je promenjiva je globalna
function update(){
    if(spinBtn.isActive()){
        for(let i= 0; i < NUMBER_OF_REELS; i++){
            if(reels[i].isSpining()){
                reels[i].Spin();
                reels[i].updateSpinCountdown();
            }
        }
        for(let i= numbOfOffReels; i < NUMBER_OF_REELS; i++){
            if(!reels[i].isSpining())
                numbOfOffReels++;
        }
        if(numbOfOffReels == NUMBER_OF_REELS){   
            spinBtn.switchActiveOn(false);
            lines.setSpinActive(false);
            numbOfOffReels= 0;
            if(oneRoundWin > 0){
                display.setMessage("YOU WON: " + oneRoundWin);
                display.setMessageTime(100);
                display.setColorOfMessage("yellow");
            }
            creditBar.increseCredit(oneRoundWin);
            if(oneRoundWin > 0)
                Music.win();
            if(creditBar.getCredit() == 0){
                display.setColorOfMessage("red");
                display.setMessageTime(200);
                display.setMessage("GAME OVER");
            }
        }
    }else{
        lines.updateWinLinesTimer();
        for(let i= 0; i < symbols.length; i++){
            if(symbols[i].isBunny()){
                symbols[i].bunnyAnimationUpdate();
            }
        } 
    }
    lines.updateCounter();
    display.updateDisplay();
    coinSimb.coinStartAnimation();
    coinSimb.coinUpdate();
}

function draw(){
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); 
    for(let i= 0; i < graphicDisplayArray.length; i++){
        graphicDisplayArray[i].draw(context);
    }
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