var daveInput = document.getElementById('chatInput'),
	daveMessage = document.querySelector('.Dave-Message'),
	halMessage = document.querySelector('.Hal-Message'),
	myForm = document.getElementById("chatForm");
	openingMessage = document.querySelector('.Hal-Message'),

// add an event listener to the form to submit Dave's message
//console.log(myForm);
//console.log(daveMessage);
//console.log(daveInput);
//console.log(halMessage);
console.log(openingMessage);

function submitDavesMessage(message){
	console.log(daveInput.value);
	daveMessage.innerHTML += '<p>' + daveInput.value + '</p>';	
  //daveMessage.innerHTML += `<p> ${daveInput.value} <p>`;
}

// create a function for HAL to respond to Dave's messages with variable logic based upon Dave's inputs
function submitHalsMessage(message){
if (message === "How are you doing Hal"){
	halMessage.innerHTML += '<p>'+"I am doing fine,Thank You!. How about yourself?"+'</p>';}
else if (message === "I am doing fine. Whats the weather like today"){
	halMessage.innerHTML += '<p>'+"Overcast with chances of rain later in the afternoon."+'</p>';}
}
myForm.addEventListener('submit', function() { 
  event.preventDefault();
  //alert(daveInput.value);
  submitDavesMessage(daveInput.value);
  setTimeout(function (){
  submitHalsMessage(daveInput.value)},2000);
  
  
});

// create a function for HAL to open the chat with "Good morning, Dave"
function welcomeMessage(){
setTimeout(function (){openingMessage.innerHTML = "Good morning, Dave";},1000)
}
	// invoke the opening message
welcomeMessage();