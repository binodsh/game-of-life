/**
 * Created by kaala on 10/12/16.
 */

function scan(gridIn) {
    var tempGrid = [];
    for (var i = 0; i < rows; i++) {
        var tempRow = [];
        for (var j = 0; j < cols; j++) {
            var result = deadAliveOrReproduce(gridIn, i, j);
            if (result == -1) tempRow.push(0);
            else if (result == 1) tempRow.push(1);
            else tempRow.push(gridIn[i][j]);
        }
        tempGrid.push(tempRow);
    }
    return tempGrid;
}

function deadAliveOrReproduce(grid, indexX, indexY) {
    var neighbours = getNeighbours(grid, indexX, indexY);
    var aliveNeighbours = neighbours.filter(function (val) {
        return val == 1;
    });

    //dead
    if (aliveNeighbours.length < 2 || aliveNeighbours.length > 3) return -1;

    //reproduce
    if (aliveNeighbours.length == 3 && grid[indexX][indexY] == 0) return 1;

    //alive
    return 0;
}

function getNeighbours(grid, indexX, indexY) {
    var neighbours = [];
    for (var row = indexX - 1; row <= indexX + 1; row++) {
        for (var col = indexY - 1; col <= indexY + 1; col++) {
            if (row >= 0 && row < grid[0].length
                && col >= 0 && col < grid.length
                && !(row == indexX && col == indexY)) {
                neighbours.push(grid[row][col]);
            }
        }
    }
    return neighbours;
}