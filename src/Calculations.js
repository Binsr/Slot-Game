import LinesCreator from './LinesCreator.js';
import Line from './Line.js';
export default class Calculations{

    //spinTime%((reelPartHeight/spinSpeed)*brReelParts) == 0  
    static calcSpinTime(reelNumber){
        return 82+5*reelNumber*8;
    }

    static calcWin(symbolComb,bet,allLines,numbOfLines){
        let win= 0;
        //LinesCreator.getLine(9,allLines);
        for(let i= 1; i <= numbOfLines; i++)
            if(LinesCreator.getLine(i,allLines).isLineActive()){
                let logPos= LinesCreator.getLine(i,allLines).getLogicPoints();
                console.log("sim",symbolComb);
                console.log("pozicije",logPos);
                console.log(symbolComb[logPos[0].reel][logPos[0].reelPart].getId());
                console.log(symbolComb[logPos[1].reel][logPos[1].reelPart].getId());
                console.log(symbolComb[logPos[2].reel][logPos[2].reelPart].getId());

                if(symbolComb[logPos[0].reel][logPos[0].reelPart].getId() ===
                symbolComb[logPos[1].reel][logPos[1].reelPart].getId()){
                    if(symbolComb[logPos[0].reel][logPos[0].reelPart].getId() === 
                    symbolComb[logPos[2].reel][logPos[2].reelPart].getId())
                    win+=10;
                }

            }
        return win;
    }

}