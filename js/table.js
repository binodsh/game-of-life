/**
 * Created by kaala on 10/12/16.
 */
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