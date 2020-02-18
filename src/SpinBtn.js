export default class SpinBtn {
    constructor(gameWidth,gameHeight){
        this.width= 50;
        this.height= 50;
        this.color= "red";

        this.position= {
            x: gameWidth/2 - this.width/2,
            y: gameHeight-this.height/2-10,
        };
    }
    draw(context){
        context.fillStyle= this.color;
        //context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.arc(this.position.x, this.position.y,30,0,Math.PI*2,false);
        context.stroke();
        context.fill();
    }
    clicked(mouseX,mouseY){
        var d= Math.sqrt(Math.pow(mouseX-30-this.position.x, 2) + Math.pow(mouseY-30-this.position.y, 2));//Udaljenost dve tacke
        if(d < 30){
            return true;
        }
    }
}