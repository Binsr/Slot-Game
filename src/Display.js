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