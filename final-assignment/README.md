# Final Assignment - Contact List
## Use case
> I want to be able to search my contact list, and I want to see details of the contacts

## Solution
At first, the user must always be able to view the details of the contacts. Otherwise the contact list is unusable. If it is a long list it can be annoying to have to scroll through the list to find your contact. The list must be well structured and searchable.

### Core functionality 
- The user can click on a contact to open its details.
- The list is  alphabetically structured to make it more searchable.

#### Screenshot demo in IE9
![screenshot of demo - core functionality](https://github.com/dylanvans/browser-technology/blob/master/final-assignment/readme-img/screenshot-ie9.png)

### Enhanced functionality
- To search through the contact list, users can type in a name into the input field. The list will be filtered on input with `Array.prototype.indexOf()`. IE8 does not support this, so we added the following code: 

```
		if (!('indexOf' in Array.prototype)) {
		    Array.prototype.indexOf= function(find, i /*opt*/) {
		        if (i===undefined) i= 0;
		        if (i<0) i+= this.length;
		        if (i<0) i= 0;
		        for (var n= this.length; i<n; i++)
		            if (i in this && this[i]===find)
		                return i;
		        return -1;
		    };
		}
```

#### Screenshot of search (device: moto-something)
![screenshot of demo - Enhanced functionality](https://github.com/dylanvans/browser-technology/blob/master/final-assignment/readme-img/screenshot-moto.png)

- A collapse and expand animation when the contact is clicked.
- Sticky letter labels. So the user can see which letter he is scrolling through. When `position: sticky` is not supported it falls back to `position: static`.

#### Screenshot of sticky letter label
![screenshot of demo - Enhanced functionality](https://github.com/dylanvans/browser-technology/blob/master/final-assignment/readme-img/screenshot-sticky.png)

#### Browser support `position: sticky`
![screenshot of browser support sticky - Enhanced functionality](https://github.com/dylanvans/browser-technology/blob/master/final-assignment/readme-img/browser-sticky.png)

### Extra functionality
- With the Geolocation API we can show the user which contacts are nearby.

#### Screenshot of nearby contacts
![screenshot of demo - extra functionality](https://github.com/dylanvans/browser-technology/blob/master/final-assignment/readme-img/screenshot-nearby.png)

#### Browser support geolocation
![screenshot of browser support geolocation - Extra functionality](https://github.com/dylanvans/browser-technology/blob/master/final-assignment/readme-img/browser-geolocation.png)

## Accessibility 
### Color
With Sim Daltonism I simulated how a colorblind person would see the demo. I looked if there were contrasts that would cause problems, but fortunately there weren't any.

#### Deuteranopia
![screenshot of demo - extra functionality](https://github.com/dylanvans/browser-technology/blob/master/final-assignment/readme-img/screenshot-deuteranopia.png)
#### Protanopia
![screenshot of demo - extra functionality](https://github.com/dylanvans/browser-technology/blob/master/final-assignment/readme-img/screenshot-protanopia.png)

## Conclusion
My goal was to get the core functionality working up to IE8, but unfortunately the javascript isn't working yet. The full demo works fine on IE9, even the nearby contacts feature is not a problem. The same goes for mobile use of the demo.

[Link to demo](https://dylanvans.github.io/browser-technology/final-assignment/)

## Sources
- https://stackoverflow.com/questions/2790001/fixing-javascript-array-functions-in-internet-explorer-indexof-foreach-etc
- http://caniuse.com/#search=sticky
- http://caniuse.com/#search=geolocation
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
- https://stackoverflow.com/questions/21279559/geolocation-closest-locationlat-long-from-my-position