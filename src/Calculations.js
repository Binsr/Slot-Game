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
                
            }
        return win;
    }

}