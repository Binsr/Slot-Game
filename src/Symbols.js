export default class Symbols{
    constructor(id,value){
        this.id= id;
        this.value= value;  
        this.color= null;
        
        if(id == 1)
            this.color= "red";
        else if(id == 2)
            this.color= "green";
        else if(id == 3)
            this.color= "blue";
        else
            this.color= "yellow";
    }

    getId(){
        return this.id;
    }

    getValue(){
        return this.value;
    }

    draw(context,width,height,posX,posY){
        if(this.id == 1){
            context.fillStyle= "red";
            context.fillRect(posX, posY, width, height);
        }else if(this.id == 2){
            context.fillStyle= "green";
            context.fillRect(posX, posY, width, height);
        }else if(this.id == 3){
            context.fillStyle= "blue";
            context.fillRect(posX, posY, width, height);
        }else if(this.id == 4){
            context.fillStyle= "yellow";
            context.fillRect(posX, posY, width, height);
        }
    }


}