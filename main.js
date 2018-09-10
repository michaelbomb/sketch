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
    box.style.backgroundColor = 'black';
}