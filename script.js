let wrapper = document.querySelector("#wrapper")
let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

async function fetchData() {
    let response = await fetch(url)
    let result = await response.json();
    let names = result.results
    // console.log(images)

    for (let i = 0; i < names.length; i++) {
        let heading = document.createElement("h3")
        heading.textContent = names[i].name
        wrapper.append(heading)

        let images = result.results[i].url
        let imgs = await fetch(images);
        let imageData = await imgs.json();
        console.log(imageData)

        let getImage = imageData.sprites.other.dream_world.front_default;
        console.log(getImage)

        let image = document.createElement("img")
        image.src = getImage
        wrapper.append(image)

    }
}

fetchData();