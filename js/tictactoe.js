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
        playerArray.sort();
        console.log(playerArray)


}

function isTrue(arr, arr2){
   if(arr.some(i=>arr2.includes(i))){
       alert('you won')
   }



}
function checkWinner(playerArray, winningArray) {
    if(playerArray.length<3)return
    for(let win of winningArray) {
        const truth = win.every(i => playerArray.includes(i))
        if(truth){
            alert("Youre a winner bruh!")
            break
        }

    }
    //turn state true to stop engine
}


function updateODisplay(){
    let random = Math.floor(Math.random()*(9));
    while(playerArray.includes(random)){
        random = Math.floor(Math.random()*(9));
    }
    const img = document.createElement("img");
    img.src = oimage;
    const tile = document.getElementById(random)
    tile.appendChild(img)
    compArray.push(random);
    compArray.sort()

}
display.forEach(tile=>{
    tile.addEventListener('click',()=>{
         updateXDisplay(tile)
         checkWinner(playerArray,winningArray)
         updateODisplay()
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
