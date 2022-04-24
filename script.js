let game = [];
let currentShape = 'cross';
let gameOver = false;



function fillGame(id) {
    if(!game[id] && !gameOver){
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
}


function draw(id){
    for (let i = 0; i < game.length; i++) {
        if(currentShape == 'cross'){
            document.getElementById('cross-' + id).classList.remove('d-none');
            changeToPlayer2();
        } 
        
        if(currentShape == 'circle'){
            document.getElementById('circle-' + id).classList.remove('d-none');
            changeToPlayer1();
    
        }
    }
}

function changeToPlayer2() {
    document.getElementById('player1').classList.add('opacity');
    document.getElementById('player2').classList.remove('opacity');
}

function changeToPlayer1() {
    document.getElementById('player2').classList.add('opacity');
    document.getElementById('player1').classList.remove('opacity');
}

function controllWinner(){
    let winner;
    if(game[0] == game[1] && game[1] == game[2] && game[0]){
        winner = game[0];
        document.getElementById('line1').style = 'top: 157px; transform: scale(1.0) !important;';
    }
    if(game[3] == game[4] && game[4] == game[5] && game[3]){
        winner = game[3];
        document.getElementById('line2').style = 'top: 285px; transform: scale(1.0) !important;';
    }
    if(game[6] == game[7] && game[7] == game[8] && game[6]){
        winner = game[6];
        document.getElementById('line3').style = 'top: 413px; transform: scale(1.0) !important;';
    }
    if(game[0] == game[3] && game[3] == game[6] && game[0]){
        winner = game[0];
        document.getElementById('line4').style = 'top: 260px; right: 140px; transform: rotate(90deg) scale(1.0) !important';
    }
    if(game[1] == game[4] && game[4] == game[7] && game[1]){
        winner = game[1];
        document.getElementById('line5').style = 'top: 250px; transform: rotate(90deg) scale(1.0) !important;';
    }
    if(game[2] == game[5] && game[5] == game[8] && game[2]){
        winner = game[2];
        document.getElementById('line6').style = 'top: 240px; left: 140px; transform: rotate(90deg) scale(1.0) !important;';
    }
    if(game[0] == game[4] && game[4] == game[8] && game[0]){
        winner = game[0];
        document.getElementById('line7').style = 'top: 224px; transform: rotate(45deg) scale(1.0) !important;';
    }
    if(game[2] == game[4] && game[4] == game[6] && game[2]){
        winner = game[2];
        document.getElementById('line8').style = 'top: 212px; transform: rotate(-45deg) scale(1.0) !important;';
    }
    if(winner){
        console.log(winner + ' hat gewonnen!');
        gameOver = true;
        setTimeout(function(){
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('resetButton').classList.remove('d-none');
        }, 1000);
    } 
}

function resetGame() {
    gameOver = false;
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('resetButton').classList.add('d-none');
    for(let i = 1; i < 9; i++){
        document.getElementById('line' + i).style = 'top: 250px; transform: scale(0.0) !important;';
    }
    resetShapes();
    game = [];
}

function resetShapes() {
    for(let i = 0; i < 9; i++){
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}