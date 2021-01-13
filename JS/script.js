'use strict';

// obliczanie BMI
const calc = document.querySelector('#calc');
const clear = document.querySelector('#clear');
const description = document.querySelector('#description');

calc.addEventListener('click', () => {

    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;

    let result = document.querySelector('#result');
    let descriptionBMI;

    let bmi = parseFloat(weight) / (parseFloat(height) / 100 * parseFloat(height) / 100);
    bmi = Math.round(bmi);

    result.innerHTML = bmi;

    if (bmi < 16) {
        descriptionBMI = "Jesteś wygłodzony, musisz więcej jeść!"
        description.innerHTML = descriptionBMI;
    }
    if (bmi > 16 && bmi < 17) {
        descriptionBMI = "Jesteś wygchudzony, musisz więcej jeść!"
        description.innerHTML = descriptionBMI;
    }
    if (bmi > 17 && bmi < 18.5) {
        descriptionBMI = "Masz niedowagę, musisz więcej jeść!"
        description.innerHTML = descriptionBMI;
    }
    if (bmi > 18.5 && bmi < 25) {
        descriptionBMI = "Twoja waga jest prawidłowa, tak trzymaj :)!"
        description.innerHTML = descriptionBMI;
    }
    if (bmi > 30 && bmi < 35) {
        descriptionBMI = "Osiągnąłeś I stopień otyłości, musisz schudnąć!"
        description.innerHTML = descriptionBMI;
    }
    if (bmi > 35 && bmi < 40) {
        descriptionBMI = "Osiągnąłeś II stopień otyłości, musisz schudnąć!"
        description.innerHTML = descriptionBMI;
    }
    if (bmi > 40) {
        descriptionBMI = "Jesteś skrajnie otyły, nadwaga poważnie zagraża Twojemi zdrowiu :(!"
        description.innerHTML = descriptionBMI;
    }
});

clear.addEventListener('click', () => {
    result.innerHTML = '';
    description.innerHTML = '';
});