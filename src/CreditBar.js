export default class CreditBar {
    constructor(gameWidth, gameHeight, startCredit){
        this.width= 100;
        this.height= 30;
        this.color= "red";
        this.credit= startCredit;
        this.gameWidth= gameWidth;
        this.gameHeight= gameHeight;

        this.position= {
            x: this.width/2,
            y: gameHeight-this.height,
        };
    }
    
    updateCredit(value){
        this.credit-= value;
    }

    increseCredit(value){
        this.credit+= value;
    }

    getCredit(){
        return this.credit;
    }

    draw(context){
        context.fillStyle= this.color;
        context.moveTo(this.position.x, this.position.y);
        context.lineTo(this.position.x+this.width, this.position.y);
        context.moveTo(this.position.x, this.position.y);
        context.lineTo(this.position.x, this.gameWidth);
        context.stroke(); 

        context.fillStyle= "black";
        context.textAlign="center"; 
        context.textBaseline = "middle";
        context.fillText(this.credit.toString(), this.position.x+this.width/2, this.position.y+this.height/2);
        context.fillText("Credit", this.position.x+this.width/2, this.position.y-6);
        context.moveTo(this.position.x, this.position.y);
        context.lineTo(this.position.x, this.position.y-15);
        context.lineTo(this.position.x+this.width-1, this.position.y-15);
        context.lineTo(this.position.x+this.width-1, this.gameHeight);
    }

}