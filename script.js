var audio = document.getElementById("audio")

document.getElementById("image").addEventListener("click", ()=>{
	audio.style.display = "block"
	audio.play()
})

var currentTime
audio.addEventListener("timeupdate", ()=>{
	currentTime = audio.currentTime 
	if (currentTime > 5){
		document.getElementById("river").style.display = "block"
	}
	if (currentTime > 15){
		document.getElementById("horse").style.display = "block"
	}
	if (currentTime > 25){
		document.getElementById("deel").style.display = "block"
	}
	if (currentTime > 35){
		document.getElementById("nature").style.display = "block"
	}

})



