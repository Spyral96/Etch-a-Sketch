//Create Canvas Button
let createCanvasButton = document.querySelector("#createCanvas");

let nonResfresh = document.querySelector("#canvasSizeInput") 

//Input Value ButtonFuct
function getCanvasSize()
{
    return document.querySelector("#canvasNumber").value;
}

//Element on the canvas
let pixelContainer =  document.querySelector(".pixelContainer");


//so we can store the pevious CanvasNum in memory. This is need so when we delete the canvas we have the old number to give it proper instruction,otherwise it would use the new Canvas number which messes things up
rotatingCanvasNum = [];
//so it doesn't run removeCanvas() or delete when theres nothing to remove.Take note this is only appicible intially. Otherwise there will always be a canvas to delete on screen
let noCanvas = true;


//Main Canvas Create Button
let canvasNum = createCanvasButton.addEventListener('click',function()
{
    canvasNum = getCanvasSize();
    console.log(canvasNum);
    
    if (noCanvas=== false)
    {
        removeCanvas();
    }


    //Generating Canvas that is made from the user selected number(CanvasNum). the number is squared to make said canvas
    //Ex: 7 is 49 tiles
    //and each title (div)has an id num in order of its position/rows labeled too

    for (let i = 0; i <canvasNum; i++)
    {
        //looping rows
        console.log(canvasNum);
        let row = document.createElement('div');
        //to not have row start a zero
        row.id = `row${i +1}`;
        row.className = "row";


        pixelContainer.appendChild(row);
        
        //this so we can loop within each row (pixels within a row)
        for (let l = 1; l <= canvasNum; l++)
        {
            let column = document.createElement('div');
            row.appendChild(column);
            column.className = "pixels"
            
            //condintional needed because 0 or 3 + 0 * 7 will always be zero. So for that first row the rules need to be different
            if (i === 0)
            {
                column.id = `pixel${l}`;

            }
            
            else
            {
                column.id = `pixel${l + i * canvasNum}`;
            }

        } 
        
        
    }

    
    noCanvas = false;
    
    //we do this because we want to store the pervious CanvasNums, however we only need two at a time on said list (new and last used Canvas Number). A hard cap stops memory leaking
    if (rotatingCanvasNum.length <3)
    {
    rotatingCanvasNum.unshift(canvasNum);
    console.log(`list${rotatingCanvasNum}`)
    }

    else
    {
        
        rotatingCanvasNum.unshift(canvasNum);
        console.log(`list${rotatingCanvasNum}`)
        rotatingCanvasNum.pop();
    }
    

});

let pixels = document.querySelector('.pixels');


//Folows the same/similar instructions as making the pixel, however we are destroying them now
function removeCanvas()
{
    let lastCanvasNum = rotatingCanvasNum[0];
    console.log(">")
    console.log(lastCanvasNum);
    console.log(canvasNum + "current");
    pixelsToDelete = document.querySelector("#pixel1");
    rowsToDelete = document.querySelector("#row1");


     for (i = 1; i <=lastCanvasNum;i++)
     {
        rowsToDelete = document.querySelector(`#row${i}`);
        console.log(`row${i} starting`);

        for (l = 1;l <=lastCanvasNum;l++)
        {   
            if (i === 1)
            {
                pixelsToDelete = document.querySelector(`#pixel${l}`);
                console.log(`pixel${l} destroyed`);
                rowsToDelete.removeChild(pixelsToDelete);
            }
            
            else
            {
                pixelsToDelete = document.querySelector(`#pixel${l + (i-1) * lastCanvasNum}`);
                
                console.log(`pixel${l + (i-1) * lastCanvasNum} destroyed`);
                rowsToDelete.removeChild(pixelsToDelete); 
            }
        }
        console.log(`row${i} destroyed`);
        pixelContainer.removeChild(rowsToDelete);
    }
}


//COLOR PICKER TOOL BAR
let currentSelectedColor;
//Colors
let red = document.querySelector("#red");
let blue= document.querySelector('#blue');
let yellow = document.querySelector('#yellow');
let orange = document.querySelector('#orange')
let green = document.querySelector('#green');
let purple = document.querySelector('#purple');
let black = document.querySelector('#black');
let lightGray = document.querySelector('#lightGray');
let pink = document.querySelector('#pink');
let eraser = document.querySelector('#eraser');


red.addEventListener('click',function()
{
    currentSelectedColor = 'red';
})

blue.addEventListener('click',function()
{
    currentSelectedColor = 'blue';
})

yellow.addEventListener('click',function()
{
    currentSelectedColor = 'yellow';
})

orange.addEventListener('click',function()
{
    currentSelectedColor = 'orange';
})

green.addEventListener('click',function()
{
    currentSelectedColor = 'green';
})

purple.addEventListener('click',function()
{
    currentSelectedColor = 'purple';
})

black.addEventListener('click',function()
{
    currentSelectedColor = 'black';
})

lightGray.addEventListener('click',function()
{
    currentSelectedColor = 'lightgray';
})

pink.addEventListener('click',function()
{
    currentSelectedColor = 'pink';
})

eraser.addEventListener('click',function()
{
    currentSelectedColor = 'white';
})



//The Ability To Hold Down And Drag To Paint
let clickDown =false;
pixelContainer.addEventListener('mousedown',function(checkclick)
{
   return clickDown = true;
   console.log("click")
    
})

pixelContainer.addEventListener('mouseup',function(checkUnclick)
{
   return clickDown = false;
    
})

//Check ID location for each pixel mousedowned so we can use it later
let clickLocation;
pixelContainer.addEventListener('mouseover',function(getPixelID)
{   
    if (clickDown === true)
    {
    clickLocation = getPixelID.target.id.substring(5);
    clickLocation = parseInt(clickLocation);
    console.log(clickLocation);
    }

})

//Paint Brush Size Increase
let bigPaintBrushSizeON = false;
let size2Button = document.getElementById('size2');
let size1Button = document.getElementById('size1')

size1Button.addEventListener('click',function()
{
    bigPaintBrushSizeON = false;
    console.log(bigPaintBrushSizeON);
})

size2Button.addEventListener('click',function()
{
    bigPaintBrushSizeON = true; 
    console.log(bigPaintBrushSizeON);
})


//Paint Function
pixelContainer.addEventListener('mouseover',function(paint)
{
    
        if (paint.target.classList.contains('pixels') && clickDown === true && bigPaintBrushSizeON=== false)
        {
            paint.target.style.backgroundColor = currentSelectedColor;
        }

        //if bigger brush icon is toggled on
        else if (paint.target.classList.contains('pixels') && bigPaintBrushSizeON === true && clickDown ===true)
        {   
            paint.target.style.backgroundColor = currentSelectedColor;
            getSize2Brush();
        }
    

})



//so pixel click gets colored in (bug)(like if you just click down and dont nothing gets filled out)
pixelContainer.addEventListener('mousedown',function(paint)
{
    if (paint.target.classList.contains('pixels') && bigPaintBrushSizeON === false)
        {
            paint.target.style.backgroundColor = currentSelectedColor;
            
        }
    
     else if (paint.target.classList.contains('pixels') && bigPaintBrushSizeON === true) 
     {
        clickLocation = paint.target.id.substring(5);
        clickLocation = parseInt(clickLocation);
        console.log(clickLocation);
        paint.target.style.backgroundColor = currentSelectedColor;
        getSize2Brush();
     }

})


//Math/func that paints out a square 2 by 2 around curently click pixel 
function getSize2Brush()
{

    topLeft = document.getElementById(`pixel${clickLocation-canvasNum-1}`);
    topRight = document.getElementById(`pixel${clickLocation-canvasNum}`);
    bottomLeft = document.getElementById(`pixel${clickLocation-1}`)
    
        let columnValues = getRightColumnValues();
        
        if (columnValues.includes(topLeft.id))
        {
            topRight.style.backgroundColor = currentSelectedColor;
        }
        else if (columnValues.includes(bottomLeft.id))
        {
            topRight.style.backgroundColor = currentSelectedColor;
        }
         else
        {
            topLeft.style.backgroundColor = currentSelectedColor;
            topRight.style.backgroundColor = currentSelectedColor;
            bottomLeft.style.backgroundColor = currentSelectedColor;
        }
    
    
}

//Detect Right Column in a list
function getRightColumnValues()
{   rightColumnPixelIds = [];
    for(let i = 1; i <=25; i++)
    {
        
        rightColumnPixelIds.push(`pixel${canvasNum *i}`);


        console.log(rightColumnPixelIds);
    }
    return rightColumnPixelIds;
}