const triplets = [
    [3, 0, 1],
    [0, 1, 2],
    [1, 2, 5],
    [0, 3, 6],
    [0, 0, 0],
    [2, 5, 8],
    [3, 6, 7],
    [6, 7, 8],
    [7, 8, 5],
];
const lit = [0, 0, 0, 0, 0, 0, 0, 0];
const cells = document.getElementsByClassName("cell");
window.onload = function setup() {
    for (let i = 0; i < 9; i++) {
        if (i == 4) {
            continue;
        }
        cells[i].onclick = function() {
            flipCell(i, true);
        };

        lit[i] = Math.floor(Math.random() * 2);
        flipCell(i, false);
    }
};

function scrambleCells() {
    for (let i = 0; i < 9; i++) {
        if (i == 4) {
            continue;
        }
        lit[i] = Math.floor(Math.random() * 2);
        flipCell(i, false);
    }
}

function flipCell(index, isUserInput) {
    lit[index] == 1 ? (lit[index] = 0) : (lit[index] = 1);
    cells[index].firstElementChild.style.display = "none";
    cells[index].lastElementChild.style.display = "none";
    lit[index] == 1 ?
        (cells[index].firstElementChild.style.display = "block") :
        (cells[index].lastElementChild.style.display = "block");

    if (isUserInput) {
        flipCell(triplets[index][0], false);
        flipCell(triplets[index][2], false);
    }
}