let game = [];
let currentShape = 'cross';

function fillGame(id) {
    game[id] = currentShape;
    console.log(game);
    draw(id);
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
            
        } 
        
        if(currentShape == 'circle'){
            document.getElementById('circle-' + id).classList.remove('d-none');
        }
    }
}