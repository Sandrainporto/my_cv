const slider = document.querySelector(".projects__list");
const sliderItem = slider.children;



function next() { 
	slider.append(sliderItem[0]);

};
function prev() { 
	slider.prepend(sliderItem[sliderItem.length-1]);
}