export default class ReelPart{
    constructor(width, height){
        this.width= width;
        this.height= height/5;
        this.collor= "red";
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
    setCollor(collor){
        this.collor= collor;
    }
    updatePosY(speed){
        this.position.y+=speed;
    }
    getPosY(){
        return this.position.y;
    }
    draw(context){
        context.fillStyle= this.collor;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}