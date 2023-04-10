const defaultAttributeScores = [15,14,13,12,10,8];

class Player{
    constructor(characterName = 'Naruto'){
        // this -> referecnes the instance of the object you 
        // are currently working within 
        // this.".." = were the ".." is just the variable name
        this.name = characterName;
        this.attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        };    
        let shuffledResult = shuffledArray(defaultAttributeScores);
        for (const [key,value] of Object.entries(this.attributes)){ 
            let attributesValue = shuffledResult.pop(); // pops last number out of the random array
            this.attributes[key] = attributesValue; // assign popped valye to current object key
        }
    }

    rollAttributes(){
        for (const key in this.attributes){
            let results = diceRoller(4,6); // roll d6 4 times
            results.sort(function(a,b){return a-b}); // one of em one line functions
            results.shift(); // remove lowest die roll(first element of array) by shifting array
            let sum = sumArrayElements(results); // add the rolls
            this.attributes[key] = sum; // set the key to sum
        }
    }

    printPlayer(){
        console.log(`Name: ${this.name}`);
        for (const [key, value] of Object.entries(this.attributes)){ // iterates through object elements
            console.log(`${key.slice(0,3).toUpperCase()}: ${value}`);
        }
    }
}

const player01 = new Player(); // creating new instances of player class
player01.printPlayer();
const player02 = new Player('Son Goku');
player02.rollAttributes();
player02.printPlayer();

//Fisher-Yates algorithm for randomly sorting an array
// from: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// adapted to JS and reconfigured to return a new (non-mutated) array
function shuffledArray(targetArray){
    let shuffled = Array.from(targetArray); //creates a reference-free array from values of another array
    // because typically a copied array will change the original array
    for( let i = shuffled.length -1; i >0 ; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp; 
    }
    return shuffled;
}

function diceRoller(times, sides){ // allows for any number of rolls and sided die
    let results = [];
    for (let i = 0; i < times; i++){
        results.push(Math.floor(Math.random() * sides +1));
    }

    return results;
}

// dropping lowest roll of the four
function sumArrayElements(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }

    return sum;
}
