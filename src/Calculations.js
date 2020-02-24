export default class Calculations{

    //    spinTime%((reelPartHeight/spinSpeed)*brReelParts) == 0  
    static calcSpinTime(reelNumber){
        return 82+5*reelNumber*8;
    }

    static calcWin(combination){
        let win= 100;

        if(combination[1][1] == combination[2][1] == combination[3][1]){
            win+=100;    
        }
        if(combination[1][2] == combination[2][2] == combination[3][2]){
            win+=100;    
        }
        if(combination[1][3] == combination[2][3] == combination[3][3]){
            win+=100;    
        }
        return win;
    }

}