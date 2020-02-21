import ReelParts from './ReelPart.js';
export default class Reel{
    constructor(posX, posY, width, height, reelParts, context,spinTime){
        this.width= width;
        this.height= height;
        this.context= context;
        this.reelParts= reelParts;         // *spinSpeed- broj piksela za koliko pomeramo jedno parce reel-a u jednom frame-u
                                           //|---------------------------------------------------------------------------------------------------|
        this.spinSpeed= 60;                //| spinTime%((reelPartHeight/spinSpeed)*brReelParts) == 0  podesavanja se moraju drzati ovoga        |
        this.oneSpinLen= 2;                //|                                                                                                   |
        this.spinTime= spinTime;                //| spinSpeed < reelPartHeight  | oneSpinLen= reelPartHeight/2                                        |                          |
        this.spinCountdown= this.spinTime; //| Najkraci spin moze biti 4 u tom slucaju je spinSpeed == 120 (da izbgnemo bug kod swapa reel parta)|
                                           //|---------------------------------------------------------------------------------------------------|
        this.indexOfSwitcReelPart= 3;
        this.iterator= 0;

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
        this.iterator++;
        if(this.iterator == this.oneSpinLen){//Sa spin speed pravimo kombinaciju koja daj 120 pr: 2 60, 4 30, 5 24 
            this.reelParts[this.indexOfSwitcReelPart].setPosY(this.position.y);
            this.indexOfSwitcReelPart= (this.indexOfSwitcReelPart-1);
            if(this.indexOfSwitcReelPart < 0)
                this.indexOfSwitcReelPart= 3;
            this.reelParts[(this.indexOfSwitcReelPart+1)%4].setCollor(this.reelParts[this.indexOfSwitcReelPart].getCollor());
            this.iterator= 0;
        }
    }

    updateSpinCountdown(){
        if(!this.spining)
            return;
        this.spinCountdown--;
        if(this.spinCountdown == 30){
            this.spinSpeed= 8;
            this.oneSpinLen= 15;

        }
        if(this.spinCountdown == 0){
            this.spinCountdown= this.spinTime;
            this.spinSpeed= 60;                //| spinTime%((reelPartHeight/spinSpeed)*brReelParts) == 0  podesavanja se moraju drzati ovoga        |
            this.oneSpinLen= 2;  
            this.spining= false;
        }

    }
}