const main = document.querySelector("main")
const wrapper = document.querySelector("#wrapper")
const loadMoreBtn = document.querySelector("button")
const bySearch = document.querySelector("#searchByName")
let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
let promises = [];
let finalData = [];
let offset = 0;



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
        promises.push(fetchUrl(data[i].url))
    }
    finalData.push(...await Promise.all(promises))
    // console.log(finalData)


    displayData(finalData);
})


function displayData(arr) {
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement("div")
        card.classList.add("card")
        let heading = document.createElement("h3")
        heading.textContent = arr[i].name

        let image = arr[i].sprites.other.dream_world.front_default;
        let imageDiv = document.createElement("div")
        imageDiv.classList.add("img-div")
        let img = document.createElement("img")
        img.src = image
        imageDiv.append(img)
        card.append(imageDiv)
        main.append(card)
        card.append(heading);

        // GSAP animation: fade in and scale up the card
        // Initial GSAP animation: fade in and scale up the card
        gsap.from(card, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "power2.out"
        });

        // Add hover animation using mouseenter and mouseleave
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(255, 255, 255, 0.08) inset",
                background: "linear-gradient(135deg, #fff 0%, #111 100%)",
                duration: 0.35,
                overwrite: "auto"
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                scale: 1,
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.25), 0 1.5px 4px rgba(255, 255, 255, 0.05) inset",
                background: "linear-gradient(180deg, #323232 0%, #888 100%)",
                duration: 0.35,
                overwrite: "auto"
            });
        });

    }
}


// function loadMore() {
loadMoreBtn.addEventListener("click", () => {
    offset = offset + 20;
    let offsetUrl = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;
    // console.log(offsetUrl)

    async function fetchAgain() {
        main.innerHTML = ""
        let morePokemonFetch = await fetch(offsetUrl)
        let moreResponse = await morePokemonFetch.json();
        let responseResult = moreResponse.results;
        console.log(responseResult)

        const newPromises = [];
        for (let i = 0; i < responseResult.length; i++) {
            newPromises.push(fetchUrl(responseResult[i].url))
        }
        const newData = await Promise.all(newPromises);
        finalData.push(...newData)

        displayData(finalData)
    }
    fetchAgain();
})
// }
// loadMore();


bySearch.addEventListener("keyup", (e) => {
    const searchvalue = e.target.value.toLowerCase();
    const filteredData = finalData.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchvalue)
    )
    main.innerHTML = ""
    displayData(filteredData)
})
































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
