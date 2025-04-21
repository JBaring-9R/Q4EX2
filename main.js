function verifyAge(){
	var inputAge = document.getElementById("Age").value;

	if (inputAge <=17){
		window.alert('Not valid to vote.');
	}

	else{
		window.alert('Welcome!');
	}
}