export default class Symbols{
    constructor(id,value){
        this.id= id;
        this.value= value;  
        this.color= null;
        
        if(id == 1)
            this.color= "red";
        else if(id == 2)
            this.color= "green";
        else if(id == 3)
            this.color= "blue";
        else
            this.color= "yellow";
    }

    getId(){
        return this.id;
    }

    getValue(){
        return this.value;
    }

    draw(context,width,height,posX,posY){
        if(this.id == 1){
            context.fillStyle= "red";
            this.drawBunny(context,width,height,posX,posY);
        }else if(this.id == 2){
            context.fillStyle= "green";
            this.drawBunny(context,width,height,posX,posY);
        }else if(this.id == 3){
            context.fillStyle= "blue";
            this.drawBunny(context,width,height,posX,posY);
        }else if(this.id == 4){
            context.fillStyle= "yellow";
            this.drawBunny(context,width,height,posX,posY);
        }
    }
    drawBunny(context,width,height,posX,posY){
        context.lineWidth= 3;
        context.fillRect(posX, posY, width, height);
        context.beginPath();
        context.strokeStyle= "black"; //LEVO UVO
        context.moveTo(posX+(width/3)-width/10+2, posY+height/2+20);
        context.bezierCurveTo(posX+width/3-width/2, posY-height/8,posX+width/3-width/4,posY-height/8,posX+(width/3)+width/10,posY+height/2);
        // context.stroke();

        context.moveTo(posX+(width/3)*2-width/10, posY+height/2); //DESNO UVO
        context.bezierCurveTo(posX+width/3*2+width/4, posY-height/8,posX+(width/3)*2+width/2,posY-height/8,posX+(width/3)*2+width/10-2,posY+height/2+20);
        // context.stroke();
        // context.moveTo(posX+width/2,posY+(height/4)*3);
        context.arc(posX+width/2, posY+(height/4)*3, width/4, 0, Math.PI*2, false);
        context.moveTo(posX+(width/2)+10, posY+(height/4)*3-7);
        context.arc(posX+(width/2)+10, posY+(height/4)*3-7,8, 0, Math.PI, false);
        context.moveTo(posX+(width/2)+10, posY+(height/4)*3-7);
        context.lineTo(posX+(width/2)-10, posY+(height/4)*3-7);
        context.arc(posX+(width/2)-10, posY+(height/4)*3-7, 8, 0, Math.PI, false);
        context.lineTo(posX+(width/2)-10, posY+(height/4)*3-7);
        context.stroke();
    }

}