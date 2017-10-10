function Sudoku(grid) {
  this.grid = grid;
}

Sudoku.prototype.legal = function () {
  for (var i = 0; i < 9; i++) {
    var rowNumbers = [0,0,0,0,0,0,0,0,0]
    var columnNumbers = [0,0,0,0,0,0,0,0,0]
    for (var j = 0; j < 9; j++) {
      if (rowNumbers[this.grid[i][j] - 1] == 0) {
        rowNumbers[this.grid[i][j] - 1] = 1;
      } else {
        return false;
      }
      if (columnNumbers[this.grid[j][i] - 1] == 0) {
        columnNumbers[this.grid[j][i] - 1] = 1;
      } else {
        return false;
      }
    }
  }
};

exports.sudokuModule = Sudoku;
