
document.querySelector('#year').textContent = new Date().getFullYear();

const lastModified =  {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.querySelector('#lastmodified').textContent = new Date().toLocaleDateString(lastModified);

const myBtn = document.querySelector('#darkBtn');

const main = document.querySelector("main");

myBtn.addEventListener("click", () => {
	if (myBtn.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		myBtn.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		myBtn.textContent = "🕶️";
	}
});


