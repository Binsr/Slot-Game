export default class Display{
    constructor(posX, posY, width, height){
        
        this.width= width;
        this.height= height;
        this.message= "WELCOME";

        this.position= {
            x: posX - this.width/2,
            y: posY - this.height/2
        };
    }

    draw(context){
        context.fillStyle= "black";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        context.font= "15px Arial";
        context.fillStyle= "white";
        context.textAlign="center"; 
        context.textBaseline = "middle";
        context.fillText(this.message, this.position.x+this.width/2, this.position.y+this.height/2);
        // con.strokeText("Canvas Rocks!", 5, 130);
    }
}