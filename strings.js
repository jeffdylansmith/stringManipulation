//var input = document.getElementById("input").value;
//console.log("hey");
// Implement the logic in the reversal function that reverses the order of the 
// characters in the string, and outputs the result in the DOM, below the text input.
function reversal(rev) {
	var first = rev.split("");
	var second = first.reverse();
	var third = second.join("");
	console.log("Reversed: ",third);
	output.innerHTML += third;
}

function alphabits(alph) {
	var first = alph.toLowerCase();
	var once = first.split("");
	var twice = once.sort();
	var thrice = twice.join("");
	console.log("Alphabit: ",thrice);
	output.innerHTML += thrice;
}
function palindrome(palin) {
	var zero = palin.toLowerCase();
	var uno = zero.split("");var dos = uno.reverse();
	var tres = dos.join("");
	if(zero === tres){
		output.innerHTML += " This word is a Palindrome";
	} else {
		output.innerHTML += " This word is not a Palindrome";
	}
}

var output = document.getElementById("output");
var testString = document.getElementById("input");
var btn = document.getElementById("inputbtn");
btn.addEventListener("click", function(){
	reversal(testString.value);
	alphabits(testString.value);
	palindrome(testString.value);
});

testString.addEventListener("keyup", function(event){
	if(event.which === 13){
		reversal(testString.value);
		alphabits(testString.value);
		palindrome(testString.value);
	}
});



