let btn = document.querySelector("#btn");
let displaydiv = document.querySelector(".toggle");

btn.addEventListener("click", () => {
  if (displaydiv.style.display != "flex") {
    displaydiv.style.animation = "show .5s  forwards";
    displaydiv.style.display = "flex";
    btn.innerHTML = `<img src="./Img/upload.png" alt="">`;
  } else {
    displaydiv.style.display = "none";
    btn.innerHTML = `<img src="./Img/down-arrow.png" alt="">`;
  }
});


console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('balls')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = '/white.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = '/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = '/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}
