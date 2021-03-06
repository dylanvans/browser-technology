# Assignment 2.1

## HTML Feature 1 - `<datalist>`
### The Feature
The HTML element `<datalist>` contains options for an `<input>` element. Datalist provides an autocomplete feature to a specified `<input>` element and can show al the options with a drop-down list.

``` html
<input list="example">

<datalist id="example">
	<option value="option1">
	<option value="option2">
	<option value="option3"> 
</datalist>
```

### Browser Support
![screenshot of http://caniuse.com/#search=datalist](https://github.com/dylanvans/browser-technology/blob/master/assignment2.1/readme-img/datalist.png)

### The Fallback
We can detect if a browser supports datalist with: 
``` javascript
if ('options' in document.createElement('datalist')) {
    // Fallback comes here
}
```

Then we push every option's value to an array. And with every change in the input element we check if the array has a value that contains the input value. If so, we add this value to the html.

[demo](https://dylanvans.github.io/browser-technology/assignment2.1/html-feature-1.html)

### Sources
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
- http://caniuse.com/#search=datalist
- http://diveintohtml5.info/everything.html#datalist
- https://stackoverflow.com/questions/7048102/check-if-html-element-is-supported

## HTML Feature 2 - `<details>`
### The Feature
The `<details>` element in combination with the `<summary>` element makes it possible to hide extra content when needed.

``` html
<details>
  <summary>This is visible</summary>
  <p>This is visible when clicked on summary</p>
</details>
```

### Browser Support
![screenshot of http://caniuse.com/#search=details](https://github.com/dylanvans/browser-technology/blob/master/assignment2.1/readme-img/details.png)

### The Fallback
We can detect if a browser supports details with: 
``` javascript
if (!('open' in document.createElement('details'))) {
    // Fallback comes here
}
```

When the browser doesn't support `<details>` we add a click event to `<summary>` which will toggle a hide-class on the paragraph beneath it. Also, we add a class to the details element who styles it like a details element.

[demo](https://dylanvans.github.io/browser-technology/assignment2.1/html-feature-2.html)

### Sources
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
- http://caniuse.com/#search=details
- http://diveintohtml5.info/everything.html#datalist

## CSS Feature 1 - :in-range & :out-of-range
### The Feature
With the `:in-range` and `:out-of-range` pseudo-classes we can style our inputs depending on the state the input is in. If the value of the input is between the values of the 'min' and 'max' attributes, the element can be styled using `:in-range`.
### Browser Support
![screenshot of http://caniuse.com/#search=range](https://github.com/dylanvans/browser-technology/blob/master/assignment2.1/readme-img/range.png)

### The Fallback
With Javascript we provide a fallback if the pseudo-classes aren't supported. On every change in the input there is a check if the input value is in range of the min and max attributes. If so, a class is added and the element will be styled.

[demo](https://dylanvans.github.io/browser-technology/assignment2.1/css-feature-1.html)

### Sources
- https://developer.mozilla.org/nl/docs/Web/CSS/:in-range
- http://caniuse.com/#search=range

## CSS Feature 2 - Intrinsic Sizing
### The Feature
This CSS feature allows you to size your html elements with content-based proportions. For example, if you want your element to be as small as the content can be without breaking it, you can set the width to `min-content`.

### Browser Support
![screenshot of http://caniuse.com/#search=intrinsic](https://github.com/dylanvans/browser-technology/blob/master/assignment2.1/readme-img/sizing.png)

### The Fallback
I found it hard to exactly recreate the intrinsic values of the width property, especially the min-content value. The closest I came was using `display: inline-block` and `width: auto` before `width: min-content`. I tested it on Chrome(does support) and IE9(doesn't support) and there is a small difference between the two:
**Chrome:**
![screenshot of intrinsic sizing](https://github.com/dylanvans/browser-technology/blob/master/assignment2.1/readme-img/chrome-intrinsic.png)
**IE9:**
![screenshot of fallback](https://github.com/dylanvans/browser-technology/blob/master/assignment2.1/readme-img/ie9-intrinsic.png)

[demo](https://dylanvans.github.io/browser-technology/assignment2.1/css-feature-2.html)

### Sources
- http://caniuse.com/#search=intrinsic
- https://googlechrome.github.io/samples/css-intrinsic-sizing/

## JS Feature 1 - Geolocation
### The Feature
With the geolocation API we can track the user's location and use it in our app. The user has to give permission before the API can run, also old browsers like IE8 don't support this feature. That's why it is important we provide a fallback to the user.

### Browser Support
![screenshot of http://caniuse.com/#search=geolocation](https://github.com/dylanvans/browser-technology/blob/master/assignment2.1/readme-img/geolocation.png)

### The Fallback
First we check if the browser supports geolocation with:
``` javascript
if("geolocation" in navigator) {
	// get location
} else {
	// Show fallback form
}
```

Then we provide a fallback if the user denied our request to track them with an error function:
``` javascript
function (error) { 
	if (error.code == error.PERMISSION_DENIED) {
		// Show fallback form
	}
};
```

[demo](https://dylanvans.github.io/browser-technology/assignment2.1/js-feature-1.html)

### Sources
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
- http://caniuse.com/#search=geolocation
- https://stackoverflow.com/questions/6092400/is-there-a-way-to-check-if-geolocation-has-been-declined-with-javascript

## JS Feature 2 - Notifications
### The Feature
The Notifications API can be used to send users browser notifications when something happens on their website. The user first needs to give the website permission to send notifications. If denied, the Notifications API can not be activated.

### Browser Support
![screenshot of http://caniuse.com/#search=notifications](https://github.com/dylanvans/browser-technology/blob/master/assignment2.1/readme-img/notifications.png)

### The Fallback
We first check if the Notifications API is supported:
``` javascript
if(!("Notification" in window)) {
	alert('No support for browser notifications')
}
```

Then, if there's no permission for the API yet we request permission. If the permission is granted we can send our notification:
``` javascript
Notification.requestPermission(function(permission) {
	if(permission === "granted") {
		var notification = new Notification('Permission has been granted');
	}
})
```

[demo](https://dylanvans.github.io/browser-technology/assignment2.1/js-feature-2.html)

### Sources
- https://developer.mozilla.org/nl/docs/Web/API/notification
- http://caniuse.com/#search=notification