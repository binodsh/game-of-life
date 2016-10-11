/**
 * Created by kaala on 10/11/16.
 */
var container = document.getElementsByClassName("container")[0];
var rows = 150;
var cols = 150;
var grid = initializeGrid(rows, cols);

//glider
// grid[5][3] = 1;
// grid[6][4] = 1;
// grid[4][5] = 1;
// grid[5][5] = 1;
// grid[6][5] = 1;


//small exploder

// grid[55][54] = 1;
// grid[54][55] = 1;
// grid[55][55] = 1;
// grid[56][55] = 1;
// grid[54][56] = 1;
// grid[56][56] = 1;
// grid[55][57] = 1;


//exploder
// grid[50][50] = 1;
// grid[50][51] = 1;
// grid[50][52] = 1;
// grid[50][53] = 1;
// grid[50][54] = 1;
//
// grid[52][50] = 1;
// grid[52][54] = 1;
//
// grid[54][50] = 1;
// grid[54][51] = 1;
// grid[54][52] = 1;
// grid[54][53] = 1;
// grid[54][54] = 1;

//10 cell row
grid[50][50] = 1;
grid[51][50] = 1;
grid[52][50] = 1;
grid[53][50] = 1;
grid[54][50] = 1;
grid[55][50] = 1;
grid[56][50] = 1;
grid[57][50] = 1;
grid[58][50] = 1;
grid[59][50] = 1;



var table;
init();
function init() {
    table = createTable(rows, cols);
    container.appendChild(table);
    updateTable(grid);
    var tempGrid = grid;

    var intervalId = window.setInterval(function () {
        tempGrid = scan(tempGrid);
        updateTable(tempGrid);
    }, 50);
}

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

function initializeGrid(row, col) {
    var tempGrid = [];
    for (var i = 0; i < row; i++) {
        var temp = [];
        for (var j = 0; j < col; j++) {
            temp.push(0);
        }
        tempGrid.push(temp);
    }
    return tempGrid;
}


function createTable(rows, cols) {
    var tempTable = document.createElement('table');

    for (var row = 0; row < rows; row++) {
        var tempTr = document.createElement('tr');
        for (var col = 0; col < cols; col++) {
            var tempTd = document.createElement('td');

            tempTr.appendChild(tempTd);
        }

        tempTable.appendChild(tempTr);
    }

    return tempTable;
}

function updateTable(refGrid) {
    var tableRow = table.children;
    for (var row = 0; row < tableRow.length; row++) {
        var td = tableRow[row].getElementsByTagName('td');
        for (var i in td) {
            if (refGrid[row][i] == 1) {
                td[i].className = "alive";
            } else {
                td[i].className = "";
            }
        }
    }
}