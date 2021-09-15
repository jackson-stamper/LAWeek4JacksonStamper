let petsNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]

let withSal = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam", "Sal"]

//Get the third name in the 'pets' array and output it to the console

console.log(`The third pet is named ${petsNames[2]}`)

//Get a count of how many items are in the 'withSal' array and output it to the console

console.log(`The array has ${withSal.length} items in it.`)

//Remove the last name in the array by using the method .pop().

withSal.pop()
console.log(`${withSal}`)