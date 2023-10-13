let inGame = {
    roundWin : 0,
    spikePlanted : false,
    roundMax : 25,
    playerDead : ""
}


class Personnages{
    constructor(perso ){
        this.perso = perso
    }
}

let prenom = [
    "Omen",
    "Phoenix",
    "Jett",
    "Chamber",
    "Fade"
]

let attackTeam = {
    name : "Attaquant",
    playerAlive : 5,
    characters : [],
    roundWin : 0
}

let defenseTeam = {
    name : "Défenseur",
    playerAlive : 5,
    characters : [],
    roundWin : 0
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomName(tab) {
    let stringCase = getRandomInt(0, tab.length-1)
    let choice = tab[stringCase]
    return choice
}


function createTeam(team){
    team.characters = []
    team.playerAlive = 5
    for(let i=0; i< 5; i++){
        team.characters.push(new Personnages (
            randomName(prenom),
            true 
        ))
    }
}

function randomTeam(){
    if (Math.random() > 0.5){
        return attackTeam.name
    }else{
        return defenseTeam.name
    }
}



function spike (){
    let spikeChance = Math.random()
    if(inGame.playerDead == "Défenseur" && spikeChance<= 0.6){
            inGame.spikePlanted == true
            console.log("Le spike a été planté")
    } else if ( inGame.playerDead == "Attaquant" && spikeChance <=0.4){  
            inGame.spikePlanted == true 
            console.log("Le spike a  été planté")
        } else{    
        console.log("Le spike n'a pas été planté")
    }
}

function firstRound (){
    let randomNb = getRandomInt(0,4)
    let attackChoose = ""
    let defenseChoose =""
    if (randomTeam() ==  attackTeam.name){
        attackChoose = attackTeam.characters[getRandomInt(0,4)].perso
        defenseChoose = defenseTeam.characters[getRandomInt(0,4)].perso
        console.log(attackChoose + " a tué "+ defenseChoose)
        inGame.playerDead = defenseTeam.name
        defenseTeam.characters.splice(randomNb, 1)
        defenseTeam.playerAlive--
    }else if (randomTeam() == defenseTeam.name){
        inGame.playerDead = attackTeam.name
        console.log(defenseChoose + " a tué "+ attackChoose)
        attackTeam.characters.splice(randomNb, 1)
        attackTeam.playerAlive--
    }
}

function kill(){
    while(attackTeam.playerAlive > 0 && defenseTeam.playerAlive > 0 ){
        let randomPlayerAttack = getRandomInt(0, attackTeam.characters.length-1)
        let randomPlayerDefense = getRandomInt(0, defenseTeam.characters.length-1)
        while(attackTeam.playerAlive>  0 && defenseTeam.playerAlive > 0){
            if(inGame.spikePlanted == true){
                if(Math.random()<0.7){
                    console.log(attackTeam.characters[randomPlayerAttack-1].perso + " a tué "+ defenseTeam.characters[randomPlayerDefense-1].perso)
                    defenseTeam.characters.splice(randomPlayerDefense-1, 1)
                    defenseTeam.playerAlive--
                }else{
                    console.log(defenseTeam.characters[randomPlayerDefense-1].perso + " a tué "+ attackTeam.characters[randomPlayer-1].perso)
                    attackTeam.characters.splice(randomPlayerAttack-1, 1)
                    attackTeam.playerAlive--
                }
            }else {
                if(Math.random()< 0.5){
                    console.log(attackTeam.characters[randomPlayerAttack].perso + " a tué "+ defenseTeam.characters[randomPlayerDefense-1].perso)
                    defenseTeam.characters.splice(randomPlayerDefense-1, 1)
                    defenseTeam.playerAlive--
                }else{
                    console.log(defenseTeam.characters[randomPlayerDefense].perso + " a tué "+ attackTeam.characters[randomPlayerAttack].perso)
                    attackTeam.characters.splice(randomPlayerAttack, 1)
                    attackTeam.playerAlive--
                }
            }
        }
    }
    if (attackTeam.playerAlive == 0){
        console.log("Defenceur Win")
        defenseTeam.roundWin++
    }else{
        console.log("Attaque Win")
        attackTeam.roundWin++
    }
}



function playGame(){
    let i = 1
    while( attackTeam.roundWin != 13 && defenseTeam.roundWin != 13 ){
        createTeam(attackTeam)
        createTeam(defenseTeam)
        inGame.spikePlanted = false
        attackTeam.playerAlive = 5
        defenseTeam.playerAlive = 5
        console.log("-----------")
        console.log("Début de la manche : " + i )
        firstRound()
        spike()
        kill()

        i++
        }
    if (attackTeam.roundWin == 13){
        console.log("Les attaquants ont gagné")
    }else{
        console.log("Les défenseurs ont gagné")
    }
}


console.log(playGame())

