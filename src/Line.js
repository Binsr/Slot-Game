export default class Line{

    constructor(linesRect, lineNumber){ 
        this.drawPoints= [];
        this.logicPoints= [];
        this.isLineOn= false;
        this.showLine= false;

        this.linesRect= linesRect;
        this.lineNumber= lineNumber;        
    }

    setDrawPoints(points){
        this.drawPoints= points;
    }

    setLogicPoints(lpoints){
        this.logicPoints= lpoints;
    }

    switchActiveOn(isOn){
        this.isLineOn= isOn;
    }

    isLineActive(){
        return this.isLineOn;
    }

    linesOnShowSwitch(b){
        this.showLine= b;
    }

    setLinesNumb(numb){
        this.lineNumber= numb;
    }
    getLineNumb(){
        return this.lineNumber;
    }
    getLogicPoints(){
        return this.logicPoints;
    }

    drawLineSign(context){
        if(!this.isLineOn && !this.isShowing)
            return;
        context.fillStyle= "#c0cd00";
        context.fillRect(this.drawPoints[0][0]-25, this.drawPoints[0][1]-10, 20, 20); 
    }

    draw(context){
        if(!this.isLineOn && !this.isShowing)
            return;
        // console.log("Usao u draw");
        context.beginPath();
        context.strokeStyle= "#c0cd00";
        context.lineWidth= 5;
        context.moveTo(this.drawPoints[0][0]-5, this.drawPoints[0][1]);
        for(let i= 1; i < this.drawPoints.length; i++){
            context.lineTo(this.drawPoints[i][0], this.drawPoints[i][1]);
        }
        context.stroke();
        context.fillStyle= "#c0cd00";
        context.fillRect(this.drawPoints[0][0]-(this.linesRect+5), this.drawPoints[0][1]-10, this.linesRect, this.linesRect); 
    }
}