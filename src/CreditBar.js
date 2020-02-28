export default class CreditBar {
    constructor(gameWidth, gameHeight){
        this.width= 100;
        this.height= 30;
        this.color= "red";
        this.credit= 200;

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
        context.moveTo(this.position.x,this.position.y);
        context.lineTo(this.position.x+this.width,this.position.y);
        context.stroke();
        // context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.fillStyle= "black";
        context.textAlign="center"; 
        context.textBaseline = "middle";
        context.fillText(this.credit.toString(), this.position.x+this.width/2, this.position.y+this.height/2);
    }

}