import LinesCreator from './LinesCreator.js';
import Line from './Line.js';
import Display from './Display.js';
export default class Calculations{

    //spinTime%((reelPartHeight/spinSpeed)*brReelParts) == 0  
    static calcSpinTime(reelNumber){
        return 82+5*reelNumber*8;
    }

    static calcWin(symbolComb, bet, allLines, numbOfLines, display){
        let win= 0;
        let winLines= [];
        for(let i= 1; i <= numbOfLines; i++){
            let line= LinesCreator.getLine(i,allLines);
            if(line.isLineActive()){
                let logPos= LinesCreator.getLine(i, allLines).getLogicPoints();

                let s1= symbolComb[logPos[0].reel][logPos[0].reelPart];
                let s2= symbolComb[logPos[1].reel][logPos[1].reelPart];
                let s3= symbolComb[logPos[2].reel][logPos[2].reelPart];
                let s4= symbolComb[logPos[3].reel][logPos[3].reelPart];
                let s5= symbolComb[logPos[4].reel][logPos[4].reelPart];

                let oneLineWin= 0;

                if(s1.getId() === s2.getId()){
                    if(s1.getId() === s3.getId()){
                        if(s1.isBunny()){
                            s1.bunnyAnimationStart();
                            console.log("Start animation",s1);
                        }
                        winLines.push(line);
                        oneLineWin= bet*s1.getValue();
                        if(s1.getId() === s4.getId()){
                            oneLineWin*= s1.getValue();
                            if(s1.getId() === s5.getId())
                                oneLineWin*= s5.getValue();
                        }

                    }
                }
                console.log(oneLineWin);
                win+= oneLineWin;
            }
        }
        if(winLines.length != 0){
            display.setWinLines(winLines);
            display.setLinesTimer(100);
        }
        return win;
    }

}