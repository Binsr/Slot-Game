import Line from './Line.js';

export default class LinesCreator{

    static createLines(REEL_WIDTH,REEL_HEIGHT, LEFT_EDGE, RIGHT_EDGE,LINES_RECT,SPACE_BETWEEN_REELS){ //PROVERI LOG POZ
        this.allLines=[];
        let straithLines=[];
        let lineYStart= (REEL_HEIGHT/2)-(REEL_HEIGHT/8);
        for(let i= 1; i < 4; i++){
            straithLines.push(new Line(LINES_RECT,i));
            straithLines[i-1].setDrawPoints([[LEFT_EDGE,lineYStart],[RIGHT_EDGE,lineYStart]]);
            straithLines[i-1].setLogicPoints([  {reel: 0, reelPart: i},
                                                {reel: 1, reelPart: i},
                                                {reel: 2, reelPart: i},
                                                {reel: 3, reelPart: i},
                                                {reel: 4, reelPart: i}
            ]);
            lineYStart+= ((REEL_HEIGHT)/4);
        }
        let tmp= straithLines[1];
        straithLines[1] = straithLines[0];
        straithLines[0] = tmp;
        straithLines[0].switchActiveOn(true);
        straithLines[1].setLinesNumb(2);
        straithLines[0].setLinesNumb(1);


        let vLines= [];
        vLines.push(new Line(LINES_RECT,4));
        vLines[0].setDrawPoints([[LEFT_EDGE,REEL_HEIGHT/4+LINES_RECT],
                            [LEFT_EDGE+10,REEL_HEIGHT/4+LINES_RECT],
                            [(LEFT_EDGE+(REEL_WIDTH/2)*5)+2*SPACE_BETWEEN_REELS,(REEL_HEIGHT/8)*7-LINES_RECT],
                            [LEFT_EDGE+REEL_WIDTH*5+4*SPACE_BETWEEN_REELS,REEL_HEIGHT/4+LINES_RECT]                                                        
        ]);
        vLines[0].setLogicPoints([  {reel: 0, reelPart: 1},
                                    {reel: 1, reelPart: 2},
                                    {reel: 2, reelPart: 3},
                                    {reel: 3, reelPart: 2},
                                    {reel: 4, reelPart: 1}
        ]);

        vLines.push(new Line(LINES_RECT,5));
        vLines[1].setDrawPoints([[LEFT_EDGE,REEL_HEIGHT-LINES_RECT],
                            [LEFT_EDGE+10,REEL_HEIGHT-LINES_RECT],
                            [LEFT_EDGE+(REEL_WIDTH*5)/2+2*SPACE_BETWEEN_REELS,(REEL_HEIGHT/8)*3+LINES_RECT],
                            [LEFT_EDGE+REEL_WIDTH*5+4*SPACE_BETWEEN_REELS,REEL_HEIGHT-LINES_RECT]
        ]);
        vLines[1].setLogicPoints([  {reel: 0, reelPart: 3},
                                    {reel: 1, reelPart: 2},
                                    {reel: 2, reelPart: 1},
                                    {reel: 3, reelPart: 2},
                                    {reel: 4, reelPart: 3}
        ]);

        let longVLines= [];
        longVLines.push(new Line(LINES_RECT,6));
        longVLines[0].setDrawPoints([[LEFT_EDGE,(REEL_HEIGHT/4)*2+LINES_RECT],
                                [LEFT_EDGE+10,(REEL_HEIGHT/4)*2+LINES_RECT],
                                [LEFT_EDGE+(REEL_WIDTH/2)*3+SPACE_BETWEEN_REELS+LINES_RECT,(REEL_HEIGHT/8)*7+LINES_RECT],
                                [LEFT_EDGE+3*SPACE_BETWEEN_REELS+(REEL_WIDTH/2)*7-LINES_RECT,(REEL_HEIGHT/8)*7+LINES_RECT],
                                [LEFT_EDGE+4*SPACE_BETWEEN_REELS+REEL_WIDTH*5,(REEL_HEIGHT/4)*2+LINES_RECT]
        ]);
        longVLines[0].setLogicPoints([  {reel: 0, reelPart: 2},
                                        {reel: 1, reelPart: 3},
                                        {reel: 2, reelPart: 3},
                                        {reel: 3, reelPart: 3},
                                        {reel: 4, reelPart: 2}
        ]);

        longVLines.push(new Line(LINES_RECT,7));
        longVLines[1].setDrawPoints([[LEFT_EDGE,(REEL_HEIGHT/4)*3-LINES_RECT],
                                [LEFT_EDGE+10,(REEL_HEIGHT/4)*3-LINES_RECT],
                                [LEFT_EDGE+(REEL_WIDTH/2)*3+LINES_RECT+SPACE_BETWEEN_REELS,(REEL_HEIGHT/8)*3-LINES_RECT],
                                [LEFT_EDGE+(REEL_WIDTH/2)*7-LINES_RECT+3*SPACE_BETWEEN_REELS,(REEL_HEIGHT/8)*3-LINES_RECT],
                                [LEFT_EDGE+5*REEL_WIDTH+4*SPACE_BETWEEN_REELS,(REEL_HEIGHT/4)*3-LINES_RECT]
        ]);
        longVLines[1].setLogicPoints([  {reel: 0, reelPart: 2},
                                        {reel: 1, reelPart: 1},
                                        {reel: 2, reelPart: 1},
                                        {reel: 3, reelPart: 1},
                                        {reel: 4, reelPart: 2}
        ]);

        let zLines= [];
        zLines.push(new Line(LINES_RECT,8));
        zLines[0].setDrawPoints([[LEFT_EDGE,(REEL_HEIGHT/4)*3+LINES_RECT],
                            [LEFT_EDGE+(REEL_WIDTH/2)*3+LINES_RECT+SPACE_BETWEEN_REELS,(REEL_HEIGHT/4)*3+LINES_RECT],
                            [LEFT_EDGE+(REEL_WIDTH/2)*7+3*SPACE_BETWEEN_REELS-LINES_RECT,REEL_HEIGHT/2-LINES_RECT],
                            [LEFT_EDGE+5*REEL_WIDTH+4*SPACE_BETWEEN_REELS,REEL_HEIGHT/2-LINES_RECT]
        ]);
        zLines[0].setLogicPoints([  {reel: 0, reelPart: 3},
                                    {reel: 1, reelPart: 3},
                                    {reel: 2, reelPart: 2},
                                    {reel: 3, reelPart: 1},
                                    {reel: 4, reelPart: 1}
        ]);

        zLines.push(new Line(LINES_RECT,9));
        zLines[1].setDrawPoints([[LEFT_EDGE,REEL_HEIGHT/2-LINES_RECT],
                            [LEFT_EDGE+(REEL_WIDTH/2)*3+SPACE_BETWEEN_REELS+LINES_RECT,REEL_HEIGHT/2-LINES_RECT],
                            [LEFT_EDGE+(REEL_WIDTH/2)*7+3*SPACE_BETWEEN_REELS-LINES_RECT,(REEL_HEIGHT/4)*3+LINES_RECT],
                            [LEFT_EDGE+REEL_WIDTH*5+4*SPACE_BETWEEN_REELS,(REEL_HEIGHT/4)*3+LINES_RECT]
        ]);
        zLines[1].setLogicPoints([  {reel: 0, reelPart: 1},
                                    {reel: 1, reelPart: 1},
                                    {reel: 2, reelPart: 2},
                                    {reel: 3, reelPart: 3},
                                    {reel: 4, reelPart: 3}
]);

        this.allLines.push(straithLines);
        this.allLines.push(vLines);
        this.allLines.push(longVLines);
        this.allLines.push(zLines);
        return this.allLines;
    }
    static getLine(index,lines){
        let i= 0,x=0,y=0;

        if(index == 2)
            return lines[0][1];
        if(index == 1){
            return lines[0][0];
        }

        while(i < index-1){
            if(x == lines.length)
                return null;
            if(y == lines[x].length-1){
                x++;
                y= 0;
            }else{
                y++;
            }

            i++;
        }
        return lines[x][y];
    }

}