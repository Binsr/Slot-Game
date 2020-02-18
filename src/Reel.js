import ReelParts from './ReelPart.js';
export default class Reel{
    constructor(posX, posY, width, height, reelParts, context){
        this.width= width;
        this.height= height;
        this.color= "yellow";
        this.context= context;
        this.reelParts= reelParts;
        this.position={
            x: posX,
            y: posY,
        };
        let y= this.position.y;
        for(let i= 0; i < this.reelParts.length; i++){ // < 5 radi
            this.reelParts[i].setPosX(this.position.x);
            this.reelParts[i].setPosY(y);
            y+= height/5;
        }
    }
    draw(context){
        context.fillStyle= this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        for(let i= 0; i < this.reelParts.length; i++){
            this.reelParts[i].draw(this.context);
        }
    }
}