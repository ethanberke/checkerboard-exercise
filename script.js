/*const container = document.createElement("div");
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = "800px";
container.style.width = "800px";
container.style.border = '4px solid black'
//container.textContent = "I am a div";
document.body.style.display = 'flex';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.append(container);
for (let j = 0;j < 8; j++) {
    for(let i = 0; i < 8; i++){
        const tile = document.createElement('div');
        tile.style.width = '12.25%';
        tile.style.height = '12.25%';
       
       if ((i + j) % 2 === 0) {
            tile.style.background = 'red'
        } else {
            tile.style.background = 'black'
        }

        tile.innerText = (i+j);
        tile.style.border = '1px solid black';
        container.append(tile);
    } 
}

*/




//random color grid
/* const container = document.createElement("div");
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = "800px";
container.style.width = "800px";

function randomColor() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb( ' + r + ', ' + g + ', ' + b + ')';
  };
for (let j = 0;j < 8; j++) {
    for(let i = 0; i < 8; i++){
        const tile = document.createElement('div');
        tile.style.width = '12.25%';
        tile.style.height = '12.25%';
       
        tile.style.background = randomColor();

        tile.innerText = (i+j);
        tile.style.border = '1px solid black';
        container.append(tile);
    } 
}
document.body.appendChild(container);
*/



//gradient grid

/*const container = document.createElement("div");
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = "800px";
container.style.width = "800px";
document.body.append(container);
for (let j = 0;j < 8; j++) {
    for(let i = 0; i < 8; i++){
        const tile = document.createElement('div');
        tile.style.width = '12.25%';
        tile.style.height = '12.25%';
       
       if ((i + j) % 2 === 0) {
            tile.style.background = 'red'
        } else {
            tile.style.background = 'black'
        }

        tile.innerText = (i+j);
        tile.style.border = '1px solid black';
        container.append(tile);
    } 
}
*/





//flashing grid

const container = document.createElement("div");
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.height = "800px";
container.style.width = "800px";
document.body.style.display = 'flex';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';

function randomColor() {
    let b = Math.floor(Math.random() * 256); 
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };


for (let j = 0;j < 8; j++) {
    for(let i = 0; i < 8; i++){
        const tile = document.createElement('div');
        tile.style.width = '12.25%';
        tile.style.height = '12.25%';
        setInterval(function() {
            tile.style.background = randomColor();
        }, 2000)
        tile.innerText = (i+j);
        tile.style.border = '1px solid black';
        container.append(tile);
    } 
}
document.body.appendChild(container);




//extra ideas for black/red grid;
/* For Loop that takes in first 16 blocks.
for (let i = 0; i < 64; i++) {
    const tile = document.createElement("div");
    tile.style.width = '12.23%';
    tile.style.height = '12.23%';
    tile.style.border ="1px solid black";

    if ((i % 16 < 8 && i % 2 === 0) || (i % 16 >= 8 && i % 2 === 1)) {
    tile.style.background = 'red';
    } else {
    tile.style.background = 'black';
    }
    
    container.append(tile);
}
*/
/*
for (let i = 0; i < 64; i++) {
    const tile = document.createElement("div");
    tile.style.width = '12%';
    tile.style.height = '12.5%';
    tile.style.border ="1px solid black";

    tile.style.background = "Math.floor(Math.random()*255)"
    }
    container.append(tile);
}
document.body.append(container);
*/