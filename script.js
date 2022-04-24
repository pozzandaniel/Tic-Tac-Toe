let game = [];
let currentShape = 'cross';

function fillGame(id) {
    game[id] = currentShape;
    console.log(game);
    draw(id);
    controllWinner();
    if(currentShape == 'cross'){
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    }
}


function draw(id){
    for (let i = 0; i < game.length; i++) {
        if(currentShape == 'cross'){
            document.getElementById('cross-' + id).classList.remove('d-none');
            document.getElementById('player1').classList.add('opacity');
            document.getElementById('player2').classList.remove('opacity');
            
        } 
        
        if(currentShape == 'circle'){
            document.getElementById('circle-' + id).classList.remove('d-none');
            document.getElementById('player2').classList.add('opacity');
            document.getElementById('player1').classList.remove('opacity');
        }
    }
}

function controllWinner(){
    let winner;
    if(game[0] == game[1] && game[1] == game[2] && game[0]){
        winner = game[0];
    }
    if(game[3] == game[4] && game[4] == game[5] && game[3]){
        winner = game[3];
    }
    if(game[6] == game[7] && game[7] == game[8] && game[6]){
        winner = game[6];
    }
    if(game[0] == game[3] && game[3] == game[6] && game[0]){
        winner = game[0];
    }
    if(game[1] == game[4] && game[4] == game[7] && game[1]){
        winner = game[1];
    }
    if(game[2] == game[5] && game[5] == game[8] && game[2]){
        winner = game[2];
    }
    if(game[0] == game[4] && game[4] == game[8] && game[0]){
        winner = game[0];
    }
    if(game[2] == game[4] && game[4] == game[6] && game[2]){
        winner = game[2];
    }
    if(winner){
        console.log(winner + ' hat gewonnen!');
    }
}