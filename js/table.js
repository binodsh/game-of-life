/**
 * Created by kaala on 10/12/16.
 */
function createTable(grid, rows, cols) {
    var tempTable = document.createElement('table');
    for (var row = 0; row < rows; row++) {
        var tempTr = document.createElement('tr');
        for (var col = 0; col < cols; col++) {
            var tempTd = document.createElement('td');
            tempTd.addEventListener("click", updateCellValue(grid, tempTd, row, col));
            tempTr.appendChild(tempTd);
        }
        tempTable.appendChild(tempTr);
    }
    return tempTable;
}

function updateTable(table, refGrid) {
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

function updateCellValue(grid, td, row, col) {
    return function () {
        if(grid.getArray()[row][col] == 1){
            td.className = "";
            grid.getArray()[row][col] = 0;
        } else {
            td.className = "alive";
            grid.getArray()[row][col] = 1;
        }
    }
}