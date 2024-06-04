function calculateParalelogramArea(){

const base = getInputValueById('paralelogram-base')
const height = getInputValueById('paralelogram-height')
const area = base * height;
setInnerTextById('paralelogram-area', area)







    // const paralelogramBaseInput = document.getElementById('paralelogram-base')
    // const paralelogramBaseText = paralelogramBaseInput.value 
    // const paralelogramBase = parseFloat(paralelogramBaseText)
    // console.log(paralelogramBase);



    // const paralelogramHeightInput = document.getElementById('paralelogram-height')
    // const paralelogramHeightText = paralelogramHeightInput.value
    // const Height = parseFloat(paralelogramHeightText)
    // console.log(Height);


    // const area = paralelogramBase * Height;
    // console.log('area is :',area);
    // const paralelogramAreaSpan = document.getElementById('paralelogram-area')
    // paralelogramAreaSpan.innerText = area
}