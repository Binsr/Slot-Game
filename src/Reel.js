import ReelParts from './ReelPart.js';
export default class Reel{
    constructor(posX, posY, width, height, reelParts, context){
        this.width= width;
        this.height= height;
        this.color= "yellow";
        this.context= context;
        this.reelParts= reelParts;
        this.startPositiOfParts= [];
        this.spinSpeed= Math.floor(Math.random() * Math.floor(40))%20+30;
        this.spinCountdown;
        this.spinTime= 0;
        this.startPosY= posY;
        this.spining= false;

        this.position={
            x: posX,
            y: posY-this.height+40,
        };
        let y= this.position.y;
        let collors= ["red", "blue","green"];
        for(let i= 0; i < this.reelParts.length; i++){
            this.reelParts[i].setPosX(this.position.x);
            this.reelParts[i].setPosY(y);
            this.reelParts[i].setCollor(collors[i%3]);
            this.startPositiOfParts.push(y);
            y+= Math.round(height/3);
        }
    }

    draw(context){
        for(let i= 0; i < this.reelParts.length; i++){
            this.reelParts[i].draw(this.context);
        }
    }
    setSpining(){
        this.spining= true;
    }

    isSpining(){
        return this.spining;
    }

    setSpinCountdown(time){
        this.spinCountdown= time;
        this.spinTime= time;
    }

    getPosReelPart(){
        return this.reelParts[5].getPosY();
    }

    getSpinCountdown(){
        return this.spinCountdown;
    }

    spins(finishing){
        this.spinSpeed= Math.floor(Math.random() * Math.floor(40))%20+30;
        if(!this.spining)
            return;
        let len= this.reelParts.length;

        let spinS= this.spinSpeed;
        if(finishing)
            spinS= 1;

        for(let i= 0; i < len; i++){
            this.reelParts[i].updatePosY(spinS);
        }
        if(this.reelParts[0].getPosY() > this.position.y + this.height){
            for(let i= 0; i < len; i++){
                this.reelParts[i].setPosY(this.startPositiOfParts[i]);
            }
        }
    }

    updateSpinCountdown(){
        if(!this.spining)
            return;
        this.spinCountdown--;
        if(this.spinCountdown == 0){
            this.spinCountdown= this.spinTime;
            this.spining= false;
        }

    }
}