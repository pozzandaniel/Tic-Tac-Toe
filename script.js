let game = [];
let currentShape = 'cross'

function fillGame(id) {
    game[id] = currentShape;
    console.log(game);

    if(currentShape == 'cross'){
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    }


}