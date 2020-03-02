import Line from './Line.js';
export default class Lines{
    constructor(lines){
        this.lines= lines;
        this.winLines= [];

        this.timeForC= 90;
        this.counter= this.timeForC;
        this.showLines= true;
        this.isSpinActive= false;
        this.winLinesTimer= null;
    }

    refreshCounter(){
        this.counter= this.timeForC;
        this.showLines= true;
    }

    updateCounter(){
        if(this.counter == 0){
            this.showLines= false;
            return;
        }
        this.counter--;
    }

    getShowStatus(){
        return this.showLines;
    }

    setCounter(time){
        this.counter= time;
        this.showLines= false;
    }
    //--------------WIN LINES FUNCTIONS-----------

    setWinLines(lines){
        this.winLines= lines;
    }

    setWinLinesTimer(time){
        this.winLinesTimer= time;
        for(let i= 0; i < this.winLines.length; i++){
            this.winLines[i].linesOnShowSwitch(true);
        }
        console.log(this.winLines);
    }
    turnOfWinLinesShow(){
        this.winLines= [];
    }

    updateWinLinesTimer(){
        if(this.winLinesTimer == 0){
            for(let i= 0; i < this.winLines; i++){
                this.winLines[i].linesOnShowSwitch(false);
            }
            this.winLines= [];
        }
        this.winLinesTimer--;
    }
    setSpinActive(b){
        this.isSpinActive= b;
    }

    drawWinLines(context){
        for(let i= 0; i < this.winLines.length; i++)
            this.winLines[i].draw(context);
    }
//----------------------------------------------------------------------
    draw(context){
        for(let i= 0; i < this.lines.length; i++)
            for(let j= 0; j < this.lines[i].length; j++){
                if(this.getShowStatus()){
                    this.lines[i][j].draw(context);
                }else{
                    this.lines[i][j].drawLineSign(context);
                }
            }
        if(!this.isSpinActive)
            this.drawWinLines(context);   
    }
}