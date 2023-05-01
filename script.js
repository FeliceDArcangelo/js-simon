const eleDays = document.querySelector('.day')
const eleHours = document.querySelector('.hours')
const eleMinutes = document.querySelector('.minutes')
const eleSeconds = document.querySelector('.seconds')

const interval = setInterval(countdown, 1000)


function countdown (){
    const now = new Date().getTime()
    let nowDivide = now / 1000

    const then = new Date('2023-05-03T09:30:00').getTime()
    let thenDivide = Math.floor((then - now) / 1000)
    console.log(thenDivide)

    let day
    let hours
    let minutes
    let seconds

    if (thenDivide <= 0){
        clearInterval (interval)
    } else {
        day = Math.floor(thenDivide / (60 * 60 * 24))
        hours = Math.floor(thenDivide % (60 * 60 * 24) / (60 * 60))
        minutes = Math.floor((thenDivide - day * (60 * 60 *24) - hours * (60 * 60))/60)
        seconds = Math.floor(thenDivide - day * (60 * 60 *24) - hours * (60 * 60) - minutes * 60)

        eleDays.innerHTML = day
        eleHours.innerHTML = hours
        eleMinutes.innerHTML = minutes
        eleSeconds.innerHTML = seconds  
    }
}



