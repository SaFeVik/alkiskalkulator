const antallEl = document.querySelector("#antall")
const volumEl = document.querySelector("#volum")
const prosentEl = document.querySelector("#prosent")
const pilImg = document.querySelector("#pil")
const outputEl = document.querySelector("#output")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

pilImg.addEventListener("click", utregn)

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        utregn()
    }
})


/* antallEl.value = 1
volumEl.value = 500
prosentEl.value = 13 */

async function utregn(){
    const antallEnheter = (antallEl.value * volumEl.value * prosentEl.value)/(4.5*500)
    console.log(antallEnheter)

    pilImg.style.transform = "translateY(20px)"

    outputEl.innerHTML = `Dette tilsvarer ${Math.round(antallEnheter*10)/10} halvlitere med 4,5%`

    await sleep(100)
    pilImg.style.transform = "translateY(0px)"
}

