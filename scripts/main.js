document.querySelector("#container").addEventListener("click", () => {
    const id = `${event.target.id.split("--")[1]}`
    const idNumber = parseInt(id)
    const location = `#${event.target.id}`
    const placeLocation = document.querySelector(location)
    newLocation = location
    if (counter % 2 === 0) {
        renderToDomX(placeLocation)
        winConditionX[`box${idNumber}`] += 1
        wC(winConditionX, "X")
        counter += 1

    } else {
        renderToDomO(placeLocation)
        winConditionO[`box${idNumber}`] += 1
        wC(winConditionO, "O")
        counter += 1
    }

})

let newLocation = ""

const X = () => {
    return `
    <h2 class = "x remove">X</h2>`
}

const renderToDomX = (placeLocation) => {
    placeLocation.innerHTML = X()
}

const O = () => {
    return `
    <h2 class = "o remove">O</h2>`
}

const renderToDomO = (placeLocation) => {
    placeLocation.innerHTML = O()
}


let counter = 2

const winConditionX = {
    box1: 0,
    box2: 0,
    box3: 0,
    box4: 0,
    box5: 0,
    box6: 0,
    box7: 0,
    box8: 0,
    box9: 0,

}

const winConditionO = {
    box1: 0,
    box2: 0,
    box3: 0,
    box4: 0,
    box5: 0,
    box6: 0,
    box7: 0,
    box8: 0,
    box9: 0,

}
const placeToLook = document.querySelectorAll(".box")

const wC = (object, color) => {
    const one = object.box1 + object.box2 + object.box3
    const two = object.box1 + object.box4 + object.box7
    const three = object.box1 + object.box5 + object.box9
    const four = object.box2 + object.box5 + object.box8
    const five = object.box3 + object.box6 + object.box9
    const six = object.box4 + object.box5 + object.box6
    const seven = object.box7 + object.box8 + object.box9
    const eight = object.box3 + object.box5 + object.box7
    const total = object.box1 + object.box2 + object.box3 + object.box4 + object.box5 + object.box6 + object.box7 + object.box8 + object.box9
    if (one === 3 || two === 3 || three === 3 || four === 3 || five === 3 || six === 3 || seven === 3 || eight === 3) {
        if (confirm(`${color} wins! Play again?`)) {
            placeToLook.forEach(place => {
                place.remove()
                renderToDomBox(placeBox)
                counter = 1
                if (color === "X") {
                    clearObject(winConditionX)
                    clearObject(winConditionO)
                    xWinner += 1 / 9
                    renderScoreToDom(scoreToDomPlace)
                } else {
                    clearObject(winConditionO)
                    clearObject(winConditionX)
                    oWinner += 1 / 9
                    renderScoreToDom(scoreToDomPlace)
                }

            })
        }
    } else if (total === 5) {
        //tie
        if (confirm("It is a tie.")) {
            placeToLook.forEach(place => {
                place.remove()
                renderToDomBox(placeBox)
                counter = 1
                clearObject(winConditionX)
                clearObject(winConditionO)
                tie += 1 / 9
                renderScoreToDom(scoreToDomPlace)
            }
            )
        }

    }
}

const placeBox = document.querySelector("#container")

const renderToDomBox = (placeLocation) => {
    placeLocation.innerHTML = buildBox()
}

const buildBox = () => {
    return `
    <div id="box--1" class="box"></div>
    <div id="box--2" class="box"></div>
    <div id="box--3" class="box"></div>
    <div id="box--4" class="box"></div>
    <div id="box--5" class="box"></div>
    <div id="box--6" class="box"></div>
    <div id="box--7" class="box"></div>
    <div id="box--8" class="box"></div>
    <div id="box--9" class="box"></div>
    `
}



let xWinner = 0
let oWinner = 0
let tie = 0

const clearObject = (object) => {
    for (const key in object) {
        object[key] = 0
    }
}
const scoreToDomPlace = document.querySelector(".score")

const renderScoreToDom = (score) => {
    score.innerHTML = scoreToHTML()
}
const scoreToHTML = () => {
    return `<h2 class ="scores--list">Scores</h2>
    <h3 class = "x--wins">X Wins =${parseInt(xWinner)}</h3>
    <h3 class = "o--wins">O Wins =${parseInt(oWinner)}</h3>
    <h3 class = "tie">Ties =${parseInt(tie)}</h3>
    `
}
