const grid = document.getElementById("grid");
let size = 16
let myColor = 'green'

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size ** 2; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList = "grid-item"
        gridElement.addEventListener('mouseover', () => {
            gridElement.style.backgroundColor = myColor
        })
       grid.appendChild(gridElement)
    }
}

function resetCanvas(){
   size = prompt("What size do you want? (max 100)")
   if (size > 100) {
    size = 100
   }
   else if (size < 1) {
    size = 1
   }
   grid.innerHTML = ''
   makeGrid(size)
};

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetCanvas)

makeGrid(size)