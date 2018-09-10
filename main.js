function makeGrid(side)
{
    grid = document.querySelector('#grid');
    grid.style.cssText = `grid-template: repeat(${side}, 1fr) / repeat(${side}, 1fr)`;
    for (let i = 0; i < side * side; i++)
    {
        let newBox = document.createElement('div');
        newBox.setAttribute('id',i.toString());
        newBox.classList.add('box');
        grid.appendChild(newBox);
    }
}