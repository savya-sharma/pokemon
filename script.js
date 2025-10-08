let main = document.querySelector("main")
let wrapper = document.querySelector("#wrapper")
let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
let promises = [];



async function fetchUrl(fetchToUrl) {
    const response = await fetch(fetchToUrl)
    const result = await response.json();
    return result
}


window.addEventListener("load", async () => {
    let fetchData = await fetch(url);
    let promise = await fetchData.json();
    let data = promise.results;

    for (let i = 0; i < data.length; i++) {
        let heading = document.createElement("h3")
        heading.textContent = data[i].name
        console.log(heading)

        function againFetch() {
            let imagePath = data[i].url
            
            console.log(imagePath)
        }

        let imageDiv = document.createElement("div")
        let img = document.createElement("img")
        img.src = againFetch();
    }
    // againFetch();
    console.log(data)

})


// async function againFetch() {
//     let
// }











































// async function fetchData() {
//     let response = await fetch(url)
//     let result = await response.json();
//     let names = result.results
//     // console.log(images)

//     for (let i = 0; i < names.length; i++) {
//         let detailsDiv = document.createElement("div")
//         detailsDiv.classList.add("details-card")
//         detailsDiv.style.zIndex = "-1";
//         detailsDiv.style.backgroundColor = "red"
//         detailsDiv.style.position = "absolute"

//         let card = document.createElement("div")
//         let heading = document.createElement("h3")
//         heading.textContent = names[i].name

//         card.classList.add("card")
//         let imgDiv = document.createElement("div")
//         imgDiv.classList.add("img-div")
//         let images = result.results[i].url
//         let imgs = await fetch(images);
//         let imageData = await imgs.json();
//         let getImage = imageData.sprites.other.dream_world.front_default;
//         console.log(getImage)
//         let image = document.createElement("img")
//         image.classList.add("img-div")
//         image.src = getImage
//         imgDiv.append(image)
//         card.append(imgDiv)
//         card.append(heading)
//         wrapper.append(card)

//     }
// }

// fetchData();
