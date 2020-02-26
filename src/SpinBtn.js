export default class SpinBtn {
    constructor(gameWidth, gameHeight){
        this.width= 50;
        this.height= 50;
        this.color= "red";
        this.spinning= false;
        this.r= 12.5;

        this.position= {
            x: gameWidth/2 - this.width/2,
            y: gameHeight-this.height/2-10,
        };
    }
    draw(context){
        context.fillStyle= this.color;
        //context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.beginPath()
        context.arc(this.position.x+this.r, this.position.y, 2*this.r, 0, Math.PI*2, false);
        context.stroke();
        context.fill();
    }
    clicked(mouseX, mouseY){
        var d= Math.sqrt(Math.pow(mouseX-this.r-this.position.x, 2) + Math.pow(mouseY-this.r-this.position.y, 2));//Udaljenost dve tacke
        if(d < 30){
            return true;
        }
    }
    isActive(){
        return this.spinning;
    }
    switchActiveOn(b){
        this.spinning= b;
    }
}