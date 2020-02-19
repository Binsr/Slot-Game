import ReelParts from './ReelPart.js';
export default class Reel{
    constructor(posX, posY, width, height, reelParts,spinSpeed, context){
        this.width= width;
        this.height= height;
        this.color= "yellow";
        this.context= context;
        this.reelParts= reelParts;
        this.startPositiOfParts= [];
        this.spinSpeed= spinSpeed+30;

        this.position={
            x: posX,
            y: posY-this.height+40,
        };
        let y= this.position.y;
        let collors= ["red", "yellow", "white", "blue","purple"];
        for(let i= 0; i < this.reelParts.length; i++){ // < 5 radi
            this.reelParts[i].setPosX(this.position.x);
            this.reelParts[i].setPosY(y);
            this.reelParts[i].setCollor(collors[i%5]);
            this.startPositiOfParts.push(y);
            y+= height/5;
        }
    }

    draw(context){
        // context.fillStyle= this.color;
        // context.fillRect(this.position.x, this.position.y, this.width, this.height);
        for(let i= 0; i < this.reelParts.length; i++){
            this.reelParts[i].draw(this.context);
        }
    }

    spin(){
        let len= this.reelParts.length;
        for(let i= 0; i < len; i++){
            this.reelParts[i].updatePosY(this.spinSpeed);
        }
        if(this.reelParts[0].getPosY() > this.position.y + this.height){
            for(let i= 0; i < len; i++){
                this.reelParts[i].setPosY(this.startPositiOfParts[i]);
            }
        }
    }
}