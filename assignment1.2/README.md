## Assignment 1.2 - Fork your WAFS
For this assignment I will test my final project of Web App From Scratch on usability and accessibility issues. The app will also be tested on multiple devices and browsers.

The app gets articles from The Guardian API and analyses them through the Watson AlchemyLanguage API.

![screenshot app](https://github.com/dylanvans/browser-technology/blob/master/assignment1.2/md-img/screenshot-app.png?raw=true)

### Images
Disabled Images to see what happens when images aren't loaded:
![screenshot images](https://github.com/dylanvans/browser-technology/blob/master/assignment1.2/md-img/screenshot-images.png?raw=true)
![screenshot images2](https://github.com/dylanvans/browser-technology/blob/master/assignment1.2/md-img/screenshot-images2.png?raw=true)
The grid of the articles falls apart and is not usable anymore.

#### Solution
Since all the images from the API have an aspect ratio of 5:3, we can reserve some space for the images. The thing we have to do is set a 60% padding-top on the container of the image and place the image in the top left corner like this:

``` css
.container-img {
	position: relative;
	height: 0;
	overflow: hidden;
	padding-top: 60%;
}

.container-img img {
	position: absolute;
	top: 0;
	left: 0;
	width:100%;
}
```

This way the grid stays intact and the interface is usable again.

### Custom Fonts
I used a chrome extension to test the app with custom fonts disabled. I used google fonts to load the Lato font into the project. When I disabled custom fonts it simply fell back to serif, my fallback font. It did not cause any problems.

``` css
body {
	font-family: 'Lato', serif;
}
```

### Javascript
When I disabled Javascript I could only see the homepage of the app. Because the whole app is client side, nothing will work without Javascript. No routing, no requests, no app.
![screenshot javascript](https://github.com/dylanvans/browser-technology/blob/master/assignment1.2/md-img/screenshot-javascript.png?raw=true)

#### Solution
Instead of making a SPA on the client side, we could render all the pages server side. This way the client doesn't need any Javascript, they simple make an http request to the server and get there HTML. This way the app is still usable without Javascript.

### Color
##### Deuteranopia
![screenshot color deut](https://github.com/dylanvans/browser-technology/blob/master/assignment1.2/md-img/color-deut.png?raw=true)

##### Protanopia
![screenshot color prot](https://github.com/dylanvans/browser-technology/blob/master/assignment1.2/md-img/color-prot.png?raw=true)

##### Tritanopia
![screenshot color trit](https://github.com/dylanvans/browser-technology/blob/master/assignment1.2/md-img/color-trit.png?raw=true)

The contrast in all color combinations is high enough for color blind people. I used Sim Daltonism to check multiple kinds of color blindness, and there were no conflicts.

### Slow Connection
I tried to use my app while throttling the internet connection to 'Regular 2G (300ms, 250kb/s, 50kb/s)'. The app was, of course, very slow, but still usable. The console gave a warning about the custom font that could not be loaded. Therefore, the fallback font was used till the custom font was fully loaded.

![screenshot internet](https://github.com/dylanvans/browser-technology/blob/master/assignment1.2/md-img/screenshot-internet.png?raw=true)


### Cookies
Non applicable 
### LocalStorage
Non applicable

### Mouse/trackpad
I tried to use the app only navigating with my keyboard to see if it is accessible for keyboard users. The whole app can be used with only your keyboard, the only thing that is missing is a 'skip navigation' link. Because there are a lot of items in the navigation it is a struggle to get to the main content of a page.

#### Solution
Add a skip navigation link before the navigation like this:
``` html
<a href="#maincontent">Skip navigation</a>
<nav>
	...
</nav>
<main id="maincontent">
	<h1>Main content</h1>
</main>
```