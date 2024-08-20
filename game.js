class Game {

    map = []
    startMap=[]
    balls = 0;
    maxMoves= 50;
    gameState=0;
    points = 0;

    constructor(map) {
        this.startMap = map;
        this.map = map;
        this.balls = this.countOnes(this.map);
    }

    countOnes(matrix) {
        let count = 0;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {

                if (matrix[i][j] === 1) {
                    count++;
                }
            }
        }

        return count;
    }

    action (action) {
        if(this.maxMoves>0) {
            this.maxMoves -= 1;
        } else {
            this.gameState=-1;
        }

        const pacmanPosition = this.getPacmanPosition();

        if(action==='w'){
            this.movePacman(pacmanPosition.row-1,pacmanPosition.col);
        }
        else if(action==='s'){
            this.movePacman(pacmanPosition.row+1,pacmanPosition.col)
        }
        else if(action==='a'){
            this.movePacman(pacmanPosition.row,pacmanPosition.col-1)
        }
        else if(action==='d'){
            this.movePacman(pacmanPosition.row, pacmanPosition.col+1)
        }
    }

    movePacman(row,col){
        const pacmanPostion = this.getPacmanPosition();

        const fieldType = this.map[row][col];

        if (fieldType !==3) {
            if(fieldType===1){
                this.balls-=1;
                this.points+=1;

                if(this.balls===0){
                    this.gameState=1;
                    this.points+=10*this.maxMoves;
                }
            }

            this.map[pacmanPostion.row][pacmanPostion.col]=0;
            this.map[row][col] = 2;
        } else {
            this.points =-5;
        }

        console.log(this.map);
    }


    getPacmanPosition() {

        const matrix = this.map;
        for (let i = 0; i < matrix.length; i++) {
            // Przechodzimy przez każdy element w wierszu
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 2) {
                    return { row: i, col: j };
                }
            }
        }
    }


}

module.exports = Game;