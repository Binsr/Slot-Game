export default class ReelPart{
    constructor(width, height){
        this.width= width;
        this.height= height/5;

        this.position={
            x: 30,
            y: 30,
        };
    }
    setPosX(x){
        this.position.x= x;
    }
    setPosY(y){
        this.position.y= y;
    }
    draw(context){
        context.fillStyle= "red";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}