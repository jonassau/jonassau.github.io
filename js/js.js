"use strict";
window.onload=function() {
	let button = document.querySelectorAll('.question__button');
	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener('click', function(){
			hideQuestions(this);
			showQuestion(this)
		});
	};

	let animate = document.querySelectorAll('.animate');
	let animateOffset = [];
	let k = 1;

	for (let i = 0; i < animate.length; i++) {
  		animateOffset.push(animate[i].offsetTop);
	};	
	
	let shift = animateOffset[1];

	window.addEventListener('scroll', function() {
  		let top = window.pageYOffset;
  		if (top > (animateOffset[k]-shift)) {
	        animate[k].classList.add('animate_active');
	        k++;
	    }; 
	});

	
	if (window.innerWidth <= 992){
		let nav = document.querySelector('.nav');
		let mobileMenu = document.querySelector('.mobile-menu');
		let navItem = document.querySelectorAll('.nav__item');
		mobileMenu.addEventListener('click', function(){
				close();
		});
		for (let i = 0; i < navItem.length; i++) {
			navItem[i].addEventListener('click', function(){
				close();
			});
		};
		function close() {
				nav.classList.toggle('nav_active');
				mobileMenu.classList.toggle('mobile-menu_active');
			}
		}


	function hideQuestions(elem) {
		for (let i = 0; i < button.length; i++) {
			if (button[i]!==elem) {
				button[i].parentNode.nextElementSibling.classList.remove('question__answer_active');
				button[i].classList.remove('question__button_active');
				button[i].firstElementChild.classList.remove('close_active');
			}
		}		
	}

	function showQuestion(elem) {
		elem.parentNode.nextElementSibling.classList.toggle('question__answer_active');
  		elem.classList.toggle('question__button_active');
  		elem.firstElementChild.classList.toggle('close_active');
	}
}
