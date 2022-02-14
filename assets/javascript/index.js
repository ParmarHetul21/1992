const cartCount = document.querySelector(".item_count");
const navbar = document.querySelector(".navbar");
const BottomToTop = document.querySelector(".bottom_to_top");
const sticky = navbar.offsetTop;
const search = document.getElementsByClassName("search_hide")[0];
const searchInput = document.getElementsByClassName("search")[0];
const coverImage = document.getElementsByClassName("img_container")[0];
const left = document.getElementsByClassName("ltr")[0];
const right = document.getElementsByClassName("rtl")[0];
const newsLetter = document.getElementsByClassName("left_side")[0];
const inputEmail = document.getElementsByClassName("email")[0];
const onEmailSubmit = document.getElementsByClassName("submit")[0];
const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const body = document.querySelector("body");
const section1 = document.querySelector(".sections");
const section2 = document.querySelectorAll(".sections")[1];
const add_item_cart = document.querySelector(".shopping_cart_items");
const cartElement = document.querySelector(".cart-items");
const cardList = document.querySelector(".cart-list");
const grandTotal = document.querySelector(".grandTotal");
var idx = 1;
// todo: New products
const newProductJSON = [
	{
		image: "./assets/images/black-hooded.jpeg",
		name: "HOODED JACKET",
		new_price: 29.9,
		tag: "editor-choice",
		star: 4.5,
		hover_image: "./assets/images/hover-detail.png"
	},
	{
		image: "./assets/images/fine-cardigan.jpeg",
		name: "FINE-KNIT CARDIGAN",
		new_price: 19.9,
		star: 4,
		hover_image: "./assets/images/hover-detail.png"
	},
	{
		image: "./assets/images/light-pink-parka.jpeg",
		name: "LIGHT PINK PARKA",
		new_price: 49.9,
		tag: "exclusive",
		star: 3.5,
		hover_image: "./assets/images/hover-detail.png"
	},
	{
		image: "./assets/images/denim-dress.jpeg",
		name: "DENIM DRESS",
		new_price: 29.9,
		star: 3,
		hover_image: "./assets/images/hover-detail.png"
	},
	{
		image: "./assets/images/NYC.jpeg",
		name: "N.Y.C SWEATSHIRT",
		old_price: 35.9,
		new_price: 14.9,
		tag: "sales_off",
		star: 4,
		hover_image: "./assets/images/hover-detail.png"
	}
];

// todo: Hot Product
const hotProductJSON = [
	{
		image: "./assets/images/black-hooded.jpeg",
		name: "HOODED JACKET",
		new_price: "29.90",
		star: 4.5,
		hover_image: "./assets/images/hover-detail.png"
	},
	{
		image: "./assets/images/NYC.jpeg",
		name: "N.Y.C SWEATSHIRT",
		old_price: "35.90",
		new_price: "14.90",
		tag: "sales_off",
		star: 4,
		hover_image: "./assets/images/hover-detail.png"
	},
	{
		image: "./assets/images/batmen-tshirts.jpeg",
		name: "BATMEN T-SHIRT",
		new_price: "35.90",
		tag: "new",
		star: 4,
		hover_image: "./assets/images/hover-detail.png"
	},
	{
		image: "./assets/images/denim-shorts.jpeg",
		name: "DENIM SHORTS",
		new_price: "39.90",
		star: 3.5,
		hover_image: "./assets/images/hover-detail.png"
	},
	{
		image: "./assets/images/fine-cardigan.jpeg",
		name: "FINE-KNIT CARDIGAN",
		new_price: "19.90",
		star: 4,
		hover_image: "./assets/images/hover-detail.png"
	}
];

// todo: to hide and show the cart-icon insdie the navbar
add_item_cart.onclick = (e) => {
	cartElement.classList.toggle("show");
};

const addToCart = (product) => {
	let cartOne = document.createElement("div");
	cartOne.classList.add("cart-one");
	let img = document.createElement("img");
	img.src = product.image;
	img.height = 100;
	img.width = 95;
	let ul = document.createElement("ul");
	let nameLi = document.createElement("li");
	let priceLi = document.createElement("li");
	nameLi.textContent = product.name;
	priceLi.textContent = product.new_price;
	grandTotal.textContent = `$ ${(product.new_price += product.new_price)}`;
	ul.append(nameLi, priceLi);
	cartOne.append(img, ul);
	cardList.appendChild(cartOne);
};

// todo: Dynamic product loading
newProductJSON.forEach((product) => {
	let section_parition = document.createElement("div");
	section_parition.classList.add("section_parition");
	let section_img = document.createElement("div");
	section_img.classList.add("section_img", "img1");
	section_img.style.backgroundImage = `url(${product.image})`;
	section_parition.append(section_img);

	let actions_hide = document.createElement("div");
	actions_hide.classList.add("actions_hide");

	if (product.tag) {
		let editor = document.createElement("span");
		editor.classList.add(product.tag);
		editor.textContent = product.tag;
		section_img.append(actions_hide, editor);
	} else {
		section_img.append(actions_hide);
	}

	let section_actions = document.createElement("div");
	section_actions.classList.add("section_actions");
	let cart = document.createElement("i");
	cart.classList.add("far", "fa-shopping-cart");
	let heart = document.createElement("i");
	// todo: increase the count of cart on click of cart icon
	cart.onclick = () => {
		cartCount.textContent = parseInt(cartCount.textContent) + 1;
		addToCart(product);
	};
	heart.classList.add("far", "fa-heart");
	let plus = document.createElement("i");
	plus.classList.add("far", "fa-plus");
	section_actions.append(cart, heart, plus);

	let section_ratings = document.createElement("div");
	section_ratings.classList.add("section_ratings");
	let ratings = Math.ceil(product.star);
	for (let index = 1; index <= ratings; index++) {
		if (index > product.star) {
			let halfstar = document.createElement("i");
			halfstar.classList.add("fas", "fa-star-half-alt");
			section_ratings.append(halfstar);
		} else {
			let fullstar = document.createElement("i");
			fullstar.classList.add("fas", "fa-star");
			section_ratings.append(fullstar);
		}
	}
	actions_hide.append(section_actions, section_ratings);

	let section_info = document.createElement("div");
	section_info.classList.add("section_info");
	let img = document.createElement("img");
	img.src = product.hover_image;
	img.alt = "Lines";
	img.height = 7;
	img.width = 15;

	let section_title = document.createElement("a");
	section_title.href = "#";
	section_title.classList.add("section_title");
	section_title.textContent = product.name;

	let section_description = document.createElement("div");
	section_description.classList.add("section_description");

	let bold = document.createElement("b");
	bold.textContent = `$ ${product.new_price}`;
	if (product.old_price) {
		let remove = document.createElement("div");
		remove.textContent = product.old_price;
		section_description.append(remove, bold);
	} else {
		section_description.append(bold);
	}

	section_info.append(img, section_title, section_description);
	section_parition.append(section_info);
	section1.append(section_parition);
});

hotProductJSON.forEach((product) => {
	let section_parition = document.createElement("div");
	section_parition.classList.add("section_parition");
	let section_img = document.createElement("div");
	section_img.classList.add("section_img", "img1");
	section_img.style.backgroundImage = `url(${product.image})`;
	section_parition.append(section_img);

	let actions_hide = document.createElement("div");
	actions_hide.classList.add("actions_hide");

	if (!product.tag) {
	}
	let editor = document.createElement("span");
	editor.classList.add(product.tag);
	editor.textContent = product.tag;
	section_img.append(actions_hide, editor);

	let section_actions = document.createElement("div");
	section_actions.classList.add("section_actions");
	let cart = document.createElement("i");
	cart.classList.add("far", "fa-shopping-cart");
	let heart = document.createElement("i");
	// todo: increase the count of cart on click of cart icon
	cart.onclick = () => {
		cartCount.textContent = parseInt(cartCount.textContent) + 1;
		cartToShow.push(product);
		addToCart(product);
	};
	heart.classList.add("far", "fa-heart");
	let plus = document.createElement("i");
	plus.classList.add("far", "fa-plus");
	section_actions.append(cart, heart, plus);

	let section_ratings = document.createElement("div");
	section_ratings.classList.add("section_ratings");
	let ratings = Math.ceil(product.star);
	for (let index = 1; index <= ratings; index++) {
		if (index > product.star) {
			let halfstar = document.createElement("i");
			halfstar.classList.add("fas", "fa-star-half-alt");
			section_ratings.append(halfstar);
		} else {
			let fullstar = document.createElement("i");
			fullstar.classList.add("fas", "fa-star");
			section_ratings.append(fullstar);
		}
	}
	actions_hide.append(section_actions, section_ratings);

	let section_info = document.createElement("div");
	section_info.classList.add("section_info");
	let img = document.createElement("img");
	img.src = product.hover_image;
	img.alt = "Lines";
	img.height = 7;
	img.width = 15;

	let section_title = document.createElement("a");
	section_title.href = "#";
	section_title.classList.add("section_title");
	section_title.textContent = product.name;

	let section_description = document.createElement("div");
	section_description.classList.add("section_description");

	let bold = document.createElement("b");
	bold.textContent = `$ ${product.new_price}`;
	if (product.old_price) {
		let remove = document.createElement("del");
		remove.textContent = `$ ${product.old_price}`;
		remove.style.paddingRight = "5px";
		section_description.append(remove, bold);
	} else {
		section_description.append(bold);
	}

	section_info.append(img, section_title, section_description);
	section_parition.append(section_info);
	section2.append(section_parition);
});

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
search.onclick = () => (searchInput.style.display = "flex");

// todo: scroll to the top
BottomToTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
