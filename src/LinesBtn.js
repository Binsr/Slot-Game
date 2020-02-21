export default class LinesBtn{

    constructor(gameWidth,gameHeight,lines){
        this.width= 100;
        this.height= 30;   
        this.linesNumb=0;
        this.color= "White";
        this.lines= lines;

        this.position= {
            x: gameWidth - this.width-200,
            y: gameHeight - this.height,
        };
        // lines[0][1].setShowLine(true);
        // lines[0][1].setLineOn(true);
    }
    draw(context){
        context.fillStyle= this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.fillStyle= "black";
        context.fillRect(this.position.x-this.width/3, this.position.y, this.width/3, this.height);
        context.fillStyle= "black";
        context.fillRect(this.position.x+this.width*2/3, this.position.y, this.width/3, this.height);
        context.fillStyle= "black";
        context.fillText(this.linesNumb.toString(), this.position.x+this.width/4, this.position.y+this.height/2);
    }
    clicked(mouseX,mouseY){
        var d1= Math.sqrt(Math.pow(mouseX-70-this.position.x-this.width/3, 2) + Math.pow(mouseY-30-this.position.y, 2));//Udaljenost dve tacke
        var d2= Math.sqrt(Math.pow(mouseX+40-this.position.x-this.width/3, 2) + Math.pow(mouseY-30-this.position.y, 2));
        if(d1 < 30){
            if(this.linesNumb == 3)
                return;
            this.lines[0][this.linesNumb].setLineOn(true);
            this.lines[0][this.linesNumb].setShowLine(true);
                this.linesNumb++;
        }else if(d2 < 20){
            if(this.linesNumb == 0)
                return;
            this.lines[0][this.linesNumb-1].setLineOn(false);
            this.lines[0][this.linesNumb-1].setShowLine(false);
            this.linesNumb--;
        }
    }
}