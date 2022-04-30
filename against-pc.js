let game = [];
let currentShape = 'cross';
let pcShape = 'circle';
let gameOver = false;
let pencil = new Audio('./audio/pencil.mp3');
let success = new Audio('./audio/success.mp3');
let drawSound = new Audio('./audio/draw.mp3');


function fillGame(id) {             // the id represent the selected area and the established index of the array game = [];
    if(!game[id] && !gameOver){    //If the array game in the selected area is empty and the condition gameOver is false, the function can start
        game[id] = currentShape;    // the selected array position is filled with the value currentShape. At the beginning it is 'cross'. For exaple: game = [undefined, 'cross', undefined etc.] ► if the second area is selected;  game = ['cross', undefined, undefined, etc.] ► if the first area is selected
        draw(id); 
        console.log(winner);                  //the function draw(position) is performed. The selected position is submitted
        condition();
        controllWinner();
        controllStateGame(); 
        
    }
}

function getLaunch() {
    let launch = getRandomArbitrary(0, 8);
     return formattedLaunch = launch.toFixed(0);   
}

function condition() {
    console.log(getLaunch());
    if(game[formattedLaunch]){
        for (let i = 0; i < 100; i++){
            console.log(getLaunch());
            if(!game[formattedLaunch]) {
                console.log('Platz frei!');
                game[formattedLaunch] = pcShape;
                drawComputer(formattedLaunch);
                break;
            } 
            
        }
    } else {
        console.log('platz frei');
        game[formattedLaunch] = pcShape;
        drawComputer(formattedLaunch);

    }
    
}

function controllStateGame() {
    if(game[0] && game[1] && game[2] && game[3] && game[4] && game[5] && game[6] && game[7] && game[8] && !winner){
        endGame(drawSound);
    }
}





/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
 function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function drawComputer(id) {
    document.getElementById('circle-' + id).classList.remove('d-none');
    pencil.play();
    changeToPlayer1();
}

function draw(id){
    for (let i = 0; i < game.length; i++) {     // we go through the array game, like this:  game = [undefined, 'circle', 'cross', 'cross', undefinded etc.]
        if(currentShape == 'cross'){
            document.getElementById('cross-' + id).classList.remove('d-none'); // remove the class d-none with property display: none, and a cross in the position is shown
            pencil.play();
            changeToPlayer2();      //the function changeToPlayer2 is called
        } 
        
        if(currentShape == 'circle'){  //the same but a circle is shown instead.
            document.getElementById('circle-' + id).classList.remove('d-none');
            pencil.play();
            changeToPlayer1();
    
        }
    }
}

function changeToPlayer2() { // the icon of the player 2 lose opacity and the icon of the player 1 gain it
    document.getElementById('player1').classList.add('opacity');
    document.getElementById('player2').classList.remove('opacity');
}

function changeToPlayer1() { 
    document.getElementById('player2').classList.add('opacity');
    document.getElementById('player1').classList.remove('opacity');
}

let winner;
function controllWinner(){ // the function check if the move has determined a winner in the game
    if(game[0] == game[1] && game[1] == game[2] && game[0]){ // If the selected positions have the same value. For instance "cross", the player cross or player 1 win.
        winner = game[0];
        document.getElementById('line1').style = 'top: 157px; transform: scale(1.0) !important;'; // a line through the positions is drawn
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
    if(winner){ // if there is a winner and then the variable winner isn't empty, the condition is true;
        endGame(success);
    } 
    // If there isn't a winner the function fillGame(id) goes forward...
}

function endGame(tone){
    tone.play();
    gameOver = true; // the condition gameOver is changed in true.
    setTimeout(function(){  // After 1 second (1000 milliseconds), the endscreen GameOver and the restart Button are shown
        document.getElementById('gameOver').classList.remove('d-none');
        document.getElementById('resetButton').classList.remove('d-none');
    }, 1000);
}

function resetGame() {
    gameOver = false;
    winner = undefined;
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