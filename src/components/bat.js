function isSolved(board) {
    for ( let i = 0; i < board.length; i++ ) {
      for ( let j = 0; j < board[i].length; j++) {
        if ( i == 0 && j == 0 ) {
          if (board[i][j] === board[i + 1][j + 1] &&
              board[i][j] === board[i + 2][j + 2] ) {
              if (board[i][j] !== 0) return board[i][j]   
           }
        } else if ( i == 0 && j == 2 ) {
           if (board[i][j] === board[i + 1][j - 1] &&
              board[i][j] === board[i + 2][j - 2] ) {
              if (board[i][j] !== 0) return board[i][j]    
           }    
        } else if ( board[i][j] === board[0][j] &&
             board[i][j] === board[1][j] && 
             board[i][j] === board[2][j]) {
             if (board[i][j] !== 0) return board[i][j]   
        } else if ( board[i].every( (current) => current == board[i][0]) ) {
          return board[i][0] == 0 ? -1 : board[i][0]
        }
      }
    }  
    for ( let i = 0; i < board.length; i++ ) {
      if ( board[i].find( (elem) => elem === 0) === 0 ) {
        return -1
      }
    }
   return 0
 }