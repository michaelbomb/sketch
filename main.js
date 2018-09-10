btn = document.querySelector('#gridSizeButton')
btn.addEventListener('click',changeGridSize);
makeGrid(5);

function changeGridSize()
{
    let n = +prompt("Enter new grid side length");
    makeGrid(n);
}

function makeGrid(side)
{
    grid = document.querySelector('#grid');
    while(grid.firstChild)
    {
        grid.removeChild(grid.firstChild);
    }
    grid.style.cssText = `grid-template: repeat(${side}, 1fr) / repeat(${side}, 1fr)`;
    for (let i = 0; i < side * side; i++)
    {
        let newBox = document.createElement('div');
        newBox.setAttribute('id','b'+i.toString());
        newBox.classList.add('box');
        newBox.addEventListener('mouseover',(e) => 
        {
            changeColor(e.target);
        })
        grid.appendChild(newBox);
    }
}

function changeColor(box)
{
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
}