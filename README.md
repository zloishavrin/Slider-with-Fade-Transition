# Slider-with-Fade-Transition
Slider with fade-transition in pure JS. Without date-attributes.

![alt text](https://i.ibb.co/FBdh9Mx/h6yhl-Sp-Ao-NM.jpg)

The slider itself is in a container with the class 'sliderPreview'. This container can be redesigned or you can use your own to insert the slider into it. Also, slider.css describes some styles for previews - if you use them in practice, you should remove or redo them.

The slider consists of three main containers - 'prevSliderContain', 'activeSliderContain', 'nextSliderContain' and 'sliderInactiveContain'. The 'prevSliderContain' container contains an arrow that can be used to switch slides, as well as a preview of the previous numbered slide. The 'nextSliderContain' container is similar, but instead of the previous numbered slide, it contains the next numbered slide. The 'activeSliderConatin' container contains the currently selected slide. The 'sliderInactiveConatin' container contains all the slides which are not active and are not in preview.

Also inside the slider container is the 'sliderSelectorsContain' container, it contains selectors for the slider.

In js, the slide number is determined by the last character in the id.

By default, when the page loads the first slide - it is located in the 'activeSliderContain', and also when the page loads the first selector is active - its id = 'activeSelectors'. This should be taken into account when you need to reduce/increase the number of slides and when you do any other modifications of your slider. Also, when adding slides, please note that you should add selectors corresponding to them. Similarly, when deleting slides. When adding a slide, you should set it id='sliderItemX', where X is the slide number minus one. When adding a selector, it should add onclick='sliderSelector(X)', where X is the selector number.

The slider.js file contains transition effect settings - speed and type. Transition speed should be specified in milliseconds. The effect type accepts the values 'in', 'out' or 'in-out'. You can also change the code inside the js file if you want.

Any other blocks can be used instead of slide images. Styles are not tied to any tags, only to classes and id. Image slides are made just for the convenience of previewing.

The slider is made in pure JS without jQuery or other frameworks.

The slider is adaptive and all sizes in the css file are in relative values.

Also, the slider is looped - after the last slide will be the first one.

If necessary, you can remove the effect speed setting and specify it manually.

# Preview

View a preview of the slider [here](https://zloishavrin.github.io/Slider-with-Fade-Transition/slider.html).
It's worth understanding that the slider is loaded with 4k images for previews. 
