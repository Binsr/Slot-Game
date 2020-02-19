export default class Margin{
    constructor(width, height, posX, posY){
        this.width= width;
        this.height= height;
        
        this.position= {
            x: posX,
            y: posY,
        };
    }
    draw(context){
        context.fillStyle= "yellow";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}