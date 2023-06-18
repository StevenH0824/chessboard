/*
Create a string that represents a 8x8 grid using newline char to seperate
lines. 
characters should form a chessboard using console.log
When program generates this pattern " #" than define a binding size and change 
the program so that it works for any size. 
*/ 
let size = 0;
let adjusting = true;
let pattern =" #";

pattern = generateSize(8);
displayGrid(pattern);

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