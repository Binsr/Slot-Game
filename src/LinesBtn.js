export default class LinesBtn{

    constructor(gameWidth, gameHeight, lines, numbOfLines){
        this.width= 100;
        this.height= 30;   
        this.color= "White";
        this.lines= lines;

        this.numbOfLines = numbOfLines;
        this.iteratorX= 0;
        this.iteratorY= 1;
        this.linesActive= 1;


        this.position= {
            x: gameWidth - this.width-200,
            y: gameHeight - this.height,
        };
    }

    clicked(mouseX,mouseY){
        var d1= Math.sqrt(Math.pow(mouseX-70-this.position.x-this.width/3, 2) + Math.pow(mouseY-30-this.position.y, 2));//Udaljenost dve tacke
        var d2= Math.sqrt(Math.pow(mouseX+40-this.position.x-this.width/3, 2) + Math.pow(mouseY-30-this.position.y, 2));

        if(d1 < 30){
            if(this.linesActive == this.numbOfLines)
                return true;
            this.lines[this.iteratorX][this.iteratorY].switchActiveOn(true);
            if(this.iteratorY == this.lines[this.iteratorX].length-1){
                this.iteratorX++;
                this.iteratorY= 0;
            }else{
                this.iteratorY++;
            }
            this.linesActive++;
            return true;
        }

        if(d2 < 20){
            if(this.linesActive == 1)
                return true;
            if(this.iteratorY == 0){
                this.iteratorX--;
                this.iteratorY = this.lines[this.iteratorX].length-1;
            }else{
                this.iteratorY--;
            }
            this.lines[this.iteratorX][this.iteratorY].switchActiveOn(false);
            this.linesActive--;
            return true;    
        }
    }
    
    getNumbOfActiveLines(){
        return this.linesActive;
    }

    draw(context){
        context.moveTo(this.position.x-1, this.position.y+1);
        context.lineTo(this.position.x+this.width, this.position.y+1);
        context.stroke();
        context.fillStyle= "black";
        context.fillRect(this.position.x-this.width/3, this.position.y, this.width/3, this.height);

        context.font="20pt bold default";
        context.fillStyle = "yellow";
        context.fillText("-",this.position.x-(this.width/3)/2,this.position.y+this.height/2);       
        context.fillStyle= "black";
        context.fillRect(this.position.x+this.width*2/3, this.position.y, this.width/3, this.height);
        context.font="15pt bold default";
        context.fillStyle = "yellow";
        context.fillText("+",this.position.x+this.width-(this.width/6),this.position.y+this.height/2);
        context.font="10pt arial";        
        context.textAlign="center"; 
        context.textBaseline = "middle";
        context.fillStyle= "black";
        context.fillText(this.linesActive.toString(), this.position.x+this.width/3, this.position.y+this.height/2);
        context.fillText("Lines",this.position.x+this.width/3,this.position.y-6);
        context.moveTo(this.position.x-this.width/3+1, this.position.y);
        context.lineTo(this.position.x-this.width/3+1, this.position.y-15);
        context.lineTo(this.position.x+this.width-1, this.position.y-15);
        context.lineTo(this.position.x+this.width-1, this.position.y);
        context.stroke();
    }

}