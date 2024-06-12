fetch("https://rickandmortyapi.com/api/character")
.then(response=>response.json())
.then(characters => {
    renderChracters(characters.results)
})

const cardsContainer = document.querySelector("#cards-container");

function renderChracters(characters){
    characters.forEach(character => {
        const div = document.createElement('div');
        const like = document.createElement('h4');
        const image =document.createElement('img');
        const name = document.createElement('h3');
        const species = document.createElement('h3');
    

        div.classList = 'card';
        image.classList ='card-img';
        name.classList= 'name';
        species.classList='species';
        like.classList = 'status';

        image.src = character.image
        like.textContent =`${character.status}`

        name.innerText =`Name: ${character.name}`
        species.innerText = `Species : ${character.species}`
        
        div.appendChild(image)
        div.appendChild(name)
        div.appendChild(species)
        div.appendChild(like)
        cardsContainer.appendChild(div)
    });
    
}
document.getElementById("aboutUsBtn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});