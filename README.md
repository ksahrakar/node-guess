# A command-line node.js word guess game

# Requires
* npm install - dependencies: random-words and inquirer
* word.js requires letter.js
* index.js requires word.js

# Functionality
* Game starts with "node index" from the console
* Presents with underscore in place of secret word
* User is allowed 10 guesses to guess the secret word
* When a correct letter is guessed, it is shown in the console in the context of the letters that have not been guessed
* If the word is not guessed in ten guesses, the player loses the game and is prompted to play another
* If the word is guessed, the user is prompted to play another game
* Wins and losses are tracked
* The user is presented with a list of all the letters guessed after each guess

# Program Structure
* Three files
1. letter.js
* Constructor which contains the underlying letter, boolean "corr" to indicate if that letter has been guessed, a function to write an underscore or a letter based on second attribute, a function which accepts a letter parameter which changes the second attribute if it matches the first
2. word.js
* Constructor which contains an array of letter objects, a function to show an entire word with guessed letters shown and unguessed letters with an underscore, a function which calls the method in letter.js which changes the "corr" attribute for each letter of the word, and a function which checks if the word has been guessed yet
3. index.js
* Game logic including user interface from inquirer calls

# Enjoy!
