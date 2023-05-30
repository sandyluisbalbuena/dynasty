let form = document.getElementById('form');
let p1 = document.getElementById('product1');
let p2 = document.getElementById('product2');
let p3 = document.getElementById('product3');
let p4 = document.getElementById('product4');
let p5 = document.getElementById('product5');
let p6 = document.getElementById('product6');
let p7 = document.getElementById('product7');
let result = document.getElementById('result');
let highestbtn = document.getElementById('highestbtn');
let longestReignName = "";
let longestReignLength = 0;

result.style.display = "none";

let dynasties = [];

function isValidRomanNumeral(input) {
	const romanNumeralRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
	return romanNumeralRegex.test(input);
}

let errorMessage = "";

form.addEventListener('submit', ()=>{



	event.preventDefault();

	highestbtn.removeAttribute('disabled');

	if(isValidRomanNumeral(p1.value.toUpperCase())){
		dynasties.push(['San Dynasty', p1.value.toUpperCase()]);
	}else{
		errorMessage += "<p class='text-sm text-red'>field 1 must be in roman numerals</p> <BR>";
	}

	if(isValidRomanNumeral(p2.value.toUpperCase())){
		dynasties.push(['Villoria Dynasty', p2.value.toUpperCase()]);
	}else{
		errorMessage += "<p class='text-sm text-red'>field 2 must be in roman numerals</p> <BR>";
	}

	if(isValidRomanNumeral(p3.value.toUpperCase())){
		dynasties.push(['Tan Dynasty', p3.value.toUpperCase()]);
	}else{
		errorMessage += "<p class='text-sm text-red'>field 3 must be in roman numerals</p> <BR>";
	}

	if(isValidRomanNumeral(p4.value.toUpperCase())){
		dynasties.push(['Bon Dynasty', p4.value.toUpperCase()]);
	}else{
		errorMessage += "<p class='text-sm text-red'>field 4 must be in roman numerals</p> <BR>";
	}

	if(isValidRomanNumeral(p5.value.toUpperCase())){
		dynasties.push(['Maiko Dynasty', p5.value.toUpperCase()]);
	}else{
		errorMessage += "<p class='text-sm text-red'>field 5 must be in roman numerals</p> <BR>";
	}

	if(isValidRomanNumeral(p6.value.toUpperCase())){
		dynasties.push(['Paul Dynasty', p6.value.toUpperCase()]);
	}else{
		errorMessage += "<p class='text-sm text-red'>field 6 must be in roman numerals</p> <BR>";
	}

	if(isValidRomanNumeral(p7.value.toUpperCase())){
		dynasties.push(['Andre Dynasty', p7.value.toUpperCase()]);
	}else{
		errorMessage += "<p class='text-sm text-red'>field 7 must be in roman numerals</p> <BR>";
	}


	if(errorMessage != ""){
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			html: errorMessage,
			footer: '<a href="">Why do I have this issue?</a>'
		})

		errorMessage = "";
	}

})



function convertRomanToNumber(roman) {
	const romanNumerals = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
	};

	let result = 0;
	let previousValue = 0;

	for (let i = roman.length - 1; i >= 0; i--) {
	const current = romanNumerals[roman[i]];

	if (current >= previousValue) {
		result += current;
	} else {
		result -= current;
	}

	previousValue = current;
	}

	return result;
}


function longestDynasty(){

	result.innerHTML= "";

	for (let i = 0; i < dynasties.length; i++) {
		let reign = dynasties[i][1];
		let reignLength = convertRomanToNumber(reign);
	
		if (reignLength > longestReignLength) {
			longestReignLength = reignLength;
			longestReignName = dynasties[i][0];
		}
	}
	highestbtn.setAttribute('disabled', '');
	result.style.display="block";
	result.innerHTML = "Longest Dynasty is "+ longestReignName + " with "+ longestReignLength+ " years.";
}

