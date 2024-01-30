//Create Canvas Button
let createCanvasButton = document.querySelector("#createCanvas");


let nonResfresh = document.querySelector("#canvasSizeInput") 
//Input Value ButtonFuct

function getCanvasSize()
{
    return document.querySelector("#canvasNumber").value;

    
}


let pixelContainer =  document.querySelector(".pixelContainer");

rotatingCanvasNum = [];

let noCanvas = true;

let canvasNum = createCanvasButton.addEventListener('click',function()
{
    canvasNum = getCanvasSize();
    console.log(canvasNum);
    
    if (noCanvas=== false)
    {
        removeCanvas();
    }

    


    //Generating Canvas that is made from the user selected number. the number is squared to make said canvas
    //and each title (div)has an id num in order of its position

    for (let i = 0; i <canvasNum; i++)
    {
        console.log(canvasNum);
        let row = document.createElement('div');
        //to not have row start a zero
        row.id = `row${i +1}`;
        row.className = "row";


        pixelContainer.appendChild(row);
        
        


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

let test = document.querySelector(".test");
test.addEventListener('click',removeCanvas); 


