const cartCount = document.querySelector(".item_count");
const navbar = document.querySelector(".navbar");
const BottomToTop = document.querySelector(".bottom_to_top");
const sticky = navbar.offsetTop;
const hiddenSearch = document.getElementById("hidden");
const search = document.getElementsByClassName("search_hide")[1];
const searchInput = document.getElementsByClassName("search")[0];
const sectionPartition = document.querySelectorAll(
	".sections .section_parition .fa-shopping-cart"
);
const coverImage = document.getElementsByClassName("img_container")[0];
const left = document.getElementsByClassName("ltr")[0];
const right = document.getElementsByClassName("rtl")[0];
const newsLetter = document.getElementsByClassName("left_side")[0];
const inputEmail = document.getElementsByClassName("email")[0];
const onEmailSubmit = document.getElementsByClassName("submit")[0];
var idx = 1;
const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

// todo: email validation in newsletter
onEmailSubmit.onclick = () => {
	const div = document.createElement("div");
	if (inputEmail.value === "") {
		div.innerText = "Input is empty";
		div.classList.add("validation");
		newsLetter.appendChild(div);
	} else if (!regex.test(inputEmail.value)) {
		div.innerText = "Email is not valid";
		div.classList.add("validation");
		newsLetter.appendChild(div);
	} else {
		div.innerText = "Email is valid";
		div.classList.add("validation");
		newsLetter.appendChild(div);
	}
};

// todo: top banner sliders
left.onclick = () => {
	if (idx === 1) idx = 4;
	else idx -= 1;
	coverImage.style.backgroundImage = `url(./assets/images/cover${idx}.jpg)`;
};

right.onclick = () => {
	if (idx === 4) idx = 1;
	else idx += 1;
	coverImage.style.backgroundImage = `url(./assets/images/cover${idx}.jpg)`;
};

// todo: onscroll hide the header and onscroll hide the BottonToTop button
window.onscroll = () => {
	if (window.pageYOffset > sticky) {
		navbar.classList.add("fixed-header");
		BottomToTop.style.display = "block";
		searchInput.style.display = "none";
	} else {
		navbar.classList.remove("fixed-header");
		BottomToTop.style.display = "none";
	}
};

// todo: enable the search on click
search.addEventListener("click", () => {
	searchInput.style.display = "flex";
});
hiddenSearch.onclick = () => {
	searchInput.style.display = "flex";
};

// todo: increase the count of cart on click of cart icon
sectionPartition.forEach(
	(section) =>
		(section.onclick = () => {
			console.log(cartCount);
			cartCount.textContent = parseInt(cartCount.textContent) + 1;
			console.log(cartCount.innerHTML);
			// const imageURL = section.parentElement.parentElement.parentElement;
			// let data =
			// 	section.parentElement.parentElement.parentElement.parentElement.innerText.trim();
		})
);
