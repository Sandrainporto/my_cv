
const burgerIcon = document.querySelector(".burger__icon");
const burgerMenu = document.querySelector(".header__menu");
const span = document.querySelector(".span");
const opacity = document.querySelector(".opacity");

burgerIcon.addEventListener("click", () => {
	burgerIcon.classList.toggle('active');
	burgerMenu.classList.toggle('active');
	span.classList.toggle('active');
	opacity.classList.toggle('active');
})

document.addEventListener('click', event => {
if(event.target.className !== 'burger__icon active' && 
event.target.className !== 'span active' && 
event.target.className !== 'header__menu active') {
	burgerIcon.classList.remove('active');
	burgerMenu.classList.remove('active');
	span.classList.remove('active');
	opacity.classList.remove('active');
}
})


const slider = document.querySelector(".projects__list");
const sliderItem = slider.children;

function next() { 
	slider.append(sliderItem[0]);
};
function prev() { 
	slider.prepend(sliderItem[sliderItem.length-1]);
}





const sassHover = document.querySelector(".skills__item_sass");
const sassText = document.querySelector(".sass-desc");

sassHover.addEventListener("mouseover", () => {
	sassText.classList.add("text-transition");
}
);
sassHover.addEventListener("mouseout", () => {
	sassText.classList.remove("text-transition");
}
);

const htmlHover = document.querySelector(".skills__item_html");
const htmlText = document.querySelector(".html-desc");

htmlHover.addEventListener("mouseover", () => {
	htmlText.classList.add("text-transition");
}
);
htmlHover.addEventListener("mouseout", () => {
	htmlText.classList.remove("text-transition");
}
);
	
const cssHover = document.querySelector(".skills__item_css");
const cssText = document.querySelector(".css-desc");

cssHover.addEventListener("mouseover", () => {
	cssText.classList.add("text-transition");
}
);
cssHover.addEventListener("mouseout", () => {
	cssText.classList.remove("text-transition");
}
);
	
const jsHover = document.querySelector(".skills__item_js");
const jsText = document.querySelector(".js-desc");

jsHover.addEventListener("mouseover", () => {
	jsText.classList.add("text-transition");
}
);
jsHover.addEventListener("mouseout", () => {
	jsText.classList.remove("text-transition");
}
);
	
const gitHover = document.querySelector(".skills__item_git");
const gitText = document.querySelector(".git-desc");

gitHover.addEventListener("mouseover", () => {
	gitText.classList.add("text-transition");
}
);
gitHover.addEventListener("mouseout", () => {
	gitText.classList.remove("text-transition");
}
);
	


