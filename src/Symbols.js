import BunnySymbol from './symbols/BunnySymbol.js';
import CoinSymbol from './symbols/CoinSymbol.js';

export default class Symbols{
    constructor(symbolName,value){
        this.id= this.calcId(symbolName);
        this.value= value;  
        this.color= null;
        
        this.bunnySymbol= new BunnySymbol();
        this.coinSymbol= new CoinSymbol();

        if(this.id == 1)
            this.color= "red";
        else if(this.id == 2)
            this.color= "green";
        else if(this.id == 3)
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
            this.drawBunny(context,width-10,height-16,posX+5,posY+8);
        }else if(this.id == 2){
            context.fillStyle= "blue";
            context.fillRect(posX, posY, width, height);
            this.drawBunny(context,width-10,height-16,posX+5,posY+8);
        }else if(this.id == 3){
            context.fillStyle= "#F6F6F6";
            context.fillRect(posX, posY, width, height);
            this.coinSymbol.draw(context,posX,posY);
        }else if(this.id == 4){
            context.fillStyle= "yellow";
            context.fillRect(posX, posY, width, height);
            this.drawBunny(context,width-10,height-16,posX+5,posY+8);
        }
    }

    bunnyAnimationStart(){
        this.bunnySymbol.bunnyAnimationStart();
    }

    stopBunnyAnimation(){
        this.bunnySymbol.stopBunnyAnimation();
    }

    bunnyAnimationUpdate(){
        this.bunnySymbol.bunnyAnimationUpdate();
    }

    drawBunny(context,width,height,posX,posY){
        this.bunnySymbol.drawBunny(context,width,height,posX,posY);
    }

    coinStartAnimation(){
        this.coinSymbol.coinStartAnimation();
    
    }
    coinStopAnimation(){
        this.coinSymbol.coinStopAnimation();
    }

    coinUpdate(){
        this.coinSymbol.coinUpdate();
    }

    isBunny(){
        if(this.id != 3)
            return true;
        else 
            return false;
    }

    calcId(symbolName){
        if(symbolName == 'redBunny'){
            return 1;
        }
        if(symbolName == 'blueBunny'){
            return 2;
        }
        if(symbolName == 'yellowBunny'){
            return 4;
        }
        if(symbolName == 'coin'){
            return 3;
        }
    }
}