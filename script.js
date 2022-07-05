alert(`Armado de Equipos para partidos de futbol`)
let option
const players = []
const team1 = []
const team2 = []

// Carga de tamaño de los equipos
do{
    option =parseInt(prompt(`Ingrese el tamaño del equipo\n1. Futbol 5\n2. Futbol 7\n3. Futbol 9\n4. Futbol 11`))
    // Chequeo si la opcion es valida
    if(isNaN(option) || option>4 || option<1){
        alert("Ingreso una opcion incorrecta, vuelva a intentarlo")
     }
}while(isNaN(option) || option>4 || option<1)
const teamSize=sizeTeam(option)

// Carga de los jugadores 
for (let i = 0;i<(teamSize*2);i++){
    const player = playerInput()
    players.push(player)
    console.table(player)
}
// Divido en 2 equipos
splitTeams(players)

// Muestro los equipos
console.log("EQUIPOS")
console.log("Equipo 1: ")
showTeam(team1)
console.log("Equipo 2: ")
showTeam(team2)



// Asigno el valor del equipo
function sizeTeam(option){
    let size
    switch (option){
        case 1:
            size=5
            break;
        case 2:
            size=7
            break;
        case 3:
            size=9
            break;
        case 4:
            size=11
            break;
    }
    return size
}

// Funcion de carga de jugador
function playerInput(){
    let name = prompt(`Ingrese el nombre del jugador`)
    let lastName = prompt(`Ingrese el apellido del jugador`)
    let age=validateNumber(`Ingrese la edad del jugador`)
    let stats=validateNumber(`Ingrese la estadistica del jugador del 1 al 100`)
    let option, position
    do{
        option =parseInt(prompt(`Ingrese la posicion del jugador\n1. Delantero\n2. Mediocampista\n3. Defensor\n4. Arquero`))
        // Chequeo si la opcion es valida
        if(isNaN(option) || option>4 || option<1){
            alert("Ingreso una opcion incorrecta, vuelva a intentarlo")
         }
    }while(isNaN(option) || option>4 || option<1)
    switch (option){
        case 1:
            position=`Delantero`
            break;
        case 2:
            position=`Mediocapista`
            break;
        case 3:
            position=`Defensor`
            break;
        case 4:
            position=`Arquero`
            break
        }
    const player = new Player (name,lastName,age,stats,position)
    return player

}

// Funcion para validar un numero entre 1 y 100
function validateNumber(phrase){
    let number
    do{
        number = parseInt(prompt(phrase))
        // Chequeo si la opcion es valida
        if(isNaN(number) || number<1 || number>100){
            alert("Ingreso una opcion incorrecta, vuelva a intentarlo")
         }
    }while(isNaN(number)|| number<1 || number>100)
    return  number
}

// Funcion para dividir los equipos
function splitTeams(){
    let players2=players.slice()
    for(let i=0; i<(players.length);i++){
        let max= Math.max.apply(Math, players2.map(function(o){return o.stats;}))
        let objMax = players2.find(function(o){return o.stats == max;})
        let indexMax = players2.indexOf(objMax)
        if(i%2==0){
            team1.push(objMax)
        }else{
            team2.push(objMax)
        }
        players2.splice(indexMax, 1)
    }
}

// Funcion para mostrar el equipo
function showTeam(team){
    for (let i=0; i<(team.length);i++){
        console.table(team[i])
    }
}