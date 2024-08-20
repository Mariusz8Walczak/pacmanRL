const Game = require('./game');

const readline = require('readline');

const map =
    [
        [3,3,3,3,3],
        [3,1,1,1,3],
        [3,1,3,1,3],
        [3,2,1,1,3],
        [3,3,3,3,3]
    ];

const game = new Game(map);

console.log(map);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processInput(input) {
    game.action(input);
}

function getDirection () {
    rl.question('gdzie chcesz iść: ', (answer) => {
        processInput(answer);
        if(game.gameState===0) {
            getDirection();
        } else if(game.gameState===-1){
            console.log('Game Over');
            console.log(game.points);
        } else if(game.gameState===1) {
            console.log('winner');
            console.log(game.points);
        }
    });


}

getDirection();

