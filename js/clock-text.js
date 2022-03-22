const clockText = document.querySelector('.clock-text')
let hour = document.querySelector('.hour'),
    minutes = document.querySelector('.minutes'),
    secunds = document.querySelector('.secunds')

const hourArrow = document.querySelector('.hour-arrow')
const minutesArrow = document.querySelector('.minutes-arrow')
const secundsArrow = document.querySelector('.secunds-arrow')

setInterval(() => {
    let data = new Date().toLocaleTimeString()
    let dataArr = data.split(':')
    hour.textContent = dataArr[0]
    minutes.textContent = dataArr[1]
    secunds.textContent = dataArr[2]
}, 1000)


let rotateHourArrow = 0
let rotateMinutesArrow = 0
let rotateSecundsArrow = 0

clock(rotateSecundsArrow, 2, 60, secundsArrow)
clock(rotateMinutesArrow, 1, 3600, minutesArrow)
clockH(rotateHourArrow, 0, 86400, hourArrow)
function clock(rot, i, rotValue, nameArrow) {
    let data = new Date().toLocaleTimeString()
    let dataArr = data.split(':')
    rot = +dataArr[i] * 6
    setInterval(() => {
        rot = rot + 360 / rotValue
        nameArrow.style.transform = `rotate(${rot}deg)`
    }, 1000)
}

function clockH(rot, i, rotValue, nameArrow) {
    let data = new Date().toLocaleTimeString()
    let dataArr = data.split(':')
    if (+dataArr[i] >= 0 && +dataArr[i] < 12) {
        rot = (+dataArr[i] + 5) * 6
    } else if (+dataArr[i] >= 12) {
        dataArr[i] = +dataArr[i] % 12
        rot = (+dataArr[i] * 5) * 6

        // console.log((+dataArr[i] + 5) * 6)
    }
    setInterval(() => {
        rot = rot + 360 / rotValue
        nameArrow.style.transform = `rotate(${rot}deg)`
    }, 1000)
}
