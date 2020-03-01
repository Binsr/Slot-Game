export default class CoinSymbol{

    constructor(){
        this.coin={
            counter: 0,
            frameTime: 5,
            sprite: [],
            iterator:0,
            animation: false,
        }
        this.coin.sprite.push(document.getElementById('coinPos0'));
        this.coin.sprite.push(document.getElementById('coinPos1'));
        this.coin.sprite.push(document.getElementById('coinPos2'));
        this.coin.sprite.push(document.getElementById('coinPos3'));
        this.coin.sprite.push(document.getElementById('coinPos4'));
        this.coin.sprite.push(document.getElementById('coinPos5'));
    }
    coinStartAnimation(){
        if(this.coin.animation)
            return;
        this.coin.animation= true;
        this.coin.counter= 0;
    }

    coinStopAnimation(){
        this.coin.iterator= 0;
        this.coin.animation= false;
        this.coin.counter= 0;
    }
    coinUpdate(){
        if(!this.coin.animation)
            return;
        this.coin.counter++;
        if(this.coin.counter == this.coin.frameTime){
            this.coin.counter= 0;
            this.coin.iterator++;
            if(this.coin.iterator == this.coin.sprite.length)
                this.coin.iterator = 0;
        }
    }
    draw(context,posX,posY){
        context.drawImage(this.coin.sprite[this.coin.iterator],posX+15,posY+20);
    }
}