"use strict"
class Tictactoe{
    constructor(display){
        this.display = display;
        this.reset();
    }



}




const display = document.querySelectorAll('[data-tile]');
const reset = document.querySelector('[data-reset]');
const ximage = "img/X.png";
const oimage = "img/O.png";
const playerArray = [];
const compArray = [];
const winningArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

// const tictactoe = new Tictactoe(display);

function updateXDisplay(tile){
        const img = document.createElement("img");
        img.src = ximage;
        tile.appendChild(img);
        const num = tile.getAttribute("id")
        playerArray.push(parseInt(num))
        console.log(playerArray)
        playerArray.sort();


}
function isTrue(arr, arr2){
    return arr.some(i=>arr2.includes(i))
}
function checkWinner(arr1, arr2) {
    let a =
    for(let i=0;i<arr2.length; i++){
        if(isTrue(arr1,arr2[i])) {
            console.log(true)
        }else {
            console.log(false)
        }
        }
}


function updateODisplay(tile){
    const img = document.createElement("img");
    img.src = oimage;
    tile.appendChild(img);

}
display.forEach(tile=>{
    tile.addEventListener('click',()=>{
         updateXDisplay(tile)
        // tictactoe.computerGoes()
        // tictactoe.checkWinner()
    })
})
display.forEach(tile=>{
    tile.addEventListener('click',()=>{
        checkWinner(playerArray,winningArray);
        // tictactoe.computerGoes()
        // tictactoe.checkWinner()
    })
})

// reset.addEventListener('click',()=>{
//     tictactoe.clear()
//     tictactoe.updateDisplay()
// })


// const tiles = [
//     {id: 1, xState: null, oState:null},
//     {id: 2, xState: null, oState:null},
//     {id: 3, xState: null, oState:null},
//     {id: 4, xState: null, oState:null},
//     {id: 5, xState: null, oState:null},
//     {id: 6, xState: null, oState:null},
//     {id: 7, xState: null, oState:null},
//     {id: 8, xState: null, oState:null},
//     {id: 9, xState: null, oState:null},
//     {id: 10, xState: null, oState:null},
// ];
