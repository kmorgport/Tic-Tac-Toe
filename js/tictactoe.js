"use strict"
// class Tictactoe{
//     constructor(display){
//         this.display = display;
//         this.reset();
//     }
//
//     updateXDisplay(img){
//         this.display.innerHTML= img
//
//     }
// }




const display = document.querySelectorAll('[data-tile]');
const reset = document.querySelector('[data-reset]');
const ximage = "img/X.png";
const oimage = "img/O.png";

// const tictactoe = new Tictactoe(display);

function updateXDisplay(tile){
    while(state) {
        const img = document.createElement("img");
        img.src = ximage;
        tile.appendChild(img);
    }

}

display.forEach(tile=>{
    tile.addEventListener('click',()=>{
         updateXDisplay(tile)
        // tictactoe.checkWinner()
        // tictactoe.computerGoes()
        // tictactoe.updateDisplay()
        // tictactoe.checkWinner()
    })
})

reset.addEventListener('click',()=>{
    tictactoe.clear()
    tictactoe.updateDisplay()
})


const tiles = [
    {id: 1, xState: null, oState:null},
    {id: 2, xState: null, oState:null},
    {id: 3, xState: null, oState:null},
    {id: 4, xState: null, oState:null},
    {id: 5, xState: null, oState:null},
    {id: 6, xState: null, oState:null},
    {id: 7, xState: null, oState:null},
    {id: 8, xState: null, oState:null},
    {id: 9, xState: null, oState:null},
    {id: 10, xState: null, oState:null},
];

document.getElementById('x1').style.visibility='none';