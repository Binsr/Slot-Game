import ReelParts from './ReelPart.js';
import Calculations from './Calculations.js';

export default class Reel{
    constructor(posX, posY, width, height, reelNumber, reelParts,symbols){ //PROSLEDI MU I SIMBOLE*** SYMBOL TREBA DA IMA VALUE
        this.symbols= symbols;
        this.width= width;
        this.height= height;
        this.reelParts= reelParts;                                   // *spinSpeed- broj piksela za koliko pomeramo jedno parce reel-a u jednom frame-u
                                                                    //|---------------------------------------------------------------------------------------------------|
        this.spinSpeed= 60;                                         //| spinTime%((reelPartHeight/spinSpeed)*brReelParts) == 0  podesavanja se moraju drzati ovoga        |
        this.oneSpinLen= reelParts[0].getHeight()/60;               //|                                                                                                   |
        this.spinTime= Calculations.calcSpinTime(reelNumber);       //| spinSpeed < reelPartHeight  | oneSpinLen= reelPartHeight/2                                        |                          |
        this.spinCountdown= this.spinTime;                          //| Najkraci spin moze biti 4 u tom slucaju je spinSpeed == 120 (da izbgnemo bug kod swapa reel parta)|
                                                                    //|---------------------------------------------------------------------------------------------------|
        this.indexOfSwitcReelPart= 3;
        this.iterator= 0; //Vodi racuna o trenutku kada treba rotirati parce reel-a(kada je oneSpinLen*spinSpeed == visinom parceta)

        this.position={
            x: posX,
            y: posY,
        };
        let y= this.position.y;

        for(let i= 0; i < this.reelParts.length; i++){
            this.reelParts[i].setPosX(this.position.x);
            this.reelParts[i].setPosY(y);
            y+= Math.round(height/4);
        }
    }

    getPosReelPart(){
        return this.reelParts[5].getPosY();
    }

    getSpinCountdown(){
        return this.spinCountdown;
    }

    isSpining(){
        return this.spining;
    }

    startSpining(){
        this.spining= true;
    }

    shufle(){
        let indexOfallSymbols= [0,1,2,3];
        let indexOfLast= indexOfallSymbols.length-1;

        // let allSymbolsArray= ["red","green","blue","white","yellow","pink"];
        let allSymbolsArray= this.symbols;
        let chosenComb=[];

        let randSymbolPick;
        for(let i= 0; i < this.reelParts.length; i++){
            randSymbolPick= Math.floor(Math.random() * Math.floor(indexOfLast+1));
            chosenComb.push(allSymbolsArray[indexOfallSymbols[randSymbolPick]]); //NE TREBAM INDEKSE NEGO SIMBOLE
            indexOfallSymbols[randSymbolPick]= indexOfallSymbols[indexOfLast];
            indexOfLast--;
        }
        for(let i= 0; i < chosenComb.length; i++){
            this.reelParts[i].setSymbol(chosenComb[i]);
        }
        console.log(chosenComb);
        return chosenComb;
    }

    endingSpin(){
        for(let i= 0; i < this.reelParts.length; i++){
            this.reelParts[i].updatePosY(this.spinSpeed);
        }
        this.iterator++;
        if(this.iterator == this.oneSpinLen){
            this.reelParts[this.indexOfSwitcReelPart].setPosY(this.position.y);
            this.indexOfSwitcReelPart= (this.indexOfSwitcReelPart-1);
            if(this.indexOfSwitcReelPart < 0)
                this.indexOfSwitcReelPart= 3;
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

    draw(context){
        for(let i= 0; i < this.reelParts.length; i++){
            this.reelParts[i].draw(context);
        }
    }
}