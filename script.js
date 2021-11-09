const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d', { alpha: true });
const rangeSlider = document.getElementById('slider__range');
// let rangeValue = rangeSlider.value;


// Redimensionnement
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Ici le paramètre, définira le nombre de tableaux d'integers que l'on souhaite
// Chaque tableau contiendra 10 valeurs numériques aléatoires comprises entre 1 et 255
function makeIntArray(rows, cols) {
    let intArray = [];
    for (let i = 0; i < rows; i++) {
        let integers = [];
        for (let j = 0; j < cols; j++) {
            let integer = Math.round(Math.random() * 255);
            integers.push(integer);
        }
        intArray.push(integers);
    }
    // console.log(intArray);
    return intArray;
}

function genMultipleArrays(rows, cols, count) {
    let array = [];
    for (let i = 0; i < count; i++) {
        array.push(makeIntArray(rows, cols));
    }
    // console.log(array);
    return array;
}


function drawGrid(grid, cellSize = 40) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let gap = cellSize / 10;
    console.log(grid);

    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            let color = grid[col][row];
            ctx.font = '14px sans-serif';
            ctx.fillStyle = 'hsl(' + color + ',60%,60%)';
            ctx.fillRect(row * (cellSize + gap), col * (cellSize + gap), cellSize, cellSize);
            ctx.strokeText(`${color}`, row * (cellSize + gap) + 10, col * (cellSize + gap) + 25);
            ctx.fill();
        }
    }
}

let extGrid = genMultipleArrays(10, 10, 40);
// console.log(extGrid);
drawGrid(extGrid[9]);


/**
 * 1- Générer un tableau d'entiers aléatoires paramétrable (rows & cols)
 * 2- Générer un ensemble de tableaux (étape 1)
 * 3- Déssiner la grille sélectionnée (en fonction de la valeur de l'input)
 * 4- Ajouter 'onchange' addEventListener input
 **
 */


rangeSlider.addEventListener('change', (e) => {
    drawGrid(extGrid[+e.target.value]);
});

// rangeSlider.onchange = value([value]);
// switch (value) {
//     case 0:
//         drawGrid(grids[0], 40);
//         console.log('Range value = 0');
//         break;
//     case 1:
//         drawGrid(grids[1], 40);
//         console.log('Range value = 1');
//         break;
//     case 2:
//         drawGrid(grids[2], 40);
//         console.log('Range value = 2');
//         break;
//     case 3:
//         drawGrid(grids[3], 40);
//         console.log('Range value = 3');
//         break;
//     case 4:
//         drawGrid(grids[4], 40);
//         console.log('Range value = 4');
//         break;
//     case 5:
//         drawGrid(grids[5], 40);
//         console.log('Range value = 5');
//         break;
//     case 6:
//         drawGrid(grids[6], 40);
//         console.log('Range value = 6');
//         break;
//     case 7:
//         drawGrid(grids[7], 40);
//         console.log('Range value = 7');
//         break;
//     case 8:
//         drawGrid(grids[8], 40);
//         console.log('Range value = 8');
//         break;
//     case 9:
//         drawGrid(grids[9], 40);
//         console.log('Range value = 9');
//         break;
//     default:
//         console.log('Default');
//         break;
// }