# Chatbot!

## Our favorite AI nemesis, HAL9000 vs. Dave Bowman

* Construct a chatbot that responds to various inputs from Dave
* Feel free to use the HTML and CSS scaffolds or construct your own
* Be creative with your logic and responses!
* Feel free to also change the characters and anything in the starter code—be creative!

## Grading Rubric (Pass/Partial/Fail)

### Required

* Have the AI respond to user input
* Do at least 3 different things
* One of the commands must utilize the list of people in the class to send a reply
* Use at least 1 conditional to change the response
* Leverage a for loop to iterate over a collection
* Use a random component
* Go above and beyond simple `if/else` statements

### Stretch Goals

* Have 2 or more AIs responding based upon user input
* Use a regular expression to parse and manipulate the response
* Have a conversation between two AIs (without creating an infinite loop!)

## Deliverables

* A working chatbot hosted somewhere publicly accessible (CodePen, Github Pages, etc.)
* A new git respository containing your code
* A `README.md` file with explanations of what your bot does, what commands it responds to, the approach taken, unsolved problems, etc.


## End Product Explanation
* Chatbot opens up with a welcome message following which it responds back when asked specific questions. The Default reply for any input other than the specific input is "I'm sorry, but I don't understand".
* Following the Welcome message we can input the below in sequence to see what the bot replies to each of the inputs
		1) How are you doing Hal
		2) I am doing fine. Whats the weather like today 
		3) Who is this
* Approach - 
		1) Declared all the DOM elements.
		2) Validated each step along the way.
		3) Created an event listner to listen to a  submit and then execute 2 functions - DavesMessage and HalsMessage.
		4) DavesMessage - Takes the input from the input box and shows it on Daves Chat Window
		5) HalsMessage - Takes DavesMessage and then responds to it using a condition and a timeout. 
* Unsolved Problems - 
		1) Leverage a for loop to iterate over a collection
		2) Use a random component
		3) Go above and beyond simple if/else statements

