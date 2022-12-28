//FADE TRANSITION SETTINGS
let sliderFadeVelocity = 400; //in ms
let sliderFadeType = 'out' //'in' or 'out' or 'in-out'

function sliderTransition(toInactiveItem, toPrevItem, toActiveItem, toNextItem) {
	
	//add fade transition effect
	toInactiveItem.style.transition = sliderFadeVelocity + 'ms ease-' 
	+ sliderFadeType + ' opacity,' +
	'transform 0.5s cubic-bezier(0.51, 0.18, 0.84, 0.18)';
	toPrevItem.style.transition = sliderFadeVelocity + 'ms ease-' 
	+ sliderFadeType + ' opacity,' +
	'transform 0.5s cubic-bezier(0.51, 0.18, 0.84, 0.18)';
	toActiveItem.style.transition = sliderFadeVelocity + 'ms ease-' 
	+ sliderFadeType + ' opacity,' +
	'transform 0.5s cubic-bezier(0.51, 0.18, 0.84, 0.18)';
	toNextItem.style.transition = sliderFadeVelocity + 'ms ease-'
	+ sliderFadeType + ' opacity,' +
	'transform 0.5s cubic-bezier(0.51, 0.18, 0.84, 0.18)';
	
	//get containers for sliders
	let inactiveContain = document.querySelector('#sliderInactiveContain');
	let prevContain = document.querySelector('#prevSliderContain');
	let activeContain = document.querySelector('#activeSliderContain');
	let nextContain = document.querySelector('#nextSliderContain');
	
	//fadding (change opacity--)
	toInactiveItem.style.opacity = '0';
	toPrevItem.style.opacity = '0';
	toActiveItem.style.opacity = '0';
	toNextItem.style.opacity = '0';
	
	//change the frame (replace corresponding slides)
	setTimeout(function changeSliderItems() {

		inactiveContain.append(toInactiveItem);
		prevContain.append(toPrevItem);
		activeContain.append(toActiveItem);
		nextContain.append(toNextItem);

	

	}, sliderFadeVelocity/2);

	//fadding (change opacity++)
	setTimeout(function changeOpacityOfSliderItems() {

		toInactiveItem.style.opacity = '1';
		toPrevItem.style.opacity = '1';
		toActiveItem.style.opacity = '1';
		toNextItem.style.opacity = '1';

	}, sliderFadeVelocity);

}

function slider(direction) {

	//get array with all sliders
	let sliderItems = document.querySelectorAll('.sliderItem');

	//first and last numbers slides in array
	let minItem = 0;
	let maxItem = sliderItems.length;

	//get active and previews slide
	let prevItem = document.querySelector('div#prevSliderContain > .sliderItem');
	let activeItem = document.querySelector('div#activeSliderContain > .sliderItem');
	let nextItem = document.querySelector('div#nextSliderContain > .sliderItem');

	//get array with all selectors
	let selectorsItems = document.querySelectorAll('.selectors');

	//get slide numbers - the last character in the id
	let prevNum = Number(prevItem.id.slice(-1));
	let activeNum = Number(activeItem.id.slice(-1));
	let nextNum = Number(nextItem.id.slice(-1));

	//get the slide that will appear on the screen
	//the two already existing ones will remain anyway
	let toReplaceNum;
	let toReplaceItem;

	//make selector inactive
	selectorsItems[activeNum].id = '';

	//if user pressed the right arrow
	if(direction == 'next') {

		//calculating which slide will appear on the screen
		toReplaceNum = (nextNum + 1) % maxItem;
		//find this slide by id
		toReplaceItem = document.querySelector('#sliderItem' + toReplaceNum);
		//transition function
		sliderTransition(prevItem, activeItem, nextItem, toReplaceItem);
		//make selector active
		selectorsItems[nextNum].id = 'activeSelectors';

	}
	//if user pressed the left arrow
	else if(direction == 'prev') {

		//calculating which slide will appear on the screen
		//ternary operator to handle the exception 
		//when the previous slide is the first slide
		toReplaceNum = activeNum == minItem+1 ? 
		(maxItem-1) : (prevNum - 1) % maxItem;
		//find this slide by id
		toReplaceItem = document.querySelector('#sliderItem' + toReplaceNum);
		//transition function
		sliderTransition(nextItem, toReplaceItem, prevItem, activeItem);
		//make selector active
		selectorsItems[prevNum].id = 'activeSelectors';

	}

}

function sliderSelector(toActiveNum) {

	//get array with all sliders
	let sliderItems = document.querySelectorAll('.sliderItem');

	//get array with all selectors
	let selectorsItems = document.querySelectorAll('.selectors');

	//add fade transition effect
	for(let i = 0; i < sliderItems.length; i++) {

		sliderItems[i].style.transition = sliderFadeVelocity + 'ms ease-' 
		+ sliderFadeType + ' opacity,' +
		'transform 0.5s cubic-bezier(0.51, 0.18, 0.84, 0.18)';

	}

	//first and last numbers slides in array
	let minItem = 0;
	let maxItem = sliderItems.length;

	//get active and previews slide
	let prevItem = document.querySelector('div#prevSliderContain > .sliderItem');
	let activeItem = document.querySelector('div#activeSliderContain > .sliderItem');
	let nextItem = document.querySelector('div#nextSliderContain > .sliderItem');

	//get number of active slide
	let activeNum = Number(activeItem.id.slice(-1));

	//get containers for sliders
	let inactiveContain = document.querySelector('#sliderInactiveContain');
	let prevContain = document.querySelector('#prevSliderContain');
	let activeContain = document.querySelector('#activeSliderContain');
	let nextContain = document.querySelector('#nextSliderContain');

	//calculating which slides will appear on the screen
	let toPrevNum = toActiveNum == minItem ? (maxItem-1) : (toActiveNum - 1);
	let toNextNum = (toActiveNum + 1) % maxItem;

	//get slides that will be active and in previews
	let toPrevItem = document.querySelector('#sliderItem' + toPrevNum);
	let toActiveItem = document.querySelector('#sliderItem' + toActiveNum);
	let toNextItem = document.querySelector('#sliderItem' + toNextNum);

	//make active selector inactive
	selectorsItems[activeNum].id = '';
	//make corresponding selector active
	selectorsItems[toActiveNum].id = 'activeSelectors';

	//fadding (change opacity--)
	prevItem.style.opacity = '0';
	activeItem.style.opacity = '0';
	nextItem.style.opacity = '0';
	toPrevItem.style.opacity = '0';
	toActiveItem.style.opacity = '0';
	toNextItem.style.opacity = '0';
	
	//change the frame (replace corresponding slides)
	setTimeout(function changeSliderItems() {

		inactiveContain.append(prevItem);
		inactiveContain.append(activeItem);
		inactiveContain.append(nextItem);
		prevContain.append(toPrevItem);
		activeContain.append(toActiveItem);
		nextContain.append(toNextItem);

	

	}, sliderFadeVelocity/2);

	//fadding (change opacity++)
	setTimeout(function changeOpacityOfSliderItems() {

		prevItem.style.opacity = '1';
		activeItem.style.opacity = '1';
		nextItem.style.opacity = '1';
		toPrevItem.style.opacity = '1';
		toActiveItem.style.opacity = '1';
		toNextItem.style.opacity = '1'; 

	}, sliderFadeVelocity);


}