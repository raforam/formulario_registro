const nombre = document.getElementsById("nombre")
const apell = document.getElementsById("apellido")
const user = document.getElementsById("userID")
const pw = document.getElementsById("password")
const correo = document.getElementsById("correo")
const address = document.getElementsById("address")
const phone = document.getElementsById("telefono")
const dObirth = document.getElementsById("fecha_de_nacimiento")
const pais= document.getElementsById("country")

const form = document.getElementsById("form")
const errorElement = document.getElementsById("error")

form.addEventListener("submit", (evento) =>){
	let e_msg = []
	if (nombre.value === "" || name.value == null){
		messages.push("Falta ingresar el nombre")
	}

	if(messages.length > 0){
		evento.preventDefault()
		errorElement.innerText = messages.join(", ")
	}

	evento.preventDefault()
}




function getData(){
	var nombre = document.getElementsById("nombre")
	var apell = document.getElementsById("apellido")
	var user = document.getElementsById("userID")
	var pw = document.getElementsById("password")
	var correo = document.getElementsById("correo")
	var address = document.getElementsById("address")
	var phone = document.getElementsById("telefono")
	var dObirth = document.getElementsById("fecha_de_nacimiento")
	var pais= document.getElementsById("country")

	localStorage.setItem("txtValue1", nombre);
	localStorage.setItem("txtValue2", apell);
	localStorage.setItem("txtValue3", user);
	localStorage.setItem("txtValue4", pw);
	localStorage.setItem("txtValue5", correo);
	localStorage.setItem("txtValue6", address);
	localStorage.setItem("txtValue7", phone);
	localStorage.setItem("txtValue8", dObirth);
	localStorage.setItem("txtValue9", pais);
}