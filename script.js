
var myDate = new Date();
var hrs = 20//myDate.getHours() ;

var greet;
//document.write(hrs);
if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';


//document.getElementById('greetings1').innerHTML = 'Long time no see!';
document.getElementById('greetings').innerHTML = greet;

// alert
//alert('Hello world!');
// console.log
	console.log('Hello world!');
  console.log('Hello world!');
// prompt
	//var name = prompt('Please enter your name');
