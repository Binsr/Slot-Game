export default class BetBtn{
    constructor(gameWidth, gameHeight){
        this.width= 100;
        this.height= 30;   
        this.color= "yellow";
        this.iterator= 0;
        this.bets= [1,2,3,5,10,15,20,50];
        this.bet= this.bets[this.iterator];

        this.position= {
            x: gameWidth - this.width-50,
            y: gameHeight - this.height,
        };
    }

    clicked(mouseX,mouseY){
        var d1= Math.sqrt(Math.pow(mouseX-70-this.position.x-this.width/3, 2) + Math.pow(mouseY-30-this.position.y, 2));//Udaljenost dve tacke
        var d2= Math.sqrt(Math.pow(mouseX+40-this.position.x-this.width/3, 2) + Math.pow(mouseY-30-this.position.y, 2));
        if(d1 < 30){
            if(this.iterator < this.bets.length-1){
                this.iterator++;
                this.bet= this.bets[this.iterator];
            }
            return true;
        }else if(d2 < 20){
            if(this.iterator > 0){
                this.iterator--;
                this.bet= this.bets[this.iterator];
            }
            return true;
        }
    }
    
    getBet(){
        return this.bet;
    }

    draw(context){
        context.fillStyle= this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.fillStyle= "black";
        context.fillRect(this.position.x-this.width/3, this.position.y, this.width/3, this.height);
        context.moveTo(this.position.x-this.width/3+1, this.position.y);
        context.lineTo(this.position.x-this.width/3+1, this.position.y-15);
        context.lineTo(this.position.x+this.width-1, this.position.y-15);
        context.lineTo(this.position.x+this.width-1, this.position.y);
        context.fillStyle= "black";
        context.fillRect(this.position.x+this.width*2/3, this.position.y, this.width/3, this.height);
        context.fillStyle= "black";
        context.textAlign="center"; 
        context.textBaseline = "middle";
        context.fillText(this.bet.toString(), this.position.x+this.width/3, this.position.y+this.height/2);
        context.fillText("Bet per line",this.position.x+this.width/3,this.position.y-6);
    }
}