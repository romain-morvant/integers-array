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
            let x = row * (cellSize + gap);
            let y = col * (cellSize + gap);
            let color = grid[col][row];
            ctx.font = '14px sans-serif';
            ctx.fillStyle = 'hsl(' + color + ',60%,60%)';
            ctx.fillRect(x, y, cellSize, cellSize);
            ctx.strokeText(`${color}`, x + 10, y + 25);
            ctx.fill();
        }
    }
}

let extGrid = genMultipleArrays(10, 10, 40);
// console.log(extGrid);
drawGrid(extGrid[9]);


rangeSlider.addEventListener('change', (e) => {
    drawGrid(extGrid[+e.target.value]);
});

