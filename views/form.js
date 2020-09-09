var x="false";

function subscribe() {
	x="true";
	return x;
}

function submit() {
  var obj = { 
	name: document.getElementById("firstname").value,
	surname: document.getElementById("lastname").value,
	address: document.getElementById("address").value,
	city: document.getElementById("city").value,
	email: document.getElementById("email").value,
	requests: document.getElementById("requests").value,
	newsletter: x
	 };
  var myJSON = JSON.stringify(obj);
  console.log(myJSON);
  fetch("/submit", {
  	method: "POST",
  	body: myJSON,
  	headers: {'Content-type': 'application/json', 'Accept': 'application/json'}
  })
}