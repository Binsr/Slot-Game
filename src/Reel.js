import ReelParts from './ReelPart.js';
export default class Reel{
    constructor(posX, posY, width, height, reelParts, context){
        this.width= width;
        this.height= height;
        this.context= context;
        this.reelParts= reelParts;
        this.spinSpeed= 40;
        this.spinCountdown= null;
        this.spinTime= null;
        this.indexOfSwitcReelPart= 3;

        this.counter= 0;

        this.position={
            x: posX,
            y: posY,
        };
        let y= this.position.y;

        let collors= ["red","blue","green","red"];
        for(let i= 0; i < this.reelParts.length; i++){
            this.reelParts[i].setPosX(this.position.x);
            this.reelParts[i].setPosY(y);
            this.reelParts[i].setCollor(collors[i]);
            y+= Math.round(height/4);
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
    shufle(){
        let collorComb= [["red","blue","green","red"],["green","red","blue","green"],["blue","green","red","blue"]];
        let randNumForCollor= Math.floor(Math.random() * Math.floor(3))%3;
        let collors= collorComb[randNumForCollor];
        for(let i= 0; i < this.reelParts.length; i++){
            this.reelParts[i].setCollor(collors[i]);
        }

    }

    endingSpin(){
        for(let i= 0; i < this.reelParts.length; i++){
            this.reelParts[i].updatePosY(this.spinSpeed);
        }
        this.counter++;
        if(this.counter == 3){
            this.reelParts[this.indexOfSwitcReelPart].setPosY(this.position.y);
            this.indexOfSwitcReelPart= (this.indexOfSwitcReelPart-1);
            if(this.indexOfSwitcReelPart < 0)
                this.indexOfSwitcReelPart= 3;
            this.reelParts[(this.indexOfSwitcReelPart+1)%4].setCollor(this.reelParts[this.indexOfSwitcReelPart].getCollor());
            this.counter= 0;
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