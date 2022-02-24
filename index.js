// const inp = document.getElementById("#check")
const checked = document.querySelector(".checked")
const body = document.body
checked.addEventListener("mouseover", () => {
    body.style.backgroundColor = "red"
    alert("Don't touch that, otherwise you will be in danger.")
    let newDiv = document.createElement("div")
    let button = document.createElement("input")
    button.type = "button"
    button.value = "Hover_me"
    // button.style.padding = "15px"
    // button.style.height = "8px"
    // button.style.width = "80px"
    button.style.backgroundColor = "blue"
    button.style.margin = "auto"
    // button.style.content = "click_me"
    button.classList.add("btn")
    newDiv.append(button)
    console.log(button)
    newDiv.classList.add("unique")
    body.appendChild(newDiv)
    console.log(newDiv)
    let p = document.createElement("p")
    button.addEventListener('mouseover', () => {
        p.classList.add("paraEngMan")
        p.style.fontSize = "0.4em"
        button.value = "Click_me"
        newDiv.append(p)
        button.addEventListener('click', () => {
            let playBox = document.createElement('div')
            // playBox.style.boxSizing = "borderBox"
            button.value = "ha ha ha..."
            p.style.fontSize = "0.5em"
            p.classList.add("para")
            newDiv.append(p)
            let audio = new Audio("laughing_sound.mp3")
            audio.play()
            playBox.classList.add("gif_box")
            // let video = new Video("https://tenor.com/view/bh187-dc-laughing-laugh-joker-gif-19166397")
            // playBox.append(video)
            // let video = document.createElement('video')
            // video.src = "laugh.gif"
            // video.setAttribute = "alt='no video'"
            // video.setAttribute="autoplay"
            // video.duration="12000ms"
            // video.play()
            // playBox.append(video)
            body.append(playBox)
            // video.play()
            let img = document.createElement("img")
            // img.src = "laugh.gif"
            // img.style.backgroundPosition = "center"
            // img.style.backgroundSize ="cover"
            // img.style.backgroundOrigin = "borderBox"
            img.classList.add("perfect_img")
            playBox.append(img)
        })
    })
})
