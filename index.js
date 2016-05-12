# Tic-Tac-Toi_JS
// It's unfinished.
//http://jsfiddle.net/VaAlina/c3euan5z/11/
var game = {
    cellsAmount: 5,// Make it incrementable in the future versions of game.
    playersAmount: 2,
    x_cells:[],// Put here all the moves of x, to get know which cells are empty.
    o_cells:[],
    allMoves: [],
    x_move: 0, // Last move.
    o_move: 0,
    drawTable: function(){
        var table = document.createElement("TABLE");
        document.body.appendChild(table);
        for(var i = 0, k = 0; i < game.cellsAmount; i++){ // Append table rows.
            var tr = document.createElement("TR");
            table.appendChild(tr);
            for(var j = 0; j < game.cellsAmount; j++, k++){ // Append table cells.
                var td = document.createElement("TD");
                tr.appendChild(td);
                var t = document.createTextNode("");
                td.appendChild(t);
                td.id = k; // Add id to every cell.
            }
        }   
    },
    changeCellsAmount: function(){
    
    },
    run2Players: function(){// Add the event listeners to all cells.
        for(var i = 0; i < game.cellsAmount * game.cellsAmount; i++){
            document.getElementById(i).addEventListener("click", function(){
                //Prevent putting more then one value in cell.
                if(game.allMoves.indexOf(this.id) == -1){
                    if(game.allMoves.length == 0){ // If array with moves is empty, "x" starts.
                        var text = document.createTextNode("x");
                        this.appendChild(text);
                        game.allMoves.push(this.id);
                    }else if(game.allMoves.length % 2 != 0){// "o" turn
                        var text = document.createTextNode("o");
                        this.appendChild(text);
                        game.allMoves.push(this.id);
                    }else{// "x" turn
                        var text = document.createTextNode("x");
                        this.appendChild(text);
                        game.allMoves.push(this.id);
                    }
                }else{
                    alert("Choose another cell!");
                }
                
            });
        }
    },
    run: function(){
        switch(game.playersAmount){
            case 1: 
                alert("1 player");
                break;
            case 2: 
                game.run2Players();
                alert("2 players");
                break;
           default:
                game.run2Players();
                alert("2 players");
            
        }
    },
    getX: function(){
        // Get user input. User plays for "x".
    },
    getO: function(){// Get the second user input if exist.
    
    },
    calculateO: function(){// Define the best answer for "o".
    
    },
    checkIfFinished: function(){// If noone wins, continue game.
    
    },
    test: function(){
        alert("works");
    }
};
game.drawTable();
game.run();
