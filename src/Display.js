import Line from "./Line.js";
export default class Display{
    constructor(posX, posY, width, height){ 
        
        this.width= width;
        this.height= height;
        this.msg= "GOOD LUCK";
        this.msgCollor= "white";

        this.countTime= 200;
        this.counter= this.countTime;

        this.position= {
            x: posX - this.width/2,
            y: posY - this.height/2
        };

        this.winLines= [];
        this.linesTimer= 0;

    }

    setMessage(msg){
        this.msg= msg;
        this.counter= this.countTime;
    }
    setColorOfMessage(collor){
        this.msgCollor= collor;
    }
    setMessageTime(time){
        this.countTime= time;
    }
    updateDisplay(){
        if(this.counter == 0){
            this.msg= "";
            return;
        }
        this.counter--;
    }
    setWinLines(lines){
        this.winLines= lines;
    }

    setLinesTimer(time){
        this.linesTimer= time;
        for(let i= 0; i < this.winLines.length; i++){
            this.winLines[i].linesOnShowSwitch(true);
        }
        console.log(this.winLines);
    }
    turnOfLinesShow(){
        this.winLines= [];
    }

    updateLinesTimer(){
        if(this.linesTimer == 0){
            for(let i= 0; i < this.winLines; i++){
                this.winLines[i].linesOnShowSwitch(false);
            }
            this.winLines= [];
        }
        this.linesTimer--;
    }
    
    drawWinLines(context){
        for(let i= 0; i < this.winLines.length; i++)
            this.winLines[i].draw(context);
    }

    draw(context){
        context.fillStyle= "black";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.font= "15px Arial";
        context.fillStyle= this.msgCollor;
        context.textAlign="center"; 
        context.textBaseline = "middle";
        context.fillText(this.msg, this.position.x+this.width/2, this.position.y+this.height/2);
    }
}