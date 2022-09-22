// Write a function, convertToBaby(), 
// that takes in an array as an argument and, using a loop, 
// returns a new array with each string in the array prepended with 'baby '.

// Note: You may have noticed how convenient it would be to use map, 
// but you’re not allowed to use it here. 
// Don’t worry you’ll have plenty of opportunities to use built-in methods later on!


// Write your code here:
const convertToBaby = animals => {
    let babyAnimals = []
    for (let i = 0; i < animals.length; i++) {
      babyAnimals.push(`baby ${animals[i]}`)
    }
    return babyAnimals;
  }
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 