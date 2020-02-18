export default class ReelPart{
    constructor(width, height){
        this.width= width;
        this.height= height/5;

        this.position={
            x: null,
            y: null,
        };
    }
    setPosX(x){
        this.position.x= x;
    }
    setPosY(y){
        this.position.y= y;
    }
    draw(context){
        context.fillStyle= "white";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}