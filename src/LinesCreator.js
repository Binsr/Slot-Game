import Line from './Line.js';

export default class LinesCreator{

    static createLines(REEL_WIDTH,REEL_HEIGHT, LEFT_EDGE, RIGHT_EDGE,LINES_RECT,SPACE_BETWEEN_REELS){
        this.allLines=[];
        let straithLines=[];
        let lineYStart= (REEL_HEIGHT/2)-(REEL_HEIGHT/8);
        for(let i= 1; i < 4; i++){
            straithLines.push(new Line(LINES_RECT));
            straithLines[i-1].setPoints([[LEFT_EDGE,lineYStart],[RIGHT_EDGE,lineYStart]]);
            lineYStart+= ((REEL_HEIGHT)/4);
        }
        let tmp= straithLines[1];
        straithLines[1] = straithLines[0];
        straithLines[0] = tmp;
        straithLines[0].setLineOn(true);

        let vLines= [];
        vLines.push(new Line(LINES_RECT));
        vLines[0].setPoints([[LEFT_EDGE,REEL_HEIGHT/4+LINES_RECT],
                            [LEFT_EDGE+10,REEL_HEIGHT/4+LINES_RECT],
                            [(LEFT_EDGE+(REEL_WIDTH/2)*5)+2*SPACE_BETWEEN_REELS,(REEL_HEIGHT/8)*7-LINES_RECT],
                            [LEFT_EDGE+REEL_WIDTH*5+4*SPACE_BETWEEN_REELS,REEL_HEIGHT/4+LINES_RECT]                                                        
        ]);
        vLines.push(new Line(LINES_RECT));
        vLines[1].setPoints([[LEFT_EDGE,REEL_HEIGHT-LINES_RECT],
                            [LEFT_EDGE+10,REEL_HEIGHT-LINES_RECT],
                            [LEFT_EDGE+(REEL_WIDTH*5)/2+2*SPACE_BETWEEN_REELS,(REEL_HEIGHT/8)*3+LINES_RECT],
                            [LEFT_EDGE+REEL_WIDTH*5+4*SPACE_BETWEEN_REELS,REEL_HEIGHT-LINES_RECT]
        ]);

        let longVLines= [];
        longVLines.push(new Line(LINES_RECT));
        longVLines[0].setPoints([[LEFT_EDGE,(REEL_HEIGHT/4)*2+LINES_RECT],
                                [LEFT_EDGE+10,(REEL_HEIGHT/4)*2+LINES_RECT],
                                [LEFT_EDGE+(REEL_WIDTH/2)*3+SPACE_BETWEEN_REELS+LINES_RECT,(REEL_HEIGHT/8)*7+LINES_RECT],
                                [LEFT_EDGE+3*SPACE_BETWEEN_REELS+(REEL_WIDTH/2)*7-LINES_RECT,(REEL_HEIGHT/8)*7+LINES_RECT],
                                [LEFT_EDGE+4*SPACE_BETWEEN_REELS+REEL_WIDTH*5,(REEL_HEIGHT/4)*2+LINES_RECT]
        ]);
        longVLines.push(new Line(LINES_RECT));
        longVLines[1].setPoints([[LEFT_EDGE,(REEL_HEIGHT/4)*3-LINES_RECT],
                                [LEFT_EDGE+10,(REEL_HEIGHT/4)*3-LINES_RECT],
                                [LEFT_EDGE+(REEL_WIDTH/2)*3+LINES_RECT+SPACE_BETWEEN_REELS,(REEL_HEIGHT/8)*3-LINES_RECT],
                                [LEFT_EDGE+(REEL_WIDTH/2)*7-LINES_RECT+3*SPACE_BETWEEN_REELS,(REEL_HEIGHT/8)*3-LINES_RECT],
                                [LEFT_EDGE+5*REEL_WIDTH+4*SPACE_BETWEEN_REELS,(REEL_HEIGHT/4)*3-LINES_RECT]
        ]);

        let zLines= [];
        zLines.push(new Line(LINES_RECT));
        zLines[0].setPoints([[LEFT_EDGE,(REEL_HEIGHT/4)*3+LINES_RECT],
                            [LEFT_EDGE+(REEL_WIDTH/2)*3+LINES_RECT+SPACE_BETWEEN_REELS,(REEL_HEIGHT/4)*3+LINES_RECT],
                            [LEFT_EDGE+(REEL_WIDTH/2)*7+3*SPACE_BETWEEN_REELS-LINES_RECT,REEL_HEIGHT/2-LINES_RECT],
                            [LEFT_EDGE+5*REEL_WIDTH+4*SPACE_BETWEEN_REELS,REEL_HEIGHT/2-LINES_RECT]
        ]);
        zLines.push(new Line(LINES_RECT));
        zLines[1].setPoints([[LEFT_EDGE,REEL_HEIGHT/2-LINES_RECT],
                            [LEFT_EDGE+(REEL_WIDTH/2)*3+SPACE_BETWEEN_REELS+LINES_RECT,REEL_HEIGHT/2-LINES_RECT],
                            [LEFT_EDGE+(REEL_WIDTH/2)*7+3*SPACE_BETWEEN_REELS-LINES_RECT,(REEL_HEIGHT/4)*3+LINES_RECT],
                            [LEFT_EDGE+REEL_WIDTH*5+4*SPACE_BETWEEN_REELS,(REEL_HEIGHT/4)*3+LINES_RECT]
        ]);

        this.allLines.push(straithLines);
        this.allLines.push(vLines);
        this.allLines.push(longVLines);
        this.allLines.push(zLines);
        return this.allLines;
    }


}