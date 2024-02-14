const heightButtonCm = document.querySelector('#radioHeightCm');
const heightButtonFt = document.querySelector('#radioHeightFt');

const weightButtonKg = document.querySelector('#radioWeightKg');
const weightButtonLbs = document.querySelector('#radioWeightLbs');

const submitButton = document.querySelector("#submitButton");

let heightMode = "cm"
let weightMode = "kg"

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

weightButtonKg.addEventListener('click', () => {
    weightMode = "kg";
    const weightInputContainer = document.querySelector('.container-weight');
    weightInputContainer.innerHTML = '<input type="number" name="" id="weight" placeholder="weight (kg)">';
});

weightButtonLbs.addEventListener('click', () => {
    weightMode = "lbs";
    const weightInputContainer = document.querySelector('.container-weight');
    weightInputContainer.innerHTML = '<input type="number" name="" id="weight" placeholder="weight (lbs)">';
});


submitButton.addEventListener('click', () => {
    const resultText = document.querySelector('.result-text');
    try {
        let heightCm = 0;
        if (heightMode === "cm"){
            const cmInput = document.querySelector('#height')
            heightCm = parseInt(cmInput.value);
            console.log(heightCm + "cm")
        }
        else {
            const ftInput = document.querySelector('#heightFt')
            const inInput = document.querySelector('#heightIn')
            heightCm = (parseInt(ftInput.value) * 12 + parseInt(inInput.value)) * 2.54;
            console.log(heightCm + "cm")
        }

        let weightKg = 0;
        if (weightMode === "kg") {
            const weightInput = document.querySelector('#weight');
            weightKg = parseInt(weightInput.value);
            console.log(weightKg + "kg")
        }
        else {
            const weightInput = document.querySelector('#weight');
            weightKg = parseInt(weightInput.value) * 2.20462;
            console.log(weightKg + "kg")
        }

        const bmi = Math.round((weightKg / Math.pow(heightCm/100, 2)) * 10) / 10;
        resultText.textContent = "BMI: " + bmi;
    } catch (e) {
        console.log(e);
    }

});
