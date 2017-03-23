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

Then we push every options value to an array. And with every change in the input element we check if the array has a value that contains the input value. If so, we add this value to the html.

### Sources
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
- http://caniuse.com/#search=datalist
- http://diveintohtml5.info/everything.html#datalist
- https://stackoverflow.com/questions/7048102/check-if-html-element-is-supported

## HTML Feature 2
### The Feature

### Browser Support

### The Fallback

### Sources

## CSS Feature 1
### The Feature

### Browser Support

### The Fallback

### Sources

## CSS Feature 2
### The Feature

### Browser Support

### The Fallback

### Sources

## JS Feature 1
### The Feature

### Browser Support

### The Fallback

### Sources

## JS Feature 2
### The Feature

### Browser Support

### The Fallback

### Sources