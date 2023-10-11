class TeamMembers {
    constructor(name,caracteristiques,luckDie,luckHit,luckDieAndHit){
        this.name = name
        this.caracteristiques = caracteristiques
        this.luckDie = luckDie
        this.luckHit = luckHit
        this.luckDieAndHit = luckDieAndHit
    }

}

let killer = {
    name : "Jason",
    hp : 100
}

let caracteristiques = [
    "Nerd",
    "Sportif",
    "Blonde",
    "Intello",
    "Gros",
    "Golmon"
]

let prenom = [
    "Big T",
    "Alphonse",
    "Charles",
    "Lucie",
    "Léa",
    "Flora",
    "Filip"
]

let characters = []

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(tab) {
    let stringCase = getRandomInt(0, tab.length-1)
    choice = tab[stringCase]
    tab.splice(stringCase, 1)
    return choice
}

function randomStat() {
    let luckDie = Math.random()
    let luckHit = Math.random() * (1-luckDie)
    let luckDieAndHit = 1 - luckDie - luckHit
    let luckStat = [
        luckDie,
        luckHit,
        luckDieAndHit
    ]  
    return luckStat
}

function createCharacter(){
    for(let i=0; i< 5; i++){
        let luck = randomStat();
        characters.push( new TeamMembers (
            randomChoice(prenom),
            randomChoice(caracteristiques),
            luck[0],
            luck[1],
            luck[2]
        ))
        console.log(characters[i])
    }
}
    
function kill(killer){
    createCharacter();
    let alive = characters.length
    let dead = []
    while(killer.hp > 0 && alive > 0){
        for (let i = 0; i < characters.length; i++){
            if(characters[i].luckDie >= characters[i].luckHit && characters[i].luckDie >= characters[i].luckDieAndHit){
                console.log(killer.name + " a tué : " + characters[i].name)
                dead.push(characters[i].name)
                characters.splice(i, 1)
                alive --;
            }else if (characters[i].luckHit >= characters[i].luckDie && characters[i].luckHit >= characters[i].luckDieAndHit){
                killer.hp -= 10
                console.log(characters[i].name + " a esquivé et a infligé 10 de dmg")
            }else{
                killer.hp -=15
                console.log(characters[i].name + " est mort mais a infligé 15 de dmg")
                dead.push(characters[i].name)
                characters.splice(i, 1)
                alive --;
            }
        }
    }
    if(killer.hp <= 0){
        console.log("Jason est mort, les survivants ont gagné mais nous avont perdu : " + dead)
    }else{
        console.log("Jason a gagné avec " + killer.hp + " hp !")
    }
}

console.log(kill(killer))