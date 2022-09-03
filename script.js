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
    let firstElement = cells[index].firstElementChild;
    let lastElement = cells[index].lastElementChild;

    lit[index] < 1 ? (lit[index]++) : (lit[index]--);
    firstElement.style.display = "none";
    lastElement.style.display = "none";
    lit[index] == 1 ?
        (firstElement.style.display = "block") :
        (lastElement.style.display = "block");

    if (isUserInput) {
        flipCell(triplets[index][0], false);
        flipCell(triplets[index][2], false);
    }
}