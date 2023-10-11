class Pokemon{
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky(){
        return this.luck > Math.random();
    }

    attackPokemon(pokemon){
        if (this.isLucky() ){
            let degat = this.attack - pokemon.defense
            pokemon.hp = pokemon.hp - degat
            console.log(this.name + ' a infligé ' + degat + ' dégats, il reste ' + pokemon.hp + ' de vie à '+ pokemon.name)
        }else{
            console.log(this.name + " n'a pas réussi à attaquer !")
        }   
    }

}

let salameche = new Pokemon ("Salamèche", 10, 6, 20,0.7); 
let carapuce = new Pokemon ("Carapuce", 8, 12, 20, 0.5)

function fight(poke1, poke2) {
    
    while (poke1.hp > 0 && poke2.hp > 0 ){
        poke1.attackPokemon(poke2)
        if (poke2.hp <= 0){
            console.log(poke2.name + " est mort !")
            break
        }
        poke2.attackPokemon(poke1)
        if(poke1.hp <= 0){
            console.log(poke1.name + " est mort")
            break
        }
    }
}

console.log(fight(salameche, carapuce));