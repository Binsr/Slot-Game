export default class ReelPart{
    constructor(width, height){
        this.width= width;
        this.height= Math.round(height/4);
        this.collor= "red";
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
    setCollor(collor){
        this.collor= collor;
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
    draw(context){
        context.fillStyle= this.collor;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}