# Tic-Tac-Toi_JS
// It's unfinished.

var game = {
    cellsAmount: 5,// Make it incrementable in the future versions of game.
    x_cells:[],// Put here all the moves of x, to get know which cells are empty.
    o_cells:[],
    x_move: 0, // Last move.
    o_move: 0,
    drawTable: function(){
        var table = document.createElement("TABLE");
        document.body.appendChild(table);
        for(var i = 0; i < game.cellsAmount; i++){ // Append table rows.
            var tr = document.createElement("TR");
            table.appendChild(tr);
            for(var j = 0; j < game.cellsAmount; j++){ // Append table cells.
                var td = document.createElement("TD");
                tr.appendChild(td);
                var t = document.createTextNode("");
                td.appendChild(t);
            }
        }   
    },
    changeCellsAmount: function(){
    
    },
    getX: function(){// Get user input. User plays for "x".
    
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
