// A function to create a colour string from 3 inputs (RGB format)
function makeSimpleRGB(inputRed, inputGreen, inputBlue) {
    return `rgb(${inputRed}, ${inputGreen}, ${inputBlue})`;
}

// A function to create a random rounded value
function randomRoundedValue(maxValue) {
    return Math.round(Math.random() * maxValue);
}

// A function to create a rectangle with default values and specific color
function createRect(inputXPos, inputYPos, inputWidth, inputHeight, inputR, inputG, inputB) {
    let outputColour = makeSimpleRGB(inputR, inputG, inputB);

    let newRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRectangle.setAttribute("x", inputXPos);
    newRectangle.setAttribute("y", inputYPos);
    newRectangle.setAttribute("width", inputWidth);
    newRectangle.setAttribute("height", inputHeight);
    newRectangle.setAttribute("fill", outputColour);
    
    return newRectangle;
}
