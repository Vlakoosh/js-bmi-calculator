const heightButtonCm = document.querySelector('#radioHeightCm');
const heightButtonFt = document.querySelector('#radioHeightFt');
const submitButton = document.querySelector("#submitButton");

let heightMode = "cm"

heightButtonCm.addEventListener('click', () => {
    heightMode = "cm"
    const heightInputContainer = document.querySelector('.container-height');
    heightInputContainer.innerHTML = '<input type="number" class="cm" name="" id="height" placeholder="height (cm)">';
});
heightButtonFt.addEventListener('click', () => {
    heightMode = "ft"
    const heightInputContainer = document.querySelector('.container-height');
    heightInputContainer.innerHTML = '<input type="number" class="ft" name="" id="heightFt" placeholder="height (ft)">' +
        '<input type="number" class="in" name="" id="heightIn" placeholder="height (in)">';
});

submitButton.addEventListener('click', () => {
    const resultText = document.querySelector('.result-text');
    try {
        let heightCm = 0;
        if (heightMode === "cm"){
            const cmInput = document.querySelector('#height')
            heightCm = parseInt(cmInput.value);
            console.log(heightCm)
        }
        else {
            const ftInput = document.querySelector('#heightFt')
            const inInput = document.querySelector('#heightIn')
            heightCm = (parseInt(ftInput.value) * 12 + parseInt(inInput.value)) * 2.54;
            console.log(heightCm)
        }
    } catch (e) {
        console.log(e);
    }
});
