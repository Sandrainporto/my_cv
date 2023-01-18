// const slider = document.querySelector(".projects__list");
// const sliderItem = slider.children;


// function next() { 
// 	slider.append(sliderItem[0]);

// };
// function prev() { 
// 	slider.prepend(sliderItem[sliderItem.length-1]);
// }


const sassHover = document.querySelector(".skills__item_sass");
const sassText = document.querySelector(".sass-desc");

sassHover.addEventListener("mouseover", () => {
	sassText.classList.add("transition");
}
);
sassHover.addEventListener("mouseout", () => {
	sassText.classList.remove("transition");
}
);

const htmlHover = document.querySelector(".skills__item_html");
const htmlText = document.querySelector(".html-desc");

htmlHover.addEventListener("mouseover", () => {
	htmlText.classList.add("transition");
}
);
htmlHover.addEventListener("mouseout", () => {
	htmlText.classList.remove("transition");
}
);
	
const cssHover = document.querySelector(".skills__item_css");
const cssText = document.querySelector(".css-desc");

cssHover.addEventListener("mouseover", () => {
	cssText.classList.add("transition");
}
);
cssHover.addEventListener("mouseout", () => {
	cssText.classList.remove("transition");
}
);
	
const jsHover = document.querySelector(".skills__item_js");
const jsText = document.querySelector(".js-desc");

jsHover.addEventListener("mouseover", () => {
	jsText.classList.add("transition");
}
);
jsHover.addEventListener("mouseout", () => {
	jsText.classList.remove("transition");
}
);
	
const gitHover = document.querySelector(".skills__item_git");
const gitText = document.querySelector(".git-desc");

gitHover.addEventListener("mouseover", () => {
	gitText.classList.add("transition");
}
);
gitHover.addEventListener("mouseout", () => {
	gitText.classList.remove("transition");
}
);
	


