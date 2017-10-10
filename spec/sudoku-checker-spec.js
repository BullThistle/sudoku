var Sudoku = require('./../js/sudoku-checker.js').sudokuModule;

describe('Sudoku', function() {
  it('finds if any row has a duplicate number', function() {
    var sudoku = new Sudoku([[1,1,1,4,5,6,7,8,9],[8,8,8,8,8,8,8,1,8],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]])
    expect(sudoku.legal()).toEqual(false);
  });

  it('finds if any column has a duplicate number', function() {
    var sudoku = new Sudoku([[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]])
    expect(sudoku.legal()).toEqual(false);
  });

});
