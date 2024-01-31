
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


const hamButton = document.querySelector('#myButton');
const navigation = document.querySelector('.menuLinks');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
