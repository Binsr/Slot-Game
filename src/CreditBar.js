export default class CreditBar {
    constructor(gameWidth,gameHeight){
        this.width= 100;
        this.height= 30;
        this.color= "red";
        this.credit= 200;

        this.position= {
            x: 0,
            y: gameHeight-this.height,
        };
    }
    draw(context){
        context.fillStyle= this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.fillStyle= "black";
        context.fillText(this.credit.toString(), this.position.x+this.width/4, this.position.y+this.height/2);
    }
    updateCredit(value){
        this.credit+= value;
    }

}