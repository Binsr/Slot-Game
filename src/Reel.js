export default class Reel{
    constructor(posX,posY){
        this.width= 100;
        this.height= 400;
        this.color= "yellow";

        this.position={
            x: posX,
            y: posY,
        };
    }
    draw(context){
        context.fillStyle= this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}