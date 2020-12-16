// include('libs/isotope.pkgd.min.js');
// include('libs/imagesloaded.pkgd.min.js');
// include('libs/nouislider.min.js');
// include('libs/jquery.inputmask.min.js');
// include('libs/wNumb.min.js');
// include('libs/slick.min.js');;
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});;
// include('ibg.js');
// include('dynamic.js');
// include('animOnScroll.js');;
$(document).ready(function(){
	function operationsHeader() {
		let burger = $(".header__burger");
		let menu = $(".header__menu");
		let area = $(".header__area");
		burger.click(openBurgerMenu);
		area.click(openBurgerMenu);
		function openBurgerMenu() {
			burger.toggleClass("_active");
			menu.toggleClass("_active");
			area.toggleClass("_active");
			$("body").toggleClass("_lock")
		};
	};
	operationsHeader();
})