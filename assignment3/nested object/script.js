/*A javascript function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. */
let person={
    Name:"Mohit",
    age:21,
    address:{
        street:"140,Near shive temple,Tana",
        city:"Shamli",
        state:"Uttar Preadesh"
    }
}
function nestedObj(person){
    //Destructuring a object"person"
    const {Name,address:{street}}=person;
    return {Name,street}

}
console.log(nestedObj(person))