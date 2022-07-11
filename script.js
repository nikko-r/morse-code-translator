import translationArr from "./translations.js";

const cardContainer = document.querySelector(".card-container");

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
    //    modifyPokemonEntries(entry);
});