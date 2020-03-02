import Reel from './Reel.js';
export default class Reels{
    constructor(reels){
        this.reels= reels;
    }

    oneRoundSymbolComb(){
        let oneRoundSimbolCombination =[];
        for(let i= 0; i < this.reels.length; i++){
            oneRoundSimbolCombination.push(this.reels[i].shufle());
            this.reels[i].startSpining();
        }
        return oneRoundSimbolCombination;
    }

    draw(context){
        for(let i= 0; i < this.reels.length; i++){
            this.reels[i].draw(context);
        }
    }
}