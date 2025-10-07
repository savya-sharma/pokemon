let wrapper = document.querySelector("#wrapper")
let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

async function fetchData() {
    let response = await fetch(url)
    let result = await response.json();
    let names = result.results
    // console.log(images)

    for (let i = 0; i < names.length; i++) {
        let card = document.createElement("div")
        let heading = document.createElement("h3")
        card.append(heading)
        heading.textContent = names[i].name

        card.classList.add("card")
        let images = result.results[i].url
        let imgs = await fetch(images);
        let imageData = await imgs.json();
        let getImage = imageData.sprites.other.dream_world.front_default;
        console.log(getImage)
        let image = document.createElement("img")
        image.classList.add("img-div")
        image.src = getImage
        card.append(image)
        wrapper.append(card)

    }
}

fetchData();
