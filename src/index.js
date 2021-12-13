// This file should import the fruits and both array helpers. It should then:

// Randomly draw a fruit from the array
// Log the message “I’d like one RANDOMFRUIT, please.”
// Log the message “Here you go: RANDOMFRUIT”
// Log the message “Delicious! May I have another?”
// Remove the fruit from the array of fruits
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”


import fruits from './foods';
import {choice, remove} from './helpers';

const randomFruit = choice(fruits);
console.log(`I’d like one ${randomFruit}, please.`);
console.log('Here you go:', randomFruit);
console.log('Delicious! May I have another?');
remove(fruits, randomFruit);
console.log(`I’m sorry, we’re all out. We have ${fruits.length} left.`);






