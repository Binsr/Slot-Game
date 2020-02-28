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
        context.lineWidth= 2.5;
        context.fillRect(posX, posY, width, height);
        context.beginPath();
        context.strokeStyle= "black";
                                         //LEVO UVO
        context.moveTo(posX+(width/3)-width/10+2, posY+height/2+20);
        context.bezierCurveTo(posX+width/3-width/2, posY-height/8,posX+width/3-width/4,posY-height/8,posX+(width/3)+width/10,posY+height/2+8);
        // context.stroke();
                                        //DESNO UVO

        context.moveTo(posX+(width/3)*2-width/10, posY+height/2+8); 
        context.bezierCurveTo(posX+width/3*2+width/4, posY-height/8,posX+(width/3)*2+width/2,posY-height/8,posX+(width/3)*2+width/10-2,posY+height/2+20);
                                        //SPOJ USIJU
        context.moveTo(posX+(width/3)+width/10-1,posY+height/2+8);
        context.bezierCurveTo(posX+width/2,posY+height/2+6,posX+width/2,posY+height/2+6,posX+(width/3)*2-width/10+1, posY+height/2+8);
                                            //OCI
        context.moveTo(posX+(width/2)+10, posY+(height/4)*3-7);
        context.arc(posX+(width/2)+10, posY+(height/4)*3-7,8, 0, Math.PI, false);
        context.moveTo(posX+(width/2)+10, posY+(height/4)*3-7);
        context.lineTo(posX+(width/2)-10, posY+(height/4)*3-7);
        context.arc(posX+(width/2)-10, posY+(height/4)*3-7, 8, 0, Math.PI, false);
        context.lineTo(posX+(width/2)-10, posY+(height/4)*3-7);
                                        //LEVI DEO GLAVE
        context.moveTo(posX+(width/3)-width/10+2, posY+height/2+17);
        context.bezierCurveTo(posX+(width/3)-width/10-7, posY+height/2+35,posX+(width/3)-width/10,posY+height/2+35,posX+(width/3)-width/10-2,posY+(height/4)*3);
        context.bezierCurveTo(posX+(width/3)-width/10-15, posY+height/2+40,posX+(width/3)-width/10,posY+height/2+65,posX+(width/3)+width/10-2,posY+(height/4)*3+23);
        context.bezierCurveTo((posX+(width/3)*2-width/10)-7,posY+(height/4)*3+26,(posX+(width/3)*2-width/10)-7,posY+(height/4)*3+26,posX+(width/3)*2-width/10, posY+(height/4)*3+23);
                                        //DESNI DEO GLAVE
        context.bezierCurveTo(posX+(width/3)*2+width/10,posY+height/2+65,posX+(width/3)*2+width/10+10,posY+height/2+40,posX+(width/3)*2+width/10+2,posY+(height/4)*3);
        context.bezierCurveTo(posX+(width/3)*2+width/10+2,posY+height/2+35,posX+(width/3)*2+width/10+5,posY+height/2+35,posX+(width/3)*2+width/10-2,posY+height/2+20);

        context.stroke();
        context.lineWidth= 2;
        context.moveTo(posX+width/2+5,posY+(height/4)*3+17);
        context.lineTo(posX+width/2-5,posY+(height/4)*3+17);
        context.moveTo(posX+width/2,posY+(height/4)*3+17);
        context.lineTo(posX+width/2,posY+(height/4)*3+12);
        context.lineTo(posX+width/2-3,posY+(height/4)*3+9);
        context.moveTo(posX+width/2,posY+(height/4)*3+12);
        context.lineTo(posX+width/2+3,posY+(height/4)*3+9);
        // context.moveTo
        context.stroke();
    }

}