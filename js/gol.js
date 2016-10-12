/**
 * Created by kaala on 10/12/16.
 */

function scan(gridIn) {
    var array = gridIn.getArray();
    var totalRows = array.length;
    var totalCols = array[0].length;

    var tempArray = [];
    for (var row = 0; row < totalRows; row++) {
        var tempRow = [];
        for (var col = 0; col < totalCols; col++) {
            var result = deadAliveOrReproduce(array, row, col);
            if (result == -1) tempRow.push(0);
            else if (result == 1) tempRow.push(1);
            else tempRow.push(array[row][col]);
        }
        tempArray.push(tempRow);
    }

    gridIn.setArray(tempArray);
}

function deadAliveOrReproduce(array, row, col) {
    var neighbours = getNeighbours(array, row, col);
    var aliveNeighbours = neighbours.filter(function (val) {
        return val == 1;
    });

    //dead
    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) return -1;

    //reproduce
    if (aliveNeighbours.length == 3 && array[row][col] == 0) return 1;

    //alive
    return 0;
}

function getNeighbours(array, row, col) {
    var neighbours = [];
    for (var nRow = row - 1; nRow <= row + 1; nRow++) {
        for (var nCol = col - 1; nCol <= col + 1; nCol++) {
            if (nRow >= 0 && nRow < array.length
                && nCol >= 0 && nCol < array[0].length
                && !(nRow == row && nCol == col)) {
                neighbours.push(array[nRow][nCol]);
            }
        }
    }
    return neighbours;
}