'use strict';

// obliczanie BMI
const calc = document.querySelector('#calc');
const clear = document.querySelector('#clear');
const description = document.querySelector('#description');
const li = document.querySelectorAll('li');
const input = document.querySelectorAll('input');

calc.addEventListener('click', () => {

    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;

    let result = document.querySelector('#result');
    let descriptionBMI;

    //podaje zakres wartosci height weight dla ktorych kalkulator bedzie obliczal BMI
    if (weight >= 10 && height >= 80 && height <= 250) {
        let bmi = parseFloat(weight) / (parseFloat(height) / 100 * parseFloat(height) / 100);
        bmi = Math.round(bmi*10)/10;
        result.innerHTML = bmi;

        if (bmi <= 16) {
            descriptionBMI = "Jesteś wygłodzony, musisz więcej jeść!"
            li[0].style.color = "blue";
            li[0].style.border = "3px solid blue";
        }
        if (bmi > 16 && bmi <= 17) {
            descriptionBMI = "Jesteś wychudzony, musisz więcej jeść!"
            li[1].style.color = "blue";
            li[1].style.border = "3px solid blue";
        }
        if (bmi > 17 && bmi <= 18.5) {
            descriptionBMI = "Masz niedowagę, musisz więcej jeść!"
            li[2].style.color = "blue";
            li[2].style.border = "3px solid blue";
        }
        if (bmi > 18.5 && bmi <= 25) {
            descriptionBMI = "Twoja waga jest prawidłowa, tak trzymaj :)!"
            li[3].style.color = "green";
            li[3].style.border = "3px solid green";
        }
        if (bmi > 25 && bmi <= 30) {
            descriptionBMI = "Masz nadwagę, musisz schudnąć!"
            li[4].style.color = "red";
            li[4].style.border = "3px solid red";
        }
        if (bmi > 30 && bmi <= 35) {
            descriptionBMI = "Osiągnąłeś I stopień otyłości, musisz schudnąć!"
            li[5].style.color = "red";
            li[5].style.border = "3px solid red";
        }
        if (bmi > 35 && bmi <= 40) {
            descriptionBMI = "Osiągnąłeś II stopień otyłości, musisz schudnąć!"
            li[6].style.color = "red";
            li[6].style.border = "3px solid red";
        }
        if (bmi > 40) {
            descriptionBMI = "Jesteś skrajnie otyły, nadwaga poważnie zagraża Twojemu zdrowiu :( !"
            li[7].style.color = "red";
            li[7].style.border = "3px solid red";
        }
    } else {
        descriptionBMI = "Podaj poprawne dane!!! Nasz kalkulator oblicza BMI dla wzrostu w zakresie 80-250cm, oraz wagi powyżej 10kg."
    }
    description.innerHTML = descriptionBMI;
});

clear.addEventListener('click', () => {
    result.innerHTML = '';
    description.innerHTML = '';

    li.forEach((e) => {
        e.style.color = "black";
        e.style.border = "none";
    });
});