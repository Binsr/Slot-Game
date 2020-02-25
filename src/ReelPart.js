import Symbols from "./Symbols.js";
export default class ReelPart{
    constructor(width, height,symbol){
        this.width= width;
        this.height= Math.round(height/4);
        this.collor= "red";
        this.position={
            x: null,
            y: null,
        };
        this.symbol= symbol;
    }
    setPosX(x){
        this.position.x= x;
    }
    setPosY(y){
        this.position.y= y;
    }
    setSymbol(symbol){
        this.symbol= symbol;
    }
    updatePosY(speed){
        this.position.y+=speed;
    }
    getPosY(){
        return this.position.y;
    }
    getCollor(){
        return this.collor;
    }
    getHeight(){
        return this.height;
    }
    getSymbol(){
        return this.symbol;
    }

    draw(context){
        this.symbol.draw(context, this.width, this.height, this.position.x, this.position.y);
    }
}