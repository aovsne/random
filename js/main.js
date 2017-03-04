var ask = prompt('what is your first name')
var shitsi = prompt('what is your last name')
var prashan = prompt('how old are you')

console.log("your name is " + ask + " " + shitsi)
console.log('your age is ' + prashan)

exercise2

var ask = prompt('how old are you?')
var year = ask * 365

alert("you have been alive for roughly" + " " + year)


tenzinArray = [
	{
		name:"tenzin topjor",
		age: 29,
		location: 'Mussoorie'
	},
	{
		name: "tenzin phuntsok",
		age: 33,
		location: "America"
	},
	{
		name: "tenzin ridak",
		age: 22,
		location: "India"
	}
]

function getInfo(){
	var name = document.getElementById('input').value.toLowerCase()

	for(i = 0; i < tenzinArray.length; i++){
		if(name == tenzinArray[i].name){
			document.getElementById('answer').textContent = "His name is " + name + " and he is " + tenzinArray[i].age + " years old. Lastly he lives in " + tenzinArray[i].location
		}else{
			document.getElementById('answer').textContent = "Not such person found in our list."
		}
	}
}

var userArray = [
	{
		username: 'tenzin',
		password: 'topjor'
	},
	{
		username: 'raju',
		password: 'lama'
	},
	{
		username: 'karma',
		password: 'namgyal'
	}
]


function getInfo(){
	var username = document.getElementById('input').value.toLowerCase()
	var password = document.getElementById('password').value.toLowerCase()

	for(i = 0; i < userArray.length; i++){
		if(username == userArray[i].username && password == userArray[i].password){
			alert('welcome ' + username)
			return
		}
	}alert("you are not the right user!!")
}
function getResult(){
	var newusername = document.getElementById('newusername').value
	var newpassword = document.getElementById('newpassword').value
	var combine = {
		username: newusername,
		password: newpassword
	}

	for(i = 0; i < userArray.length; i++){
		if(newusername == userArray[i].name || newpassword == userArray[i].password){
			alert('username or password already taken.')
			return
		}else if(newpassword.length < 6){
			alert('password must be more than 6 letters.')
			return
		}
	}
	userArray.push(combine)
	console.log(userArray)
	alert('Welcome new user!!')
}

AGE CONFIRMATION
function getAnswer(){
	var age = document.getElementById('age').value
	var answer = document.getElementById('answer')
	if(age < 0){
		answer.textContent = "Error messege!!"
	}else if(age == 21){
		answer.textContent = "Happy 21st Birthday!!"
	}else if(age % 2 != 0){
		answer.textContent = "your age is odd"
	}else{
		answer.textContent = "you are not a human being"
	}
}

// GUESSING GAME
function guessNo(){
	var random = 21
	console.log(random)
	var guess = document.getElementById('guess').value
	var answer = document.getElementById('guessedAnswer')

	if(guess < random){
		answer.textContent = "guess higher"
	}else if(guess > random){
		answer.textContent = "guess lower"
	}else(guess == random){
		answer.textContent = "you got it right"
	}
	
}

var num = 100
while(num < 150){
	console.log(num + 1)
	num--
}