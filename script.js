const canvas = document.getElementById('canvas');
// const range = document.getElementById('value');
const ctx = canvas.getContext('2d', { alpha: true });
const rangeSlider = document.getElementById('slider__range');

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
    return intArray;
}

function genMultipleArrays(rows, cols, count) {
    let array = [];
    for (let i = 0; i < count; i++) {
        array.push(makeIntArray(rows, cols));
    }
    return array;
}

let extArray = genMultipleArrays(10, 10, 10);

function drawGrid(grid, cellSize) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(grid);
    let gap = 6;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            let color = grid[x][y];
            // console.log(color);
            ctx.lineWidth = 1;
            ctx.fillStyle = 'hsl(' + color + ',60%,60%)';
            ctx.fillRect(x * (cellSize + gap), y * (cellSize + gap), cellSize, cellSize);
            ctx.fill();
        }
    }
}


// let rangeValue = rangeSlider.value;
let extGrid = genMultipleArrays(10, 10, 10);
drawGrid(extGrid[9], 30);


// setInterval(genGrid, 6000, 10, 10, 40);


/**
 * 1- Générer un tableau d'entiers aléatoires paramétrable (rows & cols)
 * 2- Générer un ensemble de tableaux (étape 1)
 * 3- Déssiner la grille sélectionnée (en fonction de la valeur de l'input)
 * 4- Ajouter 'onchange' addEventListener input
 **
 */







// rangeSlider.addEventListener('onchange', () => {
//     let value = rangeSlider.value;
//     let grids = genMultipleArrays(value,0 10);
//     drawGrid(grids[value], 40);
// });

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