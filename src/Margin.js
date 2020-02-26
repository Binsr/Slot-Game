export default class Margin{
    constructor(posX, posY, gameWidth, height){
        this.width= gameWidth;
        this.height= height;
        
        this.position= {
            x: posX,
            y: posY,
        };
    }
    getBotEdgePos(){
        return this.height + this.position.y;
    }
    draw(context){
        context.fillStyle= "yellow";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}