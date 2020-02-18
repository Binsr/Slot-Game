export default class ReelDisplay{
    constructor(gameWidth, gameHeight){
        this.width= 700;
        this.height= 470;

        this.position= {
            x:gameWidth/2,
            y:30,
        };
    }
    draw(context){
        context.fillStyle= "black";
        context.fillRect(this.position.x-this.width/2, this.position.y, this.width, this.height);
    }
}