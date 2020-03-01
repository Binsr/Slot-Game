export default class BunnySymbol{

    constructor(){
        this.bunny={
            glassesStartAngle: 0,
            glassesEndAndgle:  Math.PI,
            animationCounter: 0,
            animationTime: 150,
            animation: false,
            drawEyes: false,
            closeEye: false
        }
    }
    bunnyAnimationStart(){
        this.bunny.animation= true;
        this.bunny.animationCounter= 0;
    }
    stopBunnyAnimation(){
        this.bunny.animation= false;
        this.bunny.glassesStartAngle= 0;
        this.bunny.glassesEndAndgle= Math.PI;
        this.bunny.drawEyes= false;
        this.bunny.closeEye= false;
    }
    bunnyAnimationUpdate(){
        if(!this.bunny.animation)
            return;

        if(this.bunny.animationCounter  < 200){
            this.bunny.glassesStartAngle= Math.PI;
            this.bunny.glassesEndAndgle= 2*Math.PI;
            if(this.bunny.animationCounter < 50 || this.bunny.animationCounter > 100){
                this.bunny.drawEyes= true;
                this.bunny.closeEye= false;
            }else{
                this.bunny.closeEye= true;
                this.bunny.drawEyes= false;
            }
        }else{
            this.bunny.glassesStartAngle= 0;
            this.bunny.glassesEndAndgle= Math.PI;
            this.bunny.drawEyes= false;
        }
        if(this.bunny.animationCounter == this.bunny.animationTime){
            this.stopBunnyAnimation();
        }
        this.bunny.animationCounter++;
    }
    drawBunny(context,width,height,posX,posY){

        context.lineWidth= 2.5;
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
        context.lineTo(posX+(width/2)+19,posY+(height/4)*3-7);
        context.moveTo(posX+(width/2)+10, posY+(height/4)*3-7);
        context.arc(posX+(width/2)+10, posY+(height/4)*3-7,8, this.bunny.glassesStartAngle, this.bunny.glassesEndAndgle, false);
        context.moveTo(posX+(width/2)+10, posY+(height/4)*3-7);
        context.lineTo(posX+(width/2)-10, posY+(height/4)*3-7);
        context.arc(posX+(width/2)-10, posY+(height/4)*3-7, 8, this.bunny.glassesStartAngle, this.bunny.glassesEndAndgle, false);
        context.lineTo(posX+(width/2)-10, posY+(height/4)*3-7);
                                        //LEVI DEO GLAVE
        context.moveTo(posX+(width/3)-width/10+2, posY+height/2+17);
        context.bezierCurveTo(posX+(width/3)-width/10-7, posY+height/2+35,posX+(width/3)-width/10,posY+height/2+35,posX+(width/3)-width/10-2,posY+(height/4)*3);
        context.bezierCurveTo(posX+(width/3)-width/10-15, posY+height/2+40,posX+(width/3)-width/10,posY+height/2+65,posX+(width/3)+width/10-2,posY+(height/4)*3+23);
        context.bezierCurveTo((posX+(width/3)*2-width/10)-7,posY+(height/4)*3+26,(posX+(width/3)*2-width/10)-7,posY+(height/4)*3+26,posX+(width/3)*2-width/10, posY+(height/4)*3+23);
                                        //DESNI DEO GLAVE
        context.bezierCurveTo(posX+(width/3)*2+width/10,posY+height/2+65,posX+(width/3)*2+width/10+10,posY+height/2+40,posX+(width/3)*2+width/10+2,posY+(height/4)*3);
        context.bezierCurveTo(posX+(width/3)*2+width/10+2,posY+height/2+35,posX+(width/3)*2+width/10+5,posY+height/2+35,posX+(width/3)*2+width/10-2,posY+height/2+20);

            if(this.bunny.drawEyes){
                context.moveTo(posX+(width/2)+10,posY+(height/4)*3-3);
                context.ellipse(posX+(width/2)+10, posY+(height/4)*3-3, 1.5, 4, Math.PI, 0, 2 * Math.PI);
                context.stroke();
            }
            if(this.bunny.closeEye){
                context.moveTo(posX+(width/2)+5,posY+(height/4)*3-3);
                context.lineTo(posX+(width/2)+15,posY+(height/4)*3-3);
            }
            if(this.bunny.drawEyes || this.bunny.closeEye){
                context.moveTo(posX+(width/2)-10,posY+(height/4)*3-3);
                context.ellipse(posX+(width/2)-10,posY+(height/4)*3-3,1.5, 4, Math.PI, 0, 2 * Math.PI);
            }

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