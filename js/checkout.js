
// Exercise 6

function containsNumbers(str) {
	return /[0-9]/.test(str);
  }

function isonlynumbers(num){
	return /^\d+$/.test(num);
}

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
  }

function numerosyletras(str){

  return /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(str);
}

function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email

	if(fName.value == "" || fName.value == null || fName.value.length<3 || containsNumbers(fName.value)){
		fName.classList.add("is-invalid")
		error++;
	}

	if(fLastN.value == "" || fLastN.value == null || fLastN.value.length<3 || containsNumbers(fLastN.value)){
		fLastN.classList.add("is-invalid")
		error++;
	}

	if(fPhone.value == "" || fPhone.value == null || fPhone.value.length<3 || !isonlynumbers(fPhone.value)){
		fPhone.classList.add("is-invalid")
		error++;
	}

	if(fPassword.value == "" || fPassword.value == null || fPassword.value.length<3 || !numerosyletras(fPassword.value)){
		fPassword.classList.add("is-invalid")
		error++;
	}

	if(fAddress.value == "" || fAddress.value == null || fAddress.value.length<3){
		fAddress.classList.add("is-invalid")
		error++;
	}

	if(fEmail.value == "" || fEmail.value == null || fEmail.value.length<3 || validateEmail(fEmail.value)){
		fEmail.classList.add("is-invalid")
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	} 

}
