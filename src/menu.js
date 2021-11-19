const menu = document.getElementById("hamburguer")
menu.addEventListener("click",()=>{
	document.getElementById("menu").classList.toggle("hidden")
	document.getElementById("menu").classList.toggle("block")
})