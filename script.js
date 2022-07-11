import translationArr from "./translations.js";

const engBox = document.querySelector("#eng-box");
const morseBox = document.querySelector("#morse-box");

// //Function for getting pokemon entry data
// const modifyPokemonEntries = (pokemonEntry) => {
//     cardContainer.innerHTML += `
//         <div class="card">
//                 <p class="card__text">${pokemonEntry.eng} ${pokemonEntry.morse}</p>
//             </div>
//         </div>
//         `;
// };

//Loads all pokemon data on load
translationArr.forEach((entry) => {
    console.log(entry);
});

const filterPokemonByNameEntries = () => {
    cardContainer.innerHTML = ``;
    pokemonArray.forEach((pokemonEntry) => {
        if (pokemonEntry.name.includes(searchBox.value)) {
            modifyPokemonEntries(pokemonEntry);
        }
    });
};

//Event listener for pokemon name filtering
searchBox.addEventListener("change", filterPokemonByNameEntries);

//psuedo

//1. user enters text
//2. grab data
//3. compare with json
//4. display correct text