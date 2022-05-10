"use strict"
//? Variables
const d = document
const dt = new Date()
const darkMode = d.querySelector('#darkmode')

//? Events
d.addEventListener('DOMContentLoaded', (e) =>{
    countdownParcial('parcial', 'May 10, 2022', 'Pagoda', '15:00', '23/05/22, Rec. Primer Parcial', 'Algebra')
    countdownParcial('algebra', 'May 23, 2022', 'Pagoda', '15:00', '23/05/22, Rec. Primer Parcial', 'Algebra')
})

darkMode.addEventListener('click', () => {
    if(d.body.className == 'dark-grey'){
        d.body.classList.replace('dark-grey', 'white')
    }else{
        d.body.classList.replace('white', 'dark-grey')
    }  
})



//? Functions
const hMenu = () => {
    let x = d.getElementById("navDemo")
    if (x.className.indexOf("show") == -1) {
        x.className += " show"
    } else {
        x.className = x.className.replace(" show", "")
    }
}

const countdownParcial = (id, date, classRoom, hour, msg, course) => {
    const element = d.getElementById(id),
        ctDate = new Date(date).getTime()

    let timer = setInterval(() =>{
        let now = new Date().getTime(),
            limitTime = ctDate - now,
            days = Math.floor(limitTime/(1000*60*60*24))

        element.innerHTML = `${msg}<br>
                            Aula: ${classRoom} Hora: ${hour}
                            Faltan ${days}<br> Dias
                            `
        if(limitTime<0){
            clearInterval(timer)
            element.innerHTML = `Hoy es el parcial de ${course}`
        }
    }, 1000)

}



//? Testing zone - Dropping magic

console.log(`

⢸⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⡷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠢⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠈⠑⢦⡀⠀⠀⠀⠀⠀Are ya winning son ?
⢸⠀⠀⠀⠀⢀⠖⠒⠒⠒⢤⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀
⢸⠀⠀⣀⢤⣼⣀⡠⠤⠤⠼⠤⡄⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠙⢄⠀⠀⠀⠀
⢸⠀⠀⠑⡤⠤⡒⠒⠒⡊⠙⡏⠀⢀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠢⡄⠀
⢸⠀⠀⠀⠇⠀⣀⣀⣀⣀⢀⠧⠟⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀
⢸⠀⠀⠀⠸⣀⠀⠀⠈⢉⠟⠓⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⢸⠀⠀⠀⠀⠈⢱⡖⠋⠁⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⢸⠀⠀⠀⠀⣠⢺⠧⢄⣀⠀⠀⣀⣀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⢸⠀⠀⠀⣠⠃⢸⠀⠀⠈⠉⡽⠿⠯⡆⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⢸⠀⠀⣰⠁⠀⢸⠀⠀⠀⠀⠉⠉⠉⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⢸⠀⠀⠣⠀⠀⢸⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⢸⠀⠀⠀⠀⠀⢸⠀⢇⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⢸⠀⠀⠀⠀⠀⡌⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⢸⠀⠀⠀⠀⢠⠃⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸
⢸⠀⠀⠀⠀⢸⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠷
`)