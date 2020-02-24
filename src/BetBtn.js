export default class BetBtn{
    constructor(gameWidth, gameHeight){
        this.width= 100;
        this.height= 30;   
        this.color= "green";
        this.bet= 10;

        this.position= {
            x: gameWidth - this.width,
            y: gameHeight - this.height,
        };
    }

    draw(context){
        context.fillStyle= this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.fillStyle= "black";
        context.fillRect(this.position.x-this.width/3, this.position.y, this.width/3, this.height);
        context.fillStyle= "black";
        context.fillRect(this.position.x+this.width*2/3, this.position.y, this.width/3, this.height);
        context.fillStyle= "black";
        context.fillText(this.bet.toString(), this.position.x+this.width/4, this.position.y+this.height/2);
    }

    clicked(mouseX,mouseY){
        var d1= Math.sqrt(Math.pow(mouseX-70-this.position.x-this.width/3, 2) + Math.pow(mouseY-30-this.position.y, 2));//Udaljenost dve tacke
        var d2= Math.sqrt(Math.pow(mouseX+40-this.position.x-this.width/3, 2) + Math.pow(mouseY-30-this.position.y, 2));
        if(d1 < 30){
            if(this.bet < 30)
                this.bet+= 5;
            return true;
        }else if(d2 < 20){
            if(this.bet > 5)
                this.bet-= 5;
            return true;
        }
    }
    
    getBet(){
        return this.bet;
    }
}