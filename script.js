import translationArr from "./translations.js";

const engBox = document.querySelector("#eng-box");
const morseBox = document.querySelector("#morse-box");

translationArr.forEach((entry) => {
    console.log(entry);
});

// const getMorseCode = () => {
//     //morseBox.value +=;
//     translationArr.forEach((entry) => {
//         if (entry.eng.includes(searchBox.value)) {
//             modifyEntries(entry);
//         }
//         for (let i = 0; i < morseBox.value.length; i++) {
//             str[i]);
//             translationArr.forEach((entry) => {
//                 if (entry.eng.includes(searchBox.value)) {
//     });
// };

// for (let i = 0; i < engBox.value.length; i++) {
//     str[i]);
//     translationArr.forEach((entry) => {
//         if (entry.eng.includes(searchBox.value)) {

// engBox.addEventListener("change", getMorseCode);

//psuedo

//1. user enters text
//2. grab data
//3. compare with json
//4. display correct text