function calculateRhombusArea() {
    const base = getInputValueById('rhombus-d1');
   

    const height = getInputValueById('rhombus-d2')
  

    const area = 0.5 * base * height
   
    setInnerTextById('rhombus-area', area)
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const inputText = inputField.value;
    const input = parseFloat(inputText)
    return input;
}
function setInnerTextById(elementId, area ){
    const element = document.getElementById(elementId);
    element.innerText = area;

}