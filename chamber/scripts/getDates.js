
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

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

const hamButton = document.querySelector('#myButton');
const navigation = document.querySelector('.menuLinks');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
