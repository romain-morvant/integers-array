const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d', { alpha: true });
const rangeSlider = document.getElementById('slider__range');

// Redimensionnement de l'élément canvas à chaque rechargement de la page
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

// Cette fonction reçoit trois paramètres qui sont
// 1- rows = le nombre de lignes que l'on souhaite afficher
// 2- cols = le nombre de colonnes que l'on souhaite afficher
// 3- count = le nombre de grilles (rows*cols) que l'on souhaite
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
            let color = grid[col][row]; // Je stocke un entier générer plus haut dans cette variable et l'utiliserai ensuite pour le choix de couleur de la cellule.
            ctx.fillStyle = 'hsl(' + color + ',60%,60%)';
            ctx.font = '14px sans-serif';
            ctx.fillRect(x, y, cellSize, cellSize);
            ctx.strokeText(`${color}`, x + (cellSize / 4), y + (cellSize / 2));
            ctx.fill();
        }
    }
}

// Ici je stocke le résultat de la fonction genMultipleArrays dans la variable extGrid, qui devient ensuite la grille donnée en paramètre de la fonction drawGrid.
let extGrid = genMultipleArrays(10, 12, 10);
console.log(extGrid);

// Ici j'appelle la fonction drawGrid, le premier paramètre est une grille et le second paramètre est la valeur en pixel du coté de nos cellules dans la grille.
drawGrid(extGrid[9], 40);

rangeSlider.addEventListener('change', (e) => {
    drawGrid(extGrid[+e.target.value]);
});

