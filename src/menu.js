const menu = document.getElementById("hamburguer")
const contato = document.getElementById("link-contato")
contato.addEventListener("click",()=>{
	document.getElementById("menu").classList.toggle("hidden")
	document.getElementById("menu").classList.toggle("block")
})
menu.addEventListener("click",()=>{
	document.getElementById("menu").classList.toggle("hidden")
	document.getElementById("menu").classList.toggle("block")
})