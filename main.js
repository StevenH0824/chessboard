/*
Create a string that represents a 8x8 grid using newline char to seperate
lines. 
characters should form a chessboard using console.log
When program generates this pattern " #" than define a binding size and change 
the program so that it works for any size. 
*/ 
let size = 8;
let adjusting = true;
let pattern =" #";

//pattern = generateSize(8);
//displayGrid(pattern);

function generateSize(size="8",pattern= " #"){
    let adjusting = true;
    while(adjusting){
        if ( pattern.length < size ){
            pattern += " #";
        } else{
            adjusting = false;
        }
    }
    return pattern;
}

function displayGrid(pattern){
    for (let i = 1; i <= pattern.length; i++){
        if( (i % 2) === 0){
            console.log(pattern.slice(1) + " ");
        } else{
            console.log(pattern);
        }
    }
}


// chessboard
let column = document.querySelector('.main-Container');
function createGrid(size=8){
    let classname = ".column-";
    // Creates the columns for the grid
    for (let i=1; i <= size; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        newDiv.classList.add(classname.slice(1,-1)); //column
        newDiv.classList.add(classname.slice(1)+i);
        column.appendChild(newDiv);
    }
    // Creates the row in each column
    for (let i = 1; i <= size; i++){
        let column = document.querySelector(classname+i);
        for(let k=1; k <= size; k++){
            let newDiv = document.createElement('div');
            newDiv.classList.add('grid');
            newDiv.classList.add(`${i}${k}`); // I think i can complete it with this value
            newDiv.classList.add('row-'+k);
            column.appendChild(newDiv);
        }
    }
}


function setBGColor(color1='#F3DEBA',color2='#ABC4AA'){
    let grids = document.querySelectorAll('.grid');

    grids.forEach((grid) => {
        //grid.style.backgroundColor = "white";
        // It fucking works, LETS GOOOOO
        //if (grid.classList.contains('88')){
        //    grid.style.backgroundColor = "gray";
        //}
        /*
        for (let column = 1; column <= 8; column++){
            if (grid.classList.contains(`${1}${column}`)){
                if (column%2 != 0){
                    grid.style.backgroundColor = color1;
                }
            }
        }
        */
        for (let column = 1; column <= 8; column++){
            for (let row = 1; row <= 8; row++){
                if (grid.classList.contains(`${column}${row}`)){
                    if ( (column % 2) != 0 && (row % 2) != 0){
                        grid.style.backgroundColor = color1;
                    } else if (column %2 == 0 && row % 2 == 0){
                        grid.style.backgroundColor = color1;
                    } else{
                        grid.style.backgroundColor = color2;
                    }

                }
            }
        }

    



    });

}

 


createGrid();
setBGColor();




/*
Because I'm scared as shit of starting over.

function setBGColor(color1='#F3DEBA',color2='#ABC4AA'){
    let grids = document.querySelectorAll('.grid');

    grids.forEach((grid) => {
        //grid.style.backgroundColor = "white";
        // It fucking works, LETS GOOOOO
        //if (grid.classList.contains('88')){
        //    grid.style.backgroundColor = "gray";
        //}
        for (let column = 1; column <= 8; column++){
            for (let row = 1; row <= 8; row++){
                if (grid.classList.contains(`${column}${row}`)){


                    
                    if (column % 2 == 0 && (row % 2) == 0){
                        grid.style.backgroundColor = color1;
                    } else {
                        grid.style.backgroundColor = color2;
                    }
                }
            }
        }
    });

}

*/