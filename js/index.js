/**
 * Created by kaala on 10/11/16.
 */
var container = document.getElementsByClassName("container")[0];
var start = document.getElementById("start");
var rows = 65;
var cols = 140;
var grid = new Grid(rows, cols);
var table;

grid.init();

init();
function init() {
    table = createTable(grid, rows, cols);
    container.appendChild(table);
    updateTable(table, grid.getArray());
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
        scan(tempGrid);
        updateTable(table, tempGrid.getArray());
    }, 50);
}