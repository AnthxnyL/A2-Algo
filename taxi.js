let personnage = {
    name : "John",
    hp : 10
}

let musique = [
    'Anissa - Wejdene',
    'ZOO - Kaaris',
    'A7 - SCH',
    'Freeze Rael - Freeze Corleone',
    'Mosaique Solitaire - Damso'
]

let trajet = {
    radio : "",
    redFire : 30, 
    changement : 0
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function taxi (trajet, perso, music){
    while(perso.hp > 0 && trajet.redFire > 0){
        trajet.radio = music[getRandomInt(0, music.length-1)]
        switch(trajet.radio){
            case "Anissa - Wejdene" : 
                perso.hp --
                trajet.redFire--
                trajet.changement++
                if (perso.hp <= 0){
                    return"EXPLOSION"
                }
                break
            default : 
                trajet.redFire--
        }
        console.log("La musique est : " + trajet.radio + " il reste : "+ trajet.redFire + " feux rouges !")
    }
    console.log(perso.name + " est bien arrivé, il lui a fallu "+ trajet.changement + " changements !")
}

console.log(taxi(trajet, personnage, musique))