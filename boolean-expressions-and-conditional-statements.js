/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/


const input = require('readline-sync');

console.log("You wake up in a dark forest. There's a sword and a compass nearby.");
let takeSword = input.question("Do you pick up the sword? (yes/no): ").toLowerCase() === 'yes';
let takeCompass = input.question("Do you pick up the compass? (yes/no): ").toLowerCase() === 'yes';

console.log("\nThere are two paths: one leads to the mountains, the other to a village.");
let path = input.question("Which path do you take? (mountains/village): ").toLowerCase();

// FIRST SCENARIO: Mountains
if (path === 'mountains') {
    console.log("\nYou start climbing the mountains. It's steep and cold.");

    if (takeSword && takeCompass) {
        console.log("You use the compass to stay on track and the sword to defend yourself from a wild beast.");
        console.log("You find a hidden treasure in a cave! You win!");
    } else if (takeCompass && !takeSword) {
        console.log("You stay on track, but without a weapon, you can't defend yourself.");
        console.log("A wild beast attacks you. You lose.");
    } else if (takeSword && !takeCompass) {
        console.log("You defend yourself from wild beasts, but you get lost in the mountains.");
        console.log("Eventually, you run out of supplies. You lose.");
    } else {
        console.log("Without any tools, you're hopelessly lost and defenseless.");
        console.log("You lose.");
    }

// SECOND SCENARIO: Village
} else if (path === 'village') {
    console.log("\nYou enter a quiet village. It looks abandoned.");

    let explore = input.question("Do you explore the houses or head to the town hall? (houses/town hall): ").toLowerCase();

    if (explore === 'houses') {
        if (takeSword || takeCompass) {
            console.log("You find a clue in the house that leads you to safety.");
            console.log("Because of your item(s), you escape unharmed. You win!");
        } else {
            console.log("You find nothing useful and get trapped inside when the building collapses. You lose.");
        }
    } else if (explore === 'town hall') {
        let light = input.question("It's dark inside. Do you enter anyway? (yes/no): ").toLowerCase();
        if (light === 'yes') {
            if (!takeCompass) {
                console.log("Without direction, you get lost in the darkness. You lose.");
            } else {
                console.log("The compass helps you navigate the dark halls and find a secret exit.");
                console.log("You escape safely. You win!");
            }
        } else {
            console.log("You avoid the danger and return home safely. A safe, but boring ending.");
        }
    } else {
        console.log("Invalid choice. The village fades into mist. Game over.");
    }

} else {
    console.log("Invalid path. The forest swallows you whole. You lose.");
}
