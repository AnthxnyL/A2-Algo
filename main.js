
let personneCool = "Thomas";

if(personneCool == "Le Big"){
    console.log("Salut bg")
}else{
    console.log("nique ta mère")
}

let a = 1;
let b = "1";
let c = 2;

if (a===b && c==a){
    console.log(true)
}else{
    console.log(false)
}


a = 4;
b = 4;
c = 3;

if(a==b){
    console.log("c'est égal")
}

if(c<b && a+c!=3){
    console.log("ok")
}else{
    console.log("raté")
}

switch(a){
    case 3 :
        console.log("3")
        break; 
    case 4 :
        if(c==4){
            console.log("ok")
        }else{
            console.log("Hé non")
        }
        break; 
    case "Nicolas est gentil" :
        console.log("bg")
        break; 
    default :
        console.log("default")
}

a = 4; 
b = 4;
c = 3;

switch(a){
    case b : 
        console.log("égal à b")
        break;
    case c : 
        console.log("égal à c")
        break;
    default : 
        console.log("égal à r")
}

a=3;

for(let i=0; i<a; i++){
    console.log("oklm")
}

a=3;

while(a<9){
    a++;
    if(a==8) break;
    else if(a==7)continue;
    console.log(a)  
}

// En ternaire
a == b ? console.log(true) : console.log(false)


a = "Jean";
b = "Jean";
let result = checkName(a,b);

function checkName (name1, name2){
    if (name1 == name2) return true;
    return false;
    
}
console.log(result)

// en ternaire

function checkName (name1, name2){
    // Pas besoins de mettre true ou false car le return retourne déjà ça
    return name1 == name2 ;
}

console.log(result)



let tab = [];

tab.push("Vincent","Paul","Arthur");

tab.forEach(name => {
    name += " va à la pêche"
    console.log(name);

});


let student = {
    name : "Anthony",
    age : 21,
    city : "Bois-Colombes"
}

let nbCar = student.name.length + student.age.toString().length + student.city.length ; 

nbCar%2 == 0 ? console.log("pair") : console.log("impair")




////////

class Student {
    constructor(name, html, css, javascript, php){
        this.name = name
        this.hmtl = html
        this.css = css
        this.javascript = javascript
        this.php = php
    }

    getPhpLevel(){
        console.log(this.name + ' a ' + this.php + '/5 en PHP' );

    }
}

let Ronaldo = new Student("Ronaldo", 5, 4, 1, 3)
let Nicolas = new Student ("Nicolas", 5, 5, 5, 5)

Ronaldo.getPhpLevel();

