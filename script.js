//Create Canvas Button
let createCanvasButton = document.querySelector("#createCanvas");


let nonResfresh = document.querySelector("#canvasSizeInput") 
//Input Value ButtonFuct

function getCanvasSize()
{
    return document.querySelector("#canvasNumber").value;

    
}

let canvasNum = createCanvasButton.addEventListener('click',function()
{
    canvasNum = getCanvasSize();
    console.log(canvasNum);
});

