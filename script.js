//Create Canvas Button
let createCanvasButton = document.querySelector("#createCanvas");


let nonResfresh = document.querySelector("#canvasSizeInput") 
//Input Value ButtonFuct

function getCanvasSize()
{
    return document.querySelector("#canvasNumber").value;

    
}


let pixelContainer =  document.querySelector(".pixelContainer");
let canvasNum = createCanvasButton.addEventListener('click',function()
{
    canvasNum = getCanvasSize();
    console.log(canvasNum);

    //Generating Canvas that is made from the user selected number. the number is squared to make said canvas
    //and each title (div)has an id num in order of its position

    for (let i = 0; i <canvasNum; i++)
    {
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
});

console.log(1 + 2 *7);
