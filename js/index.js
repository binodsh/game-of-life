/**
 * Created by kaala on 10/11/16.
 */
var container = document.getElementsByClassName("container")[0];
var start = document.getElementById("start");
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
}

var intervalId;
var startToggle = 0;
start.addEventListener("click", function (event) {
    if (startToggle == 0) {
        intervalId = startGame();
        startToggle = 1;
        start.innerHTML = "Stop";
    }else {
        clearInterval(intervalId);
        startToggle = 0;
        start.innerHTML = "Start";
    }

});

function startGame() {
    var tempGrid = grid;
    return window.setInterval(function () {
        tempGrid = scan(tempGrid);
        updateTable(tempGrid);
    }, 500);
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