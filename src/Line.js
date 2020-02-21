export default class Line{

    constructor(){
        this.points= [];
        this.isLineOn= false;
        this.showLine= false;

    }
    setPoints(points){
        this.points= points;
    }

    draw(context){
        if(!this.isLineOn && !this.isShowing)
            return;
        // console.log("Usao u draw");
        context.beginPath();
        context.strokeStyle= "white";
        context.moveTo(this.points[0][0]-5,this.points[0][1]);
        for(let i= 1; i < this.points.length; i++){
            context.lineTo(this.points[i][0], this.points[i][1]);
        }
        context.closePath();
        context.stroke();
        context.fillStyle= "white";
        context.fillRect(this.points[0][0]-25, this.points[0][1]-10, 20, 20); 
    }

    setLineOn(x){
        this.isLineOn= x;
    }

    getLineActive(){
        return this.isLineOn;
    }

    setShowLine(isShowing){
        this.showLine= isShowing;
    }
    drawLineSign(context){
        if(!this.isLineOn && !this.isShowing)
            return;
        context.fillStyle= "white";
        context.fillRect(this.points[0][0]-25, this.points[0][1]-10, 20, 20); 
    }


}