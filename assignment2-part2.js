
//########Part 1###########


//Step 1

//var num = window.prompt("Please enter a number.")
//window.console.log(Math.abs(num));


//Step 2

//var num = window.prompt("Please enter a decimal number.")
//window.console.log(Math.ceil(num));


//Step 3

//var num = window.prompt("Please enter a decimal number.")
//window.console.log(Math.floor(num));


//Step 4


//var num = window.prompt("Please enter 5 numbers seperated by comma.");
//num = num.split(",");
//window.console.log(Math.max(num[0],num[1],num[2],num[3],num[4]));
//window.console.log(Math.min(num[0],num[1],num[2],num[3],num[4]));


//Step 5

//var num = window.prompt("Please enter a number.")
//window.console.log(Math.sqrt(num));




//########Part 2###########


//Step 6

//var d = new Date();
//window.console.log(d);


//Step 7

//var d = new Date();
//window.console.log(d.getDate());

//Step 8

//var d = new Date();
//d = d.getMonth();
//
//switch (d) {
//    case 0:
//        d = "January";
//        break;
//    case 1:
//        d = "February";
//        break;
//    case 2:
//        d = "March";
//        break;
//    case 3:
//        d = "April";
//        break;
//    case 4:
//        d = "May";
//        break;
//    case 5:
//        d = "June";
//        break;
//    case 6:
//        d = "July";
//	case 7:
//        d = "August";
//        break;
//    case 8:
//        d = "September";
//        break;
//    case 9:
//        d = "October";
//        break;
//    case 10:
//        d = "November";
//	case 11:
//        d = "December";
//		break;
//}
//
//window.console.log(d);


//Step 9

//var d = new Date().getDay();
//
//if (d == 6 || d == 0){
//window.console.log("Today is weekend.");
//} else{
//	window.console.log("Today is not weekend.");
//}


//Step 10

//var d = new Date().getDay();
//var day = d - 1;
//switch (day) {
//    case 0:
//        day = "Sunday";
//        break;
//    case 1:
//        day = "Monday";
//        break;
//    case 2:
//        day = "Tuesday";
//        break;
//    case 3:
//        day = "Wednesday";
//        break;
//    case 4:
//        day = "Thursday";
//        break;
//    case 5:
//        day = "Friday";
//        break;
//    case 6:
//        day = "Saturday";
//        break;
//}
//
//window.console.log(day);


//Step 11

//var d = new Date().getDay();
//switch (d) {
//    case 0:
//        d = "Sunday";
//        break;
//    case 1:
//        d = "Monday";
//        break;
//    case 2:
//        d = "Tuesday";
//        break;
//    case 3:
//        d = "Wednesday";
//        break;
//    case 4:
//        d = "Thursday";
//        break;
//    case 5:
//        d = "Friday";
//        break;
//    case 6:
//        d = "Saturday";
		  //break
//}
//
//window.console.log(d.substr(0, 1));



//########Part 3 ###########


//Step 12

//var x = window.prompt("Please enter a number.");
//var y = window.prompt("Please enter another number.");
//window.console.log(Math.max(x, y));



//Step 13

//var names = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
//var marks = [80, 77, 88, 95, 68];
//
//var i, grade;
//
//for (i = 0; i < names.length; i++){
//	if (marks[i] < 60){
//	grade = "F";
//}else if (marks[i]<70){
//	grade = "D";
//}else if (marks[i]<80){
//	grade = "C";
//}else if (marks[i]<90){
//	grade = "B";
//}else if (marks[i]<100){
//	grade = "A";
//}
//
//	window.console.log(names[i] + " Got " + grade);
//}


//Step 14

//for (var i = 1; i <= 15; i++){
//	if (i % 2 == 0){
//		window.console.log(i + " is even.");
//	} else{
//		window.console.log(i + " is odd.");
//	}
//};


//Step 15

//for (var i = 1; i <= 100; i++){
//	if(i % 3 == 0 && i % 5 == 0){
//		window.console.log("FizzBuzz");
//	}else if (i % 3 == 0){
//		window.console.log("Fizz");
//	}else if(i % 5 == 0){
//		window.console.log("Buzz");
//	}else{
//		window.console.log(i);
//	}
//};




//########Part 4 ###########
// The “Hitchhiker’s Guide to the Galaxy” Game 

//Step 1

//var ready = window.confirm("Are you ready for the game?");
//
//if (ready == true){
//	window.alert("Awesome, our hero is waiting!");
//}else{
//	window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
//}
//
//window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
//
//var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).");
//
//switch (direction){
//	case "forward":
//		window.alert("You walk about 100 yards and safely make your way out of the cave.");
//		break;
//		
//	case "left":
//		window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//		break;
//		
//	case "right":
//		window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//		break;
//		
//}
//
//var rate = window.prompt("Please rate the game on a scale between 1 and 10.");
//if (rate < 1 || rate > 10){
//	rate = 10;
//}
//
//if (rate < 6){
//	window.alert("Whatever, you weren’t very good at this game anyway!");
//}else{
//	window.alert("Thank you, we will continue to make improvements to the game!");
//}



//########Part 5 ###########
//The “Coin Flip” Game 


//var coinFlip = Math.random();
//
//var choice = window.prompt("Please select Heads or Tails.");
//
//var result;
//
//if (coinFlip < 0.5){
//	result = "tails";
//}else{
//	result = "heads";
//}
//if (result == "heads" && choice == "heads"){
//	window.alert("The flip was heads and you chose heads...you win!");
//}else if (result == "heads" && choice == "tails"){
//	window.alert("The flip was heads and you chose tails...you lose!");
//}else if (result == "tails" && choice == "heads"){
//	window.alert("The flip was tails and you chose heads...you lose!");
//}else if (result == "tails" && choice == "tails"){
//	window.alert("The flip was tails and you chose tails...you win!");
//}



//Step 8
//
//var coinFlip = Math.random() * 10;
//coinFlip = Math.round(coinFlip);
//
//var choice = window.prompt("Please select Heads or Tails.");
//
//
//if (coinFlip < 5){
//	coinFlip = true;//tails
//	
//}else{
//	coinFlip = false;//heads
//}
//if (coinFlip == false && choice == "heads"){
//	window.alert("The flip was heads and you chose heads...you win!");
//}else if (coinFlip == false && choice == "tails"){
//	window.alert("The flip was heads and you chose tails...you lose!");
//}else if (coinFlip == true && choice == "heads"){
//	window.alert("The flip was tails and you chose heads...you lose!");
//}else if (coinFlip == true && choice == "tails"){
//	window.alert("The flip was tails and you chose tails...you win!");
//}




//########Part 6 ###########
//The “Coin Flip” Game Redux


//var coinFlip;
//
//for (var i = 1; i <= 10; i++){
//	coinFlip = Math.random();
//	coinFlip = Math.round(coinFlip);
//	if (coinFlip == 0){
//		window.console.log("Heads");
//	}else{
//		window.console.log("Tails");
//	}
//}



//########Part 7 ###########
//The “Coin Flip Streak”


//var coinFlip;
//
//do {
//	coinFlip = Math.random();
//	coinFlip = Math.round(coinFlip);
//	if (coinFlip == 0){
//		window.console.log("Heads");
//	}else{
//		window.console.log("Tails");
//	}
//} while(coinFlip == 0);



//########Part 8 ###########
//Looping a Triangle 

//var x = "";
//
//for (var i = 1; i < 8; i++){
//	x += "#";
//	window.console.log(x);
//}


//########Part 9 ###########
//Odd or Even? 
//
//for (var i = 0; i <= 15; i++){
//	if (i % 2 == 0){
//		window.console.log(i + " is even");
//	}else{
//		window.console.log(i + " is odd");
//	}
//}







