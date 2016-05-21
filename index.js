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
                        game.x_cells.push(this.id);
                        game.getXResult();
                    }else if(game.allMoves.length % 2 != 0){// "o" turn
                        var text = document.createTextNode("o");
                        this.appendChild(text);
                        game.allMoves.push(this.id);
                        game.o_cells.push(this.id);
                        game.getOResult();
                    }else{// "x" turn
                        var text = document.createTextNode("x");
                        this.appendChild(text);
                        game.allMoves.push(this.id);
                        game.x_cells.push(this.id);
                        game.getXResult();
                    }
                }else{
                    alert("Choose another cell!");
                }
                
            });
        }
    },
    run: function(){
        game.drawTable();
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
    getXResult: function(){// Get user input. User plays for "x".
        if(game.x_cells.length == 3){
            alert("X wins!"+game.x_cells);
        }
        
    },
    getOResult: function(){// Get the second user input if exist.
        if(game.o_cells.length == 3){
            alert("O wins!"+game.o_cells);
        }   
    },
    calculateO: function(){// Define the best answer for "o".
    
    },
    checkIfFinished: function(arr){// If noone wins, continue game.
        // 3 in line.
        function test(arr) {
            arr = arr.slice().sort(function(a, b) {
            return a - b
        });
        return arr.some(function(d, b) {
            var c = arr.slice(b);
            c.some(function(a, b) {
                return a != c[b + 1] - 1 && (c = c.slice(0, b + 1))
            });
            return 2 < c.length && (a = c)
        }) && a
    };
    return JSON.stringify(test(arr));
        // 3 diagonal increase.
        
        // 3 diagonal decrease.
        
        
    }
};
game.drawTable();
game.run();
//game.checkIfFinished(game.x_cells);
